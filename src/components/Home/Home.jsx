import React from 'react'
import './Home.css';
import Title from '../Title/Title'
import StartButton from '../Button/ StartButton';

const Home = () => {
  return (
    <div className='container'>
        <Title />
        <StartButton />
    </div>
  )
}

export default Home