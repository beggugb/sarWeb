import { crudService } from "../services";
import {toastr} from 'react-redux-toastr'
export const crudActions = {  
  /*GET*/  
  getList,
  getListItems,
  getLis,
  getItem,
  getItemModelo,
  getItemPoliza,  
  getData,
  /*POST*/
  postList,
  createList,  
  createUnit,
  searchList,
  /*PUT*/
  putList,
  putUnit,
  /*DELETE*/
  deleteList,
  /*iCONS*/
  changeValue,
  setReset
};

function getItemPoliza(payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {                              
        console.log(response)
        dispatch(gitem('POLIZAS_SET_ITEM', response.result.polizas));
        dispatch(gitem('POLIZAS_COBERTURAS_DATA', response.result.coberturas));
        dispatch(gitem('POLIZAS_CLAUSULAS_DATA', response.result.clausulas));
        dispatch(gitem('NOTAS_SET_ITEM', response.result.nota));
        dispatch(gitem('PAGOS_DATA', response.result.pagos));
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
function getData(xredux, payload, page,num,prop,orden) {  
  return (dispatch) => {
    crudService
      .getData(payload, page,num,prop,orden)
      .then((response) => {                      
        dispatch(dgetList(xredux, response.result));
      })
      .catch((err) => {        
        
      });
  };
}

/*---------------------------------------------------------------*/
function setReset(xredux) {  
  return {
    type: xredux
  };
}
/*---------------------------------------------------------------*/
  function getList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .getList(payload, dato)
      .then((response) => {                       
        dispatch(dgetList(xredux, response.result));
        
      })
      .catch((err) => {
        
      });
  };
}
function getLis(xredux, payload) {  
  return (dispatch) => {
    crudService
      .getLis(payload)
      .then((response) => {  
        console.log(response)             
        dispatch(dgetList(xredux, response.result));
      })
      .catch((err) => {
        
      });
  };
}

function getListItems(xredux, payload) {  
  return (dispatch) => {
    crudService
      .getListItems(payload)
      .then((response) => {               
        dispatch(dgetList(xredux, response.result));
      })
      .catch((err) => {
        
      });
  };
}

export function dgetList(xredux, result) {   
  return {
    type: xredux,
    response: result
  };
}

/*---------------------------------------------------------------*/
function getItemModelo(xredux, payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {                              
        dispatch(gitem('MARCAS_SET_ITEM', response.result.Marca));
        dispatch(gitem('MODELOS_SET_ITEM', response.result));
      })
      .catch((err) => {
                
      });
  };
}

function getItem(xredux, payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {       
       if(xredux === 'TASAS_ITEM')
       {
          dispatch(gitem(xredux, response.result));
          let iok={}
          iok.id = response.result.tipoId
          dispatch({type: 'TIPOS_ITEM',response: iok});
       }else{
          dispatch(gitem(xredux, response.result));        
       }  
          
      })
      .catch((err) => {
                
      });
  };
}



/*---------------------------------------------------------------*/
function postList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .postList(payload, dato)
      .then((response) => {                                        
        dispatch(dpostList(xredux, response.result));        
    

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
function createList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .createList(payload, dato)
      .then((response) => {                
        if(response !== undefined){
          dispatch(dpostList(xredux, response.result));    
          toastr.success(payload, 'Dato creado')             
        }        
      })
      .catch((err) => {
        
        
      });
  };
}

/*---------------------------------------------------------------*/
function createUnit(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .createUnit(payload, dato)
      .then((response) => {                         
        dispatch(dcreateUnit(xredux, response.result));      
        toastr.success(payload, 'Dato creado')   
      })
      .catch((err) => {       
        
      });
  };
}

export function dcreateUnit(xredux, result) {                                  
  return {  
    type: xredux,
    response: result
  };
}

/*---------------------------------------------------------------*/
function searchList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .searchList(payload, dato)
      .then((response) => {                        
        dispatch(dpostList(xredux, response.result));        
      })
      .catch((err) => {        
        
      });
  };
}
/*---------------------------------------------------------------*/
function putList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .putList(payload, dato)
      .then((response) => {                                                 
        dispatch(dpostList(xredux, response.result));                       
      })
      .catch((err) => {
        
      });
  };
}

/*---------------------------------------------------------------*/
function putUnit(payload, dato) {  
  return (dispatch) => {
    crudService
      .putUnit(payload, dato)
      .then((response) => {    
      toastr.success(payload, 'Dato actualizado')      
      })
      .catch((err) => {
        
      });
  };
}

/*---------------------------------------------------------------*/
function deleteList(xredux, payload, dato) { 
  return (dispatch) => {
    crudService
      .deleteList(payload, dato)
      .then((response) => {                                            
        dispatch(dpostList(xredux, response.result));    
     
      })
      .catch((err) => {                
         toastr.error(payload, err)   
      });
  };
}

/*---------------------------------------------------------------*/
function changeValue(xredux, props, values) {  
  return (dispatch) => {
    dispatch(change(xredux, props, values));
  };
}

export function change(xredux, props, values) {  
  return {  
    type: xredux,
    props: props,
    value: values
  };
}
/*---------------------------------------------------------------*/
