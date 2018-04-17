import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppServiceWorker from './registerServiceWorker';

const appSW = new AppServiceWorker();
ReactDOM.render(<App />, document.getElementById('root'));
appSW.register();
