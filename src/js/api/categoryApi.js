import { post, del, get, put } from 'core/http'
import { CONSTANTS } from 'core/constants'

/**
* @author Eduard Hallberg
* @param dispatch The dispatcher that will tell the store that we have new stuff
* Get all categories from the API
*/
export function getAllCategories(dispatch) {
    get('/category', (err, categories) => {
        if (!!err) {
            console.warn(err);
        } else {
            dispatch({
                type: CONSTANTS.GOT_ALL_CATEGORIES,
                payload: categories
            });
        }
    });
}