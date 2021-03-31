const imageDataHandlingAction = (pirctureObject) => {    
    return (dispatch , getState ) =>{
        dispatch({ type:'PICTURE',pirctureObject });
    }
}

export default imageDataHandlingAction;