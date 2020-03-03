import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BooksContainer } from './BooksContainer';

configure({ adapter: new Adapter() });

const props = {
    books: []
}

describe('Does BooksContainer Component Render', () => {

    let wrapper = shallow(<BooksContainer {...props}/>);

    it('LikeProduct render its css class', () => {
        expect(wrapper.find('.BooksContainer').length).toBe(1);
    });
});