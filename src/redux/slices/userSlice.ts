import {
	createSlice,
	PayloadAction,
} from 'redux-starter-kit';
import User from '../../components/User/User.d';
import uuid from 'uuid';

const initialState = [
	{
		id: uuid(),
		firstName: '',
		lastName: '',
		email: 'string',
		username: '',
		city: '',
		state: '',
		country: '',
		postcode: '',
		emailAddress: '',
	},
];

interface IAddUser extends User {}

interface IUpdateUserFirstName {
	id: string;
	firstName: string;
	lastName: string;
	emailAddress: string;
}

interface IDeleteUser {
	id: string;
	firstName: string;
	lastName: string;
	emailAddress: string;
}

export const userSlice = createSlice({
	slice: 'user',
	initialState,
	reducers: {
		createUser(state, action: PayloadAction<IAddUser>) {
			state.push(action.payload);
		},
		updateUserFirstName(
			state,
			action: PayloadAction<IUpdateUserFirstName>,
		) {
			const {id, firstName} = action.payload;
			const user = state.find(user => user.id === id);
			user && (user.firstName = firstName);
		},
		deleteUser(
			state,
			action: PayloadAction<IDeleteUser>,
		) {
			return state.filter(
				user => user.id !== action.payload.id,
			);
		},
	},
});
