import ReactDOM from 'react-dom';
import { createElement as h } from 'react'; /** @jsx h */
import { Provider } from 'react-redux';
import { domready } from 'ubc-farm-utils';
import store from './redux/index.js';

import HarvestLog from './harvest/index.js';

domready.then(() => {
	//console.log(store.getState());
	ReactDOM.render(
		<Provider store={store}>
			<HarvestLog />
		</Provider>
	, document.getElementById('app-mount'));
});
