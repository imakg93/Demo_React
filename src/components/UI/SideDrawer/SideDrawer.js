import React, { Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import classes from './SideDrawer.module.scss';

const sideDrawer = (props) => {
    return (
        <Fragment>
            <Hidden smUp implementation="css" >
                <Drawer variant="temporary" open={props.isOpen} onClose={props.closed}>
                    {props.children}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer variant="permanent" open className={classes.SideDrawer}>
                    {props.children}
                </Drawer>
            </Hidden>
        </Fragment>
    );
}

export default sideDrawer;