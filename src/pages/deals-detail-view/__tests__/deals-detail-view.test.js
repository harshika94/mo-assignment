// vendors
import React from "react";
import { shallow } from "enzyme";

// components
import DealsDetailView from "../deals-detail-view.jsx";

describe("Deals-Detail component", () => {
  let props;
  const mockGetDealDetailsById = jest.fn();

  beforeEach(() => {
    props = {
      dealsId: "122423423425",
      dealDetails: {},
      loading: false,
      error: false,
      success: false,
      getDealDetailsById: mockGetDealDetailsById
    };
  });

  it("should render details view component", () => {
    const wrapper = shallow(<DealsDetailView {...props} />);
    expect(wrapper.find("DealsDetailComponent").exists()).toBeTruthy();
  });
});
