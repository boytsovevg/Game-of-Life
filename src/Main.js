import React, { Component } from 'react';

import { World } from './Components/World/World';

export class Main extends Component {
   constructor(props) {
      super(props);
      this.speed = 100;
      this.rows = 30;
      this.cols = 30;

      this.state = {
         generation: 0,
         worldCells: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
      };
   }

   render() {
      return (
         <div>
            <h1>The Game of Life</h1>
            <World
               worldCells={this.state.worldCells}
               rows={this.rows}
               cols={this.cols}
               selectCell={this.selectCell}
            />
            <h2>Generations: {this.state.generation}</h2>
         </div>
      )
   }
}