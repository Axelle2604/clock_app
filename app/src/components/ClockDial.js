import React from 'react';
import styled from 'styled-components';

const ClockDial = () => {
  return (
    <Dial>
      <Center />
    </Dial>
  );
};

export default ClockDial;

const Dial = styled.div`
  width: 100%;
  height: 100%;
  border: solid 30px #16a085;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  width: 5%;
  height: 5%;
  background-color: #16a085;
  border-radius: 50%;
`;
