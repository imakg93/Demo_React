import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './containers/Auth/store/action/auth.action';
import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout';
import WebCheckIn from './containers/WebCheckIn/WebCheckIn';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Logout/Logout';


class App extends Component {
  componentDidMount() {
    this.props.onAuth();
  }
  render() {
    let route = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect from="/" to="/auth" />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      route = (
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/webCheckIn" component={WebCheckIn} />
            <Route path="/logout" component={Logout} />
            <Redirect from="/" to="/webCheckIn" />
          </Switch>
        </Layout>
      );
    }
    return (
      <div className={classes.App}>
        {route}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
