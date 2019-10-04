const listReducers = (prevState=[],action)=>{
    console.log(action);
    let {type,payload} = action // {type:"",payload:["111","222","3333","5555"]}

    switch(type){
        case "getList":
            return [...prevState,...payload];
        case "addList":

        case "removeList":

        default:
            return prevState;
    }

    return prevState;
}// 接受老状态，深复制， 返回新状态 ， store 自动被修改

export default listReducers