/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Header from '@/components/Header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      contentfulSiteSettings {
        primaryColor
        phoneNumber
        emailAddress
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  /**
   * @name theme
   * @see https://www.styled-components.com/docs/advanced
   */
  const theme = {
    colors: {
      primary: data.contentfulSiteSettings.primaryColor
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header
          data={data.contentfulSiteSettings}
          siteTitle={data.site.siteMetadata.title}
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
      {/* <ThemeProvider theme={theme}>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ThemeProvider> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
