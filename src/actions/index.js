import { BOOKS_API } from '../api/api';

export const GET_BOOKS_DATA = 'GET_BOOKS_DATA';

export function getBooksData () {
    return async (dispatch) => {

        const response = await fetch(BOOKS_API, { method: 'GET' });
        const products = await response.json();

        dispatch ({
            type: GET_BOOKS_DATA,
            products
        });
    };   
}
