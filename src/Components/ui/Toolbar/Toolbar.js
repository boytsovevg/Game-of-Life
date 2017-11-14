import React, { Component } from 'react';

import { Button } from '../Button/Button';
import { WorldInitializer } from '../../../Models/WorldInitializer';

export class Toolbar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isPlaying: false,
         intervalId: 0
      };

      this.generateAction = this.generateAction.bind(this);
      this.playAction = this.playAction.bind(this);
      this.stopAction = this.stopAction.bind(this);
      this.clearAction = this.clearAction.bind(this);

   }

   _getRandom() {
      return Math.floor(Math.random() * 7);
   }

   //actions

   generateAction() {
      const {rows, cols} = this.props;
      const world = WorldInitializer({rows, cols});

      for (let r = 0; r < rows; r++) {
         for (let c = 0; c < cols; c++) {
          if (this._getRandom() === 1) world[r][c] = true;
         }
      }

      this.props.onUpdateWorld(world);
      this.props.onUpdateGeneration(0);
   }

   getWorldCopy() {
      return JSON.stringify(this.props.world);
   }

   play() {
      let initialWorld = this.props.world;
      let world = JSON.parse(this.getWorldCopy());

      const { rows, cols } = this.props;
      let { generationCount } = this.props;

      for (let i = 0; i < rows; i++) {
         for (let j = 0; j < cols; j++) {
            let neigboursCount = 0;

            //game conditions
            if (i > 0) if (initialWorld[i - 1][j]) neigboursCount++;
            if (i > 0 && j > 0) if (initialWorld[i - 1][j - 1]) neigboursCount++;
            if (i > 0 && j < cols - 1) if (initialWorld[i - 1][j + 1]) neigboursCount++;
            if (j < cols - 1) if (initialWorld[i][j + 1]) neigboursCount++;
            if (j > 0) if (initialWorld[i][j - 1]) neigboursCount++;
            if (i < rows - 1) if (initialWorld[i + 1][j]) neigboursCount++;
            if (i < rows - 1 && j > 0) if (initialWorld[i + 1][j - 1]) neigboursCount++;
            if (i < rows - 1 && j < cols - 1) if (initialWorld[i + 1][j + 1]) neigboursCount++;
            if (initialWorld[i][j] && (neigboursCount < 2 || neigboursCount > 3)) world[i][j] = false;
            if (!initialWorld[i][j] && neigboursCount === 3) world[i][j] = true;
         }
      }

      generationCount++;

      this.props.onUpdateGeneration(generationCount);
      this.props.onUpdateWorld(world);
   }

   playAction() {
      const { speed } = this.props;

      let intervalId = setInterval(this.play.bind(this), speed);
      this.setState({isPlaying: true, intervalId});
   }

   stopAction() {
      this.setState({isPlaying: false});
      clearInterval(this.state.intervalId);
   }

   clearAction() {
      const {rows, cols} = this.props;
      const world = WorldInitializer({rows, cols});

      clearInterval(this.state.intervalId);
      this.setState({isPlaying: false});
      this.props.onUpdateGeneration(0);
      this.props.onUpdateWorld(world);
   }

   render() {
      return (
         <div style={{marginRight: 30}} className={`flexed flex-aligned ${this.props.directionClass}`}>
               <Button name={'Generate world'} onClickAction={this.generateAction} outStyles={{marginTop: 10, marginBottom: 20}}/>
               <Button name={this.state.isPlaying ? 'Stop' : 'Play'} onClickAction={this.state.isPlaying ? this.stopAction : this.playAction}/>
               <Button name={'Clear'} onClickAction={this.clearAction}/>
         </div>
      )
   }
}
