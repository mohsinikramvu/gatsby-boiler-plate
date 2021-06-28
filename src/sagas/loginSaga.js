import { put, call } from 'redux-saga/effects';
import Creators from '../state/AppRedux';
import { loginService } from '../services/loginService';

// login perform
export function* login(data) {
    yield put(Creators.fetching());
    let result = null;
    try {
        result = yield call(loginService.login, data);
        if (result && result.data.response) {
            const resultantResponse = {
                response: result.data.response
            };
            yield put(Creators.userLoginSuccessfully(resultantResponse));
        }
    } catch (e) {
        console.log(e);
        yield put(Creators.loginFailed(e.data.response));
        yield put(Creators.stopFetching());
    }
}