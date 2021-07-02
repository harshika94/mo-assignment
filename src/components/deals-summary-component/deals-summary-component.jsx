import React, { Component } from "react";

export class DealsSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClauseValue: false
    };
  }

  buildSummarySection = () => {
    let data = "";
    let totalAmount = 0;
    if (
      this.state.selectedClauseValue &&
      this.state.selectedClauseValue !== "none"
    ) {
      const filterdata =
        this.props.listOfDeals &&
        this.props.listOfDeals.filter(
          item =>
            item.cause.name === this.state.selectedClauseValue && item.price
        );
      data = filterdata.map(item => {
        totalAmount = totalAmount + item.price;
        return <li>Amount - {item.price}</li>;
      });
    } else {
      data =
        this.props.listOfDeals &&
        this.props.listOfDeals.map(item => {
          totalAmount = totalAmount + item.price;
          return <li>Amount - {item.price}</li>;
        });
    }
    return (
      <React.Fragment>
        <ul>
          {data} <p>Total Amount: {totalAmount}</p>
        </ul>
      </React.Fragment>
    );
  };

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  causeValues = () => {
    const causeValues =
      this.props.listOfDeals &&
      this.props.listOfDeals.map(item => {
        return item.cause.name;
      });
    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    const uniqueCauseValues = causeValues.filter(distinct);
    const groupByCause = uniqueCauseValues.map(item => {
      return <option value={item}>{item}</option>;
    });
    return groupByCause;
  };

  handleChange = e => {
    this.setState({
      selectedClauseValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <p>Select cause for Amount Summary</p>
        <select onChange={this.handleChange}>
          <option value="none" selected>
            Select an Option
          </option>
          {this.causeValues()}
        </select>
        {this.buildSummarySection()}
      </div>
    );
  }
}

export default DealsSummaryComponent;
