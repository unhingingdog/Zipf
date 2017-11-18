import { shallowToJson } from 'enzyme-to-json';
import React from 'react'
import { Text } from 'react-native'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextEditor from '../src/components/TextEditor'

Enzyme.configure({ adapter: new Adapter() })

//Fix this mess

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <TextEditor />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('TextEditor component', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(<TextEditor />)
		
	  it('should render text component', () => {
			expect(wrapper.find('Text')).toHaveLength(1)
		})
		
		it('text component should contain text', () => {
			expect(wrapper.find('Text').contains('Hellho?')).toBe(true)
		})
	})
})