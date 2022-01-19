import styled from 'styled-components';
import coffee_beans from './assets/backgrounds/coffee_beans.jpg';
import './App.css';

function CoffeeBeanDivider() {

  const PhotoWrapper = styled.div`
    position: relative;
  `

  const WelcomePhoto = styled.img`
    width: 100%;
  `

  const TextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
  `



  return (
    <PhotoWrapper>
      <WelcomePhoto src={coffee_beans} alt="coffee background" />
      <TextWrapper>
        <h2>are these</h2>
        <h2>in order</h2>
      </TextWrapper>
    </PhotoWrapper>
  );
}

export default CoffeeBeanDivider;
