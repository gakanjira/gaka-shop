import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapschotToMap } from '../../firebase/firebase.utils';
import { ShopActionTypes } from './shop.types';

import { updateCollections, failUpdateCollections } from './shop.actions'

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapschot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapschotToMap, snapschot)
        yield put(updateCollections(collectionsMap))
    } catch (error) {
        yield put(failUpdateCollections(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}