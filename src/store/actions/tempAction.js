const TempAction=(data)=>{
    return (dispatch , getState) =>{
        dispatch({type:'GOT',data});
    }    
}

export default TempAction;