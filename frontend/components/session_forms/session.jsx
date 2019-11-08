import React from 'react';
import { Link } from 'react-router-dom'
import { setInterval } from 'timers';



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
      birth_year: 0,
      city: "",
      state: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.handleZipToLocation();
    let errors = document.getElementsByClassName('errors');
    errors = Array.from(errors)
    
      errors.forEach(error => {
        error.classList.add('hide');
      })
   
  }


  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
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
      this.props.processForm(this.state)
    }, 1400)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    let errors = document.getElementsByClassName('errors');
    errors = Array.from(errors)
    errors.forEach(error => {
      error.classList.remove('hide');
    })
    setTimeout(() => {
      errors.forEach(error => {
        error.classList.add('hide');
      })
    },2500)
  }


  handleZipToLocation() {
    const zipcode = document.getElementById('zip');
    let that = this;
    if (zipcode) {
      zipcode.addEventListener('blur', () => {
        const zip = zipcode.value;
        let city = '';
        let state = '';
  
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + "&key=AIzaSyBTJsPAfSXLLdny4VZi-j5qbasNYRLn3WY").success(function (response) {
          
          let address_components;
  
          if (response.results[0]) {
            address_components = response.results[0].address_components;
            city = address_components[1].long_name;
            state = address_components[3].short_name;
          }
          
          $('#city').val(city);
          that.setState({city})
          $('#state').val(state);
          that.setState({state})
        });
  
      })

    }

  }

  render() {
    let {formType} = this.props;
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
    
    let emailError = "";
    let passwordError = "";
    let zipcodeError = "";
    let firstNameError = "";
    let lastNameError = "";
    let invalidError = ""

    if (this.props.errors) {
      this.props.errors.forEach(error => {
        if (error.includes('First')) firstNameError += error;
        if (error.includes('Last')) lastNameError += error;
        if (error.includes('Email')) emailError += error;
        if (error.includes('Zipcode')) zipcodeError += "  Zipcode must be valid";
        if (error.includes('Password')) passwordError += error;
        if (error.includes('Invalid')) invalidError += error;
      })
    }
    

    let zipcodeErrorArr = zipcodeError.split('  ');
    if (zipcodeErrorArr) {
      zipcodeError = zipcodeErrorArr[1];
    }

    return (
      
      <div className="session-form">
        
          <header>
            <Link id="sess-head" to="/">
            <span><h3>UwU</h3></span>
              <h1>elp</h1>  
            </Link>
          </header>
        <div className="session-main-content">  
          <div className="session-inputs">
            <h2>{formType === "login" ? "Log in to" : "Sign Up for"} UwUelp</h2>
            <p id="new-to-uwuelp">
              {formType === "signup" ? "Connect with great local businesses" : "New to UwUelp?   "}  
              {formType === "login" ? <Link to="/signup">Sign Up</Link> : ""}</p>
            <p className="toa">
              {formType === "login" ? "By logging in, " : "By continuing, "}
               you agree to UwUelp's <a href="#"> Terms of Service </a> 
              and <a href="#"> Private Policy </a>.
            </p>
            {formType === "login" ? <button onClick={this.handleDemo} id="demo">Log In as Demo User</button> : ""}
            <fieldset id="or-field">
              <legend>OR</legend>
            </fieldset>
            <form className="actual-session-form">
              <div id="name-div">
                {formType === "signup" ? 
                <div>
                  <input 
                    type="text" onChange={this.handleInput('first_name')}
                    placeholder="First Name" id="first_name" value={this.state.first_name} 
                  />
                  <p className="errors">{firstNameError}</p>
                  <div className="errors-div hide"></div>
                </div>
                  : ""}
                {formType === "signup" ? 
                <div>
                  <input 
                    type="text" onChange={this.handleInput('last_name')}
                    placeholder="Last Name" id="last_name" value={this.state.last_name}
                  />
                  <p className="errors">{lastNameError}</p>
                  <div className="errors-div hide"></div>
                </div> : ""}
              </div>
            
              <br/>
              <input 
                type="text" id="email" placeholder="Email" onChange={this.handleInput('email')}
                value={this.state.email}/>
              {formType === "signup" ? 
              <div>
                <p className="errors">{emailError}</p> 
                <div className="errors-div hide"></div>
              </div>
              : ""}
              {formType === "login" ? 
              <div>
                <p className="errors">{invalidError}</p> 
                <div className="errors-div"></div>
              </div>
              : ""}
              <br/>
              <input type="password" id="pass" placeholder="Password" onChange={this.handleInput('password')}
                value={this.state.password}/>
              {formType === "signup" ? 
              <div>
                <p className="errors">{passwordError}</p> 
                
              </div>
                : "" }

              
              <br/>
              {formType === "signup" ? 
              <div>
                <input type="integer" id="zip" placeholder="Zipcode"
                  onChange={this.handleInput('zipcode')} value={this.state.zipcode}
                />
                <p className="errors">{zipcodeError}</p>
              </div> : ""}
              <br/>

              {formType === "signup" ? 
              <div className="birth-date">
                <label htmlFor="birth-date">Birthday</label>
                <span>    Optional</span>
                <br/>
                <div className="selects">
                  <select onChange={this.handleInput('birth_month')} name="birth-month" >
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
              {formType === "signup" ? 
                <div className="sign-link-session">
                  <p>Already a Uwuelper?</p><Link to="/login">Sign In</Link>
                </div> : ""
              }
          </div>
          <div className="session-image">
            <div className="session-image-div">
              <img src={window.saitama} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )

  }
}