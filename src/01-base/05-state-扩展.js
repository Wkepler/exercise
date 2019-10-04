import React from 'react'

class App extends React.Component{

    // data(){return {name:"kerwin"}}

    state = {
        count:0
    }

    render(){
        // console.log(this)
        return <div>
            {this.state.count}
            <button onClick={()=>{
                this.setState({
                     // 不要直接修改状态， 让setState 帮我们修改
                    count:this.state.count+1
                },()=>{
                    console.log("所有的状态更新完了，所有dom渲染完了")
                    console.log(this.state.count);
                    console.log("new Swiper() 地方")
                })
                // setState 异步修改状态 
                // setState 之后做了什么？ 创建虚拟dom,diff 对比老的虚拟dom. 生成patch 更新真实节点
                console.log(this.state.count) 

                //vue $nextTick
            }}>add</button>

            <button onClick={this.handleClick2}>add2</button>
            <button onClick={this.handleClick3}>add3</button>
        </div>
    }

    handleClick2 = ()=>{
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }
        })
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }
        })
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }
        })
        //加到队列
    }

    handleClick3 = ()=>{
        this.setState({
            count:this.state.count+1
        })
        
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1
        })

        //合并操作，只执行一次 虚拟dom，diff对比
    }


}

//call apply bind

export default App

