'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: 'Claudinei Perboni',
        photo: 'https://avatars0.githubusercontent.com/u/6401119?v=4',
        login: 'Cperbony',
        repos: 12,
        followers: 10,
        following: 22
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
