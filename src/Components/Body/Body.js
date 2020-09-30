import React from 'react'
import {Route, Switch} from 'react-router-dom'
import stocks from '../../stocksData'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard/Dashboard'
import Stocks from './Dashboard/Stocks'


const Body = () => {
    console.log('body', stocks)

    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/stocks'
                    render={props => <Dashboard {...props} stocksData={stocks}/>}
                />
                <Route path='/stocks/:name'
                    render={props => <Stocks stocksData={stocks} {...props}/>}
                />
            </Switch>
        </div>
    )
}

export default Body