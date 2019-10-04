const navbarReducers = (prevState=true,action)=>{
    console.log(action);
    let {type,payload} = action // {type:"",payload:""}

    switch(type){
        case "HideMaoYanNavBar":
            return payload;
        case "ShowMaoYanNavBar":
            return payload;
        default:
            return prevState;
    }

    return prevState;
}// 接受老状态，深复制， 返回新状态 ， store 自动被修改

export default navbarReducers