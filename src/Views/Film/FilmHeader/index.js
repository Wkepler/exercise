import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
class FilmHeader extends Component{
    render(){
        // console.log(this.props.isFixed)
        return <div className={css.filmheader+" "+(this.props.isFixed?css.filmheader_active:"")}>
            <ul>
                <li><NavLink to="/film/nowplaying" replace activeClassName={css.active}>正在热映</NavLink></li>
                <li><NavLink to="/film/comingsoon" replace activeClassName={css.active}>即将上映</NavLink></li>
            </ul>
        </div>
    }
}

export default FilmHeader