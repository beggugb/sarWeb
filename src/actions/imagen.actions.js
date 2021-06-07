import { imagenService } from "../services";
import {toastr} from 'react-redux-toastr'
export const imagenActions = {  
  uploadCliente,
  uploadCompania,
  uploadEmpresa,
  uploadModelo,
  uploadAgente
};

/*--------------------------------------------------------------------*/
function uploadAgente(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadAgente(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen Cargada')  
      })
      .catch((err) => {        
       toastr.error(payload, 'Error')  
      });
  };
}
function uploadEmpresa(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadEmpresa(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen Cargada')  
      })
      .catch((err) => {        
       toastr.error(payload, 'Error')  
      });
  };
}

function uploadModelo(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadModelo(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen Cargada')  
      })
      .catch((err) => {        
       toastr.error(payload, 'Error')  
      });
  };
}
/*--------------------------------------------------------------------*/
function uploadCliente(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadCliente(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen Cargada')  
      })
      .catch((err) => {        
       toastr.error(payload, 'Error')  
      });
  };
}

/*--------------------------------------------------------------------*/
function uploadCompania(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadCompania(payload, data, datoId)
      .then((response) => {
       toastr.success(payload, 'Imagen Cargada')  
      })
      .catch((err) => {
       toastr.error(payload, 'Error')  
      });
  };
}
/*--------------------------------------------------------------------*/