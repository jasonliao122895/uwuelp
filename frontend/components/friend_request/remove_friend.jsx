import React from 'react';

export default class RemoveFriend extends React.Component {

  handleShow(e) {
    e.preventDefault();
    let removeBtn = document.getElementById('remove-friend-button');
    let arrow = document.getElementById('remove-friend-arrow')
    
    if (arrow.innerText === "⇩") {
      arrow.innerText = "⇧"
    } else if (arrow.innerText === "⇧") {
      arrow.innerText = "⇩"
    }
    removeBtn.classList.toggle('hide');
  }

  handleRemove(e) {
    e.preventDefault();
    const removeBtn = document.getElementById('remove-friend-button');
    removeBtn.classList.toggle('hide');
    let that = this;
    this.props.removeFriend(this.props.userId)
      .then(() => {
        that.props.fetchUser(that.props.userId);
      })
  }

  render() {
    return (
      <form className="remove-friend-container">
        <button onClick={this.handleShow.bind(this)} >&#10003; Friends <span id="remove-friend-arrow">&#8681;</span></button>
        <button id="remove-friend-button" className="hide" onClick={this.handleRemove.bind(this)}>Remove Friend</button>
      </form>
    )
  }
}