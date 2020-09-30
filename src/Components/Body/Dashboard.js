import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = props => {
    console.log(props)

    let stocksData = props.stocksData.map((stock, index) => {
        return (
            <Link
                key={index}
                to={`/stocks/${stock.symbol}`}>
                    <div>{stock.name} - {stock.symbol}</div>
            </Link>
        )
    })

    return(
        <div>{stocksData}</div>
    )
}

export default Dashboard