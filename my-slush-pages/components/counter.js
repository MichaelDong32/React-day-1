import React, { Component } from 'react'
import Greeter from './greeter'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {count : 0}
  }

  increaseCounter (){
    this.setState({count: this.state.count +1})
  }

  decreaseCounter (){
    this.setState({count: this.state.count -1})
  }

  render () {
    return (
      <div>
        <h2>My count is : {this.state.count}</h2>
        <button onClick = {this.increaseCounter.bind(this)}>ADD</button>
        <button onClick = {this.decreaseCounter.bind(this)}>DECREASE</button>
        <Greeter name={this.props.name}/>
      </div>
    )
  }
}


export default Counter
