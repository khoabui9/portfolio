import React from 'react';
import ReactDOM from 'react-dom';
import ContainerPage from '../ContainerPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContainerPage />, div);
});