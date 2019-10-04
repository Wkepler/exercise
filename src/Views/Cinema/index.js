import React,{Component} from 'react'
// import { Button ,Modal,Carousel } from 'antd';
import MyButton from './MyButton'
import {Button,Carousel} from 'antd-mobile'
import './index.scss'
class Cinema extends Component{

    state = {
        visible:false,
        datalist:["1111","2222","3333"]
    }

    render(){
        return <div>
            <Button type="warning">add</Button>

            <Carousel
                autoplay={true}
                infinite
                slideWidth={0.5}
                >
                
                {this.state.datalist.map(item =>
                    <div key={item}>{item}</div>
                )}
                
            </Carousel>
            {/* <Button type="primary" onClick={()=>{
                console.log("primary")
            }}>Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>

            <MyButton type="primary" onClick={()=>{
                console.log("111111111111")
                this.setState({
                    visible:true
                })
            }}>primary</MyButton>
            <MyButton type="danger">danger</MyButton>


            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Modal>

                <Carousel autoplay>
                    <div>
                    <h3>1</h3>
                    </div>
                    <div>
                    <h3>2</h3>
                    </div>
                    <div>
                    <h3>3</h3>
                    </div>
                    <div>
                    <h3>4</h3>
                    </div>
                </Carousel> */}
        </div>
    }
}

export default Cinema