import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SideDrawer from './../../components/UI/SideDrawer/SideDrawer';
import ToolBar from './../../components/UI/Toolbar/Toolbar';
import DrawerItems from '../../components/UI/DrawerItems/DrawerItems';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Layout extends Component {
    state = {
        open: false
    }

    toggleDrawer = (isOpen) => {
        this.setState({
            open: isOpen
        });
    };


    render() {
        return (
            <div className={classes.Root}>
                <nav>
                    <SideDrawer isOpen={this.state.open} closed={this.toggleDrawer.bind(this, false)}>
                        <div className={classes.User + ' toolbar-spacing'}>
                            <ListItem button>
                                <ListItemIcon><AccountCircleIcon fontSize='large' /></ListItemIcon>
                                <ListItemText primary="Hello Bhuvan" />
                            </ListItem>
                        </div>
                        <Divider />
                        <div className={classes.List}>
                            <DrawerItems toggleDrawer={this.toggleDrawer}></DrawerItems>
                        </div>
                    </SideDrawer>
                </nav>
                <main className={classes.Content}>
                    <ToolBar openSideDrawer={this.toggleDrawer.bind(this, true)}></ToolBar>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;