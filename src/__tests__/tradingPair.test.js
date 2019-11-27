import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';


import TradingPair from '../components/tradingPair';

describe('Trading pair component', () => {
  const props = { 
    pairs: [],
    selectedPair: { },
    handleChange: jest.fn(() => Promise.resolve())
  }
  it('should render the component', () => {
    const wrapper = shallow(<TradingPair {...props} />);
    expect(wrapper.contains('Select Currency Pair')).toEqual(true);    
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});
