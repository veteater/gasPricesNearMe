import React from 'react';
import { shallow } from 'enzyme';
import LocationControls from './LocationControls';

describe('LocationControls', () => {
  it('renders without crashing', () => {
    const component = shallow(<LocationControls />);
    expect(component).toMatchSnapshot();
  });
});
