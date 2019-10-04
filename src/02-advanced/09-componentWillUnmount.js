import React,{Component} from 'react'

class Navbar extends Component{
    render(){
        return <div>
            navbar-<button onClick={()=>{
                this.props.myevent();
            }}>click</button>
        </div>
    }
}

class Sidebar extends Component{
    render(){
        return <div>
            Sidebar
            <ul>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
            </ul>
        </div>
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}

class App extends Component{

    state = {
        isShow:false
    }

    render(){
        return <div>
            
            <Navbar myevent = {()=>{
                this.setState({
                    isShow:!this.state.isShow
                })
            }}/>
            {
                this.state.isShow?
                <Sidebar/>
                :null
            }
        </div>
    }
}

export default App