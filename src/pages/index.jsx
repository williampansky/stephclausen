import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '@/components/Layout';
// import Image from '@/components/Image';
import SEO from '@/components/SEO';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Section from '@/components/Section';
import Skills from '@/components/Skills';

const Grid = styled.div`
  @media (min-width: 640px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, [col] 1fr);
    grid-template-areas:
      'skills experience'
      'education experience'
      'clients experience';
  }

  @media (min-width: 960px) {
    grid-gap: 40px;
  }
`;

const edu = {
  dateEnd: 'June 2014',
  dateStart: 'August 2011',
  title: 'BA Journalism-Advertising / Minor in Marketing',
  location: 'Denton, TX',
  company: {
    name: 'University of North Texas'
  }
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        <Section gridarea="skills" title="Attributes &amp; Skills">
          <Skills data={data.allContentfulSkills.nodes} />
        </Section>
        <Section gridarea="education" title="Education">
          <Education data={edu} />
        </Section>
        <Section gridarea="clients" title="Past Clients &amp; Work"></Section>
        <Section gridarea="experience" title="Experience &amp; Expertise">
          <Experience data={data.allContentfulExperience.nodes} />
        </Section>
      </Grid>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  {
    allContentfulExperience {
      nodes {
        company {
          address {
            city
            country
            state
            street
            suite
            zip
          }
          department
          description {
            description
          }
          emailAddress
          foundingDate
          foundingLocation
          image {
            localFile {
              url
            }
          }
          legalName
          logo {
            localFile {
              url
            }
          }
          name
          numberOfEmployees
          phoneNumber
          sameAs
          slogan {
            slogan
          }
          url
        }
        title
        location
        dateStart
        dateEnd
        accomplishments {
          accomplishment
        }
      }
    }
    allContentfulSkills {
      nodes {
        name
        description {
          description
        }
        volume
      }
    }
  }
`;

export default IndexPage;
