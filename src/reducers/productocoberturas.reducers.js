const initialState = {
    data: [],
    lista:[],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        label: '',
        valor: 0,
        productoId:0,
        clausulaId:0
    }    
  };
  
export function productocoberturas(state = initialState, action) {
    switch (action.type) {
      case "PRODUCTOS_COBERTURAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "PRODUCTOS_COBERTURAS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "PRODUCTOS_COBERTURAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "PRODUCTOS_COBERTURAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "PRODUCTOS_COBERTURAS_LISTA":
            return {
              ...state,
              data: action.response
            };  
      case "PRODUCTOS_COBERTURAS_SET":
            return {
              ...state,              
              lista: action.response
            };    
      case "PRODUCTOS_COBERTURAS_SETS":
            return {
              ...state,              
              lista: action.response
            };                       
      case "PRODUCTOS_COBERTURAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          lista: [],
          items: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      default:
        return state;
    }
  }
  