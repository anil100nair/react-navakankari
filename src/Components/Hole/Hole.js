import React from 'react';
import { Fab } from '@material-ui/core';

const Hole = (props) => {
  return (
    <div
      className={`hole hole-${props.id}`}
      onClick={() => props.onClicked(props.id)}
    >
      <Fab color={props.holeState ? (props.holeState === 'Player1' ? 'primary' : 'secondary') : 'default'} children=""></Fab>
    </div>
  );
}
 
export default Hole;
