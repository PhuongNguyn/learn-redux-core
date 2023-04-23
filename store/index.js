import { createStore, combineReducers } from 'redux'
import counterReducer from './counter/reducer'
import userReducer from './user/reducer'
import themeReducer from './theme/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    counterReducer,
    userReducer,
    themeReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store