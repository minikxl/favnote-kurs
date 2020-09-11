import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-dom';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;
const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  position: relative;
  ${(flex) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;
const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 1;
`;
const StyledLinkButton = styled.a`
  width: 47px;
  height: 47px;
  background: white url(${LinkIcon}) no-repeat center;
  background-size: 60%;
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  render() {
    // const { id, cardType, title, created, twitterName, articleUrl, content } = this.props;
    const { cardType } = this.props;

    return (
      <StyledWrapper>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>Hello roman</StyledHeading>
          <DateInfo>3 days</DateInfo>
          {cardType === 'twitter' && (
            <StyledAvatar src="https://unavatar.now.sh/twitter/hello_roman" />
          )}
          {cardType === 'article' && (
            <StyledLinkButton src="https://unavatar.now.sh/twitter/hello_roman" />
          )}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>lorem ipsum dolor sit amet consectrerur</Paragraph>
          <Button secondary>REMOVE</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
