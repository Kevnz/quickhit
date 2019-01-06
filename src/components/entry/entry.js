import React, { Component } from 'react'
import './entry.css'

class EntryBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayCompleted: true,
    }
    this.input = React.createRef()
    this.handleItemEntry = this.handleItemEntry.bind(this)
  }
  handleItemEntry(event) {
    const target = event.target

    if (event.key !== 'Enter') return
    event.preventDefault()
    const value = target.value
    const text = value.trim()
    if (text.length === 0 || text === '') return

    this.props.saveItem({
      id: Date.now(),
      text,
      isDone: false,
    })
    this.input.current.value = ''
  }

  render() {
    return (
      <div className="container-input">
        <input
          className="task-input"
          type="text"
          ref={this.input}
          onKeyPress={this.handleItemEntry}
          placeholder="Add a new task"
        />
      </div>
    )
  }
}

export default EntryBase
