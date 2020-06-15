import React from 'react';
import { configure, shallow } from 'enzyme';
import Spinner from './Spinner';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Spinner/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Spinner />);
    })
    it('should test elements', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

});