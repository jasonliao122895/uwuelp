import React from 'react';
import { Link } from 'react-router-dom'

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      zipcode: "",
      birth_month: 0,
      birth_day: 0,
      birth_year: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }


  handleDemo(e) {
    e.preventDefault();
    // debugger;
    let demouser = { email: "jasonliao@live.com", password: "123456"};
    this.props.processForm(demouser)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  render() {
    let {formType, errors} = this.props;
    let monthArr = [];
    let daysArr = [];
    let yearsArr = [];
    let restYearArr = [];
    for (let i = 1; i <= 12; i++) {
      monthArr.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      daysArr.push(i)
    }
    for (let i = 40; i <= 99; i++) {
      yearsArr.push(i)
    }
    for (let i = 0; i <= 19; i++) {
      restYearArr.push(i)
    }
    
    return (
      
      <div className="session-form">
        
          <header>
            <span>
              <h3><Link to="/">UwU</Link>></h3>
              <h1><Link to="/">elp</Link></h1>
            </span>
            
          </header>
        <div className="session-main-content">  
          <div className="session-inputs">
            <h2>{formType === "login" ? "Log in to" : "Sign Up for"} UwUelp</h2>
            <p id="new-to-uwuelp">
              {formType === "signup" ? "Connect with great local businesses" : "New to UwUelp?   "}  
              {formType === "login" ? <Link to="/signup">Sign Up</Link> : ""}</p>
            <p>
              {formType === "login" ? "By logging in, " : "By continuing, "}
               you agree to UwUelp's <a href="#"> Terms of Service </a> 
              and <a href="#"> Private Policy </a>.
            </p>
            {formType === "login" ? <button onClick={this.handleDemo} id="demo">Log In as Demo User</button> : ""}
            <fieldset id="or-field">
              <legend>OR</legend>
            </fieldset>
            <form>
              {formType === "signup" ? 
              <input 
                type="text" onChange={this.handleInput('first_name')}
                placeholder="First Name" id="first_name" value={this.state.first_name} />: ""}
              {formType === "signup" ? 
              <input 
                type="text" onChange={this.handleInput('last_name')}
                placeholder="Last Name" id="last_name" value={this.state.last_name}/> : ""}
              <br/>
              <input 
                type="text" id="email" placeholder="Email" onChange={this.handleInput('email')}
                value={this.state.email}/>
              <br/>
              <input type="password" id="pass" placeholder="Password" onChange={this.handleInput('password')}
                value={this.state.password}/>
              <br/>
              {formType === "signup" ? 
              <input type="integer" id="zip" placeholder="Zipcode"
                onChange={this.handleInput('zipcode')} value={this.state.zipcode}/> : ""}
              <br/>
              {formType === "signup" ? 
              <div className="birth-date">
                <label htmlFor="birth-date">Birthday</label>
                <span>    Optional</span>
                <br/>
                <div className="selects">
                  <select onChange={this.handleInput('birth_month')} name="birth-month">
                    <option>Month</option>
                    <option key="1"  value="1">Jan</option>
                    <option key="2"  value="2">Feb</option>
                    <option key="3"  value="3">Mar</option>
                    <option key="4"  value="4">Apr</option>
                    <option key="5"  value="5">May</option>
                    <option key="6"  value="6">Jun</option>
                    <option key="7"  value="7">Jul</option>
                    <option key="8"  value="8">Aug</option>
                    <option key="9"  value="9">Sep</option>
                    <option key="10" value="10">Oct</option>
                    <option key="11" value="11">Nov</option>
                    <option key="12" value="12">Dec</option>
                  </select>
                  <select name="birth-day" onChange={this.handleInput('birth_day')}>
                    <option>Day</option>
                    {daysArr.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select name="birth-year" onChange={this.handleInput('birth_year')}>
                    <option>Year</option>
                    {restYearArr.reverse().map(year => (
                      <option key={2000 + year} value={2000 + year}>{2000 + year}</option>
                    ))}

                    {yearsArr.reverse().map(year => (
                      <option key={1900 + year } value={1900 + year}>{1900 + year}</option>
                    ))} 
                  </select>
                </div>
              </div>
                : ""}
              {formType === "login" ? <div id="forgot-pass"><a href="#">Forgot password?</a></div> : 
              <p id="session-description">
                This site is a clone of yelp with listing of 
                the creator's favorite restaurants and boba spots.
                This is not a replacement for yelp.
              </p> }
             
                <button id="session-button" onClick={this.handleSubmit}>
                    {formType === "signup" ? "Sign Up" : "Log In"}
                </button>
            
            </form>
          </div>
          <div className="session-image">
            <div className="session-image-div">
              <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )

  }
}