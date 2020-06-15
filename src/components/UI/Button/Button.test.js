import React from 'react';
import { configure, shallow } from 'enzyme';
import CustomButton from './Button';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CustomButton />);
    })
    it('should render a button', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });

});