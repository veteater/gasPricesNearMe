import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let appElement;

  /*
  beforeEach(() => {
    appElement = document.createElement('div');
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(appElement);
  });
  */

  it('renders without crashing', () => {
    shallow(<App />);
  });

  /*
  it('renders the starting text', () => {
    ReactDOM.render(<App />, appElement);
    expect(appElement).toMatchSnapshot();
  })
  */
});
