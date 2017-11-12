import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as chartAction from './actions/getChartDataAction';
import allReducers from './reducers/allReducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	allReducers,
	applyMiddleware(thunk)
);

store.dispatch(chartAction.getChartData());

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();