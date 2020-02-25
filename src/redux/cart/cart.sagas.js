import { takeLatest, call, put, all } from 'redux-saga/effects';

import { clearAllitemFromCart } from './cart.actions';
import UserActionTypes from '../user/user.types';


export function* clearCartOnSignOut() {
    yield put(clearAllitemFromCart())
}

export function* onSignOutSucess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCESS,
        clearCartOnSignOut
    )
}

export function* cartSagas() {
    yield all([
        call(onSignOutSucess)
    ])
}