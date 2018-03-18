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
          <div id='breakline' />
          <div className='tagline-container'>
            <p className='tagline'>Learn by doing. Develop new skills, build "real world" experience, and get paid doing it through freelance work.</p>
          </div>
          <SignUpForm />
        </div>

        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    )
  }
}
