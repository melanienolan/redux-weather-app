import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(e) {
    this.setState({ term: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Type your city here"
          onChange={this.onInputChange}
          value={this.state.term}
          type="text"
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
