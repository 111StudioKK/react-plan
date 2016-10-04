import React from 'react';
import ReactDOM from 'react-dom';
import Responsive from '../src/Responsive.jsx';
import Viewport from '../src/Viewport.jsx';
import App from './App.jsx';

new Responsive();
ReactDOM.render(<Viewport><App /></Viewport>, document.getElementById('root'));

