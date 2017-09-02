// @flow

import React from 'react';
import { LinearGradient } from '@vx/gradient';

const Background = (props: { width: number, height: number }) => (
  <svg width={props.width} height={props.height}>
    <LinearGradient id="fill" vertical={false}>
      <stop stopColor="#a943e4" offset="0%" />
      <stop stopColor="#ffaf84" offset="100%" />
    </LinearGradient>
    <rect width={props.width} height={props.height} fill="url(#fill)" />
  </svg>
);

export default Background;
