import React, {Component} from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route, Link} from './react-router-dom'
import Home from './home'
import User from './user'
import Profile from './profile'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to='/home'>首页</Link>
                        <Link to='/profile'>个人中心</Link>
                        <Link to='/user'>用户</Link>
                    </div>
                    <div>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/profile' component={Profile}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}
render(<App></App>, window.root)