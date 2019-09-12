import PropTypes from 'prop-types';
import React from 'react';
import styled, { withTheme } from 'styled-components';
import DateRange from '@/components/DateRange';
import JobTitle from '@/components/JobTitle';
import CompanyInfo from '@/components/CompanyInfo';

const Entry = styled.article``;

const Education = ({ data }) => {
  return data ? (
    <Entry>
      <header>
        <DateRange start={data.dateStart} end={data.dateEnd} />
        <CompanyInfo
          name={data.company.name}
          location={data.location}
          metadata={data.company}
          metadatatype="Organization"
        />
        <JobTitle title={data.title} />
      </header>
    </Entry>
  ) : null;
};

Education.propTypes = {
  data: PropTypes.object.isRequired
};

export default withTheme(Education);
