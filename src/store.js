import { createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { loginReducer } from './reducers/login'
import { loadingReducer } from './reducers/base'
const rootStore = combineReducers({
    loginReducer,
    loadingReducer
})
export default createStore(rootStore,applyMiddleware(thunk))