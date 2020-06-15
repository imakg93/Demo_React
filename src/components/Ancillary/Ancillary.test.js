import React from 'react';
import { configure, shallow } from 'enzyme';
import Ancillary from './Ancillary';
import Grid from '@material-ui/core/Grid';
import AncillaryDetails from './AncillaryDetails/AncillaryDetails';
import PassengerDetails from './PassengerDetails/PassenerDetails';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Ancillary/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Ancillary />);
    })
    it('should test elements', () => {
        expect(wrapper.find(Grid)).toHaveLength(3);
        expect(wrapper.find(AncillaryDetails)).toHaveLength(1);
        expect(wrapper.find(PassengerDetails)).toHaveLength(1);
    });

});