import React,{Component} from 'react'
import {withRouter} from 'react-router'
import css from './index.module.scss'
class FilmItem extends Component{
    render(){
        var item = this.props.info
        return <li onClick={()=>this.changePage(item.id)} className={css.item}>
            <img src={item.img.replace('w.h','128.180')} alt={item.nm}/>
            <h3>{item.nm}</h3>
        </li>
    }

    changePage = (id)=>{
        // console.log(this.props)
        //1- 路由传参
        this.props.history.push(`/detail/${id}`)

        // 2- state传参
        // this.props.history.push({pathname:"/detail",state:{myid:id}});
        // 3-query 传参
        // this.props.history.push({pathname:"/detail",query:{myid:id}});
    }
}

export default withRouter(FilmItem)
//withROuter 是一个高阶函数， 输入低阶组件， 生成高阶组件（FilmItem是孩子）