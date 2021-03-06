const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        nombre: ''
    }    
  };
  
export function marcas(state = initialState, action) {
    switch (action.type) {
      case "MARCAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "MARCAS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "MARCAS_SET_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "MARCAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "MARCAS_LISTA":
            return {
              ...state,
              data: action.response
            };                
      case "MARCAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "MARCAS_RESET_DATA":
        return {
          ...state,          
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };  
      default:
        return state;
    }
  }
  