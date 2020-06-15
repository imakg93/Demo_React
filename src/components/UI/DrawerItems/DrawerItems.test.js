import React from 'react';
import { configure, shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import DrawerItems from './DrawerItems';
import Adapter from 'enzyme-adapter-react-16';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
configure({ adapter: new Adapter() });

describe('<DrawerItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<DrawerItems.WrappedComponent />);
    })
    it('should render List,NavLink,ListItem,ListItemIcon,ListItemText', () => {
        wrapper.setProps({ toggleDrawer: (item) => item });
        wrapper.find(NavLink).first().simulate('click');
        expect(wrapper.find(List)).toHaveLength(1);
        expect(wrapper.find(ListItem)).toHaveLength(3);
        expect(wrapper.find(ListItemIcon)).toHaveLength(3);
        expect(wrapper.find(ListItemText)).toHaveLength(3);
    });

});