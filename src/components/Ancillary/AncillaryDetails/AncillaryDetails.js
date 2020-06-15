import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import classes from './AncillaryDetails.module.scss';

const ancillaryDetails = (props) => {
    const { name, seatNo, Meals, wifi, checkinBag, cabinBag, wheelChair } = props.passenger;
    return (
        <Card>
            <CardContent>
                <h4 className={classes.CardHeader}>Ancillary Details</h4>
                <form noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={4} className={classes.FormSpacing}>
                            <TextField id={name + '_Seat'} label="Seat no." variant="outlined" value={seatNo} onChange={(event) => props.updateForm(event, 'seatNo', props.index)} fullWidth disabled />
                        </Grid>
                        <Grid item xs={4} className={classes.FormSpacing}>
                            <TextField id={name + '_Meals'} label="Meals" variant="outlined" value={Meals} onChange={(event) => props.updateForm(event, 'Meals', props.index)} fullWidth />
                        </Grid>
                        <Grid item xs={4} className={classes.FormSpacing}>
                            <TextField id={name + '_Checkin'} label="Checkin bag" variant="outlined" value={checkinBag} onChange={(event) => props.updateForm(event, 'checkinBag', props.index)} fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ marginTop: '20px' }}>
                        <Grid item xs={4} className={classes.FormSpacing}>
                            <TextField id={name + '_Cabin'} label="Cabin bag" variant="outlined" value={cabinBag} onChange={(event) => props.updateForm(event, 'cabinBag', props.index)} fullWidth />
                        </Grid>
                        <Grid item xs={4} className={classes.FormSpacing}>
                            <Paper elevation={2} className={classes.Paper}>
                                Wheel Chair
                                <Switch
                                    onChange={(event) => props.updateForm(event, 'wheelChair', props.index)}
                                    checked={wheelChair ? true : false}
                                    value={true}
                                    color="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={4} className={classes.FormSpacing}>
                            <Paper elevation={2} className={classes.Paper}>
                                WiFi
                                <Switch
                                    onChange={(event) => props.updateForm(event, 'wifi', props.index)}
                                    checked={wifi ? true : false}
                                    value={true}
                                    color="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </Paper>

                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default ancillaryDetails;