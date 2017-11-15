import '../node_modules/font-awesome/css/font-awesome.css';

import React, { Component } from 'react';
import './Main.css';

import { Generation } from './Components/scenes/Generation/Generation';
import { Title } from './Components/scenes/Title/Title';
import { Toolbar } from './Components/ui/Toolbar/Toolbar';
import { World } from './Components/scenes/World/World';
import { WorldInitializer } from './Models/WorldInitializer';

export class Main extends Component {
   constructor(props) {
      super(props);

      this.rows = 30;
      this.cols = 60;

      this.state = {
         world: WorldInitializer({rows: this.rows, cols: this.cols}),
         generation: 0,
         speed: 50
      };

      this.updateWorld = this.updateWorld.bind(this);
      this.updateGeneration = this.updateGeneration.bind(this);
      this.updateSpeed = this.updateSpeed.bind(this);
   }

   updateWorld(world) {
      this.setState({world});
   }

   updateGeneration(generation) {
      this.setState({generation});
   }

   updateSpeed(speed) {
      this.setState({speed});
   }

   render() {
      return (
         <div className="main flexed flex-aligned flex-columned flex-rounded">
            <Title name={'World "Qwerty"'} />
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
                   onUpdateSpeed={this.updateSpeed}
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
