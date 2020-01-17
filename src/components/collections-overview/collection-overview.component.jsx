import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';
import { selectShopArray } from '../../redux/shop/shop.selectors';

import './collection-overview.styless.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overciew">
         {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopArray
})

export default connect(mapStateToProps)(CollectionsOverview);