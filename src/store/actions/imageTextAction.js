const imageTextAction = (textData) => {    
    return (dispatch , getState ) =>{
        dispatch({ type:'GET_DATA',textData });
    }
}

export default imageTextAction;