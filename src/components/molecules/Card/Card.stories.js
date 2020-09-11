/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Card,
  title: 'molecules/Card',
};

export const cardNote = (props) => {
  return <Card>Hello Roman</Card>;
};
export const cardTwitter = (props) => {
  return <Card cardType="twitter">Hello Roman</Card>;
};
export const cardArticle = (props) => {
  return <Card cardType="article">Hello Roman</Card>;
};
