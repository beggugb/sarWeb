const initialState = {    
    item:{
      id:'',
      nombre: '',
      direccion: '',
      telefono: '',
      email:'',
      website:'',
      filename:'',
      smtpHost:'',
      smtpUser:'',
      smtpPort:'',
      smtpPassword:''
    }    
  };
  
export function empresas(state = initialState, action) {
    switch (action.type) {
      case "EMPRESAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };  
      case "EMPRESAS_ITEM":
          return {
            ...state,
            item: action.response
          };        
      case "EMPRESAS_RESET":
        return {
          ...state,
          item: initialState.item
        };
      default:
        return state;
    }
  }
  