import styled from 'styled-components';
import coffee_beans from './assets/backgrounds/coffee_beans.jpg';
import './App.css';

function CoffeeBeanDivider() {

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
      <WelcomeText>Specialty Coffee Roaster In Denver!</WelcomeText>
      <WelcomePhoto src={coffee_beans} alt="espresso background" />
    </PhotoWrapper>
  );
}

export default CoffeeBeanDivider;
