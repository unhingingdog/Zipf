import React from 'react'
import { mount } from 'enzyme'
import PlayScreen from '../src/components/PlayScreen'
import renderer from 'react-test-renderer'

describe('Components', () => {
	describe('PlayScreen', () => {
		it('renders correctly', () => {
			const tree = renderer.create(
				<PlayScreen />
			).toJSON
			expect(tree).toMatchSnapshot()
		})
	})
})