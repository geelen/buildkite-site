/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme';

import Home from '../pages/index.js'

describe('Homepage', () => {
  it('Shows a positioning statement', () => {
    expect(shallow(<Home />).contains("Lightning fast testing and delivery")).toBe(true);
  })
})