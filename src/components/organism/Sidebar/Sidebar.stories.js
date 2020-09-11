/* eslint-disable no-unused-vars */
import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  decorators: [StoryRouter()],
};
export const sidebar = (props) => {
  return <Sidebar />;
};
