// vendors
import React from "react";
import { shallow } from "enzyme";

// components
import DealsComponent from "../deals-component";

describe("Deals-Detail component", () => {
  let props;
  const mockGetListByClause = jest.fn();
  const mockGetSearchKeyData = jest.fn();
  const mockUpdateListData = jest.fn();
  const mockAddNewDeal = jest.fn()

  beforeEach(() => {
    props = {
      listOfDeals:[],
      getListByClause: mockGetListByClause,
      loading:false,
      getSearchKeyData:mockGetSearchKeyData,
      updateListData:mockUpdateListData,
      addNewDeal:mockAddNewDeal
    };
  });

  it("should render deals component", () => {
    const wrapper = shallow(<DealsComponent {...props} />);
    expect(wrapper.find("TopBarContainerStyled").exists()).toBeTruthy();
    expect(wrapper.find("DealsListComponent").exists()).toBeTruthy();
    expect(wrapper.find("DealsSummaryComponent").exists()).toBeTruthy();
  });

  it("should call addNewDeal action on handle click", () => {
    const wrapper = shallow(<DealsComponent {...props} />);
    const clickButton = wrapper.find("button").props().onClick;
    clickButton();
    expect(mockAddNewDeal).toBeCalled()
  });

});
