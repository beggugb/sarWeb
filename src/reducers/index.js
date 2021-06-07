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
import { marcas } from "./marcas.reducers";
import { modelos } from "./modelos.reducers";
import { cotizaciones } from "./cotizaciones.reducers";
import { agentes } from "./agentes.reducers";
import { polizas } from "./polizas.reducers";
import { polizascoberturas } from "./polizascoberturas.reducers";
import { polizasclausulas } from "./polizasclausulas.reducers";

import { notas } from "./notas.reducers";
import { pagos } from "./pagos.reducers";



const rootReducer = combineReducers({
  users,  
  informes,  
  polizas,
  notas,
  pagos,
  polizascoberturas,
  polizasclausulas,
  productos,
  agentes,
  cotizaciones,
  coberturas,
  clausulas,
  marcas,
  modelos,
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
