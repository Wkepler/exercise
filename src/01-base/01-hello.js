import React,{Component} from 'react'
import './css/01-hello.css' // css-loader 
class Child1 extends Component{
    render(){
        var aaa="kerwin";
        var bbb = "xiaoming"
        var myclass = "active"
        return <div className={'box ' + myclass}>
            child1 component
            {10+20}
            {10>20?aaa:bbb}
            <div style={{color:"yellow"}}>22222222</div>
        </div>
    }
}

function Child2(){
    var styleobj = {
        backgroundColor:"yellow",
        color:"red"
    }
    return <div style={styleobj}>child2 component</div>
}


class App extends Component{

    render(){
        // 生命周期 -- template
        return ( 
            <div>
                hello react111
                <ul>
                    <li>111</li>
                    <li>222</li>
                </ul>
                <Child1 />
                {
                    //单行注释
                    /*多行注释 */
                }
                <Child2 />
            </div>
        )
    }
}

export default App