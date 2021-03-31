const ResetPasswordAction = (email) => {
    
    return (dispatch , getState , {getFirebase}) =>{
        //do some async tasks then resume the dispatch.
        const firebase = getFirebase();
        firebase.auth().sendPasswordResetEmail(email).then(()=>{            
            dispatch({ type:'RESET_SUCCESS' });
        }).catch((error)=>{
            //error is assigned by ES6 refactoring.
            dispatch({ type:'RESET_ERROR',error });
        });
        
    }
};


export default ResetPasswordAction;