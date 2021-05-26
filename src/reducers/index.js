import { combineReducers } from "redux";
import { reducer as toastrReducer} from 'react-redux-toastr'
import { users } from "./users.reducers";
import { tareas } from "./tareas.reducers";
import { clientes } from "./clientes.reducers";
import { companias } from "./companias.reducers";
import { empresas } from "./empresas.reducers";
import { usuarios } from "./usuarios.reducers";
import { informes } from "./informes.reducers";
import { ramos } from "./ramos.reducers";
import { coberturas } from "./coberturas.reducers";
import { clausulas } from "./clausulas.reducers";
import { productos } from "./productos.reducers";
import { productoscompania } from "./productoscompania.reducers";
import { clausulasproductos } from "./clausulasproductos.reducers";
import { coberturasproductos } from "./coberturasproductos.reducers";


import { productoclausulas } from "./productoclausulas.reducers";
import { productocoberturas } from "./productocoberturas.reducers";
import { tasas } from "./tasas.reducers";
import { tipos } from "./tipos.reducers";

import { cotizaciones } from "./cotizaciones.reducers";


const rootReducer = combineReducers({
  users,  
  informes,  
  productos,
  cotizaciones,
  coberturas,
  clausulas,
  ramos,
  usuarios,  
  productoclausulas,
  productocoberturas,
  clausulasproductos,
  coberturasproductos,
  tareas,  
  tasas,
  tipos,
  clientes,
  companias,
  productoscompania,
  empresas,  
  toastr: toastrReducer
});

export default rootReducer;
