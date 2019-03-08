import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import config from './config';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/animate.css/animate.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize(config.gaKey);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
