import { handleActions } from 'redux-actions'

const initialState = {
    account: '',
}

export default handleActions({
    'set Account' (state, action) {
        return {
            ...state,
            account: action.payload
        }
    }
}, initialState)