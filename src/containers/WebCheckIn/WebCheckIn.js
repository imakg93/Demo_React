import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../axios-ancillary';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import classes from './WebCheckIn.module.scss';
import Aux from './../../hoc/Auxilary/Auxillary';
import SearchIcon from '@material-ui/icons/Search';
import CheckIn from './CheckIn/CheckIn';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SNACK_CONFIG } from '../../Constants/snackbar.constant';

const WebCheckIn = (props) => {
    const [flight, setFlight] = useState('');
    const [flights, setFlights] = useState([]);
    const [successMsg, setSuccess] = useState(false);
    useEffect(() => {
        axios.get('current-flights.json').then(res => {
            setFlights(res.data);
        }).catch(err => {
            console.log('err', err);
        })
    }, []);

    const updateFlight = (event, value) => {
        setFlight(value);
    }

    const searchFlight = () => {
        props.history.push({
            pathname: props.match.url + '/checkin/' + flight,
        });
    }
    const onSubmit = () => {
        setSuccess(true);
    }
    const onSnackClose = () => {
        setSuccess(false);
        props.history.push('/');
    }
    let success = null;
    if (successMsg) {
        success = (
            <Snackbar anchorOrigin={SNACK_CONFIG} open={successMsg} autoHideDuration={6000}>
                <MuiAlert elevation={6} variant="filled" severity="success" onClose={onSnackClose}>
                    You have successfully Completed checkin process.
                </MuiAlert>
            </Snackbar>
        );
    }

    return (
        <Aux>
            {success}
            <div className={classes.SearchFlight}>
                <Autocomplete
                    id="combo-box-demo"
                    options={flights}
                    getOptionLabel={option => option}
                    className={classes.TypeAhead}
                    onChange={updateFlight}
                    onInputChange={updateFlight}
                    value={flight}
                    autoSelect={true}
                    renderInput={params => (
                        <TextField {...params} label="Flights" variant="outlined" fullWidth />
                    )}
                />
                <Button variant="contained" color="primary" className={classes.SearchButton} onClick={searchFlight} disabled={!flight}><SearchIcon /></Button>
            </div>
            <div>
                <Route path={props.match.url + '/checkin/:flightNo'} exact render={() => <CheckIn onSubmit={onSubmit} {...props} />} />
            </div>
        </Aux>
    )
}

export default withErrorHandler(WebCheckIn, axios);