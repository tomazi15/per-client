import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header  from './Header';

configure({ adapter: new Adapter() });

describe('Does Header Component Render', () => {

    let wrapper = shallow(<Header />);

    it('Header render its css class', () => {
        expect(wrapper.find('.Header').length).toBe(1);
    });

    it('Header has Navbar', () => {
        expect(wrapper.find('Navbar').length).toBe(1);
    });

    it('Header has NavbarBrand', () => {
        expect(wrapper.find('NavbarBrand').text()).toContain('Perlego');
    });
});