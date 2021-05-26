const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    ckey:0,
    total: 0,
    item:{
      id:'',
      orden:'',      
      productoId:0,
      companiaId:0,
      
      Companium:{
        id:'',
        filename:'',
        nombre:''
      }

    }    
  };
  
export function productoscompania(state = initialState, action) {
    switch (action.type) {
      case "PRODUCTOSCOMPANIA_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "PRODUCTOSCOMPANIA_ADD":
        return {
          ...state,
          item: action.response.producto
        };
      case "PRODUCTOSCOMPANIA_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "PRODUCTOSCOMPANIA_KEY":
          return {
            ...state,
            ckey: action.response
          };     
      case "PRODUCTOSCOMPANIA_LISTA":
            return {
              ...state,
              data: action.response
            };     
      case "PRODUCTOSCOMPANIA_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "PRODUCTOSCOMPANIA_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0,
          ckey:0
        };
      default:
        return state;
    }
  }
  