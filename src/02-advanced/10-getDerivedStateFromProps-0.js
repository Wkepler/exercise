import React,{Component} from 'react'

class App extends Component{

    state = {
        datalist:["111","222","3333"]
    }

    // componentWillMount(){
    //     console.log("componentWillMount")

    // }

    static getDerivedStateFromProps(data){
        console.log("getDerivedStateFromProps",data)
        return {
            datalist:["4444",'5555',"66666"]
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
       
    }

    render(){
        console.log("render")
        return (
            <div>
                {
                    this.state.datalist.map(item=>
                        <li key={item}>
                            {item}
                        </li> 
                    )
                }
            </div>
        )
    }

    
}

export default App;