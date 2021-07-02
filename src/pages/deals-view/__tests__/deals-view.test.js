// vendors
import React from "react";
import { shallow } from "enzyme";

// components
import DealsView from "../deals-view.jsx";

describe("Deals component", () => {
  let props;

  beforeEach(() => {
    props = {
      dealsList: [],
      loading: false,
      getDealsList: jest.fn(),
      getSearchKeyData: jest.fn(),
      addNewDeal: jest.fn()
    };
  });

  it("should render details view component", () => {
    const wrapper = shallow(<DealsView {...props} />);
    expect(wrapper.find("DealsComponent").exists()).toBeTruthy();
  });
});
