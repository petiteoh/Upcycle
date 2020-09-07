import React, { Component } from 'react';
import "../../css/profile-edit/profile-edit.css";

export default class ProfileEdit extends Component {
  render() {
    return (
      <div className="edit-profile-modal">
        <div className="edit-profile-modal-content">
        <span className="close-edit-profile-modal">Close &times;</span>
          <form>
            <h1>This is the modal to edit the profile</h1>
            <p>TEST!!!</p>
          </form>
        </div>
      </div>
    )
  }
}
