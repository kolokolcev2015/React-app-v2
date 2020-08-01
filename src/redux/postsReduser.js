import {
    CHANGE_COST, CHANGE_COUNT,
    CHANGE_DATE,
    CHANGE_NAME,
    CHANGE_TIME,
    CREATE_POST,
    DELETE_POST,
    GET_DATA,
} from "./Types";

const initialState ={
    posts: []
}

export const postsReducer = (state = initialState,action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([{id: action.payload.id, name: action.payload.name, count: action.payload.count, cost: action.payload.cost, date: action.payload.date,time: action.payload.time }])}
        case DELETE_POST:
            return {posts: state.posts.filter(post => post.id !== action.payload.id) }
        case GET_DATA:
            return {posts: action.payload}
        case CHANGE_NAME:
            return {posts: state.posts.map(todo => todo.id !== action.payload.id ? todo : {...todo,name: action.payload.value})}
        case CHANGE_COST:
            return {posts: state.posts.map(todo => todo.id !== action.payload.id ? todo : {...todo,cost: action.payload.value})}
        case CHANGE_COUNT:
            return {posts: state.posts.map(todo => todo.id !== action.payload.id ? todo : {...todo,count: action.payload.value})}
        case CHANGE_DATE:
            return {posts: state.posts.map(todo => todo.id !== action.payload.id ? todo : {...todo,date: action.payload.value})}
        case CHANGE_TIME:
            return {posts: state.posts.map(todo => todo.id !== action.payload.id ? todo : {...todo,time: action.payload.value})}
        default: return state
    }
}