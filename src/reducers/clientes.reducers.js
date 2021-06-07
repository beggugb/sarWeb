const initialState = {
    data: [],
    lista: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
      id:'',
      nombres: '',
      direccion: '',
      telefono: '',      
      email: '',
      nit:'',
      ci:'',
      celular: '',
      filename: '',
      estado: true,
      ciudad: '',
      pais: '',
      tipo: '',
      isCliente: true
    }    
  };
  
export function clientes(state = initialState, action) {
    switch (action.type) {
      case "CLIENTES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "CLIENTES_ADD":
        return {
          ...state,
          item: action.response.cliente
        };
      case "CLIENTES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "CLIENTES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "CLIENTES_LISTA":
          return {
            ...state,
            lista: action.response.data
          }; 
      case "CLIENTES_RESET_LISTA":
          return {
            ...state,
            lista: []
          };  
      case "CLIENTES_RESET_DATA":
          return {
            ...state,
            data: [],
            pagina: 0,
            paginas: 0,
            total: 0
          }; 
      case "CLIENTES_RESET_ITEM":
          return {
            ...state,
            item: initialState.item
          };                        
      case "CLIENTES_RESET":
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
  