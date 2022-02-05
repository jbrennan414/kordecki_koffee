import styled from 'styled-components';

function LinkFooter() {

  const WrappedBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 40px;
  `

  const LinkButton = styled.h4`
    display: flex;
    justify-content: flex-start;
  `

  return (
    <WrappedBar>
        <LinkButton>HOME</LinkButton>
        <LinkButton>ABOUT US</LinkButton>
        <LinkButton>SHOP</LinkButton>
        <LinkButton>CONTACT</LinkButton>
        <LinkButton>TERMS OF SERVICE</LinkButton>
    </WrappedBar>
  );
}

export default LinkFooter;
