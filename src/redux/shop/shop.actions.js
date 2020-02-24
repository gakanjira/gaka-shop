import { ShopActionTypes } from './shop.types';

import { firestore, convertCollectionsSnapschotToMap } from '../../firebase/firebase.utils';

export const startFetchingCollections = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
    payload: collectionsMap
})

export const failUpdateCollections = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(startFetchingCollections())

        collectionRef.get().then(snapschot => {
            const collectionsMap = convertCollectionsSnapschotToMap(snapschot);
            dispatch(updateCollections(collectionsMap))
        }).catch(err => dispatch(failUpdateCollections(err.message)));
    }
}


