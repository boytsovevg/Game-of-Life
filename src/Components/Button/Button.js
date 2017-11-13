import React from 'react';
import './Button.css';

export const Button = ({name, outStyles={marginBottom: 20}}) => <button className="btn" style={outStyles}>{name}</button>;