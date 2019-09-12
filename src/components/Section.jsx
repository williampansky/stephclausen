import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Component = styled.section`
  grid-area: ${props => props.gridarea};
`;

const ComponentTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Playfair Display', 'Times New Roman', Times, serif;
`;

const Section = ({ children, gridarea, title }) => (
  <Component gridarea={gridarea}>
    <ComponentTitle>{title}</ComponentTitle>
    {children}
  </Component>
);

Section.propTypes = {
  children: PropTypes.node,
  gridarea: PropTypes.string,
  title: PropTypes.string.isRequired
};

Section.defaultProps = {
  gridarea: 'grid-section'
};

export default withTheme(Section);
