const initialState = {
    data: [],        
    pagina: 0,
    paginas: 0,
    total: 0,
    pky:0,
    modalView: false,
    habilitado:false,
    item:{
      id:'',
      ivigencia:'',
      fvigencia:'',
      valor:'',
      productoId:'',
      clienteId:'',
      usuarioId:'',            
      Cliente:{
        id:'',
        nombres:'',
        email:''
      }
    }    
  };
  
export function cotizaciones(state = initialState, action) {
    switch (action.type) {
      case "COTIZACIONES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
        case "COTIZACIONES_SET":
        return {
          ...state,
          pky: action.id
        };
       case "COTIZACIONES_VIEW":
        return {
          ...state,
          modalView: action.view
        };  

        case "COTIZACIONES_HABILITADO":
        return {
          ...state,
          habilitado: action.est
        };
          
      case "COTIZACIONES_ADD":
        return {
          ...state,
          item: action.response.cotizacion
        };
      case "COTIZACIONES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "COTIZACIONES_LISTA":
            return {
              ...state,
              data: action.response
            };    
      case "COTIZACIONES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "COTIZACIONES_ITEMS":
          return {
            ...state,
            items: action.response            
          };   
                     
      case "COTIZACIONES_RESET":
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
  