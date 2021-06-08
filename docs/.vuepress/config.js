module.exports = {
    title: 'Sw-blog',
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
            {text:'前端基础',link:'./blog/test/test.md'},
            {text:'前端应用',link:'https://www.baidu.com',target:'_blank'},
            {text:'前端实战',link:'https://www.baidu.com',target:'_blank'},
            {
                text:'语言',
                ariaLabel:'Language Menu',
                items:[
                    {text:'简体中文',link:'https://www.baidu.com',target:'_self'},
                    {text:'英语',link:'http://google.com',target:'_self'}
                ]
            }
        ]
    },
    sidebar:'auto',// 侧边栏配置
    sidebarDepth:2,// 侧边栏显示2级
    serviceWorker:true, // 是否开启PWA
}

// module.exports = {
//     title:'Sw-blog',
//     themeConfig: {
//         nav: [  // 导航栏配置
//             // 单一link导航项=====================
//             {
//                 text: "Home",      
//                 link: "/"                // 导航连接，'/'等价于'/README.md'
//             },
//             {
//                 text: "Guide",       // 导航文本
//                 link: "/guide/"       // 导航连接，'/guide/'等价于'/guide/README.md'
//             },
//             // 下拉列表导航项=====================
//             {
//                 text: "Contact",
//                 ariaLabel: "Contact Menu",  // 别名
//                 items: [ // 下拉列表
//                     { text: "Vue", link: "https://cn.vuejs.org/v2/guide/" },
//                     { text: "VuePress", link: "https://www.vuepress.cn/" }
//                 ]
//             },
//             // 下拉列表分组, 每个组之间以横线隔开=====================
//             {
//                 text: "Category",    // 导航文本
//                 items: [                   // 下拉列表
//                     {
//                         text: "Archives",       // 下拉列表分组文本
//                         items: [                    // 分组列表（嵌套列表）
//                             { text: "vue", link: "/blogs/vue/" },   // 分组内子项
//                             { text: "vuepress", link: "/blogs/vuepress/" }
//                         ]
//                     },
//                     {
//                         text: "Guide",
//                         items: [
//                             { text: "introduce", link: "/guide/" }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// }