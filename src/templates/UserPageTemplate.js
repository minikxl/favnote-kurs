/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organism/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default UserPageTemplate;
