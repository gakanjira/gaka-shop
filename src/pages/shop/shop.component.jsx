import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collection-overwiew.container";
import CollectionPageContainer from "../collection/collection.container";

import { startFetchingCollections } from "../../redux/shop/shop.actions";

const ShopPage = ({ match, startFetchingCollections }) => {
  useEffect(() => {
    startFetchingCollections();
  }, [startFetchingCollections]);
  // unsubscribeFromSnapshot = null;

  // componentDidMount() {
  //   const { startFetchingCollections } = this.props;
  //   startFetchingCollections();
  // }

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startFetchingCollections: () => dispatch(startFetchingCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);
