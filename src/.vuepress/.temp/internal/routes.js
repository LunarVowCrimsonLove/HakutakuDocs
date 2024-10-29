export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/Air/", { loader: () => import(/* webpackChunkName: "Air_index.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Air/index.html.js"), meta: {"t":"Hakutaku_Air","i":"lightbulb"} }],
  ["/Pro/", { loader: () => import(/* webpackChunkName: "Pro_index.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Pro/index.html.js"), meta: {"t":"Elaina'sBot","i":"lightbulb"} }],
  ["/Air/JC/FAQ.html", { loader: () => import(/* webpackChunkName: "Air_JC_FAQ.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Air/JC/FAQ.html.js"), meta: {"t":"FAQ","i":"lightbulb"} }],
  ["/Air/JC/GetCadr.html", { loader: () => import(/* webpackChunkName: "Air_JC_GetCadr.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Air/JC/GetCadr.html.js"), meta: {"t":"获取充值卡教程","i":"lightbulb"} }],
  ["/Air/JC/GetKJ.html", { loader: () => import(/* webpackChunkName: "Air_JC_GetKJ.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Air/JC/GetKJ.html.js"), meta: {"t":"获取框架教程","i":"lightbulb"} }],
  ["/Air/JC/LoginAndregeist.html", { loader: () => import(/* webpackChunkName: "Air_JC_LoginAndregeist.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Air/JC/LoginAndregeist.html.js"), meta: {"t":"注册登录教程","i":"lightbulb"} }],
  ["/Air/JC/UserCenter.html", { loader: () => import(/* webpackChunkName: "Air_JC_UserCenter.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Air/JC/UserCenter.html.js"), meta: {"t":"用户端使用教程","i":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/Air/JC/", { loader: () => import(/* webpackChunkName: "Air_JC_index.html" */"E:/桌面/编程实例/易语言实例/Hakutaku/Doc/HakutakuDoc/src/.vuepress/.temp/pages/Air/JC/index.html.js"), meta: {"t":"JC"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
