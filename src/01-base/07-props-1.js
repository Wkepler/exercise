import React,{Component} from 'react'
import KerwinPropTypes from 'prop-types'
// console.log(KerwinPropTypes)
class Navbar extends Component{

    static propTypes = {
        mytext:KerwinPropTypes.string,
        myshow:KerwinPropTypes.bool
    } //属性验证 必须是 类属性

    static defaultProps = {
        mytext:"默认的text",
        myshow:true
    } //默认属性 必须是 类属性


    render(){
        return <div>
            Navbar - {this.props.mytext}--{this.props.myshow}

            {
                this.props.myshow?
                <button>home</button>
                :null
            }
        </div>
    }
}
// props ：{mytext:String}


class App extends Component{
    render(){
        var obj = {
            mytext:"11111",
            myshow : false
        }

        return <div>
            <Navbar />
            <Navbar mytext="home" myshow="false"/>
            <Navbar mytext="list" myshow={true}/>
            <Navbar mytext="shopcar" myshow={true}/>

            <Navbar {...obj}/>
        </div>
    }
}

export default App


class Test {
    myname = "aaaaaaaaaaa" // 实例属性
    static myname = "bbbbbb" // 类属性
    getName(){
        console.log(this.myname)
    }
}

var obj = new Test()
obj.getName();
console.log(Test.myname)
