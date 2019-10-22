// * TYPES
import { CREATE_POST, GET_POST } from '../actions/post';

const postDefaultState = {
    title: undefined,
    location: undefined,
    description: undefined,
    imageurl: undefined
}

export default (state = postDefaultState, action) => {
    switch(action.type) {
        case CREATE_POST:
            console.log(CREATE_POST, action)
            return {
                ...state,
                ...action.payload
            }
        case GET_POST:
            console.log(GET_POST, action)
            return {
                post_template: state,
                response_data: [...action.payload]
            }
        default:
            return state;
    }
}