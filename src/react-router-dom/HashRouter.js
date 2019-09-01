import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from './context'
export default class HashRouter extends Component {
    constructor() {
        super()
        this.state = {
            location: {
                pathname: window.location.hash.slice(1) || '/'
            }
        }
    }
    componentDidMount(){
        // 当hash值没有时，默认跳转到/ （同时能让页面加上#/）
        window.location.hash = window.location.hash || '/'
        // 监听hash值改变 重新设置状态
        window.addEventListener('hashchange', () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1) || '/'
                }
            })
        })
    }
    render() {
        let value = {
            location: this.state.location,
            history: {
                push(to){
                    window.location.hash = to // 实现路由跳转的核心
                }
            }
        }
        return (
            <Provider value={value}>
              {this.props.children}
            </Provider>
        )
    }
}