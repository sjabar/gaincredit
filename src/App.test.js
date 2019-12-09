import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = mount(
    <App />
  );
  const p = wrapper.find('.navbar-brand');
  expect(p.text()).toBe('GC Employee Portal');
});
