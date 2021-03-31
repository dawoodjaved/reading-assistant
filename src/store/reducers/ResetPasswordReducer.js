const initState = {
    resetError:null
}
 
const ResetErrorReducer = (state = initState, action) => {
    switch(action.type){
      case 'RESET_SUCCESS':
        return{          
          authError:null
        };  
      case 'RESET_ERROR':        
        return{          
          resetError: action.error.message    
        };      
      default:
        return state;
    } 
  };
  
  export default ResetErrorReducer;