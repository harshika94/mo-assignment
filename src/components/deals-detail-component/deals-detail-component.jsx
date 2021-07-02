import React, { Component } from "react";
import { DealsDetailContainer } from "./deals-detail-styled";

export class DealsDetailComponent extends Component {
  render() {
    const { dealDetails, loading, error } = this.props;
    return (
      <DealsDetailContainer>
      {loading ? (
          "Please wait for a while"
      ) : error ? (
          "Try again later"
      ) : (
    <div>
      <p>
        {dealDetails.charityDescription && dealDetails.charityDescription}
      </p>
      <p>{dealDetails.charityName && dealDetails.charityName}</p>
      <p>{dealDetails.dealType}</p>
      <p>{dealDetails.description}</p>
    </div>
  )}
      </DealsDetailContainer>
    );
  }
}

export default DealsDetailComponent;
