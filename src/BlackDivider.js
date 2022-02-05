import styled from 'styled-components';
import './App.css';

function BlackDivider() {

  const PhotoWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;  
  `

  const WelcomeSection = styled.div`
    position: absolute;   
    background-color: black;
    color: white;
  `

  return (
    <PhotoWrapper>
      <WelcomeSection>
        <h1>Kordecki Koffee</h1>
        <h4>
            “Lorem ipsum dolor sit amet. Et quia numquam eos vero modi ut ipsum possimus 
            ea atque temporibus qui autem atque est debitis odio aut minus”
        </h4>
      </WelcomeSection>
    </PhotoWrapper>
  );
}

export default BlackDivider;
