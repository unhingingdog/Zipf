import { shallowToJson } from 'enzyme-to-json';
import React from 'react'
import { Text } from 'react-native'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextEditor from '../src/components/TextEditor'
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() })

test('renders correctly', () => {
  const tree = renderer.create(
    <TextEditor />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});