import React, { Component } from 'react';
import './World.css';

import { Cell } from '../Cell/Cell';

export class World extends Component {
   constructor(props) {
      super(props);
      this.rows = 30;
      this.cols = 30;

      this.state = {
         worldCells: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
      }
   }

   selectCell(row, col) {
      const worldCells = [...this.state.worldCells];
      worldCells[row][col] = !worldCells[row][col];
      this.setState({worldCells});
   }

   randomaze() {
      const worldCells = [...this.state.worldCells];
      for (let r = 0; r < this.rows; r++) {
         for (let c = 0; c < this.cols; c++) {
          if (this._getRandom() === 1) worldCells[r][c] = true;
         }
      }

      this.setState({worldCells});
   }

   _getRandom() {
      let r = Math.floor(Math.random() * 5);
      debugger
      return r;
   }

   componentDidMount() {
      debugger
      this.randomaze();
   }

   render () {
      const width = this.cols * 16;
      let cellsArray = [],
          cellClass = '';

      for (let r = 0; r < this.rows; r++) {
         for (let c = 0; c < this.cols; c++) {
            let cellId = `${r}_${c}`;

            cellClass = this.state.worldCells[r][c] ? 'cell on' : 'cell off';

            cellsArray.push(
               <Cell
                  cellClass={cellClass}
                  key={cellId}
                  id={cellId}
                  row={r}
                  coll={c}
                  selectCell={this.selectCell.bind(this)}
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