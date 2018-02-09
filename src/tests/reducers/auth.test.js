import authReducer from '../../reducers/auth';

test('should login', () => {
	const action = {
		type: 'LOGIN',
		uid: 'asd123'
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should logout', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer({uid: 'test'}, action);
	expect(state).toEqual({});
});