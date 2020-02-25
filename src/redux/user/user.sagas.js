import { takeLatest, put, call, all } from 'redux-saga/effects';
import { auth, createUserProfileDocument, googleProvider, getCurrentuser } from '../../firebase/firebase.utils';
import UserActionTypes from './user.types';

import { signInSucess, signFailure, signOutSucess, signUpSucess } from './user.actions'

export function* SignUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSucess(user))
        yield login(user)
    } catch (error) {
        yield put(signFailure(error.message))
    }
}

function* login(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signFailure(error.message))
    }
}

export function* loginUserAsync({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield login(user)
    } catch (error) {
        yield put(signFailure(error.message))
    }
}

export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield login(user)
    } catch (error) {
        yield put(signFailure(error.message))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentuser()
        if (!userAuth) return;
        yield login(userAuth);
    } catch (error) {
        yield put(signFailure(error.message))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSucess())
    } catch (error) {
        yield put(signFailure(error.message))
    }
}

export function* loginUserStart() {
    yield takeLatest(
        UserActionTypes.FETCH_USER_START,
        loginUserAsync
    )
}

export function* onGoogleSignIn() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SINGIN_START,
        googleSignIn
    )
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* onSignOut() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOut
    )
}

export function* onSignUp() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        SignUp
    )
}

export function* userSagas() {
    yield all([
        call(onGoogleSignIn),
        call(loginUserStart),
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUp)
    ])
}