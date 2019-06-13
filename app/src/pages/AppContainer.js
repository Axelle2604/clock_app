import React, { Component } from 'react';
import styled from 'styled-components';
import SecondNeedle from '../components/SecondNeedle';
import MinuteNeedle from '../components/MinuteNeedle';
import HourNeedle from '../components/HourNeedle';
import ClockDial from '../components/ClockDial';

export default class AppContainer extends Component {
  state = {
    date: new Date(),
    secondsDeg: 0,
    minutesDeg: 0,
    hoursDeg: 0,
  };

  componentDidMount = () => {
    this.startTimer();
  };

  startTimer = () => {
    this.myInterval = setInterval(() => {
      const date = new Date();
      this.setState({
        secondsDeg: date.getSeconds() * (360 / 60),
        minutesDeg: date.getMinutes() * (360 / 60) + this.state.secondsDeg / 60,
        hoursDeg: date.getHours() * (360 / 12) + this.state.minutesDeg / 12,
      });
    }, 500);
  };

  render() {
    const { secondsDeg, minutesDeg, hoursDeg } = this.state;
    return (
      <Container>
        <h1>Clock App</h1>
        <Clock>
          <ClockDial />
          <SecondNeedle secondsDeg={secondsDeg} />
          <MinuteNeedle minutesDeg={minutesDeg} />
          <HourNeedle hoursDeg={hoursDeg} />
        </Clock>
      </Container>
    );
  }
}

const Clock = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 500px;
  width: 500px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  & h1 {
    font-family: 'Encode Sans Expanded', sans-serif;
  }
`;
