import React from 'react';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export const ButtonWithIcon = ({name, iconClass}) => {
    return (
      <Button name={name}>
            <Icon iconClass={iconClass} />
      </Button>
    )
}