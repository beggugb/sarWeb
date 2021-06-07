import React,{useEffect} from 'react';
import { crudActions } from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col  
} from "reactstrap"
import PolizaItem from './PolizaItem'
import CoberturasList from '../../Coberturas/components/CoberturasList'
import ClausulasList from '../../Clausulas/components/ClausulasList'
import NotaItem from '../../Nota/components/NotaItem'
import PagosList from '../../Pagos/components/PagosList'


function PolizaView () {                    
  return (    
  	<div className="vpolizas">	
      <PolizaItem/>      
      <CoberturasList/>
      <ClausulasList/>
      <Row>      
        <Col md="4">        
         <NotaItem/>
        </Col>
        <Col md="8">
         <PagosList/>
        </Col>
      </Row>

    </div>  
  );
}

export default PolizaView