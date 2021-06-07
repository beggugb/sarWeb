const initialState = {
    data: [],
    items:[],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
      nombre: '',
      direccion: '',
      telefono: '',            
      filename: 'default.jpg',      
      label: ''
    }    
  };
  
export function companias(state = initialState, action) {
    switch (action.type) {
      case "COMPANIAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "COMPANIAS_ADD":
        return {
          ...state,
          item: action.response.compania
        };
      case "COMPANIAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "COMPANIAS_LISTA":
            return {
              ...state,
              data: action.response
            };    
      case "COMPANIAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "COMPANIAS_ITEMS":
          return {
            ...state,
            items: action.response            
          }; 
      case "COMPANIAS_RESET_DATA":
          return {
            ...state,
            data: [],
            pagina: 0,
            paginas: 0,
            total: 0
          };  
      case "COMPANIAS_RESET_ITEM":
          return {
            ...state,
            item: initialState.item
          };                     
      case "COMPANIAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          items: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      default:
        return state;
    }
  }
  