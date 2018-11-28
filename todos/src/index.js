import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './components/App';
import todoReducer from './reducers/reducer.js'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(todoReducer);

const Index = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <Route render={(props) => 
                <App pathname={props.location.pathname} />
            }></Route>
        </Provider>
    </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Index />, document.getElementById('root'));