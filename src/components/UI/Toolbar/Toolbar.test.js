import React from 'react';
import { configure, shallow } from 'enzyme';
import CustomToolbar from './Toolbar';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CustomToolbar />);
    })
    it('should test elements', () => {
        expect(wrapper.find(Toolbar)).toHaveLength(1);
        expect(wrapper.find(AppBar)).toHaveLength(1);
        expect(wrapper.find(IconButton)).toHaveLength(1);
        expect(wrapper.find(Hidden)).toHaveLength(1);
        expect(wrapper.find(MenuIcon)).toHaveLength(1);
    });

});