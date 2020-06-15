import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classes from './FlightDetails.module.scss';
import FlightIcon from '@material-ui/icons/Flight';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import ScheduleIcon from '@material-ui/icons/Schedule';
const flightDetails = (props) => {
    return (
        <Grid container spacing={0} className={classes.Grid}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper className={classes.Paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <FlightIcon fontSize="large" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div>Flight</div>
                            </Grid>
                            <Grid item xs={12}>
                                <span>{props.flightDetails.flightNo}</span>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.Paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TripOriginIcon fontSize="large" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div>Origin</div>
                            </Grid>
                            <Grid item xs={12}>
                                <span>{props.flightDetails.origin}</span>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.Paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <PinDropIcon fontSize="large" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div>Destination</div>
                            </Grid>
                            <Grid item xs={12}>
                                <span>{props.flightDetails.destination}</span>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* <Grid item xs={3}>
                    <Paper className={classes.Paper}>item</Paper>
                </Grid> */}
            </Grid>
            <Grid container spacing={1} style={{ marginTop: '10px' }}>
                <Grid item xs={4}>
                    <Paper className={classes.Paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <FlightTakeoffIcon fontSize="large" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div>Take Off</div>
                            </Grid>
                            <Grid item xs={12}>
                                <span>{props.flightDetails.takeOff}</span>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.Paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <FlightLandIcon fontSize="large" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div>Landing</div>
                            </Grid>
                            <Grid item xs={12}>
                                <span>{props.flightDetails.landing}</span>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.Paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <ScheduleIcon fontSize="large" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div>Duration</div>
                            </Grid>
                            <Grid item xs={12}>
                                <span>{props.flightDetails.duration}</span>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* <Grid item xs={3}>
                    <Paper className={classes.Paper}>item</Paper>
                </Grid> */}
            </Grid>
        </Grid>
    )
}

export default flightDetails;
