import React, { Component } from 'react';

import { Button } from '../Button/Button';

export class Toolbar extends Component {
    render() {
        const { height, width } = this.props;
        const style = {
            height,
            width
        };

        return (
            <div className={`flexed flex-aligned flex-spaced ${this.props.directionClass}`} style={style}>
                <Button name={'Play'}/>
                <Button name={'Random'}/>
            </div>
        )
    }
}
