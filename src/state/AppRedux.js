import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
	login: ['data'],
	userLoginSuccessfully: ['data'],
	loginFailed: ['data'],
	logout: null,
	fetching: null,
	stopFetching: null,
	removeErrors: null
});

export const DMTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
	loginMessage: null,
	user: null,
	error: null,
	loading: false
};

/* ------------- Reducers ------------- */

export const fetching = (state) => {
	return {
		...state,
		loading: true,
		error: null
	};
};

export const stopFetching = (state) => {
	return {
		...state,
		loading: false
	};
};

export const userLoginSuccessfully = (state, { data }) => {
	return {
		...state,
		user: data.response,
		loading: false,
		error: null
	};
};

export const loginFailed = (state, error) => {
	return {
		...state,
		error: error.data,
		loading: false
	};
};

export const logout = (state) => {
	return {
		...state,
		user: null,
		error: null,
		loading: false
	};
};

export const removeErrors = (state) => {
	return {
		...state,
		error: null
	};
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.FETCHING]: fetching,
	[Types.STOP_FETCHING]: stopFetching,
	[Types.USER_LOGIN_SUCCESSFULLY]: userLoginSuccessfully,
	[Types.LOGIN_FAILED]: loginFailed,
	[Types.LOGOUT]: logout,
	[Types.REMOVE_ERRORS]: removeErrors,
});