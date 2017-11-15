import '../node_modules/font-awesome/css/font-awesome.css';

import React, { Component } from 'react';
import './Main.css';

import { Generation } from './Components/scenes/Generation/Generation';
import { Toolbar } from './Components/ui/Toolbar/Toolbar';
import { World } from './Components/scenes/World/World';
import { WorldInitializer } from './Models/WorldInitializer'; 

export class Main extends Component {
   constructor(props) {
      super(props);

      this.rows = 60;
      this.cols = 90;

      this.state = {
         world: WorldInitializer({rows: this.rows, cols: this.cols}),
         generation: 0,
         speed: 50
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
            <h1 style={{marginBottom: 35}}>World 'Alpha'</h1>
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
                   onUpdateGeneration={this.updateGeneration}
                />
            </div>
            <Generation
               generationCount={this.state.generation}
            />
         </div>
      )
   }
}
