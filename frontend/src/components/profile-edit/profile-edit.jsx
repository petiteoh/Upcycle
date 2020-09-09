import React, { Component } from "react";
import "../../css/profile-edit/profile-edit.css";

export default class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    debugger; // We might need to
    this.state = {
      handle: this.props.user.handle,
      email: "Your Email",
      password: "Your Password",
      photo: this.props.user.photo,
    };
  }

  closeEditProfile() {
    const editProfileModal = document.getElementById("edit-profile-modal");

    editProfileModal.style.display = "none";
  }

  componentDidMount() {
    const editProfileModal = document.getElementById("edit-profile-modal");

    window.onclick = function (event) {
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
          <h1>Edit Your Profile</h1>
          <form>
            <img
              className="profile-edit-img"
              src={this.state.photo}
              alt={`${this.state.handle}'s profile image`}
            />
            <label>
              Handle
              <input type="text" id="handle" value={this.state.handle} />
            </label>
            <label>
              Email
              <input type="text" id="email" value={this.state.email} />
            </label>
            <button>Save Profile</button>
          </form>
        </div>
      </div>
    );
  }
}
