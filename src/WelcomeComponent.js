import styled from 'styled-components';
import espresso_background from './assets/backgrounds/espresso_steps.jpg';
import './App.css';

function WelcomeComponent() {

  const PhotoWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;  
  `

  const WelcomePhoto = styled.img`
    width: 100%;
  `

  const WelcomeText = styled.h1`
    color: white;
    position: absolute;
      font-size: 8vw;
  `

  return (
    <PhotoWrapper>
      <WelcomeText>Welcome!</WelcomeText>
      <WelcomePhoto src={espresso_background} alt="espresso background" />
    </PhotoWrapper>
  );
}

export default WelcomeComponent;
