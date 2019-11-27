import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';


import Header from '../components/header';

describe('Header component', () => {
  it('should render the header component without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains('Crypto Order Book')).toEqual(true);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
