import React, { Component } from 'react';

import { Button } from '../Button/Button';

export class Toolbar extends Component {
   constructor(props) {
      super(props);

      this.generateAction = this.generateAction.bind(this);
      this.playAction = this.playAction.bind(this);
   }

   _getRandom() {
      return Math.floor(Math.random() * 5);
   }

   //actions

   generateAction() {
      const {rows, cols} = this.props;
      const world = [...this.props.world];

      for (let r = 0; r < rows; r++) {
         for (let c = 0; c < cols; c++) {
          if (this._getRandom() === 1) world[r][c] = true;
         }
      }

      this.props.onUpdateWorld(world);
      this.props.onUpdateGeneration(0);
   }

   play() {
      // let initialWorld = this.props.world;
      // let world = this.props.world.map();

      // for (let i = 0; i < this.rows; i++) {
      //    for (let j = 0; j < this.cols; j++) {
      //       let neigboursCount = 0;
      //
      //       //game conditions
      //       if (i > 0) if (initialWorld[i - 1][j]) neigboursCount++;
      //       if (i > 0 && j > 0) if (initialWorld[i - 1][j - 1]) neigboursCount++;
      //       if (i > 0 && j < this.cols - 1) if (initialWorld[i - 1][j + 1]) neigboursCount++;
      //       if (j < this.cols - 1) if (initialWorld[i][j + 1]) neigboursCount++;
      //       if (j > 0) if (initialWorld[i][j - 1]) neigboursCount++;
      //       if (i < this.rows - 1) if (initialWorld[i + 1][j]) neigboursCount++;
      //       if (i < this.rows - 1 && j > 0) if (initialWorld[i + 1][j - 1]) neigboursCount++;
      //       if (i < this.rows - 1 && this.cols - 1) if (initialWorld[i + 1][j + 1]) neigboursCount++;
      //       if (initialWorld[i][j] && (neigboursCount < 2 || neigboursCount > 3)) world[i][j] = false;
      //       if (!initialWorld[i][j] && neigboursCount === 3) world[i][j] = true;
      //
      //
      //    }
      // }

      let { generationCount } = this.props;
      generationCount++;
      this.props.onUpdateGeneration(generationCount);
   }

   playAction() {
      const { speed } = this.props;

      clearInterval(this.intervalId);
      this.intervalId = setInterval(this.play.bind(this), speed);
   }

    render() {
        return (
            <div style={{marginRight: 30}} className={`flexed flex-aligned ${this.props.directionClass}`}>
                <Button name={'Generate world'} onClick={this.generateAction}/>
                <Button name={'Play'} onClick={this.playAction}/>
            </div>
        )
    }
}
