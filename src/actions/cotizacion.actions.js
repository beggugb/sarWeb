import { productoService, crudService } from "../services";
import {toastr} from 'react-redux-toastr'
export const cotizacionActions = {  
  /*GET*/  
  createList,
  getItem,
  sendCotizacion 
};

function getItem(payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {                       
        
        dispatch(gitem('PRODUCTOSCOMPANIA_LISTA', response.result.companias));
        dispatch(gitem('COTIZACIONES_ITEM',response.result.cotizacion));
        dispatch(gitem('TASAS_LISTA', response.result.tasas));
      })
      .catch((err) => {
                
      });
  };
}

export function gitem(xredux, result) {  
  return {
    type: xredux,
    response: result
  };
}
/*---------------------------------------------------------------*/
function createList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .createList(payload, dato)
      .then((response) => {        
        toastr.success(payload, 'Dato creado') 
      })
      .catch((err) => {
        
        
      });
  };
}


function sendCotizacion(payload, dato) {  
  return (dispatch) => {
    productoService
      .sendCotizacion(payload,dato)
      .then((response) => {        
        toastr.success(payload, 'Cotización Enviada') 
      })
      .catch((err) => {
        
        
      });
  };
}


export function dpostList(xredux, result) { 
  return {  
    type: xredux,
    response: result
  };
}

/*---------------------------------------------------------------*/