import axios from './../../../../axios-ancillary';
import * as actionTypes from './actionTypes';

const setState = (flight) => {
    return {
        type: actionTypes.SET_STATE,
        flight: flight
    }
}

export const initState = (flightNo) => {
    return dispatch => {
        axios.get(flightNo + '.json').then(res => {
            dispatch(setState(res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const updateList = (isCheckedIn, isNotcheckedIn) => {
    return {
        type: actionTypes.FILTER_PASSENGERS,
        isCheckedIn,
        isNotcheckedIn
    }
}

export const updateSelectedPassenger = (isSelected, row, index) => {
    return {
        type: actionTypes.SELECT_PASSENGER,
        isSelected,
        row,
        index
    }
}

export const selectAseat = (seatNo, isSelected) => {
    return {
        type: actionTypes.SELECT_SEAT,
        seatNo,
        isSelected
    }
}

export const updatePassengerSeat = () => {
    return {
        type: actionTypes.SEAT_UPDATE
    }
}

export const updatedAncillaryForm = (event, key, index) => {
    return {
        type: actionTypes.UPDATE_SELECTED,
        event, key, index
    }
}