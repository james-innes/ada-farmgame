import {
	configureStore,
	getDefaultMiddleware,
} from 'redux-starter-kit';
import {routerMiddleware} from 'connected-react-router';
import logger from 'redux-logger';
import {reduxBatch} from '@manaflair/redux-batch';
import {throttle} from 'lodash';
import preloadedState from './preloadedState';
import {loadState, saveState} from './localStorage';
import createRootReducer from './rootReducer';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const persistedState = loadState();

const store = configureStore({
	reducer: createRootReducer(history),
	middleware: [
		...getDefaultMiddleware(),
		logger,
		routerMiddleware(history),
	],
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState: persistedState || preloadedState,
	enhancers: [reduxBatch],
});

store.subscribe(
	throttle(() => {
		saveState({
			farms: store.getState().farm,
		});
	}, 1000),
);

export default store;
