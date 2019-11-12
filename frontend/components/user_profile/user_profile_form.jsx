import React from 'react';

export default class UserProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // id: this.props.user.id,
      first_name: this.props.user.firstName,
      last_name: this.props.user.fullLastName,
      hobbies: this.props.user.hobbies || "",
      gender: this.props.user.gender || "",
      website: this.props.user.website || ""
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeModal();
    const body = document.querySelector('body');
    body.classList.remove('modal-open')
  }

  handleSubmit(e) {
    e.preventDefault()
    let that = this;
    $.ajax({
      url: `/api/users/${this.props.user.id}`,
      method: 'PATCH',
      data: {user: this.state}
    }).then(() => {
      that.props.profile.props.fetchUser(that.props.user.id)
    }).then(() => {
      that.props.closeModal();
    })
  }

  handleClose(e) {
    e.preventDefault();
    const body = document.querySelector('body');
    body.classList.remove('modal-open')
    this.props.closeModal();
  }

  render() {
     return (
       <div className="profile-update-form-container">

        <form className="profile-update-form">
          <h1>Update Profile</h1>
          <button className="modal-sess-close-but" onClick={this.handleClose.bind(this)}><img src={window.closeBut} alt="" /></button>

          <br/><br/>
          <label htmlFor="edit-first-name"><strong>First Name</strong></label>
          <br/>
          <span>This field is required</span>
          <br/>
          <input type="text" id="edit-first-name" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
          <br/><br/>
          <label htmlFor="edit-last-name"><strong>Last Name</strong></label>
          <br/>
          <span>This field is required. Only your first initial will show on your profile</span>
          <br/>
          <input type="text" id="edit-last-name" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
          <br/><br/>
          <label htmlFor="edit-gender"><strong>Gender</strong></label>
          <br/>
          <input type="radio" checked={this.state.gender === "Female" ? true : false } value="Female" onChange={this.handleInput('gender')} name="gender" id="gender"/>Female
          <br/>
           <input type="radio" checked={this.state.gender === "Male" ? true : false} value="Male" onChange={this.handleInput('gender')}  name="gender" id="gender"/>Male
          <br/>
           <input type="radio" checked={this.state.gender === "Other" ? true : false} value="Other" onChange={this.handleInput('gender')}  name="gender" id="gender"/>Other
          <br/><br/>
          <label htmlFor="hobbies"><strong>I Love...</strong></label>
          <br/>
          <span>Comma separated phrases (e.g. sushi, Radiohead, puppies)</span>
          <br/>
          <textarea onChange={this.handleInput('hobbies')} id="hobbies" cols="30" rows="7" defaultValue={this.state.hobbies} ></textarea>
          <br/><br/>
          <label htmlFor="website"><strong>My Blog or Website</strong></label>
          <br/>
          <span>www.example.com/myawsomeblog</span>
          <br/>
          <input type="text" value={this.state.website} id="website" onChange={this.handleInput('website')}/>
          <br/><br/>
          <button onClick={this.handleSubmit.bind(this)}className="update-profile-button">Update Profile</button>
          <button onClick={this.handleClose.bind(this)} className="cancel-profile-update" >Cancel</button>
        </form>
       </div>
    )
  }
}