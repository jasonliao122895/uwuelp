import React from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';
import ModalSessionContainer from './modal_session_container';
import ProfileImageForm from '../user_profile/profile_image_form';

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

  render() {
    
    let { modal, closeModal} = this.props
 
    if (!modal) {
      return null
    }

    let component;
    switch(modal) {
      case 'not logged in':
        component = <ModalSessionContainer />
        break;
      case 'profile image':
        component = <ProfileImageForm user={this.props.user} profile={this.props.profile} closeModal={this.props.closeModal} />
        break;
      default:
        return null;
    }
  
    return (
      <div className="modal-background" onClick={closeModal}>
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
