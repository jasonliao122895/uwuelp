import React from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';
import ModalSessionContainer from './modal_session_container';

class Modal extends React.Component  {


  componentDidMount() {
    // const modalOpen = document.getElementById('modal-open-but')
    // modalOpen.addEventListener('click', () => {
    //   const modalSess = document.getElementById('fade-in')
    //   modalSess.classList.add('fade-in')
    // })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modal === "open") {
      const body = document.querySelector('body');
      body.classList.remove('modal-open')
    }

    
    if (prevProps.modal === null) {
      const modalSess = document.getElementById('fade-in')

      modalSess.classList.add('fade-in')
      
    }
  }

  render() {
    
    let { modal, closeModal} = this.props

    if (!modal) {
      return null
    }
  
    return (
      <div className="modal-background" onClick={closeModal}>
        <div id="fade-in" className="modal-child" onClick={e => e.stopPropagation()}>
          <ModalSessionContainer /> 
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
