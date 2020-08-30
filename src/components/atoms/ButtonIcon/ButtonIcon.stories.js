/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { theme } from '../../../theme/mainTheme';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${theme.primary};
`;

export default {
  component: ButtonIcon,
  title: 'Atoms/ButtonIcon',
  decorators: [(story) => <YellowBackground>{story()}</YellowBackground>],
};

export const bulb = (props) => {
  return <ButtonIcon active icon={bulbIcon} />;
};
export const logout = (props) => {
  return <ButtonIcon icon={logoutIcon} />;
};
export const pen = (props) => {
  return <ButtonIcon icon={penIcon} />;
};
export const plus = (props) => {
  return <ButtonIcon icon={plusIcon} />;
};
export const twitt = (props) => {
  return <ButtonIcon icon={twitterIcon} />;
};
