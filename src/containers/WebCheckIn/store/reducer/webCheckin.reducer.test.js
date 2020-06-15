import checkinReducer from './webCheckin.reducer';
import * as actionTypes from '../action/actionTypes';
const intialState = {
    selectedSeat: [],
    flightDetails: null,
    passengers: [],
    filteredPassengers: [],
    selectedPassenger: [],
    checkedInSeat: [],
    availableSeat: []
}
describe('authReducer', () => {
    it('shuld test intial state', () => {
        expect(checkinReducer(undefined, {})).toEqual(intialState);
    });

    it('shuld test intial state', () => {
        expect(checkinReducer(intialState, {
            type: actionTypes.SET_STATE,
            flight: {
                flightDetails: 'MTA12345',
                passengers: ['p1', 'p2'],
                checkedInSeat: ['4F'],
                availbleSeat: ['3F'],
            }
        }
        )).toEqual({
            selectedSeat: [],
            flightDetails: 'MTA12345',
            passengers: ['p1', 'p2'],
            filteredPassengers: ['p1', 'p2'],
            selectedPassenger: [],
            checkedInSeat: ['4F'],
            availableSeat: ['3F']
        });
    });

    it('shuld test FILTER_PASSENGERS', () => {
        expect(checkinReducer({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        }, {
            type: actionTypes.FILTER_PASSENGERS,
            isNotcheckedIn: true
        }
        )).toEqual({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [{ seatNo: '' }],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        });
    });

    it('shuld test FILTER_PASSENGERS', () => {
        expect(checkinReducer({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        }, {
            type: actionTypes.FILTER_PASSENGERS,
            isCheckedIn: true
        }
        )).toEqual({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [{ seatNo: '4F' }],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        });
    });

    it('shuld test FILTER_PASSENGERS', () => {
        expect(checkinReducer({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        }, {
            type: actionTypes.FILTER_PASSENGERS,
            isCheckedIn: false,
            isNotcheckedIn: false
        }
        )).toEqual({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [{ seatNo: '' }, { seatNo: '4F' }],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        });
    });

    it('shuld test SELECT_PASSENGER', () => {
        expect(checkinReducer({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ id: 'PO7654', seatNo: '' }, { id: 'PO7655', seatNo: '4F' }],
            filteredPassengers: [{ id: 'PO7654', seatNo: '' }, { id: 'PO7655', seatNo: '4F' }],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        }, {
            type: actionTypes.SELECT_PASSENGER,
            isSelected: true,
            index: 0,
            row: { id: 'PO7654', seatNo: '' }
        }
        )).toEqual({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ id: 'PO7654', seatNo: '' }, { id: 'PO7655', seatNo: '4F' }],
            filteredPassengers: [{ id: 'PO7654', seatNo: '', isCheckedIn: true }, { id: 'PO7655', seatNo: '4F' }],
            selectedPassenger: [{ id: 'PO7654', seatNo: '' }],
            checkedInSeat: [],
            availableSeat: []
        });
    });

    it('shuld test SELECT_SEAT', () => {
        expect(checkinReducer({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        }, {
            type: actionTypes.SELECT_SEAT,
            isSelected: false,
            seatNo: '4F'
        }
        )).toEqual({
            selectedSeat: ['4F'],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        });
    });

    it('shuld test SELECT_SEAT', () => {
        expect(checkinReducer({
            selectedSeat: ['4F'],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        }, {
            type: actionTypes.SELECT_SEAT,
            isSelected: true,
            seatNo: '4F'
        }
        )).toEqual({
            selectedSeat: [],
            flightDetails: null,
            passengers: [{ seatNo: '' }, { seatNo: '4F' }],
            filteredPassengers: [],
            selectedPassenger: [],
            checkedInSeat: [],
            availableSeat: []
        });
    });
})
