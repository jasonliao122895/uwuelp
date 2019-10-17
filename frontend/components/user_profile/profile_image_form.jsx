import React from 'react';

export default class ProfileImageForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      photoFile: null
    }
  }

  handleFile(e) {
    debugger
    this.setState({photoFile: e.currentTarget.files[0]})
    console.log(this.state.photoFile)
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[prof_pic]', this.state.photoFile);
    $.ajax({
      url: '/api/users',
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    })
  }

  render() {
    return (
      <form className="profile-image-form">
        <input onChange={() => this.handleFile} type="file"/>
        <button>Add</button>
      </form>

    )
  }
}