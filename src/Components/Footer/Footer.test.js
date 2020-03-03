import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer  from './Footer';

configure({ adapter: new Adapter() });

describe('Does Footer Component Render', () => {

    let wrapper = shallow(<Footer />);

    it('Footer render its css class', () => {
        expect(wrapper.find('.Footer').length).toBe(1);
    });

    it('Footer has Navbar', () => {
        expect(wrapper.find('Navbar').length).toBe(1);
    });

    it('Footer has NavbarBrand', () => {
        expect(wrapper.find('NavbarBrand').length).toBe(1);
    });
});