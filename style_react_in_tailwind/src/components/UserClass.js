import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        
        this.state = {
            count:5,
            count2:10
        }
        console.log(this.props.name+" constructor is called")
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Namastae react")
        }, 1000)
    }
    componentWillUnmount(){
        console.log("the componet will unmount")
        clearInterval(this.timer)
    }
    render(){
        const {count, count2} = this.state
        console.log(this.props.name+"userclass render is called")
        return(
            <div className="user-card">
                <p>count: {count}</p>
                <button onClick={() => {
                    this.setState({
                        count: count+1
                    })
                }}>count Increase</button>
                <p>count2: {count2}</p>
                <h3>Name: {this.props.name}</h3>
                <p>Location: {this.props.location}</p>
                <p>twitter: @akash24</p>
            </div>
        )
    }
}

export default UserClass