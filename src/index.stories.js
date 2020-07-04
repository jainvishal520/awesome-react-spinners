import React from 'react';
import { Ellipsis, Ring, Ripple } from '..';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />);
