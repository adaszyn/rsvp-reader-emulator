import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainScreen from './components/MainScreen/MainScreen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainScreen />, document.getElementById('root'));
registerServiceWorker();
