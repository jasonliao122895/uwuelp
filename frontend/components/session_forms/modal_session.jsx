import React from 'react';

export default class ModalSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidUpdate() {
    debugger
  }

  handleEmail(email) {
    let emailArr = email.split('');
    setInterval(() => {
      if (emailArr.length > 0) {
        this.setState({
          email: this.state.email + emailArr.shift()
        })
      }
    }, 50)
  }

  handlePass(pass) {
    let passArr = pass.split('');
    setInterval(() => {
      if (passArr.length > 0) {
        this.setState({
          password: this.state.password + passArr.shift()
        })
      }
    }, 50)
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    })
    let email = "jasonliao@live.com"
    let pass = "123456"
    this.handleEmail(email);
    setTimeout(() => {
      this.handlePass(pass);
    }, 1000)
    setTimeout(() => {
      this.props.signin(this.state)
        .then(() => {
          this.props.closeModal()
        })
    }, 1400)
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]:  e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state)
      .then(() => {
        this.props.closeModal()
      })
  }

  handleClose(e) {
    e.preventDefault()
    const body = document.querySelector('body');
    body.classList.remove('modal-open')
    this.props.closeModal();
  }

  render() {
    return (


      <div className="modal-session-container">
        <h2>Login to post your review</h2>
        <button className="modal-sess-close-but" onClick={this.handleClose}><img src={window.closeBut} alt=""/></button>
        <button onClick={this.handleDemo} id="demo">Log In as Demo User</button> 
        <form>
          
          <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')} />
          <br/>
          
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
          <br/>
          <button className="modal-login-button" onClick={this.handleSubmit}>Login</button>
        </form>

      </div>


    )
  }
} 