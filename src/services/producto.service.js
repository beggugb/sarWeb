import { authHeader, apiErp } from "../helpers";

export const productoService = {  
  getListDetalle,
  sendCotizacion
};

function getListDetalle(payload, dato) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/listadetalle/${dato}`, requestOptions).then(handleResponse);
}

function sendCotizacion(payload, dato) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/enviar/cotizacion/${dato}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        //location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
