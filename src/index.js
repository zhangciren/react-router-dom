import React, {Component} from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from './react-router-dom'
import Home from './home'
import User from './user'
import Profile from './profile'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/user' component={User}></Route>
                    <Route path='/profile' component={Profile}></Route>
                </div>
            </Router>
        )
    }
}
render(<App></App>, window.root)