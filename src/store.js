import { createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { loadingReducer } from './reducers/baseLoading'
const rootStore = combineReducers({
    loadingReducer
})
export default createStore(rootStore,applyMiddleware(thunk))