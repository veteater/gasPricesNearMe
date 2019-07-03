import React from 'react';
import { shallow } from 'enzyme';
import Station from './Station';

describe('Station', () => {
  it('renders without crashing', () => {
    const component = shallow(<Station />);
    expect(component).toMatchSnapshot();
  });
});
