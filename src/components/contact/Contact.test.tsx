import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';
import ReactDOM from 'react-dom';


describe("<Contact />", () => {
  test('renders contact text', () => {
    const { getByText } = render(<Contact />);
    const headerText = getByText(/send me "anything"/i);
    const headerText2 = getByText(/drop me a message/i);
    const contactName = getByText(/Khoa Bui/i);
    const emailText = getByText(/email:/i);
    const email = getByText(/khoabui2497@gmail.com/i);
    const socialText = getByText(/or check out my:/i);
  
    expect(headerText).toBeInTheDocument();
    expect(headerText2).toBeInTheDocument();
    expect(contactName).toBeInTheDocument();
  
    expect(emailText).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(socialText).toBeInTheDocument();
  });
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
});
});
