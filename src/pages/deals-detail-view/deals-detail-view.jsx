import React, { Component } from "react";
import DealsDetailComponent from "../../components/deals-detail-component/deals-detail-component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDealDetailsById } from "../../actions/deals.action.js";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, { match }) => ({
  dealsId: match.params.id,
  dealDetails: state.deals.dealDetails,
  loading: state.deals.loading,
  error: state.deals.error,
  success: state.deals.success
});
const mapDispatchToProps = dispatch => ({
  getDealDetailsById: bindActionCreators(getDealDetailsById, dispatch),
  reset: bindActionCreators(dispatch, dispatch)
});

export class DealsDetailView extends Component {
  componentDidMount() {
    this.props.getDealDetailsById(this.props.dealsId);
  }
  render() {
    const { dealDetails, loading, error, success } = this.props;
    return (
      <div>
        <DealsDetailComponent
          dealDetails={dealDetails}
          loading={loading}
          error={error}
          success={success}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DealsDetailView)
);
