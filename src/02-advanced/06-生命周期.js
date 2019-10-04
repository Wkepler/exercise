import React,{Component} from 'react'

class App extends Component{

    state = {
        datalist:[]
    }

    componentWillMount(){
        console.log("componentWillMount")

    }

    componentDidMount(){
        console.log("componentDidMount")
        fetch("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1264119",{
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>res.json()).then(res=>{
            console.log(res);
            this.setState({
                datalist:res.data.films
            })// setState之后， 会执行更新 
        })
    }

    render(){
        console.log("render")
        return (
            <div>
                {
                    this.state.datalist.map(item=>
                        <li key={item.filmId}>
                            <img src={item.poster} alt={item.name}/>
                            <p>{item.name}</p>
                        </li> 
                    )
                }
            </div>
        )
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;//应该更新
        // return false 
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}

export default App;