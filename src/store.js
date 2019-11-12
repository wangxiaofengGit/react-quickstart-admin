import { createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { loginReducer } from './reducers/login'
const rootStore = combineReducers({
    loginReducer
})
export default createStore(rootStore,applyMiddleware(thunk))