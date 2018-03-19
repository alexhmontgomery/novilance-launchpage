import React, { Component } from 'react'
import config from '../config/main'
import Axios from 'axios'

export default class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      message: '',
      loading: false,
      error: false
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

    this.setState({ loading: true }, () => {
      Axios.post('https://novilance-api.herokuapp.com/launchRegister', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        email: this.state.email
      })
      .then(res => {
        console.log(res)
        if (res.data.success) {
          this.setState({
            loading: false,
            error: false,
            message: res.data.message
          })
        } else {
          this.setState({
            loading: false,
            error: true,
            message: res.data.error.errors[0].message
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: true,
          loading: false,
          message: err.message || err.data.error.errors[0].message
        })
      })
    })
  }

  render () {
    return (
      <div className='form-box'>
        <form onSubmit={this.handleSubmitEmail}>
          {this.state.message && !this.state.error &&
            <div className='form-interior-container'>
              <p className='input-message'><em>{this.state.message}</em></p>
            </div>
          }

          <div className='form-interior-container'>
            <input className='email-input' placeholder='Your email address' name='email' type='email' onChange={this.handleInputChange} value={this.state.email} />
          </div>

          {this.state.message && this.state.error &&
            <div className='form-interior-container'>
              <p className='error-message'><em>Whoops, it looks like there was a problem.</em></p>
              <p className='error-message'><em>{this.state.message}</em></p>
            </div>
          }

          <div className='form-interior-container'>
            {
              !this.state.loading &&
              <button className='submit-btn' type='submit'>GET AN EARLY INVITATION</button>
            }
            {
              this.state.loading &&
              <button className='submit-btn'><i id='loading-icon' className='fa fa-spinner fa-spin' />  SUBMITTING</button>
            }
          </div>
          <div className='form-interior-container'>
            <p className='instructions'>Site is under construction - sign-up to receive an invitation</p>
          </div>
        </form>
      </div>
    )
  }
}
