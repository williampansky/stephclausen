import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { JSONLD, Generic } from 'react-structured-data';

const Component = styled.div`
  color: rgba(0, 0, 0, 0.81625);
  font-family: 'Playfair Display', 'Times New Roman', Times, serif;
  font-weight: bold;

  @media (min-width: 960px) {
    line-height: 1.325;
  }

  h1 {
    display: inline-block;
    font-family: inherit;
    font-size: 1.25em;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;

    @media (min-width: 960px) {
      font-size: 1.5em;
    }
  }

  span {
    display: inline-block;
    font-family: inherit;
    font-size: 1.25em;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;

    &:before {
      content: ', ';
    }

    @media (min-width: 960px) {
      font-size: 1.5em;
    }
  }
`;

const JobTitle = ({ name, location, metadata, metadatatype }) => (
  <Component>
    <h1>{name}</h1>
    <span>{location}</span>
    <JSONLD>
      <Generic
        type={metadatatype.toLowerCase()}
        jsonldtype={metadatatype}
        schema={{
          description: metadata.description
            ? metadata.description.description
            : null,
          legalName: metadata.legalName ? metadata.legalName : null,
          logo:
            metadata.logo && metadata.logo.localFile
              ? metadata.logo.localFile.url
              : null,
          name: name,
          sameAs: metadata.sameAs ? metadata.sameAs : null,
          slogan: metadata.slogan ? metadata.slogan.slogan : null,
          telephone: metadata.phoneNumber ? metadata.phoneNumber : null,
          url: metadata.url ? metadata.url : null
        }}
      >
        {metadata.address && (
          <Generic
            type="address"
            jsonldtype="PostalAddress"
            schema={{
              addressCountry:
                metadata.address && metadata.address[0].country
                  ? metadata.address[0].country
                  : null,
              addressLocality:
                metadata.address && metadata.address[0].city
                  ? metadata.address[0].city
                  : null,
              addressRegion:
                metadata.address && metadata.address[0].state
                  ? metadata.address[0].state
                  : null,
              postalCode:
                metadata.address && metadata.address[0].zip
                  ? metadata.address[0].zip
                  : null,
              streetAddress:
                metadata.address &&
                metadata.address[0].street &&
                metadata.address[0].suite
                  ? `${metadata.address[0].street} ${metadata.address[0].suite}`
                  : null
            }}
          />
        )}
      </Generic>
    </JSONLD>
  </Component>
);

JobTitle.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  metadata: PropTypes.object,
  metadatatype: PropTypes.string
};

JobTitle.defaultProps = {
  metadata: {},
  metadatatype: 'Corporation'
};

export default JobTitle;
