import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classes from './Preview.module.scss';

const Preview = () => {
    return (
        <Grid container spacing={0} className={classes.Grid}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Paper className={classes.Paper}>item</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.Paper}>item</Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Preview;