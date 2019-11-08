import React from 'react';

import './tradingpair.css';

const TradingPair = () => {
  return (
    <div className="trading-pair">
      <select id="inputState" class="form-control">
        <option selected>Currency Pairs</option>
        <option>USD/BTC</option>
        <option>USD/NGN</option>
        <option>USD/EUR</option>
        <option>USD/BPD</option>
      </select>

      <div>
        <p><span>Symbol :</span> ltcusd</p>
        <p><span>Trading :</span> enabled</p>
        <p><span>description :</span> Litecoin / U.S. dollar</p>
      </div>
    </div>
  )
}

export default TradingPair;
