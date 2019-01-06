import React, { Component, Fragment } from 'react'
import './toggle.css'

class ToggleBase extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event) {
    event.preventDefault()
    const newVal = !this.props.showCompleted
    this.props.toggleItems(newVal)
  }

  render() {
    const message = this.props.showCompleted ? (
      <Fragment>
        <i className="fa fa-eye" /> Hide Completed
      </Fragment>
    ) : (
      <Fragment>
        <i className="fa fa-eye-slash" /> Show Completed
      </Fragment>
    )
    return (
      <div className="container-toggle">
        <a href="/toggle" className="toggle" onClick={this.handleInputChange}>
          {message}
        </a>
      </div>
    )
  }
}

export default ToggleBase
