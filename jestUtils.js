import React from 'react'
import 'react-native'
import jsdom from 'jsdom'

import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, render, mount } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })

global.React = React
global.renderer = renderer
global.shallow = shallow

const { JSDOM } = jsdom
const { document } = (new JSDOM('')).window;
global.document = document
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
})
