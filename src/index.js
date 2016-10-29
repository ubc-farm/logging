import ReactDOM from 'react-dom';
import { createElement as h } from 'react'; /** @jsx h */
import { Provider } from 'react-redux';
import { domready } from 'ubc-farm-utils';
import store from './redux/index.js';

import HarvestLogForm from './harvest/harvestlogform';

domready.then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<HarvestLogForm />
		</Provider>
	, document.getElementById('app-mount'));
});
