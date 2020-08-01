import {IS_COOKIE_CREATE, IS_COOKIE_DELETE} from "./Types";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initialState ={
    isAuth: cookies.get('Auth')
}

export const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case IS_COOKIE_CREATE:
            cookies.set('Auth', 'Authorized', {path: '/'})
            return {isAuth: cookies.get('Auth')}
        case IS_COOKIE_DELETE:
            return {isAuth: cookies.remove('Auth', {path: '/'})}
        default: return state
    }
}