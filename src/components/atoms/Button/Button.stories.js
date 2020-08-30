/* eslint-disable no-unused-vars */
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { theme } from '../../../theme/mainTheme';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs],
};

export const primary = (props) => {
  const label = 'Colors';
  const options = theme;
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'Theme';

  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Hello World</Button>;
};

export const secondary = () => <Button secondary>Remove</Button>;
