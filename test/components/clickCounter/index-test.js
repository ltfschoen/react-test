import React from 'react';
import { mount } from 'enzyme';
import ClickCounter from '../../../src/components/clickCounter';
import {expect} from 'chai';

let wrapper = mount(<ClickCounter />);
//let button = wrapper.find('Button');
let span = wrapper.find('span');


describe("#ClickCounter" , () => {
	console.log(wrapper.debug())
	//expect(span.at(0).text()).to.equal("Has not been clicked");
})