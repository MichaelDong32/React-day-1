import React, { Component } from 'react'

class Greeter extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>How are you getting on today?</h2>
      </div>
    )
  }
}

export default Greeter
