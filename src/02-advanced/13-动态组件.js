import React,{Component} from 'react'

class Clothes extends Component{
    render(){
        return <div>衣服组件</div>
    }
}

class Computer extends Component{
    render(){
        return <div>电脑组件</div>
    }
}


class Phone extends Component{
    render(){
        return <div>phone组件</div>
    }
}



class App extends Component{

    state = {
        current:0
    }

    render(){
        return (
            <div>   
              <ul>
                  <li onClick={()=>{
                      this.setState({
                          current:0
                      })
                  }}>衣服</li>
                  <li onClick={()=>{
                      this.setState({
                          current:1
                      })
                  }}>电脑</li>
                  <li onClick={()=>{
                      this.setState({
                          current:2
                      })
                  }}>手机</li>
              </ul>

              {
                  this.switchComponent()
              }
            </div>
        )
    }

    switchComponent(){
        switch(this.state.current){
            case 0:
                return <Clothes/>
            case 1:
                return <Computer/>
            case 2:
                return <Phone/>
        }
    }


}

export default App;