import React,{Component} from 'react'
import axios from 'axios'
import {HideNavbarActionCreator,ShowNavbarActionCreator} from './actionCreator'
import {connect} from 'react-redux'
class Detail extends Component{
    state = {
        filmInfo:null
    }

    componentWillMount(){
        // 发布者
        // store  isshow false
        // store.dispatch(HideNavbarActionCreator())
        this.props.HideNavbarActionCreator();
    }

    componentWillUnmount(){
        // store isshow true
        // store.dispatch(ShowNavbarActionCreator())
        this.props.ShowNavbarActionCreator();
    }


    componentDidMount(){
        //1 -动态路由获取参数
        console.log(this.props.match.params.id);
        
        //2- state获取参数
        // console.log(this.props.location.state.myid)

        //3- query获取参数
        // console.log(this.props.location.query.myid)
    
        axios.get( `/ajax/detailmovie?movieId=${this.props.match.params.id}`).then(res=>{
            console.log(res.data)
            
            this.setState({
                filmInfo:res.data.detailMovie
            })
        })
    }

    render(){
        var filmInfo = this.state.filmInfo
        return <div>
            {
                filmInfo?
                <div>
                    <img src={filmInfo.img.replace('w.h','128.180')} alt={filmInfo.nm}/>
                    <h3>{filmInfo.nm}</h3>
                </div>
                :null
            }
        </div>
    }
}

const mapStateToProps =null
const mapDispatchToProps = {
    HideNavbarActionCreator,
    ShowNavbarActionCreator
}

export default connect(null,mapDispatchToProps)(Detail)