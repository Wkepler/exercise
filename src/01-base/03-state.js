import React from 'react'

class App extends React.Component{

    // data(){return {name:"kerwin"}}

    constructor(){
        super()
        // this.state = {
        //     myname:"kerwin",
        //     myage:100
        // }
        this.a = "2222"
    }

    state = {
        myname:"kerwin",
        myage:100
    }

    render(){
        // console.log(this)
        return <div>
            {this.state.myname}--{this.state.myage}
           <button onClick={()=>{
            //    this.state.myname= "xiaoming" // es5 get set拦截
            this.setState({
                myname:"xiaoming",
                myage:18
            })// 不要直接修改状态， 让setState 帮我们修改
          }}>click</button>
        </div>
    }

}

//call apply bind

export default App

