import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
