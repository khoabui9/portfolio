import React from 'react';
import ReactDOM from 'react-dom';
import DefaultHeader from '../DefaultHeader';
import { IsMobileSize } from "../../../helpers/helpers";

const IsOnMobileSize = IsMobileSize();

describe("<DefaultHeader />", () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultHeader IsOnMobileSize={IsOnMobileSize}/>, div);
});
});