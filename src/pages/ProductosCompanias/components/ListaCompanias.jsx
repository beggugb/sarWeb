import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { apiErp } from "../../../helpers";
import { productoActions } from '../../../actions'
import {  
  Row,
  Col, Button  
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

function ListaCompanias () {  
const dispatch = useDispatch()     
  const data = useSelector(state => state.productoscompania.data)  
  const item = useSelector(state => state.productos.item) 
  
  const pcoberturas = useSelector(state => state.productocoberturas.lista)  
  const coberturasp = useSelector(state => state.coberturasproductos.lista)  

  const pclausulas = useSelector(state => state.productoclausulas.lista)  
  const clausulasp = useSelector(state => state.clausulasproductos.lista)  


  const changeHandler = () =>{
  
      let dato={}
      dato.productoId = item.id
      dato.lpcoberturas = pcoberturas
      dato.lcoberturasp = coberturasp
      dato.lpclausulas  = pclausulas
      dato.lclausulasp  = clausulasp
      dispatch(productoActions.createList('PRODUCTOS_ADD','catalogos',dato))   

  }
           
  return (  
    <Row>          	
    <Col md="3" className="arg">
      <p><b>Producto :</b> {item.nombre}</p>
      <p><b>Vigencia :</b> {item.vigencia}</p>
    </Col>
  	{data.map((item) => (                                 
      <Col key={item.id} className="descompania text-center">
         <img
            alt="compania"
            className="img-perfil"
            src={apiErp + "/static/images/companias/lg/" + item.Companium.filename}
          />       
      </Col>
    ))}            
    <Col md="1" className="pdfcatalogo text-center">
     <Button 
        className={"btn btn-danger btn-xs"}
        onClick={() => changeHandler()}>
      <FontAwesomeIcon icon={faSave}/>  
     </Button> 
    </Col>
    </Row>
  );
}

export default ListaCompanias