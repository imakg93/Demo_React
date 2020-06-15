import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Toolbar.module.scss';

const toolbar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Hidden smUp implementation="css" >
                    <IconButton edge="start" onClick={props.openSideDrawer}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <h4 className={classes.Heading}>Ancillary/Checkin Managment</h4>
            </Toolbar>
        </AppBar>
    );
}

export default toolbar;