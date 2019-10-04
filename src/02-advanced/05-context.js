import React,{Component} from 'react'
import GlobalContext from './context'

class Child1 extends Component{
    render(){
        return (
            <GlobalContext.Consumer>
                {
                    (context)=><div>
                        child1我是公众号-{context.text}
                        <button onClick={()=>{
                            context.setText("来自child1的问候")
                        }}>click</button>
                    </div>
                }
            </GlobalContext.Consumer>
        )
    }
}

class Child2 extends Component{
    render(){
        return <GlobalContext.Consumer>
            {
                (context)=><div>
                        child2我是微信用户-{context.text}
                    </div>
            }
        </GlobalContext.Consumer>
    }
}

class App extends Component{
    
    state = {
        info:"1111111111111111"
    }

    render(){
        return (
        <GlobalContext.Provider value={{
            text:this.state.info,
            setText:(data)=>{
                this.setState({
                    info:data
                })
            }
        }}>
            <div>
                APP
                <Child1/>
                <Child2/>
            </div>
        </GlobalContext.Provider>
        )
    }
}

export default App