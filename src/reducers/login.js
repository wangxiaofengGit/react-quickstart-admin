const initialState ={
    loginTag :false
}
export const loginReducer = (state = initialState , action) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state,loginTag:true}
        case 'SIGN_OUT':
            return{...state,loginTag:false}    
        default : return state    
    }
}