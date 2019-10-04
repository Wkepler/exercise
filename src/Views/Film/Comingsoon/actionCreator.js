import axios from 'axios'
function getListDataPromise(){

    return axios.get("/ajax/comingList?ci=65&token=&limit=10").then(res=>{
        console.log(res.data)
        return {type:"getList" ,payload:res.data.coming}
    })
}

function getListDataThunk(){

    return (dispatch)=>{
        axios.get("/ajax/comingList?ci=65&token=&limit=10").then(res=>{
            console.log(res.data)
            dispatch({type:"getList" ,payload:res.data.coming})
        })
    }
}


export {getListDataPromise,getListDataThunk};

