import styled from 'styled-components';
import espresso_roasting from './assets/backgrounds/espresso_roasting.png';
import './App.css';

function ReliableConsistentTaste() {

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
      <WelcomeText>Reliable & Consistent Taste</WelcomeText>
      <WelcomePhoto src={espresso_roasting} alt="espresso background" />
    </PhotoWrapper>
  );
}

export default ReliableConsistentTaste;
