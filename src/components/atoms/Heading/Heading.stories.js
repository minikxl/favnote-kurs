/* eslint-disable no-unused-vars */
import React from 'react';
import Heading from './Heading';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const heading = (props) => {
  return <Heading>Hello Roman</Heading>;
};
