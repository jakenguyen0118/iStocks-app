import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = props => {
    console.log(props)

    let stocksData = props.stocksData.map((stock, index) => {
        return (
            <Link
                key={index}
                to={'/price/' + stock.name}>
                    <div>{stock.name}</div>
            </Link>
        )
    })

    return(
        <div>{stocksData}</div>
    )
}

export default Dashboard