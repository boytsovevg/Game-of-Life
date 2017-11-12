import React, { Component } from 'react';

import { World } from './Components/World/World';

export class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         generation: 0
      };
   }

   render() {
      return (
         <div>
            <h1>The Game of Life</h1>
            <World />
            <h2>Generations: {this.state.generation}</h2>
         </div>
      )
   }
}