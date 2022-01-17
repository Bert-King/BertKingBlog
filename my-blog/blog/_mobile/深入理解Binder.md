---

title: 深入理解Binder
date: 2022-01-17
tags:
  - Android
  - IPC
  - Binder

---

[Binder]() 作为Android独有的进程间通信(IPC)方式。值得我们每一个Android开发同学去深入学习。

As we all know, Android系统是基于Linux内核开发的. 整个熟悉的Android架构图：

![Android架构图](/blog/.vuepress/public/image/architec.png)

进程间通信（IPC，InterProcess Communication）是指在不同进程之间传播或交换信息。

[Linux](https://zh.wikipedia.org/wiki/Linux)作为一款成名已久的操作系统，已经有自己的进程间通信方式。Android为什么没有直接使用Linux的呢？
要想回答好这个问题，我们首先要了解**Linux系统的IPC方式**, 如下图所示:

![Linux进程间通信方式](/blog/.vuepress/public/image/linux-ipc.png)

### 1. Unix系统的进程间通信方式
1. 无名管道(pipe):匿名管道只能用于父子进程或者兄弟进程之间.

2. 有名管道(FIFO)

3. 信号（Signal）是在软件层次上对中断机制的一种模拟，信号的实质是**软件中断**.
信号是进程间通信机制中**唯一的异步通信**机制

### 2. System V 进程间通信方式
1. 消息队列(Message Queue):是消息的链接表，存放在内核中。一个消息队列由一个标识符（即队列ID）来标识.

2. 信号量(Semaphore)：信号量用于**实现进程间的互斥与同步**，而不是用于存储进程间通信数据, 信号量+共享内存通常结合在一起使用，信号量用来同步对共享内存的访问

3. 共享内存(Shared Memory): **最快**的一种IPC

### 套接字(Socket)
**套接字**是一种通信机制，凭借这种机制，客户/服务器（即要进行通信的进程）系统的开发工作既可以在本地单机上进行，也可以跨网络进行.

**套接字**是对网络接口(硬件)和网络协议(软件)的抽象。它既解决了无名管道只能在相关进程间单向通信的问题，又解决了网络上不同主机之间无法通信的问题。

  套接字有三个属性:域(domain)、类型(type)和协议(protocol)，对应于不同的域，套接字还有一个地址(address)来作为它的名字。

**套接字明确地将客户端和服务器区分开来**.


---

熟悉了Linux的进程间通信方式之后，我们对其进行一下分析：

1. 性能方面: 
    > 管道，消息队列，Socket 都需要copy两次内存;
    >
    > Binder只需要copy一次内存；
    >
    > 共享内存不需要copy;
2. 稳定性:
    > Binder是基于C/S架构的，简单解释下C/S架构，是指客户端(Client)和服务端(Server)组成的架构.Client端有什么需求，直接发送给Server端去完成，架构清晰明朗，Server端与Client端相对独立，稳定性较好；
    >
    > **共享内存**实现方式复杂，没有客户与服务端之别， 需要充分考虑到访问临界资源的并发同步问题，否则可能会出现死锁等问题；
    >
    >从这稳定性角度看，Binder架构优越于共享内存。
3. 安全性:
    > 传统Linux IPC的接收方无法获得对方进程可靠的UID/PID，从而无法鉴别对方身份.
    >
    >Android为每个安装好的应用程序分配了自己的UID，故进程的UID是鉴别进程身份的重要标志，前面提到C/S架构，Android系统中对外只暴露Client端，Client端将任务发送给Server端，Server端会根据权限控制策略，判断UID/PID是否满足访问权限.
4. 公司战略角度:
    > Linux内核是开源的系统，所开放源代码许可协议GPL保护，该协议具有“病毒式感染”的能力.受GPL保护的Linux Kernel是运行在内核空间，对于上层的任何类库、服务、应用等运行在用户空间，一旦进行SysCall（系统调用），调用到底层Kernel，那么也必须遵循GPL协议。

通过上面的分析，就能推断出: **Binder是Android系统上最为合适的进程间通信方式**。

Binder是基于开源库[OpenBinder](http://www.angryredplanet.com/~hackbod/openbinder/docs/html/BinderIPCMechanism.html)实现的。

当然后来还有其它可供的方案,如[D-bus](https://www.freedesktop.org/wiki/Software/dbus/),后来又出现了[kdbus](http://kroah.com/log/blog/2014/01/15/kdbus-details/).感兴趣的可以自行学习。


其实到了这里，我们要明确一点，Binder是Android系统中采用的进程间通信方式，但是其内部同样也使用了其它的Linux已有的进程间通信方式。

> Android OS中的Zygote进程的IPC采用的是套接字(Socket)机制，
>
> Android中的Kill Process采用的信号(Signal)机制。
>
> Binder更多则用在system_server进程与上层App层的IPC交互。

存在即合理。

---

在Zygote孵化出system_server进程后，在system_server进程中初始化支持整个Android framework的各种各样的Service，而这些Service从大的方向来划分，分为Java层Framework和Native Framework层(C++)的Service，几乎都是基于BInder IPC机制。
> **Java framework**：作为Server端继承(或间接继承)于Binder类，Client端继承(或间接继承)于BinderProxy类。例如 ActivityManagerService(用于控制Activity、Service、进程等) 这个服务作为Server端，间接继承Binder类，而相应的ActivityManager作为Client端，间接继承于BinderProxy类。 当然还有PackageManagerService、WindowManagerService等等很多系统服务都是采用C/S架构；
>
>**Native Framework层**：这是C++层，作为Server端继承(或间接继承)于BBinder类，Client端继承(或间接继承)于BpBinder。例如MediaPlayService(用于多媒体相关)作为Server端，继承于BBinder类，而相应的MediaPlay作为Client端，间接继承于BpBinder类。

总结一下: 
1. Java Framework: 
    >Server端继承自**Binder**类， Client端继承自 **BinderProxy**类。
    >
    >At the same time, Server端一般都以Service结尾(ActivityService)，而Client端都以Manager结尾(ActivityManager)。

2. Native Framework: 
    > Server端(如:MediaPlayService)都继承自BBinder类；Clicent端(如:MediaPlay)都继承BpBinder类

---

[为什么 Android 要采用 Binder 作为 IPC 机制？](https://www.zhihu.com/question/39440766)