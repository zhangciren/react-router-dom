## react-router实现原理
* 通过 window.location.hash 实现路由跳转
* 通过 window.addEventListener('hashChange',() => {})监听hash变化，render相应组件
* 本项目中包含了react-router-dom中核心的 HashRouter Route Link，更多实现可见：https://www.bilibili.com/video/av66055890?from=search&seid=2876353312614951794