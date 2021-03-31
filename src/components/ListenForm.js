import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



const ListenForm = (props) => {
  const { transcript, finalTranscript, resetTranscript } = useSpeechRecognition();
  const { auth } = props;
  if(!auth.uid) return <Redirect to = '/'/>
  return (
    <div className="container">
      <h3>imageText:</h3>
      <p>{props.text}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Clear</button>
      <p>{transcript}</p>
      <br />
      <p>{finalTranscript}</p>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    text: state.imageText.textData,
  }
}



export default connect(mapStateToProps)(ListenForm);
