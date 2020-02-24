import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopArray = createSelector(
    [selectShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsFetchingSelector = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollecionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)