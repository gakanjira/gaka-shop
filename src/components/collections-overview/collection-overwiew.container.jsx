import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetchingSelector } from "../../redux/shop/shop.selectors";
import WhithSpinner from "../spinner/spinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingSelector
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WhithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
