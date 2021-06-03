module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    head:[
        ['link',{rel:'icon',herf:'/logo.jpg'}],
    ],
    base:'/',// 部署到github的相关配置
    markdown:{
        lineNumbers:false // 代码块显示行号
    },
    themeConfig:{
        nav:[
            {text:'前端基础',link:'https://www.baidu.com'}
        ]
    },
    sidebar:'auto',// 侧边栏配置
    sidebarDepth:2,// 侧边栏显示2级
    serviceWorker:true, // 是否开启PWA
}

// module.exports = {
//     theme: '@org/vuepress-theme-xxx', // 或者一个官方主题: '@vuepress/theme-xxx'
//   }

// module.exports = {
//     markdown: {
//       // markdown-it-anchor 的选项
//       anchor: { permalink: false },
//       // markdown-it-toc 的选项
//       toc: { includeLevel: [1, 2] },
//       extendMarkdown: md => {
//         // 使用更多的 markdown-it 插件!
//         md.use(require('markdown-it-xxx'))
//       }
//     }
//   }