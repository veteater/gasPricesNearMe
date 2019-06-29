import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

describe('App', () => {
  let appElement;

  beforeEach(() => {
    appElement = document.createElement('div');
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(appElement);
  });

  it('renders without crashing', () => {
    ReactDOM.render(<App />, appElement);
  });

  it('renders the starting text', () => {
    ReactDOM.render(<App />, appElement);
    expect(appElement).toMatchSnapshot();
  })
});
