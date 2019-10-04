import React,{Component} from 'react'
import './css/01-hello.css'
class Tabbar1 extends Component{
    state  = {
        datalist:["111","222","333"]
    }
   

    render(){
        return <div>
            <ul>
                {
                    this.state.datalist.map((item,index)=>
                        <li key={item} className={index===0?'active':''}>{item}</li>    
                    )
                }
            </ul>
        </div>
    }
}
// props ：{mytext:String}



class App extends Component{
    render(){
        

        return <div>
            <Tabbar1/>
        </div>
    }
}

export default App