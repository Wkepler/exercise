import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss' // webpack css-loader
class Navbar extends Component{
    render(){
        return <nav>
             <ul>
                <li><NavLink to="/film" replace activeClassName={css.myactive}>film</NavLink></li>
                <li><NavLink to="/cinema" replace activeClassName={css.myactive}>cinema</NavLink></li>
                <li><NavLink to="/center" replace activeClassName={css.myactive}>center</NavLink></li>
             </ul>   
        </nav>
    } 
}

export default Navbar
