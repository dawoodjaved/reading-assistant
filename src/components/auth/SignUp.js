import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import signUpAction from '../../store/actions/signUpAction';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.SignUpActionAsProps(this.state);    
  }


   render() {
    const { authError,auth } = this.props;
    if(auth.uid) return <Redirect to = '/'/>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signUp-form">
          <h4>Sign Up</h4>
          <p className="grey-text">It's quick and easy.</p>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" type="text" className="validate" onChange={this.handleChange} />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" type="text" className="validate" onChange={this.handleChange} />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="input-field">
            <input id="email" type="email" className="validate" onChange={this.handleChange}/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input id="password" type="password" className="validate" onChange={this.handleChange}/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="waves-effect waves-light btn blue darken-2 z-depth-1 login-btn">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,
    authError:state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return { SignUpActionAsProps: (userObject) => { dispatch(signUpAction(userObject))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
