import React, { Component } from 'react';

import { Button } from '../Button/Button';
import { ButtonWithIcon } from '../ButtonWithIcon/ButtonWithIcon';

export class Toolbar extends Component {
    render() {
        return (
            <div className={`flexed flex-aligned ${this.props.directionClass}`} style={this.props.outStyles}>
                <Button name={'Generate world'} />
                <ButtonWithIcon name={'Play'} iconClass={'fa fa-play'} />
            </div>
        )
    }
}
