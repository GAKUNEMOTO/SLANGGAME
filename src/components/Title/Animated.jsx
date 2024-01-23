import React from 'react'
import styled, { keyframes } from 'styled-components';
import './Title.css'


const rotateAnimation = keyframes`
0% {
  transform: rotateX(0deg);
}
100% {
  transform: rotateY(360deg);
}
`;


const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const RotatingS = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Poppins:wght@500&family=Roboto+Condensed:ital,wght@1,500&family=Russo+One&display=swap');
font-family: 'Russo One', sans-serif;
  margin-right:10px;
  font-size: 140px;
  font-weight: bold;
  color: #5F4894; /* 例: 青色 */
  display: inline-block;
  animation: ${rotateAnimation} 3s linear infinite; /* アニメーションを適用 */
`;

const InlineContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BouncingLetter = styled.span`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Poppins:wght@500&family=Roboto+Condensed:ital,wght@1,500&family=Russo+One&display=swap');
  font-family: 'Russo One', sans-serif;
  font-size:120px;
  letter-spacing:10px;
  display: inline-block;
  animation: ${bounceAnimation} 3s infinite;
`;

const Animated = () => {

    const text = 'lang game';
    const rotateText ='S'

  const createBouncingLetters = () => {
    return text.split('').map((letter, index) => (
      <BouncingLetter key={index}>{letter}</BouncingLetter>
    ));
  };

  const createRotatingLetter = () => {
    return rotateText.split('').map((S,index) => (
        <RotatingS key={index}>{S}</RotatingS>
    ))
  }

return (
  <InlineContainer>
    <div>
    <h1>
    {createRotatingLetter()}
    {createBouncingLetters()}
    </h1>
    </div>
  </InlineContainer>
  
);
}

export default Animated