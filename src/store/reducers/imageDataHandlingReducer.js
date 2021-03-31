import imageDataHandlingAction from "../actions/imageDataHandlingAction";

const initState = {
    pictureUrl:"",
    pictureName: ""
  }
  
  const imageDataHandlingReducer  = (state = initState, action) => {
    switch(action.type){
      case 'PICTURE':        
        return {          
          pictureUrl : action.pirctureObject.previewUrl,
          pictureName : action.pirctureObject.name
        };
    default:
        return state;
    }
}

export default imageDataHandlingReducer;