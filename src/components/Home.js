import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to = '/'/>
    return (
      <div className="home container">
        <div className="btn-container">
          <button className="btn waves-effect waves-light blue darken-1"><Link to="/camera" className="white-text">Camera</Link></button>
          <Link to="/upload-image" className="blue-text">Upload a photo</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,    
  }
}

export default connect(mapStateToProps)(Home);