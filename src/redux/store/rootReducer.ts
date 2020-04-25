import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {farmSlice} from '../slices/farmSlice';
import {userSlice} from '../slices/userSlice';

const createRootReducer = (history: any) =>
	combineReducers({
		router: connectRouter(history),
		user: userSlice.reducer,
		farm: farmSlice.reducer,
	});

export default createRootReducer;
