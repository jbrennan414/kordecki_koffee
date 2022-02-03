import styled from 'styled-components';
import espresso_background from './assets/backgrounds/espresso_drip.png';
import './App.css';

function GlobalLocalCommunity() {

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
      <WelcomeText>Global & Local Community</WelcomeText>
      <WelcomePhoto src={espresso_background} alt="espresso background" />
    </PhotoWrapper>
  );
}

export default GlobalLocalCommunity;
