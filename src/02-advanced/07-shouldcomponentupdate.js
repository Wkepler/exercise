import React,{Component} from 'react'

class App extends Component{

    state = {
        myname:"xiaoming"
    }


    render(){
        console.log("render")
        return (
            <div>   
                {this.state.myname}
                <button onClick={()=>{
                    this.setState({
                        myname:"kerwin"
                    })
                }}>click</button>

            </div>
        )
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",this.state.myname,nextState)
        if(nextState.myname===this.state.myname){
            return false;
        }
        return true;//应该更新
        // return false 
    }
    
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}

export default App;