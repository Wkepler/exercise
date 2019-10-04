import React,{Component} from 'react'

class Child extends Component{

    state = {
        
    }

    componentDidMount(){
        console.log("componentDidMount-利用传来的id axios取新数据",this.props.myid)
    }

    render(){
        return <div>child-{this.props.myid}</div>
    }

    static getDerivedStateFromProps(nextProps){
        console.log("getDerivedStateFromProps-利用传来的id axios取新数据",nextProps.myid)
        return null
    }


    // componentWillReceiveProps(nextProps){
    //     console.log("componentWillReceiveProps-利用传来的id axios取新数据",nextProps.myid)
    // }

}


class App extends Component{

    state = {
        datalist:[
            {
                text:"衣服",
                id:1
            },
            {
                text:"电脑",
                id:2
            },
            {
                text:"手机",
                id:3
            }
        ],
        id:1
    }

    render(){
        console.log("render")
        return (
            <div>   
                <ul>
                  {
                      this.state.datalist.map(item=>
                        <li key={item.id} onClick={()=>{
                            console.log(item.id)
                            this.setState({
                                id:item.id
                            })
                        }}>{item.text}</li>    
                    )
                  }
                </ul>

                <Child myid={this.state.id}/>
            </div>
        )
    }
}

export default App;