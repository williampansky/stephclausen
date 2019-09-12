import PropTypes from 'prop-types';
import React from 'react';
import styled, { withTheme } from 'styled-components';
import DateRange from '@/components/DateRange';
import JobTitle from '@/components/JobTitle';
import CompanyInfo from '@/components/CompanyInfo';

const Entry = styled.article`
  .accomplishments {
    font-size: 0.9725em;
    line-height: 1.425;
    padding: 0 0 0 20px;

    li {
      width: 90%;
      & + li {
        margin-top: 8px;
      }
    }

    @media (min-width: 960px) {
      font-size: 1.105em;
      line-height: 1.5;

      li {
        width: 100%;
      }
    }
  }
`;

const Experience = ({ data }) => {
  return data ? (
    <>
      {data.map(node => (
        <Entry key={node.company.name}>
          <header>
            <DateRange start={node.dateStart} end={node.dateEnd} />
            <CompanyInfo
              name={node.company.name}
              location={node.location}
              metadata={node.company}
            />
            <JobTitle title={node.title} />
          </header>
          <ul className="accomplishments">
            {node.accomplishments.map(entry => (
              <li key={entry.accomplishment}>{entry.accomplishment}</li>
            ))}
          </ul>
        </Entry>
      ))}
    </>
  ) : null;
};

Experience.propTypes = {
  data: PropTypes.array.isRequired
};

export default withTheme(Experience);
