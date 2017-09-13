import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import User from '../components/User'
import Page from '../components/Page'
import * as PageActions from '../actions/PageActions'
import Table from '../components/Table';

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.PageActions

    return (
      <div>
        <User name={user.name} />
        <Page year={page.year} photos={page.photos} getPhotos={ getPhotos } fetching={page.fetching} />
        <Table />
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