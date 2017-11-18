//import { shallowToJson } from 'enzyme-to-json';
//import React from 'react'
//import 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import TextEditor from '../src/components/TextEditor'
//import renderer from 'react-test-renderer';
//



import React from 'react';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })
import { View, Text, StyleSheet } from 'react-native';
import { expect } from 'chai';

describe('<TextEditor />', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<TextEditor />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text>Hello</Text>)).to.equal(true);
  });
});