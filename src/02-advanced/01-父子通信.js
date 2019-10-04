import React,{Component} from 'react'

class Child extends Component{
    state = {
        mychildname :"111111111111"
    }

    render(){
        return <div>
            child
            <button onClick={()=>{
                console.log(this.props.myevent)
                this.props.myevent(this.state.mychildname);
            }}>click</button>
        </div>
    }
}

class App extends Component{
    render(){
        return <div>
            APP
            <Child myevent={(data)=>{
                console.log("我被执行了",data);
            }}/>
        </div>
    }
}

export default App