import React from 'react';

export const Icon = ({iconClass, size = 20}) => {
   const style = {
      fontSize: size,
      color: '#fff'
   };

   return (
      <i className={iconClass} style={style}></i>
   )
}