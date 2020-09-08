import React, { Component } from "react";
import "../../css/profile-edit/profile-edit.css";

export default class ProfileEdit extends Component {
  
  closeEditProfile() {
    const editProfileModal = document.getElementById("edit-profile-modal");

    editProfileModal.style.display = "none";
  }

  componentDidMount(){
    const editProfileModal = document.getElementById("edit-profile-modal");

    window.onclick = function(event) {
      if (event.target === editProfileModal) {
        editProfileModal.style.display = "none";
      }
    };
  }

  render() {
    return (
      <div id="edit-profile-modal">
        <div className="edit-profile-modal-content">
          <span id="close-edit-profile-modal" onClick={this.closeEditProfile}>
            Close &times;
          </span>
          <form>
            <h1>Edit Your Profile</h1>
            <p>TEST!!!</p>
          </form>
        </div>
      </div>
    );
  }
}
