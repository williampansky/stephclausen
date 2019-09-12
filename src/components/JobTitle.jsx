import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h2`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.025em;
  font-style: italic;
  font-weight: lighter;
  letter-spacing: normal;
  margin: 0;
  word-spacing: normal;

  @media (min-width: 960px) {
    font-size: 1.25em;
    letter-spacing: 0.0075em;
    line-height: 1.015;
    word-spacing: 0.0075em;
  }
`;

const JobTitle = ({ title }) => <Text>{title}</Text>;

JobTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default JobTitle;
