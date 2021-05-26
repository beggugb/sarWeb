const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    modalView: false,
    item:{
      id:'',
      nombre:'',
      vigencia:'',
      ramoId:1,
      Ramo:{
        id:'',
        nombre:''
      }
    }    
  };
  
export function productos(state = initialState, action) {
    switch (action.type) {
      case "PRODUCTOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "PRODUCTOS_ADD":
        return {
          ...state,
          item: action.response
        };
      case "PRODUCTOS_VIEW":
        return {
          ...state,
          modalView: action.view
        };   
      case "PRODUCTOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "PRODUCTOS_LISTA":
            return {
              ...state,
              data: action.response
            };     
      case "PRODUCTOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "PRODUCTOS_RESET":
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
  