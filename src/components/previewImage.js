import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { createWorker } from 'tesseract.js';
import imageTextAction from "../store/actions/imageTextAction";


class PreviewImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isProcessing: false,
      ocrText: '',
      pctg: '0.00'
    }
    this.worker = React.createRef();
    this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
  }

  async doOCR(file) {
    this.setState({
      isProcessing: true,
      ocrText: '',
      pctg: '0.00'
    })
    // Loading tesseract.js functions
    await this.worker.load();
    // Loadingg language as 'English'
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    // Sending the File Object into the Recognize function to
    // parse the data
    const { data: { text } } = await this.worker.recognize(file);
    this.setState({
      isProcessing: false,
      ocrText: text
    })
  };
  updateProgressAndLog(m) {

    // Maximum value out of which percentage needs to be
    // calculated. In our case it's 0 for 0 % and 1 for Max 100%
    // DECIMAL_COUNT specifies no of floating decimal points in our
    // Percentage
    var MAX_PARCENTAGE = 1;
    var DECIMAL_COUNT = 2;

    if (m.status === "recognizing text") {
      var pctg = (m.progress / MAX_PARCENTAGE) * 100
      this.setState({
        pctg: pctg.toFixed(DECIMAL_COUNT)
      })

    }
  }
  componentDidMount() {
    // Logs the output object to Update Progress, which
    // checks for Tesseract JS status & Updates the progress
    this.worker = createWorker({
      logger: m => this.updateProgressAndLog(m),
    });

  }
  handleOnClick = (file) => {
    this.doOCR(file);
  }

  handleOnComplete = () => {
    this.props.imageTextActionAsProps(this.state.ocrText);
    this.props.history.push('/text');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <h4 className="blue-text darken-1">{this.state.isProcessing ? `Processing done ${this.state.pctg} %` : "Click To Start Processing"} </h4>
        <div className="preview-image-container blue-grey lighten-5 z-depth-1">
          <img className="preview-image z-depth-1" src={this.props.imageUrl} />
        </div>
        {/* <i className={"" + (this.state.isProcessing ? "fas fa-sync fa-2x fa-spin" : "")}></i> */}
        <p className="card-text">{(this.state.isProcessing) ?
          '' : this.state.ocrText.length === 0 ? "" : this.handleOnComplete()}</p>
        <div style={{margin:10}} className="center">
          <button onClick={() => this.handleOnClick(this.props.imageUrl)} className="btn waves-effect waves-light blue darken-1" style={{width:200}} disabled={this.state.isProcessing}>Extract Text</button>
        </div>
        <div className="center">
          <button onClick={() => this.props.history.push('/home')} className="btn white blue-text text-darken-1" style={{width:200}} disabled={this.state.isProcessing}>Go to Home</button>
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    imageUrl: state.imageData.pictureUrl,
    imageName: state.imageData.imageName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    imageTextActionAsProps: (textData) => { dispatch(imageTextAction(textData)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImage)