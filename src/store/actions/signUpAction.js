const signUpAction = (userObject) => {
    return (dispatch , getState , {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            userObject.email,
            userObject.password
        ).then((result)=>{
            firestore.collection('users').doc(result.user.uid).set({
                firstName:userObject.firstName,
                lastName:userObject.lastName,                
                initials:userObject.firstName[0]+userObject.lastName[0],

            }).then(()=>{
                dispatch({type:'SIGNUP_SUCCESS'});
            })
        }).catch((error)=>{
            dispatch({type:'SIGNUP_ERROR',error});
        })
    }
}
export default signUpAction;