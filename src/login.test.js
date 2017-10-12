import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('<Login />', () => {
  it('should render a login button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('#login-button').exists()).toBeTruthy();
  });

  it('should render 2 text boxes', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

});


//    expect(wrapper.find('#login-button').length).toBe(1);
//    expect(wrapper.find('#login-button')).toHaveLength(1);
