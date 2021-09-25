import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Layout from './hoc/Layout/Layout'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/Actions/index';

const SignInComp = React.lazy(() => {
  return import('./container/auth/Login/SignIn');
})
const SignUpComp = React.lazy(() => {
  return import('./container/auth/Register/SignUp');
})

const HomePageComp = React.lazy(() => {
  return import('./container/auth/Home/HomePage');
})

const LogoutComp = React.lazy(() => {
  return import('./container/auth/Logout/Logout');
})


const App = (props) => {

  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();

  }, [onTryAutoSignup]);

  const currentUser = localStorage.getItem("token");


  return (
    <div className="App">
      <Layout>
        {currentUser ?
          <Suspense fallback={<p>Loading ...</p>}>
            <Switch>
              <Route path="/home" exact component={HomePageComp} />
              <Route path='/logout' component={LogoutComp} />
              <Redirect to="/home" />
            </Switch>
          </Suspense>
          :
          <Suspense fallback={<p>Loading ...</p>}>
            <Switch>
              <Route path="/signin" component={SignInComp} />
              <Route path="/signup" component={SignUpComp} />
              <Redirect to="/signin" />
            </Switch>
          </Suspense>
        }


      </Layout>
    </div >
  );
}
const mapStateToProps = state => {
  return {
    isAuth: state.reg.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);