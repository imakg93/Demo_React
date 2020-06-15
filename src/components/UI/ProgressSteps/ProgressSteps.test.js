import React from 'react';
import { configure, shallow } from 'enzyme';
import ProgressSteps from './ProgressStep';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ProgressSteps />);
    })
    it('should render a button', () => {
        expect(wrapper.find(Stepper)).toHaveLength(1);
        expect(wrapper.find(Step)).toHaveLength(4);
        expect(wrapper.find(StepLabel)).toHaveLength(4);
    });

});