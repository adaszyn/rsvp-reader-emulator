import React from 'react';
import ReactDOM from 'react-dom';
import './Lato-Light.ttf'
import './index.css';
import MainScreen from './components/MainScreen/MainScreen';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiWrapper = () => <MuiThemeProvider>
  <MainScreen/>
</MuiThemeProvider>

ReactDOM.render(muiWrapper(), document.getElementById('root'));
registerServiceWorker();
