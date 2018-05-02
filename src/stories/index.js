import React from 'react'
import { storiesOf } from '@storybook/react'
import Provider from './Provider'
import NotFound from '../client/components/NotFound'
import Home from '../client/components/Home'
storiesOf('Welcome', module).add('to Storybook', () => <NotFound />)

storiesOf('Signup form', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('empty form', () => <Home />)
