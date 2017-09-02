import React, { Component } from 'react';
import { withScreenSize } from '@vx/responsive';
import styled from 'styled-components';

import Background from './background';

const Main = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-family: arial;
`;

const Center = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-family: arial;
`;

const Chart = styled.div`
  width: 600px;
  height: 400px;
  background-color: #27273f;
  border-radius: 8px;
`;

class Bitcoin extends Component<Props, State> {
  state = { data: {} };
  render() {
    return (
      <Main>
        <Background width={this.props.screenWidth} height={this.props.screenHeight} />
        <Center>
          <Chart>Chart</Chart>
        </Center>
      </Main>
    );
  }
}

export default withScreenSize(Bitcoin);
