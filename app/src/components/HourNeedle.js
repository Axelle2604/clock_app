import React from 'react';
import styled from 'styled-components';

const HourNeedle = ({ hoursDeg }) => {
  return <Needle hoursDeg={hoursDeg} />;
};

export default HourNeedle;

const Needle = styled.div`
  border: solid 5px #16a085;
  position: absolute;
  width: 20%;
  left: 50%;
  transform: ${({ hoursDeg }) => `rotate(${-90 + hoursDeg}deg)`};
  transform-origin: left center;
  border-radius: 25%;
  z-index: 4;
`;
