import React,{Component} from 'react'
import {PullToRefresh} from 'antd-mobile'
class Login extends Component{

    state = {
        datalist:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        down:false,
        refreshing:false
    }

    render(){
        return <div>
             <PullToRefresh
                damping={60}
                
                style={{
                height: '300px',
                overflow: 'auto',
                }}
                indicator={this.state.down ? {} : { deactivate: '111上拉可以刷新' }}
                direction={this.state.down ? 'down' : 'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    console.log("到底 了")
                    this.setState({
                        refreshing:true
                    })
                    // axios.get("")
                    setTimeout(()=>{
                        this.setState({
                            refreshing:false,
                            datalist:[...this.state.datalist,...[15,16,17,18,19,20]]
                        })
                    },1000)
                }}
            >
                {this.state.datalist.map( (item,index) => (
                    <div key={index}>{item}</div>
                ))}
            </PullToRefresh>
        </div>
    }
}

export default Login