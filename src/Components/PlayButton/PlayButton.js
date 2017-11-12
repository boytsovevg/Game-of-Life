import React, { Component } from 'react';

import { Button } from '../Button/Button';

export class PlayButton extends Component {
   constructor(props) {
      super(props);

      //rows
      //cols
      //world
      //generation
      //onWorldChanged
      //onGenerationChanged
   }

   play() {
      let initialWorld = this.props.world;
      let world = this.props.world.map();

      for (let i = 0; i < this.rows; i++) {
         for (let j = 0; j < this.cols; j++) {
            let neigboursCount = 0;

            //game conditions
            if (i > 0) if (initialWorld[i - 1][j]) neigboursCount++;
            if (i > 0 && j > 0) if (initialWorld[i - 1][j - 1]) neigboursCount++;
            if (i > 0 && j < this.cols - 1) if (initialWorld[i - 1][j + 1]) neigboursCount++;
            if (j < this.cols - 1) if (initialWorld[i][j + 1]) neigboursCount++;
            if (j > 0) if (initialWorld[i][j - 1]) neigboursCount++;
            if (i < this.rows - 1) if (initialWorld[i + 1][j]) neigboursCount++;
            if (i < this.rows - 1 && j > 0) if (initialWorld[i + 1][j - 1]) neigboursCount++;
            if (i < this.rows - 1 && this.cols - 1) if (initialWorld[i + 1][j + 1]) neigboursCount++;
            if (initialWorld[i][j] && (neigboursCount < 2 || neigboursCount > 3)) world[i][j] = false;
            if (!initialWorld[i][j] && neigboursCount === 3) world[i][j] = true;


         }
      }
      
   }

   render() {
      return (
         <Button onClick={this.play.bind(this)} name={'Play'}/>
      )
   }
}