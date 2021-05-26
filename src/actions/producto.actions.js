import { productoService, crudService } from "../services";
import {toastr} from 'react-redux-toastr'
export const productoActions = {  
  /*GET*/  
  getListDetalle,
  createList,
  getItem,
  getItems,
  setItems,
  viewModal
};

function viewModal(xredux, est) {  
  return (dispatch) => {    
    dispatch({type: xredux, view:est});
  };
}

function getItems(payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {         
        dispatch(dpostList('PRODUCTOS_COBERTURAS_SET', response.result.pcob));
        dispatch(dpostList('COBERTURAS_PRODUCTOS_SET', response.result.cobp));
        dispatch(dpostList('PRODUCTOS_CLAUSULAS_SET', response.result.pcla));
        dispatch(dpostList('CLAUSULAS_PRODUCTOS_SET', response.result.clap));
       
      })
      .catch((err) => {
                
      });
  };
}




function setItems(xredux, data) {  
   return (dispatch) => { 
    dispatch({type: xredux,response: data})
  }
}

function getItem(payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {         
        dispatch(dpostList('PRODUCTOS_ADD', response.result.item));
        dispatch(dpostList('PRODUCTOSCOMPANIA_LISTA', response.result.items));           
      })
      .catch((err) => {
                
      });
  };
}


/*---------------------------------------------------------------*/
function getListDetalle(xredux, payload, dato) {  
  return (dispatch) => {
    productoService
      .getListDetalle(payload,dato)
      .then((response) => {                                   
        dispatch(ListaGet(xredux, response.result));
   
      })
      .catch((err) => {
        toastr.error('Error', err)      
        
      });
  };
}

export function ListaGet(xredux, result) {    
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

export function dpostList(xredux, result) { 
  return {  
    type: xredux,
    response: result
  };
}

/*---------------------------------------------------------------*/