import '../node_modules/font-awesome/css/font-awesome.css';

import React, { Component } from 'react';
import './Main.css';

import { Generation } from './Components/scenes/Generation/Generation';
import { Toolbar } from './Components/ui/Toolbar/Toolbar';
import { World } from './Components/scenes/World/World';

export class Main extends Component {
   constructor(props) {
      super(props);

      this.rows = 30;
      this.cols = 30;

      this.state = {
         world: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
         generation: 0,
         speed: 100
      };

      this.updateWorld = this.updateWorld.bind(this);
      this.updateGeneration = this.updateGeneration.bind(this);
   }

   updateWorld(world) {
      this.setState({world});
   }

   updateGeneration(generation) {
      this.setState({generation});
   }

   render() {
      return (
         <div className="main flexed flex-aligned flex-columned flex-rounded">
            <h1>World 'Alpha'</h1>
            <div className="flexed flex-rowed">
                <Toolbar
                   directionClass={'flex-columned'}
                   rows={this.rows}
                   cols={this.cols}
                   world={this.state.world}
                   speed={this.state.speed}
                   generationCount={this.state.generation}
                   onUpdateWorld={this.updateWorld}
                   onUpdateGeneration={this.updateGeneration}
                />
                <World
                   world={this.state.world}
                   rows={this.rows}
                   cols={this.cols}
                   onUpdateWorld={this.updateWorld}
                />
            </div>
            <Generation
               generationCount={this.state.generation}
            />
         </div>
      )
   }
}
