import { createStore, combineReducers } from 'redux'
import { authReducer } from '../Reducers/AuthReducer'

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(reducers)