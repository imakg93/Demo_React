import React from 'react';
import { configure, shallow } from 'enzyme';
import StepHandler from './StepHandler';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<StepHandler />);
    })
    it('should render a div and a button', () => {
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('should render a div and a button', () => {
        wrapper.setProps(
            {
                activeStep: 1,
                stepMovement: (item) => { return item },
                submitCheckin: (item) => { return item }
            });
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(2);
    });

    it('should render a div and a button', () => {
        wrapper.setProps(
            {
                activeStep: 2,
                stepLength: 4,
                stepMovement: (item) => { return item },
                submitCheckin: (item) => { return item }
            });
        wrapper.find(Button).first().simulate('click');
        wrapper.find(Button).last().simulate('click');
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(2);
    });

});