import React from 'react'

const Stocks = props => {
    console.log(props)
    const stock = props.stocksData.filter(stock => stock.name === props.match.params.name)
    console.log(stock)

    return (
        <div>
            <h3>Company: {props.name}</h3>
            <h4>Price: {props.lastPrice}</h4>
        </div>
    )
}

export default Stocks