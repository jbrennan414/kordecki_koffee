import styled from 'styled-components';
import coffee_splash from './assets/coffee_splash.jpg';
import coffee_bag from './assets/coffee_bag.jpg';

function TwoPhotos() {

    const WrappedBar = styled.div`
        display: flex;
        flex-wrap: wrap;
    `

    const PhotoSide = styled.img`
    object-fit: cover;
    width: 50%;
    `

  return (
    <WrappedBar>
        <PhotoSide src={coffee_splash} />
        <PhotoSide src={coffee_bag} />
    </WrappedBar>
  );
}

export default TwoPhotos;
