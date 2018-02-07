import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, render, mount } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })

global.React = React
global.renderer = renderer
global.shallow = shallow
