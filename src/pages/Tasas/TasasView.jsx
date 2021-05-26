import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import {  
  Row,
  Col  
} from "reactstrap"

import FilaCompanias from '../ProductosCompanias/components/FilaCompanias'
import TasasTable from './components/TasasTable'
import TasaForm from './components/TasaForm'



function TasasView () {      

  const dispatch = useDispatch()            
  const ckey = useSelector(state => state.productoscompania.ckey)
  const {item} = useSelector(state => state.productos)   


    useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('TASAS_RESET'))               
    };
  }, [dispatch]);
  return (    
    <div className="vproducto">                     
      <Row>       
        <Col md="4" className="vtitulos"> 
         Tasas
        </Col> 
        <Col md="8" className="vtitulos">
          <p><b>Producto :</b> {item.nombre} - 
          <b>Vigencia :</b> {item.vigencia}</p>
        </Col>
      </Row>  
      <Row>       
        <Col md="2" className="vcompanias"> 
          <p className="text-dark ml-2">Compañias</p>
          <FilaCompanias/>
        </Col> 
        <Col md="10" className="vcompanias"> 
          {ckey ?
          <>
          <TasaForm/>
          <TasasTable/>
          </>:null}
        </Col> 
      </Row>              
    </div>  
  );
}

export default TasasView