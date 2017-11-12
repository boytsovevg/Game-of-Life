import React, { Component } from 'react';
import './World.css';

import { Cell } from '../Cell/Cell';

export class World extends Component {
   render () {
      const width = this.props.cols * 16;
      let cellsArray = [],
          cellClass = '';

      for (let r = 0; r < this.props.rows; r++) {
         for (let c = 0; c < this.props.cols; c++) {
            let cellId = `${r}_${c}`;

            cellClass = this.props.worldCells[r][c] ? 'cell on' : 'cell off';

            cellsArray.push(
               <Cell
                  cellClass={cellClass}
                  key={cellId}
                  id={cellId}
                  row={r}
                  coll={c}
                  onSelectCell={this.props.selectCell}
               />
            )
         }
      }

      return (
         <div className="world" style={{width}}>
            {cellsArray}
         </div>
      )
   }
}