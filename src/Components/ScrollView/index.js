import React,{Component} from 'react'

function ScrollView(Film){
    // console.log(Film)
    return class ScrollView extends Component{

        state = {
            fixed:false
        }

        componentDidMount(){
            window.onscroll = ()=>{
                // console.log("scorll")
                if(document.documentElement.scrollTop>=100){
                    // console.log("fixed");
                    this.setState({
                        fixed:true
                    })
                }else{
                    this.setState({
                        fixed:false
                    })
                }
            }
        }

        render(){
            return <div>
                我是scrollView 高阶组件(HOC)
                <Film isFixed = {this.state.fixed}/>
            </div>
        }

        componentWillUnmount(){
            // 解绑
            window.onscroll = null;
        }
    }
}


export default ScrollView;