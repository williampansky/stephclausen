import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Name = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-family: 'Playfair Display', 'Times New Roman', Times, serif;
  margin: 0;
`;

const P = styled.p`
  margin: 0;
`;

const PhoneNumber = styled.a`
  color: rgba(0, 0, 0, 0.4625);
  cursor: pointer;
  margin: 0;
  text-decoration: none;
  transition: color 150ms ease-in-out;
  will-change: color;

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.825);
  }

  @media (min-width: 960px) {
    line-height: 1.265;
  }
`;

const EmailAddress = styled.a`
  color: rgba(0, 0, 0, 0.4625);
  cursor: pointer;
  margin: 0;
  text-decoration: none;
  transition: color 150ms ease-in-out;
  will-change: color;

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.825);
  }

  @media (min-width: 960px) {
    line-height: 1.265;
  }
`;

const Header = ({ data: { phoneNumber, emailAddress }, siteTitle }) => {
  const handleBlur = event => {
    event.target.blur();
  };

  return (
    <header>
      <Name>{siteTitle}</Name>
      <P>
        <PhoneNumber
          target="_self"
          href={`tel:${phoneNumber}`}
          onClick={event => handleBlur(event)}
          onKeyPress={event => handleBlur(event)}
        >
          {phoneNumber}
        </PhoneNumber>
      </P>
      <P>
        <EmailAddress
          target="_self"
          href={`mailto:${emailAddress}`}
          onClick={event => handleBlur(event)}
          onKeyPress={event => handleBlur(event)}
        >
          {emailAddress}
        </EmailAddress>
      </P>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default withTheme(Header);
