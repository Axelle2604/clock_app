import React from 'react';
import styled from 'styled-components';

const SecondNeedle = ({ secondsDeg }) => {
  return <Needle secondsDeg={secondsDeg} />;
};

export default SecondNeedle;

const Needle = styled.div`
  border: solid 5px #2ecc71;
  position: absolute;
  width: 40%;
  left: 50%;
  transform: ${({ secondsDeg }) => `rotate(${-90 + secondsDeg}deg)`};
  transform-origin: left center;
  border-radius: 25%;
  z-index: 2;
`;
