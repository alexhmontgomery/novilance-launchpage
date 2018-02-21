import React, { Component } from 'react'

export default class SignUpForm extends Component {
  render () {
    return (
      <div className='Form'>
        <form>
          <input placeholder='Your email address' />
          <button>GET AN EARLY INVITATION</button>
        </form>
      </div>
    )
  }
}
