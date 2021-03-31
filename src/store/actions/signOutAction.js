const signOut = () => {
    return (dispatch , getState , {getFirebase}) =>{
        //do some async tasks then resume the dispatch.
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{            
            dispatch({ type:'LOGOUT_SUCCESS' });
        });
    }
};
export default signOut;