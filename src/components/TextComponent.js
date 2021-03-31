import React, { useReducer, useState } from 'react';
import { useSelector,connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import imageTextAction from "../store/actions/imageTextAction";

const TextComponent = (props) => {
  const auth = useSelector(state => state.firebase.auth);
  const text= useSelector(state => state.imageText.textData);
  const [imageText, setImageText] = useState("");  

  var textData = "";

  const handleOnComplete= ()=>{  
    props.imageTextActionAsProps(textData);        
    props.history.push('/listen-form');
  };

  

  if(!auth.uid) return <Redirect to = '/'/>
  return (
    <div className="container">
      <h3>Change Text If you want:</h3>    
      <textarea className="form-control" rows="22" onChange={e=> textData = e.target.value} defaultValue = {text}></textarea>
    
    <div className="center">
        <button className="btn white blue-text" onClick={handleOnComplete}>Submit</button>
        </div>
    
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
      imageTextActionAsProps: (textData) => { dispatch(imageTextAction(textData)) }
    }
}

export default connect(null, mapDispatchToProps)(TextComponent);
