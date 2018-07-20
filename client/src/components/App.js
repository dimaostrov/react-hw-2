import React, { Component } from 'react';
import { postSearch } from '../utils/api'
import './App.css';

import Hader from './Hader'
import Search from './Search'
import Result from './Results';
import Saved from './Saved';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      topic: '',
      startYear: '',
      endYear: '',
      result: [],
      saved: []
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault;
    let { topic, startYear, endYear } = this.state;
    postSearch(topic, startYear, endYear)
    .then( res => this.setState({result: res}))
  }

  componentDidMount(){
    fetch('/api')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <Hader />
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>)}
        <Search submit={this.handleSubmit} change={this.handleChange} sY={this.state.startYear} eY={this.state.endYear} topic={this.state.topic} />
        <Result results={this.state.results} />
        <Saved articles={this.state.saved} />
      </div>
    );
  }
}

export default App;
