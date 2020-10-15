import React from 'react';
import ReactDOM from 'react-dom';
import DefaultFooter from '../DefaultFooter';
import { IsMobileSize } from "../../../helpers/helpers";

const IsOnMobileSize = IsMobileSize();
describe("<DefaultFooter />", () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultFooter IsOnMobileSize={IsOnMobileSize}/>, div);
});
});