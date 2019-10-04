import React,{Component} from 'react'

class Navbar extends Component{
    render(){
        return <div>
            navbar
            {this.props.children}
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
}

class App extends Component{

    state = {
        isShow:false
    }

    render(){
        return <div>
            
            <Navbar>
                <button onClick={()=>{
                    this.setState({
                        isShow:!this.state.isShow
                    })
                }}>click</button>
            </Navbar>
            {
                this.state.isShow?
                <Sidebar/>
                :null
            }
        </div>
    }
}

export default App