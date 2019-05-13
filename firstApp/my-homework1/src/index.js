import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppHook from './AppHooks';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppHook />, document.getElementById('root'));
registerServiceWorker();
