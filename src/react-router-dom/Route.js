import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Consumer} from './context'
export default class Route extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Consumer>
                {state => {
                    console.log(state)
                    let {path, component:Component} = this.props // component中的首字母大写才生效
                    let pathname = state.location.pathname
                    if (pathname === path) { // 这里这样等于，可以实现一级路由匹配，但是有二级路由，就匹配不到了。 /user/111
                        return <Component></Component>
                    }
                    // 正确的方式是，根据path实现一个正则，通过正则匹配
                    // 这里就不再往下写了，主要是想学习 react-router-dom的实现方式 到这里已经实现了
                    // 如果想要完全写完，可以接着看：https://www.bilibili.com/video/av66055890  视频拉到45分钟的样子
                    return null
                }}
            </Consumer>
        )
    }
}