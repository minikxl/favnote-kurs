/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import Input from './Input';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Input,
  title: 'Atoms/Input',
  argTypes: {
    search: { control: 'boolean' },
  },
};

export const input = (props) => {
  return <Input {...props} />;
};
