import styled from 'styled-components';
import coffee_logo from './assets/coffee_logo.png';
import shopping_bag from './assets/shopping_bag.png'; 
import hamburger_menu from './assets/hamburger_menu.png';

function LogoBar() {

    const Bar = styled.div`
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 5px;
    `

    const SmallIcons = styled.img`
      height: 25px;
      width: 25px;
    `
    
    const LargeIcon = styled.img`
    height: 75px;
    width: 75px;
    @media (max-width: 500px) {
      height: 18vw;
      width: 18vw;
    }
    `

  return (
    <Bar>
      <SmallIcons src={hamburger_menu} alt="hamburger menu" />
      <LargeIcon src={coffee_logo} alt="logo" />
      <SmallIcons src={shopping_bag} alt="shopping bag" />
    </Bar>
  );
}

export default LogoBar;
