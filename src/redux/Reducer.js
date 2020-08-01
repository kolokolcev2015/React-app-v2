import {combineReducers} from "redux";
import {postsReducer} from "./postsReduser";
import {authReducer} from './authReducer'

export const Reducer = combineReducers({
    posts: postsReducer,
    auth: authReducer
})