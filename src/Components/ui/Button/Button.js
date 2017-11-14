import React from 'react';
import './Button.css';

export const Button = ({name, onClickAction, outStyles={marginBottom: 20}}) => <button className="btn" style={outStyles} onClick={onClickAction}>{name}</button>;
