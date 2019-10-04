import { HashRouter as Router,Route,Redirect,Switch } from 'react-router-dom'
import App from '../App'
import Film from '../Views/Film'
import Center from '../Views/Center'
import Login from '../Views/Login'
import Cinema from '../Views/Cinema'
import Detail from '../Views/Detail'
import React from 'react'
import {Provider} from 'react-redux'
import store  from '../Redux'
function isAuth(){
    // 有 token 返回true 没有返回false
    return false;
}


const router = (
    <Provider store = {store}>
        <Router>
            <App>   
                <Switch>
                    {/* <Route path="/film" component={Film} /> */}
                    <Route path="/film" render={()=>
                        <Film>
                        </Film>
                    } />
                    <Route path="/center" render={()=>
                        isAuth()?<Center />:<Redirect to="/center/login"/>
                    } exact/>
                    <Route path="/center/login" component={Login} exact/>
                    <Route path="/cinema" component={Cinema}/>
                    {/* <Route path="/detail" component={Detail} exact/> */}
                    <Route path="/detail/:id" component={Detail} exact/>
                    <Redirect from="/" to="/film"/>
                </Switch>
            </App>
        </Router>
    </Provider>
    )
export default router;

// vue   hash           history
// react HashRouter     BrowserRouter

