import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All"
    };
  }

  handleTypeSelect = (eventKey) => {
    this.setState({ type: eventKey });
  };

  onSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  filterItem = (item) => {
    const { search, type } = this.state;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = type === "All" || item.type === type;
    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.handleTypeSelect}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
