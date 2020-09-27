import React from 'react';
import {Fragment} from 'react';

import './RainbowFrameHOC.css';

import DoubleButton from './DoubleButton';
import {withRainbowFrame} from './withRainbowFrame';

class RainbowFrameHOC  extends React.Component {  

  render() {
     let colors = ['#FF0000','#FFA500', '#FFFF00','#008000', '#00BFFF', '#0000FF', '#800080']; 
     let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
    return (
     <Fragment>
       <DoubleButton caption1="вдали" caption2="переулочной" cbPressed={ num => alert(num) } > над пылью </DoubleButton>
       <FramedDoubleButton caption1="над" caption2="дач" cbPressed={ num => alert(num) }> скукой загородных </FramedDoubleButton>
     </Fragment>

    );   
    
  }

}


export default RainbowFrameHOC;