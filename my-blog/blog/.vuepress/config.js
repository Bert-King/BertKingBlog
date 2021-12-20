module.exports = {
    title: '信仰与思考', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    themeConfig: {
        // Please keep looking down to see the available options.
        nav: [
            { text: "主页", link: "/posts/" },
            { text: "新约", link: "/node/" },
            { text: "旧约", link: "/webframe/" },
            { text: "诗篇", link: "/database/面试题总结.md" },
            { text: "箴言", link: "/android/" },
            { text: "感悟", link: "/interview/" }
        ],
        dateFormat: 'YYYY-MM-DD',
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
    },
    plugins: [
        ['@vuepress/back-to-top'], // 返回顶部
        ['@vuepress/nprogress'], // 加载进度条
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: true,
        },
    ],
}