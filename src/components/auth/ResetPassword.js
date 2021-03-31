import React, { useState } from 'react';
import { connect } from 'react-redux';
import ResetPasswordAction from '../../store/actions/ResetPasswordAction';
import { Redirect } from 'react-router-dom';

const ResetPassword = (props) => {
  const [email, setEmail] = useState('');
  const [trigger, setTrigger] = useState(false);
  const [checker, setChecker] = useState(true);
  const [counter, setCounter] = useState(60);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick(email) {
    props.ResetPasswordActionAsProps(email);
    // console.log(props.resetError);
    setTrigger(true);
    setCounter(60);

    if (props.resetError === null) {
      setChecker(false);
      console.log(checker);
    }
    if (counter === 0) {
      setChecker(true);
    }
  }
  const { resetError, auth } = props;
  //it is called rout gaurding.

  if (auth.uid) return <Redirect to='/' />
  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h4>Forgot Password</h4>
        <p className="grey-text">Enter your email</p>
        <div className="input-field">
          <input id="email" type="email" className="validate" onChange={event => setEmail(event.target.value)} />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <button onClick={() => handleClick(email)}
            className="waves-effect waves-light btn blue darken-2 z-depth-1 login-btn">Reset Password</button>
          <div>
            {trigger !== false && props.resetError === null
              ? <p>Time Remaining: {`00:${counter}`}</p>
              : <p></p>
            }
          </div>
          <div className="red-text center">
            {resetError ? <p>{resetError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    resetError: state.reset.resetError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ResetPasswordActionAsProps: (credentials) => { dispatch(ResetPasswordAction(credentials)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);