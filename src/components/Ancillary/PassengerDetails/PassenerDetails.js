import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import classes from './PassengerDetails.module.scss';

const passengerDetails = (props) => {
    const { id, name, Gender, DOB, age } = props.passenger;
    return (
        <Card>
            <CardContent>
                <h4 className={classes.CardHeader}>Passenger Details</h4>
                <Grid container spacing={3}>
                    <Grid item xs={4} className={classes.FormSpacing}>
                        <Paper elevation={3} className={classes.Paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h4>{name}</h4>
                                </Grid>
                                <Grid item xs={12}>
                                    <h4>Gender:-{Gender}</h4>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.FormSpacing}>
                        <Paper elevation={3} className={classes.Paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h4>DOB:-{DOB}</h4>
                                </Grid>
                                <Grid item xs={12}>
                                    <h4>Age:-{age}</h4>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.FormSpacing}>
                        <Paper elevation={3} className={classes.Paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h4>Passport Details</h4>
                                </Grid>
                                <Grid item xs={12}>
                                    <h4>{id}</h4>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default passengerDetails;

// 