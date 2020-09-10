import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../../src/sign-up-form.css"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
  };

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(null, (error) => {
        this.setState({ errors: this.renderErrors() })
      })
  };

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="sign-up-errors" key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="signup-form-container">
        <Link to="/" className="signup-exit">x</Link>
        <div className="signup-greeting-container">
          <h1 className="signup-form-container-header">Welcome to Upcycled!</h1>
          <h3 className="signup-form-container-subheader">Signup below</h3>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input
              className="signup-email-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              className="signup-handle-input"
              type="text"
              value={this.state.handle}
              onChange={this.update("handle")}
              placeholder="Handle"
            />
            <br />
            <input
              className="signup-password-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              className="signup-password2-input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <div className="signup-errors-container">{this.renderErrors()}</div>
            <input
              className="signup-input-button"
              type="submit"
              value="Signup"
            />
          </form>
          <div className="link-to-login-container">
            <p className="link-to-login-p">
              Already a user?{" "}
              <Link to="/login" className="link-to-login">
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(SignupForm);