import React from 'react';
import { configure, shallow } from 'enzyme';
import FlightDetails from './FlightDetails';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<FlightDetails/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FlightDetails flightDetails={{}} />);
    })
    it('should test elements', () => {
        expect(wrapper.find(Grid)).toHaveLength(39);
        expect(wrapper.find(Paper)).toHaveLength(6);
    });

});