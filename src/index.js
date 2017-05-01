import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() { return <div>Hello!</div>}
}

class Goodbye extends React.Component {
    render() { return <div>Goodbye!</div>}
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Route path="/hello" component={Hello} />
            <Route path="/goodbye" component={Goodbye} />
        </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);
