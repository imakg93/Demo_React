import React from 'react';
import { configure, shallow } from 'enzyme';
import Preview from './Preview';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Preview/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Preview />);
    })
    it('should test elements', () => {
        expect(wrapper.find(Grid)).toHaveLength(4);
        expect(wrapper.find(Paper)).toHaveLength(2);
    });

});