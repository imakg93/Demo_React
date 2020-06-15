import React from 'react';
import { configure, shallow } from 'enzyme';
import Input from './Input';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Input />);
    })
    it('should render a input when type = input', () => {
        wrapper.setProps({
            elementType: 'input',
            shouldValidate: true,
            touched: true,
            invalid: true
        });
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should render a input when type = input', () => {
        wrapper.setProps({
            elementType: 'input'
        });
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should render a input when type = input', () => {
        wrapper.setProps({
            elementType: 'textarea'
        });
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should render a input when type = input', () => {
        wrapper.setProps({
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'Test', displayValue: 'Test' }
                ]
            }
        });
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('select')).toHaveLength(1);
    });

})