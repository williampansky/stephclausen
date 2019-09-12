import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Range = styled.p`
  color: rgba(0, 0, 0, 0.4625);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.825em;
  letter-spacing: 0.0075em;
  margin: 0;
  text-transform: uppercase;

  span {
    margin: 0 0.0875em;
  }

  @media (min-width: 960px) {
    line-height: 1.265;
  }
`;

const Date = styled.time`
  line-height: inherit;
`;

const DateRange = ({ start, end }) => (
  <Range>
    <Date>{start}</Date>
    <span>—</span>
    <Date>{end}</Date>
  </Range>
);

DateRange.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

export default DateRange;
