import React from 'react';

const OrderBook = () => {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Price</th>
          <th scope="col">Size</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8887.00</td>
          <td>0.948</td>
          <td>5.340</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderBook;
