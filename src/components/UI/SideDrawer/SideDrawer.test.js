import React from 'react';
import { configure, shallow } from 'enzyme';
import SideDrawer from './SideDrawer';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SideDrawer />);
    })
    it('should test elements', () => {
        expect(wrapper.find(Hidden)).toHaveLength(2);
        expect(wrapper.find(Drawer)).toHaveLength(2);
    });

});