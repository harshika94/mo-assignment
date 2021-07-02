import React, { Component } from "react";
import { Link } from "react-router-dom";

export class DealsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClauseValue: false,
      searchKey: "",
      editInputValue: "",
      editInputKey: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      searchKey: [e.target.value]
    });
    this.props.getSearchKeyData(e.target.value);
  };


  buildDealsListSection = () => {
    let data = "";
    if (
      this.state.selectedClauseValue &&
      this.state.selectedClauseValue !== "none"
    ) {
      const filterdata =
        this.props.listOfDeals &&
        this.props.listOfDeals.filter(
          item =>
            item.cause.name === this.state.selectedClauseValue && item.title
        );
      data = filterdata.map(item => {
        return (
          <li>
            <Link >{item.title}</Link>
          </li>
        );
      });
    } else {
      data =
        this.props.listOfDeals &&
        this.props.listOfDeals.map(item => {
          return (
            <li>
              <Link>{item.title}</Link>
            </li>
          );
        });
    }
    return (
      <React.Fragment>
        <ul>{data}</ul>
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
        <p>Deals List. Click on the list item to know the details</p>
        <select onChange={this.handleChange}>
          <option value="none" selected>
            Select an Option
          </option>
          {this.causeValues()}
        </select>
        <input
          id={this.state.searchKey}
          type="text"
          placeholder="Search.."
          onChange={this.handleInputChange}
          name="search"
        ></input>
        {this.props.loading ? (
          <p>...Loading the list</p>
        ) : (
          this.buildDealsListSection()
        )}
      </div>
    );
  }
}

export default DealsListComponent;
