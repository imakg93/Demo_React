import * as actionTypes from './../action/actionTypes';
import * as utility from '../utility/utility';
const intialState = {
    selectedSeat: [],
    flightDetails: null,
    passengers: [],
    filteredPassengers: [],
    selectedPassenger: [],
    checkedInSeat: [],
    availableSeat: []
}

const webCheckinReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STATE:
            return {
                ...state,
                flightDetails: action.flight.flightDetails,
                passengers: action.flight.passengers,
                filteredPassengers: action.flight.passengers,
                checkedInSeat: action.flight.checkedInSeat,
                availableSeat: action.flight.availbleSeat,
            }
        case actionTypes.FILTER_PASSENGERS: {
            const filteredList = state.passengers.filter((row) => {
                if (action.isNotcheckedIn) {
                    return !row.seatNo;
                } else if (action.isCheckedIn) {
                    return row.seatNo !== '';
                } else if (!action.isCheckedIn && (action.isCheckedIn === action.isNotcheckedIn)) {
                    return true;
                }
            });
            return {
                ...state,
                filteredPassengers: filteredList,
                selectedPassenger: []
            }
        }
        case actionTypes.SELECT_PASSENGER:
            return utility.selectPassenger(state, action);
        case actionTypes.SELECT_SEAT:
            return utility.updateSelectedSeat(state, action);
        case actionTypes.SEAT_UPDATE:
            return utility.updatePassengerSeat(state);
        case actionTypes.UPDATE_SELECTED:
            return utility.updateAncillaryForm(state, action);
        default:
            return state;
    }
}

export default webCheckinReducer;