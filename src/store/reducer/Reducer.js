import { CHANGE_STATE } from '../../constants/Types';

const initialState = {
    state: true,
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_STATE:
            return {
                state: !action.payload
            };

        default:
            return state;
    }
}