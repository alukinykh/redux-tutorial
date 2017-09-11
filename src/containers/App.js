import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from '../components/User'
import Page from '../components/Page'
import * as PageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { setYear } = this.props.PageActions

    return (
      <div>
        <User name={user.name} />
        <Page year={page.year} photos={page.photos} setYear={setYear} fetching={page.fetching} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps (dispatch) {
  return {
    PageActions: bindActionCreators(PageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)