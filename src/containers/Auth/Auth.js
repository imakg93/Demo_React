import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SNACK_CONFIG } from '../../Constants/snackbar.constant';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.scss';
import * as actions from './store/action/auth.action';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        });
    }

    // handleSocialLogin = (user) => {
    //     console.log(user)
    // }

    handleSocialLoginFailure = (err) => {
        console.error(err)
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        if (this.props.loading) {
            form = <Spinner />;
        }
        let errorMsg = null;
        if (this.props.error) {
            errorMsg = (
                <Snackbar anchorOrigin={SNACK_CONFIG} open={this.props.error ? true : false} autoHideDuration={6000}>
                    <MuiAlert elevation={6} variant="filled" onClose={this.props.onSnackClose} severity="error">
                        {this.props.error.message}
                    </MuiAlert>
                </Snackbar>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/" />
        }
        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMsg}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="primary" clicked={this.submitHandler}>{this.state.isSignup ? 'SIGNUP' : 'SIGNIN'}</Button>
                </form>
                <div className={classes.BtnSpacing}>
                    {/* <Button btnType="secondary" clicked={this.switchHandler}>Switch to {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button> */}
                    <Link component="button" variant="body2" onClick={this.switchHandler}>{this.state.isSignup ? 'navigate to signin' : 'New user Registration'}</Link>
                </div>
                <div>
                    <SocialLogin
                        provider='facebook'
                        appId='805772899925930'
                        onLoginSuccess={this.props.onSocialLogin}
                        onLoginFailure={this.handleSocialLoginFailure}
                    >
                        Login with Facebook
                    </SocialLogin>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        redirectPath: state.auth.redirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetRedirectPath: () => dispatch(actions.setRedirectPath('/')),
        onSnackClose: () => dispatch(actions.closeSnack()),
        onSocialLogin: (user) => dispatch(actions.onSocialLogin(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);