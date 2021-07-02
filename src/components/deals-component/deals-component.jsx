import React, { Component } from "react";
import {
  TopBarContainerStyled,
  DealsListLeftContainer,
  DealsSummaryRightContainer,
  WrapperContainer,
  DealsListTopContainer,
  InputWrapperContainer
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

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleClick = inputValue => {
    const newDeal = {
      key: "ac9bd5ec830197693b93cc1bb86a5487",
      title: inputValue,
      price: 37500,
      cause: {
        name: "New Item Added"
      }
    };
    this.props.addNewDeal(newDeal);
    this.setState({
      inputValue: ""
    });
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
          <InputWrapperContainer>
            <input
              id={this.state.inputValue}
              value={this.state.inputValue}
              placeholder="Add another deal"
              onChange={this.handleChange}
            ></input>
            <button onClick={() => this.handleClick(this.state.inputValue)}>
              ADD
            </button>
          </InputWrapperContainer>
          </DealsListLeftContainer>
          <DealsSummaryRightContainer>
            <DealsSummaryComponent listOfDeals={listOfDeals} />
          </DealsSummaryRightContainer>
        </WrapperContainer>
      </div>
    );
  }
}

