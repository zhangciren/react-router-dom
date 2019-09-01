import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Consumer} from './context'
import pathToReg from 'path-to-regexp'
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
                    // if (pathname === path) { // 这里这样等于，可以实现一级路由匹配，但是有二级路由，就匹配不到了。 /user/111
                    //     return <Component></Component>
                    // }
                    // 正确的方式是，根据path实现一个正则，通过正则匹配
                    let reg = pathToReg(path, [], {end: false}) // path-to-regexp这个库非常好用，后期可以深入学习下
                    let result = pathname.match(reg)
                    if (result) {
                        return <Component></Component>
                    }
                    return null
                }}
            </Consumer>
        )
    }
}