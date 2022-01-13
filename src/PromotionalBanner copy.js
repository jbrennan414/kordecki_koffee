import styled from 'styled-components';
import { truncate } from './utils/style-utils';

import './App.css';

function PromotionalBanner() {

    const Banner = styled.div`
        ${ truncate('250px') }
        color: white;
        background-color: #95C36A;
        width: 100%;
        height: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
    `

  return (
    <Banner>FREE Domestic Shipping For 2+ Bags! Click here to view our roasts!</Banner>
  );
}

export default PromotionalBanner;
