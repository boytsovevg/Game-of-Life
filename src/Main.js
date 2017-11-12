import '../node_modules/font-awesome/css/font-awesome.css';

import React, { Component } from 'react';
import './Main.css';

import { Toolbar } from './Components/Toolbar/Toolbar';
import { World } from './Components/World/World';

export class Main extends Component {
   constructor(props) {
      super(props);
      this.speed = 100;

      this.state = {
         generations: 0
      };
   }

   render() {
      return (
         <div className="main flexed flex-aligned flex-columned flex-rounded">
            <h1>World 'Alpha'</h1>
            <Toolbar />
            <World />
            <h2>Generations: {this.state.generations}</h2>
         </div>
      )
   }
}