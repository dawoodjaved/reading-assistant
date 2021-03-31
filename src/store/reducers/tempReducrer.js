const initState = {
    error:null
}
 
const TempReducer = (state = initState, action) => {
    switch(action.type){
      case 'GOT':
        return{          
          error:action.data
        };       
      default:
        return state;
    } 
  };
  
  export default TempReducer;