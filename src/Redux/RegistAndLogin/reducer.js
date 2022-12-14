import * as types from './type';

const initialState = {
    loading : false,
    currentUser : null,
    error:null
}


const userReducer = (state = initialState ,action) => {
    switch (action.type){
        case types.REGISTER_START:
            return {
                ...state,
                loading:true,
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                  loading:false,
                  currentUser:action.payload,
            };
        case types.REGISTER_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}


export default userReducer;


        /*case types.LOGIN_START:
            return {
                ...state,
                loading:true,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                    loading:false,
                    currentUser:action.payload,
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            };*/
