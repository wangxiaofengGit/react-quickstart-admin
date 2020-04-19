import { LOADING_START, LOADING_END } from '../actions/ActionTypes/types'
const initialState ={
    loading :false
}
export const loadingReducer = (state = initialState , action) =>{
    switch(action.type){
        case LOADING_START:
            return {...state,loading:true}
        case LOADING_END:
            return{...state,loading:false}    
        default : return state    
    }
}
