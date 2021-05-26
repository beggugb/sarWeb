const initialState = {
    data: [],
    lista: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        label: '',
        valor: 0
    }    
  };
  
export function clausulasproductos(state = initialState, action) {
    switch (action.type) {
      case "CLAUSULAS_PRODUCTOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "CLAUSULAS_PRODUCTOS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "CLAUSULAS_PRODUCTOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "CLAUSULAS_PRODUCTOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "CLAUSULAS_PRODUCTOS_LISTA":
            return {
              ...state,
              data: action.response
            };   
      case "CLAUSULAS_PRODUCTOS_SET":
            return {
              ...state,
              lista: action.response
            };                    
      case "CLAUSULAS_PRODUCTOS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          lista:[],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      default:
        return state;
    }
  }
  