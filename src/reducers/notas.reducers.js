const initialState = {
    item:{}              
  };
  
export function notas(state = initialState, action) {
    switch (action.type) {         
      case "NOTAS_SET_ITEM":
          return {
            ...state,
            item: action.response
          };      
      case "NOTAS_RESET_ITEM":
        return {
          ...state,
          item: initialState.item
        };  
      default:
        return state;
    }
  }
  