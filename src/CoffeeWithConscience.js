import styled from 'styled-components';
import coffee_mug from './assets/coffee_cup.jpg'

function CoffeeWithConscience() {

  const WrappedBar = styled.div`
    display: flex;
    flex-wrap: wrap;
  `

  const PhotoSide = styled.img`
    width: 50%;
    @media (max-width: 800px) {
      width: 100%;
    }
  `

  const ConscienceText = styled.div`
    width: 50%;
    @media (max-width: 800px) {
      width: 100%;
      padding: 0vw 9vw;
    }
  `

  const ConscienceParagraph = styled.p`
    text-align: justify;
    text-justify: inter-word;
  `

  return (
    <WrappedBar>
      <PhotoSide src={coffee_mug} />
      <ConscienceText>
        <>
          <h1>Coffee With A Conscience</h1>
          <ConscienceParagraph>
            From seed to cup, BioWilly's Beans are grown, processed, and 
            roasted to meet a premium coffee standard. Our goal is to create 
            the finest possible roasts with world-class beans from all the major 
            coffee-producing regions. All our beans are Fair Trade and many 
            are Farm Gate certified, meaning that farmers are paid directly, 
            "at the farm's gate," eliminating the middlemen.  As BioWilly says, 
            “When the coffee is produced and roasted sustainably, and the growers 
            are compensated fairly, the coffee just tastes better.”
          </ConscienceParagraph>
        </>
      </ConscienceText>
    </WrappedBar>
  );
}

export default CoffeeWithConscience;
