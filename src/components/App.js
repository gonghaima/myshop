import React, { Component } from 'react';
import Header from './common/header/Header';
import './App.css';

import * as stuffActions from '../actions/stuffActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
  componentWillMount() {
    this.props.stuffActions.initStuff();
  }
  render() {
    console.log('app.js: ',this.props);
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
