import React from 'react';
import { configure, shallow } from 'enzyme';
import Seat from './Seat';
import Button from '@material-ui/core/Button';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Seat />);
    })
    it('should test elements', () => {
        expect(wrapper.find('span')).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(AirlineSeatReclineNormalIcon)).toHaveLength(1);
    });

});