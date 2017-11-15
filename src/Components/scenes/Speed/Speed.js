import React from 'react';

export const Speed = ({speedValue, style}) => {
   const speedRatio = {
      [5]: 'min speed',
      [500]: 'max speed'
   };

   const speedName = speedRatio[speedValue] || 'speed';

   return (
      <h3 style={style}>{speedName}: {speedValue}</h3>
   )
}
