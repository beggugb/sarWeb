const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        desde:0,
        hasta:0,
        franquicia:0,
        productocompaniaId:0,
        tasaContado:0,
        tasaCredito:0,
        tipoId:1,
        Tipo:{
          id:'',
          nombre:''
        }
    }    
  };
  
export function tasas(state = initialState, action) {
    switch (action.type) {
      case "TASAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "TASAS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "TASAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "TASAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "TASAS_LISTA":
            return {
              ...state,
              data: action.response,
              item: initialState.item
            };                
      case "TASAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "TASAS_RESET_ITEM":
        return {
          ...state,
          item: initialState.item
        }; 
      case "TASAS_RESET_DATA":
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
  