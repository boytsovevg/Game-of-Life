import React from 'react';
import propTypes from './CellPropTypes';
import './Cell.css';

export const Cell = ({cellClass, id, onSelectCell, row, col}) => {
   return (
      <div className={cellClass}
         id={id}
         onClick={() => onSelectCell(row, col)}>
      </div>
   )
};

Cell.propTypes = propTypes;

