import React from 'react'

const Stocks = props => {
    console.log(props)
    let stock = props.stocksData.filter(stock => {
        return stock.symbol === props.match.params.symbol
    })
    console.log('value of stock', stock)

    return (
        <div>
            <h3>Company: {stock.name}</h3>
            <h4>Price: {stock.lastPrice}</h4>
        </div>
    )
}

export default Stocks