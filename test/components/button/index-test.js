import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Button from '../../../src/components/button';


let hasBeenClickedInital=5;
let buttonMonted= mount(<Button hasBeenClicked={hasBeenClickedInital}/>);
let buttonShallowed= shallow(<Button hasBeenClicked={hasBeenClickedInital}/>);

describe("Button ", function() {

  it("should be a button", function() {
    expect(buttonShallowed.type()).to.equal('button');
  });

  it(`should has a prop hasBeenClicked with initial value ${hasBeenClickedInital}`, function() {
    expect(buttonMonted.props().hasBeenClicked).to.equal(hasBeenClickedInital);
  });

  it(`is clicked and its counter added by 1`, function(){
    buttonMonted.simulate('click');
    expect(buttonMonted.state().counter).to.equal(hasBeenClickedInital+1); 
  });

  it(`reveive new props and is clicked and its counter added by 1`, function(){
    //buttonShallowed.setProps({hasBeenClicked:0});
    //buttonShallowed.simulate('click');
    //expect(buttonShallowed.state().counter).to.equal(1); 
    console.log(buttonMonted.props());
    buttonMonted.setProps({hasBeenClicked : 0});
  });

  // it("should contain one button", function() {
  //   expect(headerMonted.find('button').length).to.equal(1);
  // });

  // it("button click envent", function() {
  // 	headerMonted.find('button').simulate('click');
  //   headerMonted.find('button').simulate('click');
  //   expect(headerMonted.state().counter).to.equal(2);
  // });

});
