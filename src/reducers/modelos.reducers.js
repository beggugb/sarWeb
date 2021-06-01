const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        nombre: '',
        tipoId:0,
        marcaId:0
    }    
  };
  
export function modelos(state = initialState, action) {
    switch (action.type) {
      case "MODELOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "MODELOS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "MODELOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "MODELOS_RESET_ITEM":
          return {
            ...state,
            item: initialState.item
          };      
      case "MODELOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "MODELOS_LISTA":
            return {
              ...state,
              data: action.response
            };                
      case "MODELOS_RESET":
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
  