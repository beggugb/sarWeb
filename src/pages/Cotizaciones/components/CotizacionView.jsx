import React,{useEffect} from 'react';
import { crudActions } from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col  
} from "reactstrap"



import ListasCompanias from '../../ProductosCompanias/components/ListasCompanias'
import TasasLista from '../../Tasas/components/TasasLista'

function CotizacionView () {                    
  const dispatch = useDispatch()
  const { item } = useSelector(state => state.cotizaciones)  

  useEffect(() =>{        
   
    return () =>{             
        dispatch(crudActions.setReset('TASAS_RESET'))
        dispatch(crudActions.setReset('PRODUCTOSCOMPANIA_RESET'))
        dispatch({type:'COTIZACIONES_HABILITADO',est:false})                       
    };
  }, [dispatch]);

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
         <ListasCompanias/>                  
         <TasasLista/>         
        </Col> 
      </Row>              
    </div>  
  );
}

export default CotizacionView