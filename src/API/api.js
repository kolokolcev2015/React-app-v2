import axios from 'axios'

export const getRequestPassword = (password) => {
    return axios
        .get('http://192.168.56.1/WebApplication1/Home/AuthReact',{
            params: { pass : password }
        })
        .then(request => request)
}

export const getList = () =>{
    return axios
        .get('http://192.168.56.1/WebApplication1/Home/getList')
        .then(request => request)
}
export const getSearchName = (name) =>{
    return axios
        .get('http://192.168.56.1/WebApplication1/Home/getSearchName',{
            params:{ name: name }
        })
        .then(request => request)
}

export const AddItem = (id,name,count,cost,date,time) =>{
    return axios
        .post('http://192.168.56.1/WebApplication1/Home/AddProduct',{
            id : id,
            name : name,
            count : count,
            cost : cost,
            date : date,
            time: time

        })
}
export const DelItem = (id) =>{
    return axios
        .delete('http://192.168.56.1/WebApplication1/Home/DelProduct?id='+id)
}

export const changeName = (id,value) =>{
    return axios.put("http://192.168.56.1/WebApplication1/Home/changeName?id="+id+"&value="+value)
}
export const changeCount = (id,value) =>{
    return axios.put("http://192.168.56.1/WebApplication1/Home/changeCount?id="+id+"&value="+value)
}
export const changeCost = (id,value) =>{
    return axios.put("http://192.168.56.1/WebApplication1/Home/changeCost?id="+id+"&value="+value)
}
export const changeDate = (id,value) =>{
    return axios.put("http://192.168.56.1/WebApplication1/Home/changeDate?id="+id+"&value="+value)
}
export const changeTime = (id,value) =>{
    return axios.put("http://192.168.56.1/WebApplication1/Home/changeTime?id="+id+"&value="+value)
}

