import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollecionsLoaded } from "../../redux/shop/shop.selectors";
import WhithSpinner from "../../components/spinner/spinner.component";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollecionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WhithSpinner
)(Collection);

export default CollectionContainer;
