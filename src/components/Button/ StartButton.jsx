import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const OrangeButton = styled(Link)`
  color: #fff;
  background-color: #eb6100;
  border-bottom: 10px solid #b84c00;
  text-decoration: none; 
  display: inline-block;
  padding: 30px 40px; 
  transition: all 0.3s ease; 

  &:hover {
    margin-top: 3px;
    background: #f56500;
    border-bottom: 2px solid #b84c00;
  }
`;

const  StartButton = () => {
  return (
    <div>
      <OrangeButton to="/game-select" className="btn btn--orange btn--cubic btn--shadow" >
        START
      </OrangeButton>
    </div>
  )
}

export default  StartButton