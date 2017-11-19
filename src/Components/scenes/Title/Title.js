import React from 'react';
import propTypes from './TitlePropTypes';

export const Title = ({name}) => <h1 style={{marginBottom: 35}}>{name}</h1>;

Title.propTypes = propTypes;