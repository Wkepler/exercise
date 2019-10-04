import React,{Component} from 'react'

const store = {
    list:[],

    subscribe(callback){
        // console.log(callback)
        // 订阅
        this.list.push(callback)
    },
    dispatch(data){
        // 发布
        // callback();
        for(var i in this.list){
            this.list[i](data); //执行函数
        }
    }
}



class Child1 extends Component{
    render(){
        return <div>
            child1我是公众号
            <button onClick={()=>{
                store.dispatch("111111111");
            }}>click</button>
        </div>
    }
}

class Child2 extends Component{
    render(){
        return <div>
            child2我是微信用户
        </div>
    }

    // 订阅？
    componentDidMount(){
        console.log("当前组件挂载到dom")
        store.subscribe((data)=>{
            console.log("收到消息",data)
        })
    }
}

class App extends Component{
    state = {
        myparentname:"222222222222222"
    }

    render(){
        return <div>
            APP
            <Child1/>
            <Child2/>
        </div>
    }
}

export default App