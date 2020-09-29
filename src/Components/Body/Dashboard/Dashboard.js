import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = props => {

    let stockData = props.stocksData.map((stock, index) => {
        return (
            <Link
                key={index}
                to={`/stocks/${stock.name}`}>
                    <div>{stock.name}</div>
            </Link>
        )
    })

    return(
        <div>{stockData}</div>
    )
}

export default Dashboard