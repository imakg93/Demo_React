import React from 'react';
import { configure, shallow } from 'enzyme';
import SeatMap from './SeatMap';
import Seat from '../UI/Seat/Seat';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<SeatMap/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SeatMap selectedSeat={['4F']} availableSeat={['3F']} />);
    });
    it('should test elements', () => {
        expect(wrapper.find(Seat)).toHaveLength(120);
    });

});