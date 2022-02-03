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

  const WelcomeSection = styled.div`
    position: absolute;   
  `

  return (
    <PhotoWrapper>
      <WelcomeSection>
        <h1>Specialty Coffee Roaster In Denver</h1>
        <h4>Lorem ipsum dolor sit amet. Et quia numquam eos vero
          modi ut ipsum possimus ea atque temporibus qui autem 
          atque est debitis odio aut minus explicabo! Ea iste
          deleniti aut doloremque esse est iste perspiciatis
          est voluptas quia hic omnis ducimus. Sit facilis 
          voluptates est velit voluptatem ad consequatur aut 
          aspernatur libero ut incidunt quos. Et quas aliquam 
          qui distinctio. 
        </h4>
      </WelcomeSection>
      <WelcomePhoto src={coffee_beans} alt="espresso background" />
    </PhotoWrapper>
  );
}

export default CoffeeBeanDivider;
