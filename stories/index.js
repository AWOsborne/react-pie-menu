import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { doc } from 'storybook-readme';

import Readme from '../README.md';

storiesOf('Documentation', module)
  .add('Readme', doc(Readme))
  .add('Welcome to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}><span role="img" aria-label="emojis">😀 😎 👍 💯</span></Button>);
