import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('mounts will full matched snapshot', () => {
    const app = mount(<App />);
    expect(app).toMatchSnapshot();
  });
});
