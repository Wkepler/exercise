import React,{PureComponent} from 'react'

class App extends PureComponent{

    state = {
        myname:"xiaoming",
        date:100
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
                倒计时{this.state.date}
            </div>
        )
    }

    componentDidMount(){
        setInterval(()=>{
        
            this.setState({
                date:this.state.date-1
            })
        },1000)
    }
    
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

}

export default App;