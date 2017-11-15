import React from 'react';

export const Anchor = ({link, anchorClass, name, onClick}) =>
   <a href={link}
      className={anchorClass}
      onClick={onClick}
      >
      {name}
   </a>;
