const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        label: '',
        valor: 0
    }    
  };
  
export function clausulas(state = initialState, action) {
    switch (action.type) {
      case "CLAUSULAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "CLAUSULAS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "CLAUSULAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "CLAUSULAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "CLAUSULAS_LISTA":
            return {
              ...state,
              data: action.response
            }; 
      case "CLAUSULAS_RESET_DATA":
          return {
            ...state,
            data: [],
            pagina: 0,
            paginas: 0,
            total: 0
          };                       
      case "CLAUSULAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      default:
        return state;
    }
  }
  