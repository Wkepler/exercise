import React from 'react'

class App extends React.Component{


    state = {
        datalist:["1111","2222","3333"]
    }

    render(){
        // console.log(this)
        return <div>
            <input type="text" ref="mytext"/>
            
            <button onClick={this.handleClick}>add</button>

            {
                //map实现遍历 ES5 map 
                this.state.datalist.map((item,index)=>
                    <li key={item}>
                        {item}--{index}
                        {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}
                        <button onClick={()=>this.handleDelClick(index)}>del</button>
                    </li>
                )
            }
        </div>
    }

    handleClick = ()=>{
        console.log('add',this.refs.mytext.value)

        //this.state.datalist.push(this.refs.mytext.value)
        // 不要直接修改状态， 让setState 帮我们修改

        this.setState({
            datalist:[...this.state.datalist,this.refs.mytext.value]
        })
    }

    handleDelClick = (index)=>{
        console.log(index)
        //  this.state.datalist.splice(index,1)
        // 不要直接修改状态， 让setState 帮我们修改
        var newdatalist = [...this.state.datalist] // 深复制 浅复制
        newdatalist.splice(index,1)
        this.setState({
            datalist:newdatalist
        })
    }
}

export default App


var arr = [11,22,33]
var newarr =arr.map(item=>`<li>${item}</li>`)
console.log(newarr);