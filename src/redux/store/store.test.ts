import { configureStore } from 'redux-starter-kit';
import preloadedState from './preloadedState';
import { createFarm, farmReducer } from '../slices/farmSlice';
import { farm } from './preloadedState'

it('Should handle creating farms', function() {
	const store = createStore(rootReducer, initialState);

  const action = createFarm(farm);
  store.dispatch(action);

  const createdFarm = store.getState().farms[0];
  expect(createdFarm).toEqual(farm);
});
