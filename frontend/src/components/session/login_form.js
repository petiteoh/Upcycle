import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/posts");
    }
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="sign-up-errors" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <Link to="/" className="signup-exit">
          x
        </Link>
        <div className="signup-greeting-container">
          <h1 className="signup-form-container-header">
            Welcome
            <br /> back to
            <br /> Upcycled!
          </h1>
          <h3 className="signup-form-container-subheader">Login below</h3>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
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
            <div className="signup-errors-container">{this.renderErrors()}</div>
            <input
              className="signup-input-button"
              type="submit"
              value="Signup"
            />
          </form>
          <div className="link-to-login-container">
            <p className="link-to-login-p">
              Create an Account?{" "}
              <Link to="/login" className="link-to-login">
                Signup
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
