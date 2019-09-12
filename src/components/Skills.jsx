import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
// import { JSONLD, Generic } from 'react-structured-data';
import { Progress } from 'react-sweet-progress';

const Entry = styled.article`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  h1 {
    font-size: 0.9725em;
    font-weight: normal;
    margin: 0;
    white-space: nowrap;

    @media (min-width: 960px) {
      font-size: 1.105em;
      line-height: 1.265;
    }
  }

  footer {
    display: block;
    margin-left: 1em;
    width: 100%;
  }

  div.tooltip {
    display: none;
  }
`;

const Skills = ({ data }) => {
  const calculateVolume = number => {
    return (number / 20) * 100;
  };

  return data ? (
    <>
      {data.map(node => (
        <Entry key={node.name}>
          <header>
            <h1 className="skill-name">{node.name}</h1>
          </header>
          <footer>
            <Progress
              percent={`${calculateVolume(node.volume)}`}
              status="default"
              theme={{
                default: {
                  symbol: '',
                  color: '#333'
                }
              }}
            />
          </footer>
          {node.description && (
            <div className="tooltip">{node.description.description}</div>
          )}
        </Entry>
      ))}
    </>
  ) : null;
};

Skills.propTypes = {
  data: PropTypes.array.isRequired
};

export default withTheme(Skills);
