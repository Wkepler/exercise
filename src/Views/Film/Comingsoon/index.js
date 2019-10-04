import React,{Component} from 'react'
import store from '../../../Redux'
import {getListDataPromise,getListDataThunk}from './actionCreator'
import FilmItem from '../FilmItem'
import {connect} from 'react-redux'
import {Carousel,ActivityIndicator } from 'antd-mobile'
import axios from 'axios'
class Comingsoon extends Component{

    state = {
        datalist : [],
        looplist : [],
        selectedIndex: 1,
        animating:true
    }

    offset = 0

    myunsubscribe = null;

    componentDidMount(){

        // if(localStorage.getItem("cominglist")){
        //     this.setState({
        //         datalist:JSON.parse(localStorage.getItem("cominglist"))
        //     })
        //     return ;
        // }

       if(this.props.list.length===0){
        this.props.getListDataThunk()
       }
       axios.get("/ajax/mostExpected?ci=65&limit=10&offset=0&token=").then(res=>{
           console.log(res.data);
           this.setState({
               looplist:res.data.coming,
               animating:false
           })

       })
    }

    componentWillUnmount(){
        //取消订阅

        this.myunsubscribe && this.myunsubscribe();
    }

    render(){
        return <div>
            Comingsoon
            <Carousel
                selectedIndex={this.state.selectedIndex}
                dots={false}
                autoplay={false}
                slideWidth={0.3}
                key={this.state.looplist.length}
                afterChange = {this.handleChange}
            >
                {this.state.looplist.map(item =>
                    <div key={item.id}>
                        <img src={item.img.replace('w.h','170.230')} style={{width:'85px',height:'115px'}}/>
                    </div>
                )}
            </Carousel>
            {
                this.props.list.map(item=> 
                   <FilmItem key={item.id} info={item} /> 
                )   
            }    

            <ActivityIndicator
                toast
                text="Loading..."
                animating={this.state.animating}
              />
        </div>
    }

    handleChange = (data)=>{
        console.log(data)
        if(data===this.state.looplist.length-3){
            console.log("新的请求开始了")
            this.offset+=10;
            axios.get(`/ajax/mostExpected?ci=65&limit=10&offset=${this.offset}&token=`).then(res=>{
                console.log(res.data);
                this.setState({
                    looplist:[...this.state.looplist,...res.data.coming],
                    selectedIndex:data
                })
            })
        }   
    }
}
///ajax/mostExpected?ci=65&limit=10&offset=0&token=
//http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=10&token=
//http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=20&token=

const mapStateToProps = (state)=>{
    return {
        list:state.list
    }
}

const mapDispatchToProps = {
    getListDataThunk
}

export default connect(mapStateToProps,mapDispatchToProps)(Comingsoon)
