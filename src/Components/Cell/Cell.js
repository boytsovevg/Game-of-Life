import React from 'react';
import './Cell.css';


export const Cell = ({cellClass, id, onSelectCell}) => {
   return (
      <div className={cellClass}
           id={id}
           onClick={onSelectCell}>
      </div>
   )
}