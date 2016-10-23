import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import loading from './reducer-simple.js';

export default createStore(
	combineReducers({
		loading,
    form,
	}),
	undefined,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);
