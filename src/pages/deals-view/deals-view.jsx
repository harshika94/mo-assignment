import React from "react";
import DealsComponent from "../../components/deals-component/deals-component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getDealsList,
  getSearchKeyData,
  addNewDeal,
  updateListData
} from "../../actions/deals.action.js";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  dealsList: state.deals.list,
  loading: state.deals.loading
});

const mapDispatchToProps = dispatch => ({
  getDealsList: bindActionCreators(getDealsList, dispatch),
  getSearchKeyData: bindActionCreators(getSearchKeyData, dispatch),
  addNewDeal: bindActionCreators(addNewDeal, dispatch),
  updateListData: bindActionCreators(updateListData, dispatch)
});

export class DealsView extends React.Component {
  componentDidMount() {
    this.props.getDealsList();
  }

  render() {
    const {
      dealsList,
      loading,
      getSearchKeyData,
      addNewDeal,
      updateListData
      } = this.props;
    return (
      <div>
        <DealsComponent
          listOfDeals={dealsList}
          loading={loading}
          getSearchKeyData={getSearchKeyData}
          addNewDeal={addNewDeal}
          updateListData={updateListData}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DealsView)
);
