import React from 'react';
import { configure, shallow } from 'enzyme';
import PassenerDetails from './PassenerDetails';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<PassenerDetails/>', () => {
    let wrapper;
    beforeEach(() => {
        const passenger = {
            id: 'J8989762',
            firstName: 'Maria',
            name: 'Mrs. Maria Jena',
            Gender: 'Male',
            DOB: '22-07-1995',
            age: 24,
            isCheckedIn: false,
            seatNo: '',
            Meals: '',
            wifi: false,
            checkinBag: '',
            cabinBag: '',
            wheelChair: false
        };
        wrapper = shallow(<PassenerDetails passenger={passenger} />);
    })
    it('should test elements', () => {
        expect(wrapper.find(Grid)).toHaveLength(13);
        expect(wrapper.find(Card)).toHaveLength(1);
        expect(wrapper.find(CardContent)).toHaveLength(1);
        expect(wrapper.find(Paper)).toHaveLength(3);
    });

});