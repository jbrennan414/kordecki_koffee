import styled from 'styled-components';
import coffee_beans from './assets/backgrounds/coffee_beans.jpg';
import './App.css';

function CoffeeBeanDivider() {

  const PhotoWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
  `

  const WelcomePhoto = styled.img`
    width: 100%;
  `

  const WelcomeText = styled.h1`
    color: white;
    position: absolute;
  `

  return (
    <PhotoWrapper>
      <>
        <WelcomeText>
          Specialty Coffee Roaster In Denver
        </WelcomeText>
        <WelcomeText>
          BioWilly's Beans provides select Seattle venues 
          with consistently delicious full-bodied coffee. 
          Our assortment of specialty coffees are rigorously 
          cupped to maintain consistently high standards, 
          assuring our customers of an excellent roast in
          each and every cup and each and every 12 oz bag.
        </WelcomeText>
      </>
      <WelcomePhoto src={coffee_beans} alt="coffee background" />
    </PhotoWrapper>
  );
}

export default CoffeeBeanDivider;
