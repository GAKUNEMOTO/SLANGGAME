import React from 'react';
import styled from 'styled-components';

const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 

  .buttonContainer {
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 10px;
    width:100%;
    border-radius:20px;
    
    background-color: #8B4513;
    color: #fff;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top:10px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color:#5E3D28;
    }
  }
`;

const OptionList = ({ options = [], onOptionsSelect = () => {} }) => {
  return (
    <div>
      {options.map((option, index) => (
        <AnswerContainer key={index}>
          <button key={index} onClick={() => onOptionsSelect(option)}>
            {option}
          </button>
        </AnswerContainer>
      ))}
    </div>
  );
};

export default OptionList;

