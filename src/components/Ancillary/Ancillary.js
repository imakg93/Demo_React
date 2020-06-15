import React from 'react';
import Grid from '@material-ui/core/Grid';
import AncillaryDetails from './AncillaryDetails/AncillaryDetails';
import PassengerDetails from './PassengerDetails/PassenerDetails';

const ancillary = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <PassengerDetails passenger={props.passenger}></PassengerDetails>
            </Grid>
            <Grid item xs={12}>
                <AncillaryDetails passenger={props.passenger} updateForm={props.updateForm} index={props.index}></AncillaryDetails>
            </Grid>
        </Grid>
    )
}

export default ancillary;