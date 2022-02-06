import styled from 'styled-components';
import './App.css';

function GlobalLocalCommunity(props) {

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
      <WelcomeText>{props.text}</WelcomeText>
      <WelcomePhoto src={props.image} alt="espresso background" />
    </PhotoWrapper>
  );
}

export default GlobalLocalCommunity;
