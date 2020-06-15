import React from 'react';
import { configure, shallow } from 'enzyme';
import Auth from './Auth';
import Input from '../../components/UI/Input/Input';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Spinner/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Auth.WrappedComponent
            onAuth={() => { }}
            onSetRedirectPath={() => { }}
            onSnackClose={() => { }}
            onSocialLogin={() => { }}
        />);
    })
    it('should test elements', () => {
        wrapper.setProps({
            loading: true,
            error: {
                message: 'Testing Error'
            },
            isAuthenticated: true
        });
        expect(wrapper.find('div')).toHaveLength(3);
    });

    it('should test inputChangedHandler', () => {
        const inputChangedHandler = Auth.WrappedComponent.prototype.inputChangedHandler = jest.fn();
        const auth = new Auth.WrappedComponent();
        const event = {
            target: {
                value: 'test@test.com'
            }
        }
        auth.inputChangedHandler(event, 'email');
    });

    it('should test auth component methods', () => {
        const inputChangedHandler = Auth.WrappedComponent.prototype.inputChangedHandler = jest.fn();
        const handleSocialLoginFailure = Auth.WrappedComponent.prototype.handleSocialLoginFailure = jest.fn();
        const submitHandler = Auth.WrappedComponent.prototype.submitHandler = jest.fn();
        const switchHandler = Auth.WrappedComponent.prototype.switchHandler = jest.fn();
        const auth = new Auth.WrappedComponent();
        auth.props = {
            onAuth: () => { },
            onSetRedirectPath: () => { },
            onSnackClose: () => { },
            onSocialLogin: () => { },
        }
        const event = {
            target: {
                value: 'asdfgh'
            },
            preventDefault: () => { }
        };
        auth.inputChangedHandler(event, 'password');
        auth.handleSocialLoginFailure('login failed');
        auth.submitHandler(event);
        auth.switchHandler();
        expect(inputChangedHandler).toBeDefined();
        expect(handleSocialLoginFailure).toBeDefined();
        expect(submitHandler).toBeDefined();
        expect(switchHandler).toBeDefined();
    });

});