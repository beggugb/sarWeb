const initialState = {
    data:[]           
  };
  
export function pagos(state = initialState, action) {
    switch (action.type) {         
      case "PAGOS_DATA":
          return {
            ...state,
            data: action.response
          };      
      case "PAGOS_RESET":
        return {
          ...state,
          data:[]
        };  
      default:
        return state;
    }
  }
  