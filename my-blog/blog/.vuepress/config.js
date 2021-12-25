module.exports = {
    title: 'Bertking', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    themeConfig: {
        // Please keep looking down to see the available options.
        lastUpdated: 'true',
        directories: [{
            id: "posts",
            dirname: "_posts",
            title: "全部博客",
            path: "/",
            itemPermalink: "/:year/:month/:day/:slug"
        },
        {
            id: "mobile",
            dirname: "_mobile",
            title: "移动端",
            path: "/mobile/",
            itemPermalink: "/:year/:month/:day/:slug"
        },

        {
            id: "webs",
            dirname: "_webs",
            title: "前端",
            path: "/webs/",
            itemPermalink: "/:year/:month/:day/:slug"
        },
        {
            id: "servers",
            dirname: "_servers",
            title: "服务端",
            path: "/servers/",
            itemPermalink: "/:year/:month/:day/:slug"
        },
        {
            id: "database",
            dirname: "_database",
            title: "数据库",
            path: "/database/",
            itemPermalink: "/:year/:month/:day/:slug"
        },
        {
            id: "interview",
            dirname: "_interview",
            title: "面试",
            path: "/interview/",
            itemPermalink: "/:year/:month/:day/:slug"
        },
        ],
        nav: [{
            text: '全部',
            link: '/'
        },
        {
            text: '移动端',
            link: '/mobile/'
        },
        {
            text: '前端',
            link: '/webs/'
        },
        {
            text: '后端',
            link: '/servers/'
        },
        {
            text: '数据库',
            link: '/database/'
        },
        {
            text: '面试',
            link: '/interview/'
        },
        {
            text: '分类',
            link: '/tag/'
        },
        {
            text: "Github",
            link: "https://github.com/Bert-King/BertKingBlog"
        }
        ],
        lastUpdated: 'Last Updated',
        dateFormat: 'YYYY-MM-DD',
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/vuejs/vuepress',
                },
                {
                    type: 'twitter',
                    link: 'https://github.com/vuejs/vuepress',
                },
            ],
            copyright: [
                {
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                    link: '',
                },
            ],
        },
    },
    plugins: [
        '@vuepress/last-updated',
        'reading-progress',
        '@vuepress/back-to-top', // 返回顶部
        '@vuepress/nprogress', // 加载进度条
        ['@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: true,
        },]
    ],
}