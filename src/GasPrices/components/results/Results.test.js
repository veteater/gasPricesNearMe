import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results', () => {
  it('renders without crashing', () => {
    const component = shallow(<Results />);
    expect(component).toMatchSnapshot();
  });
});
