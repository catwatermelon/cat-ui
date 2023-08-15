const sidebar = {
    '/': [
        { text: '快速开始', link: '/' },
        {
            text: '通用',
            children: [
                { text: 'Button 按钮', link: '/components/button/' },
            ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
    ]
}
const custom = {
    title: 'CatUI 文档',
    description: 'CatUI 组件库文档',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
}

const nav = [
    { text: '首页', link: '/' },
    {
        text: '关于',
        items: [
            { text: 'Github', link: 'https://github.com/catwatermelon/CatUI' },
            { text: '掘金', link: 'https://juejin.cn/user/3280598430652264' }
        ]
    }
]

const config = {
    ...custom,
    themeConfig: {
        sidebar,
        nav
    }
}
export default config