import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< Updated upstream
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

=======
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
            <BrowserRouter> 
                <App /> 
            </BrowserRouter>
    </Provider>, document.getElementById('root'));
>>>>>>> Stashed changes
