import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return <div>Hello world, { this.props.user }</div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)