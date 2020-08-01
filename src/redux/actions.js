import {
    CHANGE_COST,
    CHANGE_COUNT, CHANGE_DATE,
    CHANGE_NAME,
    CHANGE_TIME,
    CREATE_POST,
    DELETE_POST,
    GET_DATA,
    IS_COOKIE_CREATE,
    IS_COOKIE_DELETE,
} from "./Types";
import {
    AddItem,
    changeCost,
    changeCount, changeDate, changeName, changeTime,
    DelItem,
} from "../API/api";

 export function createPost(name,count,cost){
    let id = Date.now();
    let todayDate = new Date();
    let currYear = todayDate.getFullYear();
    let currMonth = todayDate.getMonth()+1;
     if (currMonth > 0 && currMonth < 10) currMonth = '0'+currMonth
    let currDay = todayDate.getDate();
    if (currDay > 0 && currDay < 10) currDay = '0'+currDay
    let hours = todayDate.getHours()+':'+todayDate.getMinutes();
    let date = currDay+'.'+currMonth+'.'+currYear;
    let time = hours;
    AddItem(id,name,count,cost,date,time).then(r => r);
 return{
        type: CREATE_POST,
        payload: {id,name,count,cost,date,time}
    }
}

export function deletePost(id) {
     DelItem(id).then (request => request)
    return{
        type: DELETE_POST,
        payload: {id}
    }
}

export function isAuth() {
    return{
        type: IS_COOKIE_CREATE
    }
}
export function isNotAuth() {
    return{
        type: IS_COOKIE_DELETE
    }
}
export function getData(data) {

     return{
        type: GET_DATA,
        payload: data
    }
}

export function changeData(type,id,value) {
     switch (type){
        case CHANGE_NAME:
            changeName(id,value).then(r => r)
            return{ type: type,payload: { id, value } }

        case CHANGE_COUNT:
            changeCount(id,value).then(r => r)
            return{ type: type,payload: { id, value } }

        case CHANGE_COST:
            changeCost(id,value).then(r => r)
            return{ type: type,payload: { id, value } }

        case CHANGE_DATE:
            changeDate(id,value).then(r => r)
            return{ type: type,payload: { id, value } }

         case CHANGE_TIME:
             changeTime(id,value).then(r => r)
             return{ type: type,payload: { id, value } }

        default: console.log("error")
    }

}
