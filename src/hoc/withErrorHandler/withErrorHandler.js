import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Aux from '../Auxilary/Auxillary';
import { SNACK_CONFIG } from '../../Constants/snackbar.constant';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: false
        }

        constructor(props) {
            super(props);
            this.requestInt = axios.interceptors.request.use(req => {
                this.setState({ error: false });
                return req;
            });
            this.responseInt = axios.interceptors.response.use(res => res, () => {
                this.setState({ error: true });
            });
        }

        errorConfirmedHandel = () => {
            this.setState({ error: null });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInt);
            axios.interceptors.response.eject(this.responseInt);
        }

        render() {
            return (
                <Aux>
                    <Snackbar anchorOrigin={SNACK_CONFIG} open={this.state.error ? true : false} autoHideDuration={6000}>
                        <MuiAlert elevation={6} variant="filled" onClose={this.errorConfirmedHandel} severity="error">
                            Services are down. Please contact adminstration.
                        </MuiAlert>
                    </Snackbar>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }

}

export default withErrorHandler;