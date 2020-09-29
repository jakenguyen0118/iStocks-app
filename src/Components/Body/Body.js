import React from 'react'
import {Route, Switch} from 'react-router-dom'
import stocks from '../../stocksData'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard/Dashboard'


const Body = () => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/stocks'
                    render={stocksData => <Dashboard stocksData={stocks}/>}
                />
            </Switch>
        </div>
    )
}

export default Body