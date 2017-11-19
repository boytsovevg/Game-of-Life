import React, { Component } from 'react';
import './World.css';

import { Cell } from '../Cell/Cell';

export class World extends Component {
   constructor(props) {
      super(props);
      this.rows = this.props.rows;
      this.cols = this.props.cols;

      this.selectCell = this.selectCell.bind(this);
   }

   selectCell(row, col) {
      const world = [...this.props.world];
      world[row][col] = !world[row][col];
      this.props.onUpdateWorld(world);
      this.props.onUpdateGeneration(0);
   }

   render() {
      const width = this.cols * 11;
      let cellsArray = [],
          cellClass  = '';

      for (let r = 0; r < this.rows; r++) {
         for (let c = 0; c < this.cols; c++) {
            let cellId = `${r}_${c}`;

            cellClass = this.props.world[r][c] ? 'cell on' : 'cell off';

            cellsArray.push(
               <Cell
                  cellClass={cellClass}
                  key={cellId}
                  id={cellId}
                  row={r}
                  col={c}
                  onSelectCell={this.selectCell}
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
