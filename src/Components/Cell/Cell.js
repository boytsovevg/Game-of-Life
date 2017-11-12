import React, { Component } from 'react';
import './Cell.css';


export class Cell extends Component {

   onSelectCell() {
      this.props.selectCell(this.props.row, this.props.coll);
   }

   render() {
      return (
         <div className={this.props.cellClass}
            id={this.props.id}
            onClick={this.onSelectCell.bind(this)}>
         </div>
      )
   }
}