import React, { Component } from 'react';
import SignUpForm from '../../../component/Registration/SignUpForm';
import * as actions from '../../../store/Actions/index'
import { connect } from 'react-redux';
import Spinner from '../../../component/UI/Spinner/Spinner'
import classes from '../common.module.css'
import { Redirect } from 'react-router';


class SignUp extends Component {


    OnSave = (data) => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password

        }
        this.props.onRegister(userData);

    }
    render() {
        let RegRidirect = null;
        if (this.props.regst) {
            // this.props.history.push('/home');
            RegRidirect = <Redirect to="/signin" />
        }


        if (this.props.error) {
            let errorMessage = <div>
                <p className={classes.errormsg}>{this.props.error}</p>
            </div>
        }

        let reg = <Spinner />;

        if (!this.props.loading) {
            reg = <SignUpForm OnSave={this.OnSave} />
        }
        return (
            <div>
                {RegRidirect}
                {this.errorMessage}
                {reg}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        regst: state.reg.regst,
        loading: state.reg.loading,
        error: state.reg.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (userData) => dispatch(actions.register(userData))

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
