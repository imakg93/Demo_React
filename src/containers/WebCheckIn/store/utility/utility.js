const updatefilteredPassengers = (state, key, action) => {
    const passenger = {};
    passenger[key] = action.isSelected;
    const filteredPassengers = state.filteredPassengers.map((passenger) => {
        return { ...passenger };
    });
    const updatedPassenger = {
        ...filteredPassengers[action.index],
        ...passenger
    };
    filteredPassengers[action.index] = updatedPassenger;
    return filteredPassengers;
}

export const selectPassenger = (state, action) => {
    let updatedSelectedPassengers = [];
    if (action.isSelected) {
        if (state.selectedPassenger.length === 3) {
            alert('Max 3 passenger can be selected at a time.');
            return { ...state };
        }
        const selectedPassenger = { ...action.row };
        const selectedPassengers = state.selectedPassenger.map((passenger) => {
            return { ...passenger };
        });
        updatedSelectedPassengers = [...selectedPassengers].concat([selectedPassenger]);
    } else {
        updatedSelectedPassengers = state.selectedPassenger.filter((pass) => {
            return pass.id !== action.row.id;
        });

    }
    const newPassengerList = updatefilteredPassengers(state, 'isCheckedIn', action);
    return {
        ...state,
        selectedPassenger: updatedSelectedPassengers,
        filteredPassengers: newPassengerList,
        selectedSeat: []
    }
}


export const updatePassengerSeat = (state) => {
    let passengers = []
    state.selectedSeat.forEach((seatNo, index) => {
        const passenger = { ...state.selectedPassenger[index] }
        passenger.seatNo = seatNo;
        passengers.push(passenger);
    });
    return {
        ...state,
        selectedPassenger: passengers
    }
}
//seatNo, isSelected
export const updateSelectedSeat = (state, action) => {
    let selectedSeat = [];
    if (action.isSelected) {
        selectedSeat = state.selectedSeat.filter(seat => seat !== action.seatNo);
    } else {
        selectedSeat = state.selectedSeat.concat([action.seatNo])
    }
    return {
        ...state,
        selectedSeat: selectedSeat
    }
}

//action.event, action.key, action.index
export const updateAncillaryForm = (state, action) => {
    const value = (action.key === 'wifi' || action.key === 'wheelChair') ? action.event.target.checked : action.event.target.value;
    const passenger = {};
    passenger[action.key] = value;
    const updatedPassengers = state.selectedPassenger.map((passenger) => {
        return { ...passenger };
    });
    const updatedPassenger = {
        ...updatedPassengers[action.index],
        ...passenger
    };
    updatedPassengers[action.index] = updatedPassenger;
    return {
        ...state,
        selectedPassenger: updatedPassengers
    }
}