import React, { Component } from 'react';
import './Cell.css';


export class Cell extends Component {

   render() {
      return (
         <div className={this.props.cellClass}
            id={this.props.id}
            onClick={() => this.props.onSelectCell(this.props.row, this.props.coll)}>
         </div>
      )
   }
}
