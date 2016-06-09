import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import Gravatar from '../lib/gravatar';
import Avatar from '../lib/avatar';
import Email from '../lib/email';

describe('<Gravatar/>', () => {
  it('contains an <Avatar/> component', () => {
    const wrapper = shallow(<Gravatar/>);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('contains an <Email/> component', () => {
    const wrapper = shallow(<Gravatar/>);
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial email state', () => {
    const wrapper = shallow(<Gravatar/>);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should update the src state on clicking fetch', () => {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({email: 'hi@jmsmrgn.com'});
    wrapper.find('button').simulate.click;
    expect(wrapper.state('email')).to.equal('hi@jmsmrgn.com');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('hi@jmsmrgn.com')}?s=200`);
  });
});
