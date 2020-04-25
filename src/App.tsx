import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import store, {history} from './redux/store/configureStore';
import routes from './routes/index';
import Player from './components/Player';
import Farm from './components/Farm';

import Header from './components/Header';
import Menu from './components/Menu/Menu';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div className="App">
					<Header />
					<Menu />
					<Farm />
					<Player />
				</div>
				{routes}
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
