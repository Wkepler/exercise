import React from 'react'

class App extends React.Component{
    render(){
        // console.log(this)
        return <div>
            <input type="text" ref="mytext"/>
            <button onClick={()=>{
                console.log("click1",this.refs.mytext.value)
                
            }}>click1</button>
            <button onClick={this.handleClick2.bind(this)}>click2</button>

            <button onClick={this.handleClick3}>click3</button>
        </div>
    }

    handleClick2(){
        console.log("click2",this.refs.mytext.value)
    }

    handleClick3 = ()=>{
        console.log('click3',this.refs.mytext.value)
    }
}

//call apply bind

export default App

var obj1 = {
    name:"obj1",
    getName(){
        return this.name
    }
}
var obj2 = {
    name:"obj2",
    getName(a,b){
        console.log(a,b)
        return this.name
    }
}

console.log(obj2.getName.call(obj1,"111","222"));// 改变this ,自动执行函数
console.log(obj2.getName.apply(obj1,["111","222"]));// 改变this ,自动执行函数
console.log(obj2.getName.bind(obj1,"111","222")());// 改变this ,返回一个新函数，手动执行函数

class Test{

    constructor(name,age){
        this.name= name
        this.age = age
    }
    name="default name"
    age="default age"

    say=()=>{
        console.log(this.name,this.age)
    }
}
new Test("kerwin",100).say();