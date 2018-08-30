import { handleActions } from 'redux-actions'

const initialState = {
    topBackground: false,
}

export default handleActions({
    'set topBackground' (state, action) {
        return {
            ...state,
            topBackground: action.payload
        }
    }
}, initialState)