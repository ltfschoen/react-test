import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Header from '../../../src/components/header';

let headerMonted= mount(<Header />);
let headerShallowed= shallow(<Header />);

describe("Header", function() {

  it("should be mounted and only one in the DOM", function() {
    expect(headerMonted.find('header').length).to.equal(1);
  });

  it("should contain one h1 tag", function() {
    expect(headerMonted.find('h1').length).to.equal(1);
  });

  it("should contain one h1 tag and text is Header", function() {
    expect(headerMonted.find('h1').text()).to.equal("Header");
  });

  it("should contain one hr tag", function() {
    expect(headerMonted.find('hr').length).to.equal(1);
  });
});
