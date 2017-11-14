import React from 'react';

export const Anchor = ({link, anchorClass, name}) => <a href={link} className={anchorClass}>{name}</a>;