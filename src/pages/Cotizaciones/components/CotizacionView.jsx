import React,{useEffect} from 'react';
import { crudActions } from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col  
} from "reactstrap"


import TasasCompaniaListas from '../../Tasas/components/TasasCompaniaListas'

function CotizacionView () {                    
  const dispatch = useDispatch()
  const { item } = useSelector(state => state.cotizaciones)  


  return (    
  	<div className="vproductos">	
      <Row>       
        <Col md="6" className="vcompan"> 
         <b>Cliente:</b> {item.Cliente.nombres} 
        </Col>
        <Col md="6" className="vcompan"> 
         <b>Monto: </b>{new Intl.NumberFormat().format(item.valor)} $us.
        </Col> 
      </Row>                                                     
      <Row>       
        <Col md="12" className="vcompanias">          
         <TasasCompaniaListas/>         
        </Col> 
      </Row>              
    </div>  
  );
}

export default CotizacionView