import React, { Component } from 'react'
import SocialLogin from 'react-social-login';
import { FacebookLoginButton } from "react-social-login-buttons";

class SocialButton extends Component {

    render() {
        return (
            <FacebookLoginButton onClick={this.props.triggerLogin} {...this.props}>
                {this.props.children}
            </FacebookLoginButton>
        );
    }
}

export default SocialLogin(SocialButton);