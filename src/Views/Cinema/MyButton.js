import React from 'react'

class MyButton extends React.Component{
    render(){

        console.log(this.props);

        var obj = {
            danger:{background:"red"},
            primary:{background:"blue"}
        }

        return <button style={obj[this.props.type]} onClick={()=>{
            this.props.onClick && this.props.onClick();
        }}>
            {this.props.children}
        </button>
    }
}

export default MyButton