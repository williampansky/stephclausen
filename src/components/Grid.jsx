import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Grid = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
);

Grid.propTypes = {
  siteTitle: PropTypes.string
};

Grid.defaultProps = {
  siteTitle: ``
};

export default Grid;
