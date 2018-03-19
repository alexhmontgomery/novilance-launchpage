import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import '../styles/App.css'

export default class App extends Component {
  render () {
    return (
      <div className='app-main'>
        <header>
          <h2 className='header-title'>novilance</h2>
        </header>
        <div className='content-container'>
          <h1 className='banner'>COMING SOON</h1>
          <div className='interior-container'>
            <div id='breakline' />
            <div className='tagline-container'>
              <p className='tagline'>Learn by doing. Develop new skills, build "real world" experience, and get paid doing it through freelance work.</p>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    )
  }
}
