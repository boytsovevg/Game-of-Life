import React, { Component } from 'react';
import './Toolbar.css';

import { Button } from '../Button/Button';

export class Toolbar extends Component {
   render() {
      return (
         <div className="toolbar flexed flex-aligned flex-spaced">
            <Button name={'Play'}/>
            <Button name={'Random'}/>
         </div>
      )
   }
}
