import React from 'react';
import Navbar from './Components/Navbar'
import './App.css';
import {connect} from 'react-redux' // connnect 高阶函数 ，把UI组件包装成容器组件
class App extends React.Component{


  componentWillMount(){
    // 监听store的修改 - 订阅者
    
  }

  render(){
    return <div>
      {
        this.props.isShow?
        <Navbar></Navbar>
        :null
      }
      <section>
      {
        this.props.children
      }
      </section>
    </div>
  }  
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    isShow:state.isShow,
    a:1
  }
}// 把store状态转换成 给UI组件使用的属性

export default connect(mapStateToProps)(App);
