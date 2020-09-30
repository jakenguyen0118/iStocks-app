import React from 'react'
import {Route, Switch} from 'react-router-dom'
import stocks from '../../stocksData'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import Stocks from './Stocks'


const Body = () => {
    console.log('body', stocks)

    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route
                    path='/stocks/:symbol'
                    render={(routerProps) => (
                        <Stocks stocksData={stocks} match={routerProps.match} />
                    )}
                />
                <Route
                    path='/stocks'
                    render={(props) => <Dashboard {...props} stocksData={stocks} />}
                />
            </Switch>
        </div>
		)
}

export default Body