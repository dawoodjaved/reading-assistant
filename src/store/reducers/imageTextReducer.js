const initState = {
  textData:"",    
}

const imageTextReducer  = (state = initState, action) => {
  switch(action.type){
    case 'GET_DATA':        
      return state = {          
        textData:action.textData
      };
  default:
      return state;
  }
}

export default imageTextReducer;