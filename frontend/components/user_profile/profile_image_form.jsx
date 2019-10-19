import React from 'react';
import { withRouter } from 'react-router-dom'

class ProfileImageForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      photoFile: null,
      photoUrl: this.props.user.profPic,
      currentFile: ""
    }
  }

  componentDidMount() {
    this.removeDefaults();
    this.highlightForm();
    this.unhighlightForm();
    this.handleDrop();
  }

  handleFile(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result, currentFile: file.name})
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
        
  }

  handleDrop() {
    const box = document.querySelector('.box');

    box.addEventListener('drop', (e) => {
      let dt = e.dataTransfer
      let file = dt.files[0]
      const fileInput = document.querySelector('.box-file')
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({ photoFile: file, photoUrl: fileReader.result, currentFile: file.name })
      }
      if (file) {
        fileReader.readAsDataURL(file);
      }
      
      fileInput.files['file'] = file;
      
    })
    
  }

  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('user[prof_pic]', this.state.photoFile);
    }
    $.ajax({
      url: `/api/users/${this.props.user.id}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      () => {
        that.props.profile.props.fetchUser(this.props.match.params.id)
      }
    ).then(
      () => {
        that.props.closeModal();
      }
    )
  }

  removeDefaults() {
    const box = document.querySelector('.box');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      document.body.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      })
      box.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      })
    })
  }

  highlightForm() {
    const box = document.querySelector('.box');
    ['dragenter', 'dragover'].forEach(eventName => {
      box.addEventListener(eventName, () => {
        box.classList.add('highlight')
      })
    })
  }

  unhighlightForm() {
    const box = document.querySelector('.box');
    ['dragleave', 'drop'].forEach(eventName => {
      box.addEventListener(eventName, () => {
        box.classList.remove('highlight')
      })
    })
  }


  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null 

    return (
      <div className="profile-image-form">
        <h1>Upload a Profile Photo</h1>
        {preview}
        <form className="box">
          <div className="box-input">
            {this.state.currentFile.length > 1 ? <p>{`'${this.state.currentFile}'`}</p> : <p></p>}
            <input type="file" className="box-file" onChange={this.handleFile.bind(this)} id="file"/>
            <label className="box-file-label" htmlFor="file"><strong>Choose a file</strong><span className="box-dragndrop">  or drag it here</span>.</label>
            <button  onClick={this.handleSubmit.bind(this)} className="box-button">Upload</button>
          </div>
        </form>

      </div>
    )
  }
}

export default withRouter(ProfileImageForm);
