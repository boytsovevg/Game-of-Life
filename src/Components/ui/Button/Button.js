import React from 'react';
import './Button.css';

export const Button = ({name, onClick, outStyles={marginBottom: 20}}) => <button className="btn" style={outStyles} onClick={onClick}>{name}</button>;
