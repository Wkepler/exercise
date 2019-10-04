import React,{Component} from 'react'
import Nowplaying from './Nowplaying'
import Comingsoon from './Comingsoon'
import {Route,Redirect,Switch } from 'react-router-dom'
import FilmHeader from './FilmHeader'
import ScrollView from '../../Components/ScrollView'
class Film extends Component{
    render(){
        return <div>
            
            <FilmHeader {...this.props}></FilmHeader>
            <Switch>
                <Route path="/film/nowplaying" component={Nowplaying}/>
                <Route path="/film/comingsoon" component={Comingsoon}/>
                <Redirect from="/film" to="/film/nowplaying"/>
            </Switch>
        </div>
    }
}

export default ScrollView(Film) 
/*scollView 高阶组件 

1. 自动监听事件
2. 自动属性注入

*/

