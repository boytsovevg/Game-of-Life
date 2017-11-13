import React, { Component } from 'react';

import { Button } from '../Button/Button';

export class Toolbar extends Component {
    render() {
        return (
            <div className={`flexed flex-aligned ${this.props.directionClass}`} style={this.props.outStyles}>
                <Button name={'Generate world'} />
                <Button name={'Play'}/>
            </div>
        )
    }
}
