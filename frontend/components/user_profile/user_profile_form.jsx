import React from 'react';

export default class UserProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "",
      state: "",
      hobbies: ""
    }
  }
}