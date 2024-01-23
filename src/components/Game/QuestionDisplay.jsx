import React from 'react'
import styled from 'styled-components';

const QuestionDisplayContainer = styled.div`
        padding-top:50px;
        margin-bottom:70px;
        font-size:40px;
    `;

    const BoxQuestionDisplay = styled.div`
    width:auto; 
    height: auto; 
    border: 2px solid ; 
    `;


const QuestionDisplay = ({questions}) => {

  return (
    <div>
      <QuestionDisplayContainer>
        <BoxQuestionDisplay>
        <h2>{questions}</h2>
        </BoxQuestionDisplay>
        </QuestionDisplayContainer>
    </div>
  );
};

export default QuestionDisplay