import React from 'react';
import './app.css'

import Header from './components/header';
import TradingPair from './components/tradingPair';
import OrderBook from './components/orderBook';

function App() {
  return (
    <div className="main container">
      <Header />
      <div className="book-section">
        <TradingPair />
        <OrderBook />
        <OrderBook />
      </div>
    </div>
  );
}

export default App;
