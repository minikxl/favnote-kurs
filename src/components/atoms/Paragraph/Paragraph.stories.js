/* eslint-disable no-unused-vars */
import React from 'react';
import Paragraph from './Paragraph';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph',
};

export const paragraph = (props) => {
  return (
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eos adipisci, architecto
      ducimus iste temporibus ut asperiores iure eveniet inventore itaque error, similique, quas
      alias rem a. Excepturi, commodi tempora.
    </Paragraph>
  );
};
