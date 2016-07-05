import React, { Component } from 'react'
import Greeter from './greeter'
import Counter from './counter'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Greeter name='Mike'/>
        <Counter name='Mike'/>
      </div>
    )
  }
}

export default App
