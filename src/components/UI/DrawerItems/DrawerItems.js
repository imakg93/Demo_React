import React, { Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import classes from './DrawerItems.module.scss';
import DRAWER_ITEMS from '../../../Constants/drawerItems.constant';

const DrawerItems = (props) => {
    return (
        <Fragment>
            <List className={classes.RootList}>
                {DRAWER_ITEMS.map((item) => (
                    <NavLink to={item.to} exact={item.isExact} className={classes.LinkDecoration} activeClassName={classes.ActiveLinkDecoration} key={item.text} onClick={() => props.toggleDrawer(false)}>
                        <ListItem button className={classes.DrawerItems}>
                            <ListItemIcon><item.icon /></ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Fragment>
    );
}

export default withRouter(DrawerItems);