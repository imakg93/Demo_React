import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './../store/action/webCheckin.action';
import ProgressStep from '../../../components/UI/ProgressSteps/ProgressStep';
import FlightDetails from '../../../components/FlightDetails/FlightDetails';
import SeatMap from '../../../components/SeatMap/SeatMap';
import Ancillaries from '../../../components/Ancillaries/Ancillaries';
import StepHandler from '../../../components/UI/ProgressSteps/StepHandler/StepHandler';
import { tableHeaderConfig } from '../../../Constants/passenger.constant';
import { STEP_LEVELS } from '../../../components/UI/ProgressSteps/step-levels.constant';
import Grid from '../../../components/UI/Grid/Grid';
// import Preview from '../../../components/Preview/Preview';

class CheckIn extends PureComponent {
    state = {
        activeStep: 0,
        notCheckedIn: false,
        checkedIn: false,
        page: 0,
        rowsPerPage: 5
    }

    filterListHandler = (isCheckedIn, isNotcheckedIn) => {
        this.props.onFilter(isCheckedIn, isNotcheckedIn);
        this.setState({
            checkedIn: isCheckedIn,
            notCheckedIn: isNotcheckedIn,
            page: 0
        });
    }

    handleChangeRowsPerPage = event => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        })
    };

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    };

    handleStepMovement = (stepNo) => {
        if (stepNo === 3) {
            this.props.onPassengerSeatUpdate();
        }
        this.setState({
            activeStep: stepNo
        });
    }

    getStepContent = (index) => {
        const stepContent = [
            (<FlightDetails key="FlightDetails" flightDetails={this.props.flightDetails}></FlightDetails>),
            (<Grid key="Grid" rows={this.props.filteredPassengers} tableConfig={tableHeaderConfig} selectPassenger={this.props.onPassengerSelect} filterListHandler={this.filterListHandler} checkedIn={this.state.checkedIn} notCheckedIn={this.state.notCheckedIn} page={this.state.page} rowsPerPage={this.state.rowsPerPage} handleChangePage={this.handleChangePage} handleChangeRowsPerPage={this.handleChangeRowsPerPage}></Grid>),
            (<SeatMap key="SeatMap" selectAseat={this.props.onSelectOfSeat} selectedSeat={this.props.selectedSeat} availableSeat={this.props.availableSeat}></SeatMap>),
            (<Ancillaries key="Ancillaries" passengers={this.props.selectedPassenger} updateForm={this.props.onAncillaryFormUpdate}></Ancillaries>),
            // <Preview></Preview>
        ]

        return stepContent[index];
    }

    enableNextHandler = (index) => {
        const nextStatus = [
            (this.props.flightDetails || {}).flightNo,
            this.props.selectedPassenger.length > 0,
            this.props.selectedSeat.length === this.props.selectedPassenger.length,
            // true
        ]
        return !nextStatus[index];
    }

    componentDidMount() {
        this.props.onInitState(this.props.match.params.flightNo);
    }

    onSubmit = () => {
        // this.setState({
        //     success: true
        // });
        this.props.history.push('/');
    }

    render() {
        return (
            <Fragment>
                <ProgressStep activeStep={this.state.activeStep}>
                    {this.props.flightDetails ? this.getStepContent(this.state.activeStep) : null}
                </ProgressStep>
                <div>
                    <StepHandler activeStep={this.state.activeStep} stepMovement={this.handleStepMovement} stepLength={STEP_LEVELS.length} isDisabled={this.enableNextHandler(this.state.activeStep)} submitCheckin={this.props.onSubmit} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedSeat: state.webCheckin.selectedSeat,
        flightDetails: state.webCheckin.flightDetails,
        passengers: state.webCheckin.passengers,
        filteredPassengers: state.webCheckin.filteredPassengers,
        selectedPassenger: state.webCheckin.selectedPassenger,
        checkedInSeat: state.webCheckin.checkedInSeat,
        availableSeat: state.webCheckin.availableSeat
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitState: (flightNo) => dispatch(actions.initState(flightNo)),
        onPassengerSelect: (event, row, index) => dispatch(actions.updateSelectedPassenger(event.target.checked, row, index)),
        onFilter: (isCheckedIn, isNotcheckedIn) => dispatch(actions.updateList(isCheckedIn, isNotcheckedIn)),
        onSelectOfSeat: (seatNo, isSelected) => dispatch(actions.selectAseat(seatNo, isSelected)),
        onPassengerSeatUpdate: () => dispatch(actions.updatePassengerSeat()),
        onAncillaryFormUpdate: (event, key, index) => dispatch(actions.updatedAncillaryForm(event, key, index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckIn));