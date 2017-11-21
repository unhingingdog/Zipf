import Adapter from 'enzyme-adapter-react-16'
import TextEditor from '../src/components/TextEditor'
import React from 'react';
import 'react-dom'
import Enzyme, { shallow, render, mount } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })
import { View, Text, StyleSheet, Button } from 'react-native';
import chai, { expect } from 'chai';
import sinon from 'sinon'
let should = chai.should()

describe('<TextEditor /> renders', () => {
	let wrapper
	beforeEach(() => { wrapper = shallow(<TextEditor test="Hello?"/>) })
  it('should render', () => {
    expect(wrapper.length).to.equal(1)
  })
	it('it should contain text', () => {
		expect(wrapper.contains(<Text>Hello?</Text>)).to.equal(true)
	})
	it('it should contain a button', () => {
		expect(wrapper.contains(<Button title="some shit" onPress={this.pressHandler}></Button>)).to.equal(true)
	})
})

describe('<TextEditor /> interactions', () => {
	const onButtonClick = sinon.spy()
	let wrapper = shallow(<TextEditor onPress={onButtonClick} test="hello?" />)
	wrapper.find('Button').simulate('click')
})

describe('other testing', () => {
	beforeEach(() => {
		
	})
})

