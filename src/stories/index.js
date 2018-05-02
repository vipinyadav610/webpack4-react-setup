import React from 'react'
import { storiesOf } from '@storybook/react'
import Provider from './Provider'
import NotFound from '../client/components/NotFound'
import Home from '../client/components/Home'
import SimpleForm from '../client/components/SignUp'
storiesOf('Welcome', module).add('not found', () => <NotFound />)

storiesOf('home', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('home', () => <Home />)

storiesOf('Sign Up', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('signup', () => <SimpleForm />)
