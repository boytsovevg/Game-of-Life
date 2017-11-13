import React from 'react';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export const ButtonWithIcon = ({name, iconClass}) => {
    return (
      <div>
        <Button name={name}/>
        <Icon iconClass={iconClass} />
      </div>
    )
}