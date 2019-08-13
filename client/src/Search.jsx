import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCow(this.state);
    this.setState({
      name: '',
      description: ''
    });

    axios.post('/', {
      name: this.state.name,
      description: this.state.description
    });
  }

  render() {
    return (
      <form>
        <div>
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name='description'
            type='text'
            placeholder='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Search;
// onClick={() => addCow()
