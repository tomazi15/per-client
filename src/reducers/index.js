import getBooksReducer from './getBooksReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    books: getBooksReducer
});

export default rootReducer;