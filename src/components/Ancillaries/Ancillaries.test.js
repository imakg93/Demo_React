import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ancillaries from './Ancillaries';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

configure({ adapter: new Adapter() });

describe('</Ancillaries>', () => {
    let wrapper;
    beforeEach(() => {
        const passengers = [{
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
        }];
        wrapper = shallow(<Ancillaries passengers={passengers} />);
    });
    it('should test elements', () => {
        wrapper.find(Tabs).first().simulate('change');
        expect(wrapper.find(AppBar)).toHaveLength(1);
        expect(wrapper.find(Tabs)).toHaveLength(1);
        expect(wrapper.find(Tab)).toHaveLength(1);
    });

});