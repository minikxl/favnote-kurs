import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import { theme } from '../src/theme/mainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';

export default {
  decorators: [withKnobs],
};

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
