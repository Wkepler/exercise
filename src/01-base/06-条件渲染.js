import React from 'react'

class App extends React.Component{
    state = {
        isCreated:true
    }
    render(){
        // console.log(this)
        var myhtml =  <div>我是动态创建和删除</div>
        return <div>
            <button onClick={()=>{
                this.setState({
                    isCreated:!this.state.isCreated
                })
            }}>click</button>

            {
                this.state.isCreated?myhtml:null
            }
        </div>
    }


}

//call apply bind

export default App
