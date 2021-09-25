import React, { Component } from 'react';
import SignInForm from '../../../component/Login/SignInForm';
import * as actions from '../../../store/Actions/index'
import { connect } from 'react-redux';
import Spinner from '../../../component/UI/Spinner/Spinner'
import classes from '../common.module.css'
import { Redirect } from 'react-router';

class SignIn extends Component {


    OnSave = (data) => {
        const userData = {
            email: data.email,
            password: data.password
        }
        this.props.onAuth(userData);
    }

    componentDidMount() {
        this.props.resetReg();
    }
    render() {
        let authRedirect = null;
        if (this.props.authst) {
            // this.props.history.push('/home');
            authRedirect = <Redirect to="/home" />
        }

        if (this.props.error) {
            let errorMessage = <div>
                <p className={classes.errormsg}>{this.props.error}</p>
            </div>
        }
        let signin = <Spinner />;
        if (!this.props.loading) {
            signin = <SignInForm OnSave={this.OnSave} />
        }
        return (
            <>
                {/* {authRedirect} */}
                {this.errorMessage}
                {signin}
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        authst: state.reg.authst,
        loading: state.reg.loading,
        error: state.reg.error

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (loginData) => dispatch(actions.authUser(loginData)),
        resetReg: () => dispatch(actions.resetRegSt())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);