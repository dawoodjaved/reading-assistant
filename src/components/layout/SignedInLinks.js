import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import signOut from '../../store/actions/signOutAction';

const SignedInLinks = (props) => {

  function handleClick(){
    props.signOutActionAsProps();
    props.history.push('/');
  }  
  return (
    <ul className="right">
      <li><a onClick={handleClick}>Log Out</a></li>
      
      <li><Link to="/profile" className="btn btn-floating blue-grey lighten-5 black-text">{props.profile.initials}</Link></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOutActionAsProps: () => { dispatch(signOut()) }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SignedInLinks));
