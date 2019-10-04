import React,{Component} from 'react'
import FilmItem from '../FilmItem'
import axios from 'axios'
class Nowplaying extends Component{
    state = {
        datalist:[]
    }

    componentDidMount(){
        // axios({url:""})
        axios.get("/ajax/movieOnInfoList?token=").then(res=>{
            console.log(res.data);
            this.setState({
                datalist:res.data.movieList
            })
        })
    }

    render(){
        // console.log(this.props)
        return <div>
            Nowplaying    
            {
                this.state.datalist.map(item=> 
                   <FilmItem key={item.id} info={item} /> 
                )   
            }
        </div>
    }
}

export default Nowplaying
