import { GET_BOOKS_DATA } from '../actions';

const getBooksReducer = (state = [], action) => {
    switch (action.type) {
        case GET_BOOKS_DATA:
            return state = action.products;    
        default:
            return state    
    }
}

export default getBooksReducer;