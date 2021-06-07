const initialState = {
    data: [],              
  };
  
export function polizasclausulas(state = initialState, action) {
    switch (action.type) {         
      case "POLIZAS_CLAUSULAS_DATA":
          return {
            ...state,
            data: action.response
          };      
      case "POLIZAS_CLAUSULAS_RESET":
        return {
          ...state,
          data:[]        
        };  
      default:
        return state;
    }
  }
  