import React from 'react';
import styled from 'styled-components';

const MinuteNeedle = ({ minutesDeg }) => {
  return <Needle minutesDeg={minutesDeg} />;
};

export default MinuteNeedle;

const Needle = styled.div`
  border: solid 5px #27ae60;
  position: absolute;
  width: 30%;
  left: 50%;
  transform: ${({ minutesDeg }) => `rotate(${-90 + minutesDeg}deg)`};
  transform-origin: left center;
  border-radius: 25%;
  z-index: 3;
`;
