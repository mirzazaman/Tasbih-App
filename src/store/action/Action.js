import { CHANGE_STATE } from '../../constants/Types';

export default function Action(data) {
    return {
        type: CHANGE_STATE,
        payload: data
    }
}
