const signIn = (credentials) => {
    //because we uses thun so this action creater does not return an object 
    //it wil return an arrow function.
    //this function halts the dispatch and perform some async taska then resume the dispatch.
    // it only available due to redux thunk middleware.
    return (dispatch , getState , {getFirebase}) =>{
        //do some async tasks then resume the dispatch.
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{            
            dispatch({ type:'LOGIN_SUCCESS' });
        }).catch((error)=>{
            //error is assigned by ES6 refactoring.
            dispatch({ type:'LOGIN_ERROR',error });
        });
        
    }
};


export default signIn;