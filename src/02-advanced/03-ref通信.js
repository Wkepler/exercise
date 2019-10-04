import React,{Component} from 'react'

class Child extends Component{
    state = {
        mychildname :"111111111111"
    }

    render(){
        return <div>
            child
        </div>
    }

    getMoney(data){
        console.log("来自父组件的数据",data)
    }
}

class App extends Component{
    state = {
        myparentname:"222222222222222"
    }

    render(){
        return <div>
            APP
            <Child ref="mychild"/>

            <button onClick={()=>{
                console.log(this.refs.mychild.state.mychildname)

                this.refs.mychild.getMoney(this.state.myparentname)
            }}>click</button>
        </div>
    }
}

export default App