import React, {Component} from 'react'
// createContext 是react 16.3新增的
let {Provider, Consumer} = React.createContext()

export {Provider, Consumer}
// context的作用是跨组件传递数据