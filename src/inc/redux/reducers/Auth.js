import {OptCookie} from "../../helpers/Cookies";
import {LStorage} from "../../helpers/LStorage";

const initialState = {
    user:null,
    token:null,
    isAuthenticated: false,
    loading: true
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch (type){
        case "IS_LOGIN":
            LStorage('set','token', payload.token)
            OptCookie("set", "token", payload.access_token, payload.expires_in_minute)
            OptCookie("set", "user", JSON.stringify(payload.user), payload.expires_in_minute)
            window.location.replace('/' );
            return{
                    ...state,
                    user: payload.user,
                    token:payload.token,
                    isAuthenticated: true,
                    loading: false,
                }
        case "IS_LOGIN_ERROR":
            return{
                ...state,
                user: null,
                token:null,
                isAuthenticated: false,
                loading: false,
            }
        case "USER_LOADED":
            return{
                user: payload.user,
                token:payload.token,
                isAuthenticated: true,
                loading: false,
            }
        case "USER_LOADED_ERROR":
            return{
                ...state,
                user: null,
                token:null,
                isAuthenticated: false,
                loading: false,
            }
        default:
            return state;
    }
}
