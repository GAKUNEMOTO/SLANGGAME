
import styled from 'styled-components';

const GradientButton = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding:30px 50px;
  color:#000;
  border-radius: 0;
  margin-top:50px;
  background-image: linear-gradient(90deg, #2af598 0%, #009efd 100%);
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  -webkit-transform: skew(-15deg);
  transform: skew(-15deg);
  transition: all 0.3s ease;
  font-size:30px;

  &:hover {
    -webkit-transform: skew(0);
    transform: skew(0);
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    filter: brightness(0.5); /* 薄暗い状態にする */
  }
`;

const GameSelect = () => {
   


  return (
    <div id="game-select">
      
        <GradientButton href="/stage1"  >
          STAGE 1
        </GradientButton>
        <GradientButton href="/stage2"  >
          STAGE 2
        </GradientButton>
        <GradientButton href="/stage3"  >
          STAGE 3
        </GradientButton>
        <GradientButton href="/stage4"  >
          STAGE 4
        </GradientButton>
        <GradientButton href="/stage5"  >
          STAGE 5
        </GradientButton>
     
    </div>
  )
}

export default GameSelect