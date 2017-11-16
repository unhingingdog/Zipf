import PlayScreen from '../src/components/PlayScreen'
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

const middleware = []
const mockStore = configureStore(middleware);

const initialState = {
	textReducer: { test: 'Hello?' }
}

describe('Testing PlayScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <PlayScreen />,
      { context: { store: mockStore(initialState) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});



