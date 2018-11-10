import React, { Component } from 'react'
import './Login.css'
import twitterLogo from '../twitter.svg'

export default class Timeline extends Component{

  state = {
    username: ''
  }

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { username } = this.state

    localStorage.setItem('@GoTwitter:username', username)

    this.props.history.push('/timeline')

  }

  render = () => (
    <div className="login-wrapper">
      <img src={twitterLogo} alt="GoTwitter"/>
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Nome de usuário"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}