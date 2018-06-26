import React from 'react'
import CheckboxWithLabel from '../components/CheckboxWithLabel/CheckboxWithLabel'

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

  expect(checkbox.text()).toEqual('Off')

  checkbox.find('input').simulate('change')

  expect(checkbox.text()).toEqual('On')
})
