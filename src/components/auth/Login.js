import React, {Component} from 'react';
import {connect} from 'react-redux';
import signIn from '../../store/actions/signInActions';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',     
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
 

  handleSubmit = (e) => {
    e.preventDefault();   
    this.props.signInActionAsProps(this.state);     
  }
  render() {
    const { authError, auth } = this.props;           
    //it is called rout gaurding.          
    if(auth.uid) return <Redirect to = '/'/>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h4>Sign In</h4>
          <p className="grey-text">Good to see you again!</p>
          <div className="input-field">
            <input id="email" type="email" className="validate" onChange={this.handleChange}/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input id="password" type="password" className="validate" onChange={this.handleChange}/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="waves-effect waves-light btn blue darken-2 z-depth-1 login-btn">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
          <Link to='/reset-password' className="blue-text forgot-link">Forgot Password?</Link>
        </form>
      </div>
    )
    
  }
}

const mapStateToProps = (state) => {  
  return {
    authError: state.auth.authError,
    auth:state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInActionAsProps: (credentials) => { dispatch(signIn(credentials)) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
