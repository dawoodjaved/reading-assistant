import React, { Component } from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { Redirect } from 'react-router-dom';
import imageDataHandlingAction from '../store/actions/imageDataHandlingAction'
import { connect } from 'react-redux';


class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = { pictureData: {} };
    //   this.onDrop = this.onDrop.bind(this);   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUploadParams = this.getUploadParams.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }
  // specify upload params and url for your files
  getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  handleChangeStatus = ({ meta, file }, status) => {
    if (status === "done") {
      this.setState({
        pictureData: { ...meta },
      });

    }
  }

  handleSubmit = () => {
    this.props.imageDataHandlingActionAsProps(this.state.pictureData);
    this.props.history.push("/preview");
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="container upload-image">
        <Dropzone
          getUploadParams={this.getUploadParams}
          onChangeStatus={this.handleChangeStatus}
          onSubmit={this.handleSubmit}
          maxFiles={1}
          accept="image/*,audio/*,video/*"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    imageDataHandlingActionAsProps: (userObject) => {
      dispatch(imageDataHandlingAction(userObject))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
