import React from 'react';

// import './orderbook.css';


const OrderBook = (props) => {
  const { orders } = props
  return (
    <div className={`orders ${props.cssClass}` }>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Price</th>
          <th scope="col">Amount</th>
          <th scope="col">Order Id</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map((order, index)=> 
          <tr key={index}>
            <td>{order[0]}</td>
            <td>{order[1]}</td>
            <td>{order[2]}</td>
        </tr>
        )}
      </tbody>
    </table>
    </div>
  )
}

export default OrderBook;
