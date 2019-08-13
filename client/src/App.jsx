import React, { Component } from 'react';
import CowList from './CowList.jsx';
import Search from './Search.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };

    this.addCow = this.addCow.bind(this);
    this.getCows = this.getCows.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    return axios
      .get('/cows')
      .then(({ data }) => {
        this.setState({
          cows: data
        });
      })
      .catch(err => {
        console.log(err);
      });

    //   ({ data }) => {
    //   this.setState({
    //     cows: data
    //   });
    // });
  }

  addCow(cow) {
    let modifiedState = this.state.cows.slice();
    modifiedState.push(cow);

    this.setState({
      cows: modifiedState
    });
  }

  render() {
    return (
      <div>
        <Search addCow={this.addCow} />
        <br />
        <CowList cows={this.state.cows} />
      </div>
    );
  }
}

export default App;
