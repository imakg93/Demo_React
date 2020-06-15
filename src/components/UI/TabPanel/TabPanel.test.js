import React from 'react';
import { configure, shallow } from 'enzyme';
import TapPanel from './TapPanel';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '@material-ui/core/Typography';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TapPanel />);
    })
    it('should test elements', () => {
        expect(wrapper.find(Typography)).toHaveLength(1);
    });

});