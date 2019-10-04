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
        return null
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
                <button onClick={()=>{
                    this.setState({
                        datalist:["7777","888","999"]
                    })
                }}>
                    click
                </button>
            </div>
        )
    }


    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate","记录dom的状态")
        return {
            x:100,
            y:100
        };
    }
    
    componentDidUpdate(prevprops,prevstate,data){
        console.log("componentDidUpdate",data);
    }
    
}

export default App;