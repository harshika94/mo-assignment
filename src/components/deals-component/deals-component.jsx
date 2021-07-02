import React, { Component } from "react";
import {
  TopBarContainerStyled,
  DealsListLeftContainer,
  DealsSummaryRightContainer,
  WrapperContainer,
  DealsListTopContainer
} from "./deals-component.styled";
import DealsSummaryComponent from "../../components/deals-summary-component/deals-summary-component";
import DealsListComponent from "./deals-list-component";

export default class DealsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  buildTobSection = () => {
    return (
      <TopBarContainerStyled>
        Welcome to the deals portal. Check the latest deals below for various
        categories.
      </TopBarContainerStyled>
    );
  };

  render() {
    const {
      listOfDeals,
      getListByClause,
      loading,
      getSearchKeyData,
      updateListData
    } = this.props;

    return (
      <div>
        <DealsListTopContainer>{this.buildTobSection()}</DealsListTopContainer>

        <WrapperContainer>
          <DealsListLeftContainer>
            <DealsListComponent
              listOfDeals={listOfDeals}
              getListByClause={getListByClause}
              loading={loading}
              getSearchKeyData={getSearchKeyData}
              updateListData={updateListData}
            />
          
          </DealsListLeftContainer>
          <DealsSummaryRightContainer>
            <DealsSummaryComponent listOfDeals={listOfDeals} />
          </DealsSummaryRightContainer>
        </WrapperContainer>
      </div>
    );
  }
}

