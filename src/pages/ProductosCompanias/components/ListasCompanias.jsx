import React from 'react';
import { useSelector } from 'react-redux'
import { apiErp } from "../../../helpers";
import {  
  Row,
  Col  
} from "reactstrap"



function ListasCompanias () {       
  const data = useSelector(state => state.productoscompania.data)  
  const item = useSelector(state => state.productos.item)         

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
    </Row>
  );
}

export default ListasCompanias