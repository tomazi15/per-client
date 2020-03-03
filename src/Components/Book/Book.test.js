import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Book from './Book';

configure({ adapter: new Adapter() });

const props = {
    book: {
        Contributor1_PersonName: '', 
        Title_DistinctivetitlebookCovertitle_TitleText: '', 
        Location: '',
        Cover_File: '',
    }
}

describe('Does Book Component Render', () => {

    let wrapper = shallow(<Book {...props}/>);

    it('Book render its css class', () => {
        expect(wrapper.find('.Book').length).toBe(1);
    });

    it('Book renders Card component', () => {
        expect(wrapper.find('Card').length).toBe(1);
    });

    it('Book renders CardImg component', () => {
        expect(wrapper.find('CardImg').length).toBe(1);
    });

    it('Book renders CardBody component', () => {
        expect(wrapper.find('CardBody').length).toBe(1);
    });
    it('Book renders CardTitle component', () => {
        expect(wrapper.find('CardTitle').length).toBe(1);
    });
    it('Book renders CardText component', () => {
        expect(wrapper.find('CardText').length).toBe(1);
    });
});