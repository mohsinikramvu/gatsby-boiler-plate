import {takeLatest, all} from 'redux-saga/effects';
import {DMTypes} from '../state/AppRedux';
import { login } from './loginSaga';

export default function* root() {
	yield all([
		takeLatest(DMTypes.LOGIN, login),
	]);
}

