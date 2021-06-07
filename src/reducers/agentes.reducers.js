const initialState = {
    data: [],
    lista: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
      id:'',
      nombre: '',
      username:'',
      filename:'',
      enabled:false,
      sucursalId:1,
      rolId:1,
      Rol:{
        id:0,
        nombre:''
      }
    }    
  };
  
export function agentes(state = initialState, action) {
    switch (action.type) {
      case "AGENTES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "AGENTES_ADD":
        return {
          ...state,
          item: action.response.Usuario
        };
      case "AGENTES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "AGENTES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "AGENTE_SET_ITEM":
          return {
            ...state,
            item: action.response
          };
      case "AGENTE_RESET_ITEM":
          return {
            ...state,
            item: initialState.item
          };    
      case "AGENTES_RESET_DATA":
          return {
            ...state,
            data: [],
            pagina: 0,
            paginas: 0,
            total: 0
          }; 
      case "AGENTES_RESET_LISTA":
          return {
            ...state,
            lista: []
          };         
      case "AGENTES_LISTA":
          return {
            ...state,
            lista: action.response.data
          }; 
                         
      case "AGENTES_RESET":
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
  