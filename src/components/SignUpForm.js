import React, { Component } from 'react'
import config from '../config/main'

export default class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      message: '',
      loading: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitEmail = this.handleSubmitEmail.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmitEmail (event) {
    event.preventDefault()
    // this.setState({
    //   loading: true
    // })
    console.log(this.state)

    fetch(`${config.server}/launchinquiry`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(json => {
      console.log(json)
      // this.setState({
      //   loading: false
      // })
      if (json.success === true) {
        this.setState({
          message: 'Thank you! We are so excited to show you what we are building!'
        })
      } else {
        this.setState({
          message: json.message || json.error.errors[0].message
        })
      }
    })
  }

  render () {
    return (
      <div className='Form'>
        <form onSubmit={this.handleSubmitEmail}>
          {this.state.message &&
            <div>
              <p>{this.state.message}</p>
            </div>
          }
          <input placeholder='Your email address' type='email' name='email' onChange={this.handleInputChange} value={this.state.email} />
          <button type='submit'>GET AN EARLY INVITATION</button>
        </form>
      </div>
    )
  }
}
