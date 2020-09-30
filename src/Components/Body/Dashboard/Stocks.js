import React from 'react'

const Stocks = props => {
    console.log(props)
    const company = props.stocksData.filter(stock => stock.name === props.match.params.name)[0]

    return (
        <div>
            <h3>Company: {company.name}</h3>
            <h4>Price: {company.lastPrice}</h4>
        </div>
    )
}

export default Stocks