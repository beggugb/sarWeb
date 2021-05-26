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
  
export function coberturasproductos(state = initialState, action) {
    switch (action.type) {
      case "COBERTURAS_PRODUCTOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "COBERTURAS_PRODUCTOS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "COBERTURAS_PRODUCTOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "COBERTURAS_PRODUCTOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "COBERTURAS_PRODUCTOS_LISTA":
            return {
              ...state,
              data: action.response
            };    
       case "COBERTURAS_PRODUCTOS_SET":
            return {
              ...state,
              lista: action.response
            };                   
      case "COBERTURAS_PRODUCTOS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          lista: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      default:
        return state;
    }
  }
  