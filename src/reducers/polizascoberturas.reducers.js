const initialState = {
    data: [],              
  };
  
export function polizascoberturas(state = initialState, action) {
    switch (action.type) {         
      case "POLIZAS_COBERTURAS_DATA":
          return {
            ...state,
            data: action.response
          };      
      case "POLIZAS_COBERTURAS_RESET":
        return {
          ...state,
          data:[]        
        };  
      default:
        return state;
    }
  }
  