import React from 'react';
import { configure, shallow } from 'enzyme';
import AncillaryDetails from './AncillaryDetails';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<AncillaryDetails/>', () => {
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
        wrapper = shallow(<AncillaryDetails passenger={passenger} />);
    })
    it('should test elements', () => {
        wrapper.setProps(
            {
                updateForm: (event) => event
            }
        );
        wrapper.find(TextField).first().simulate('change');
        wrapper.find(TextField).at(1).simulate('change');
        wrapper.find(TextField).at(2).simulate('change');
        wrapper.find(TextField).last().simulate('change');
        wrapper.find(Switch).first().simulate('change');
        wrapper.find(Switch).last().simulate('change');
        expect(wrapper.find(Grid)).toHaveLength(8);
        expect(wrapper.find(Card)).toHaveLength(1);
        expect(wrapper.find(CardContent)).toHaveLength(1);
        expect(wrapper.find(Paper)).toHaveLength(2);
    });

});