import React from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';
import ModalSessionContainer from './modal_session_container';
import ProfileImageForm from '../user_profile/profile_image_form';
import UserProfileFormContainer from '../user_profile/user_profile_form_container';
import FindFriendsContainer from '../friend_request/find_friends_container';


class Modal extends React.Component  {

  componentDidUpdate(prevProps) {
    if (prevProps.modal === "open") {
      const body = document.querySelector('body');
      body.classList.remove('modal-open')
    }

    
    if (prevProps.modal === null) {
      const modalSess = document.getElementById('fade-in')
      if (modalSess) {
        modalSess.classList.add('fade-in')
      }
      
    }
  }

  handleClose(e) {
    e.preventDefault();
    const body = document.querySelector('body');
    body.classList.remove('modal-open')
    this.props.closeModal();
  }


  render() {
    
    let { modal } = this.props
 
    if (!modal) {
      return null
    }

    let component;
    switch(modal) {
      case 'not logged in':
        component = <ModalSessionContainer />
        break;
      case 'Add Profile Photo':
        component = <ProfileImageForm user={this.props.user} profile={this.props.profile} closeModal={this.props.closeModal} />
        break;
      case 'Update Your Profile':
        component = <UserProfileFormContainer user={this.props.user} closeModal={this.props.closeModal} profile={this.props.profile}/>
        break;
      case 'Find Friends':
        component = <FindFriendsContainer closeModal={this.props.closeModal} />
        break;
      default:
        return null;
    }
  
    return (
      <div className="modal-background" onClick={this.handleClose.bind(this)}>
        <div id="fade-in" className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )


  
  }

}



const mapStateTopProps = (state) => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Modal)
