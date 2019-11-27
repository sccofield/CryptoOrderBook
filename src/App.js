import React, { useState, useEffect } from 'react';
import '../src/app.css'

import Header from './components/header';
import TradingPair from './components/tradingPair';
import OrderBook from './components/orderBook';

const App = () => {
  const [pairs, setPairs ] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedPair, setSelectedPair] = useState({})

  const handleChange = (selectedPair) => {
    setSelectedPair(selectedPair)
  }
  const currencyPair = selectedPair.url_symbol; 

  useEffect(()=> {
    fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/')
    .then(response => response.json())
    .then(response => setPairs(response))
  }, [])

  useEffect(() => {
    const subscribe = {
      event: 'bts:subscribe',
      data: {
        channel: `detail_order_book_${currencyPair}`
      }
    };

    const ws = new WebSocket('wss://ws.bitstamp.net');

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setOrders(response.data);
    };

    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [currencyPair])
  
  return (
    <div className="main container">
      <Header />
      <TradingPair pairs = {pairs} selectedPair={selectedPair} handleChange={handleChange} />
      <div className="book-section">
        <OrderBook cssClass="bids" orders= {orders.bids}/>
        <OrderBook cssClass="asks" orders={orders.asks}/>
      </div>
    </div>
  );
}

export default App;
