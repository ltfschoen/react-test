import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Header from '../../../src/components/header';

let headerMonted= mount(<Header />);
let headerShallowed= shallow(<Header />);

describe("Header", function() {
   
  // it("contains spec with an expectation", function() {
  //   expect(shallow(<Header />).contains(<h1>Header</h1>)).to.equal(true);
  // });

  // it("contains spec with an expectation", function() {
  //   expect(shallow(<Header />).is('.foo')).to.equal(true);
  // });

  it("should be mounted and only one in the DOM", function() {
    expect(headerMonted.find('header').length).to.equal(1);
  });

  it("should contain one h1 tag", function() {
    expect(headerMonted.find('h1').length).to.equal(1);
  });

  it("should contain one h1 tag and text is Header", function() {
    expect(headerMonted.find('h1').text()).to.equal("Header");
  });

  it("should contain one button", function() {
    expect(headerMonted.find('button').length).to.equal(1);
  });

  it("button click envent", function() {
  	headerMonted.find('button').simulate('click');
    headerMonted.find('button').simulate('click');
    expect(headerMonted.state().counter).to.equal(2);
  });

  it("should contain one hr tag", function() {
    expect(headerMonted.find('hr').length).to.equal(1);
  });
});
