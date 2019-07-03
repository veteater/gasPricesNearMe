import React from 'react';
import { shallow } from 'enzyme';
import GasPrices from './GasPrices';

describe('GasPrices', () => {
  it('renders without crashing', () => {
    const component = shallow(<GasPrices />);
    expect(component).toMatchSnapshot();
  });
});
