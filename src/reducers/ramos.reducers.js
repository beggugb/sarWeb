const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        nombre: '',
        icono:''
    }    
  };
  
export function ramos(state = initialState, action) {
    switch (action.type) {
      case "RAMOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "RAMOS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "RAMOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "RAMOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
       case "RAMOS_RESET_DATA":
          return {
            ...state,
            data: [],
            pagina: 0,
            paginas: 0,
            total: 0
          };    
      case "RAMOS_LISTA":
            return {
              ...state,
              data: action.response
            };   
      case "RAMOS_RESET_LISTA":
            return {
              ...state,
              lista: []
            };                    
      case "RAMOS_RESET":
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
  