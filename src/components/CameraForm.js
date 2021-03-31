import React from 'react';
import Webcam from "react-webcam";
import { Redirect } from 'react-router-dom';
import imageDataHandlingAction from '../store/actions/imageDataHandlingAction'
import { connect } from 'react-redux';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const CameraForm = (props) => {
  const webcamRef = React.useRef(null);

  const imageDataInfo = {
    previewUrl: "",
    name: ""
  }

  const capture = React.useCallback(
    () => {
      imageDataInfo.previewUrl = webcamRef.current.getScreenshot();
      props.imageDataHandlingActionAsProps(imageDataInfo);
      props.history.push("/preview");

    },
    [webcamRef]
  );

  const { auth } = props;
  if (!auth.uid) return <Redirect to='/' />
  return (
    <div className="container center">
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          imageSmoothing={true}
          screenshotQuality={1}
          className="webcam"
        />
        <div>
          <button className="btn white btn-floating captureButton" onClick={capture}>
            <i className="fas fa-camera fa-2x blue-text text-darken-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CameraForm);
