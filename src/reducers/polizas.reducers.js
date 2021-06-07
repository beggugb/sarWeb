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
      nro:'',
      contado:false,
      primaTotal:0,
      comision:0,
      observaciones:'',
      primaSaldo:0,
      primaPagada:0,
      ivigencia:'',
      fvigencia:'',
      estado:false,
      companiaId:0,
      clienteId:0,
      usuarioId:0,
      rolId:0,
      ramoId:0,
      productoId:0,
      cotizacionId:0,
      filename:'',
      lcompania:'',
      valor:0,
      transcripcion: true,
      Companium:{
        id:0,
        nombre:''
      },
      Cliente:{
        id:0,
        nombre:''
      },
      Producto:{
        id:0,
        nombre:''
      },
      Ramo:{
        id:0,
        nombre:''
      },

    }    
  };
  
export function polizas(state = initialState, action) {
    switch (action.type) {
      case "POLIZAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
        case "POLIZAS_SET":
        return {
          ...state,
          pky: action.id
        };
       case "POLIZAS_VIEW":
        return {
          ...state,
          modalView: action.view
        };  

        case "POLIZAS_HABILITADO":
        return {
          ...state,
          habilitado: action.est
        };
          
      case "POLIZAS_ADD":
        return {
          ...state,
          item: action.response.poliza
        };
      case "POLIZAS_ITEM":
          return {
            ...state,
            item: action.response
          };
      case "POLIZAS_SET_ITEM":
        return {
            ...state,
            item: action.response
       };      
      case "POLIZAS_LISTA":
            return {
              ...state,
              data: action.response
            };    
      case "POLIZAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "POLIZAS_ITEMS":
          return {
            ...state,
            items: action.response            
          };   
                     
      case "POLIZAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
       
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "POLIZAS_RESET_ITEM":
        return {
          ...state,
          item: initialState.item          
        };  
      default:
        return state;
    }
  }
  