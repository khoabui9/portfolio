import React from 'react';
import ReactDOM from 'react-dom';
import MainAnimate from '../MainAnimate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainAnimate />, div);
});