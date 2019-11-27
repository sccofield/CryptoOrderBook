import React from 'react';

import './tradingpair.css';

const TradingPair = (props) => {
  const {selectedPair} = props
  const handleChange = (e) => {
    props.handleChange(JSON.parse(e.target.value))
  }

  return (
    <div className="trading-pair">
      <select 
        id="inputState" 
        className="form-control" 
        onChange={ e => handleChange(e)}
      >
        <option>Select Currency Pair</option>
        { props.pairs.map((pair, index) => {
          return <option 
            key={index} 
            value={JSON.stringify(pair)}>
            { pair.name }
          </option>
        })}
      </select>
      <div className="details">
        <p><span>Symbol: </span>{ selectedPair && selectedPair.url_symbol }</p>
        <p><span>Description: </span>{ selectedPair && selectedPair.description }</p>
      </div>
    </div>
  )
}

export default TradingPair;
