import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel, { a11yProps } from './../UI/TabPanel/TapPanel';
import classes from './Ancillaries.module.scss';
import Ancillary from './../Ancillary/Ancillary';

class Ancillaries extends Component {
    state = {
        currenTab: 0
    }

    handleChange = (event, selectedTab) => {
        this.setState({
            currenTab: selectedTab
        });
    }

    render() {
        let tabHeader = null; let tabPanels = null;

        if (this.props.passengers.length) {
            tabHeader = this.props.passengers.map((passenger, index) => {
                return (
                    <Tab label={passenger.firstName} {...a11yProps(index)} className={this.state.currenTab === index ? classes.Selected : classes.NotSelected} key={passenger.name} />
                )
            });

            tabPanels = this.props.passengers.map((passenger, index) => {
                return (
                    <TabPanel value={this.state.currenTab} index={index} key={passenger.id}>
                        <Ancillary passenger={passenger} updateForm={this.props.updateForm} index={index}></Ancillary>
                    </TabPanel>
                )
            });
        }
        return (
            <div className={classes.RootAncillary}>
                <AppBar position="static" color='inherit' className={classes.AppBar}>
                    <Tabs value={this.state.currenTab} onChange={this.handleChange} aria-label="simple tabs example" indicatorColor="primary">
                        {tabHeader}
                    </Tabs>
                </AppBar>
                {tabPanels}
            </div>
        )
    }
}

export default Ancillaries;