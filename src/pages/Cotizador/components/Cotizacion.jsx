import React from 'react';

import {  
  Row,
  Col  
} from "reactstrap"



import ListasCompanias from '../../ProductosCompanias/components/ListasCompanias'
import ListasClausulas from '../../ProductosClausulas/components/ListasClausulas'
import ListasCoberturas from '../../ProductosCoberturas/components/ListasCoberturas'
import TasasLista from '../../Tasas/components/TasasLista'
import Cotiza from './Cotiza'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Cotizacion ({pky, getComponent}) {        
  return (    
  	<div className="vproducto">	     
      <Row className="vcotizacion">       
        <Col md="3" className="vcotizacionp"> 
         Cotiza
        </Col>
        <Col md="1" className="vcotizacionp">                      
         <FontAwesomeIcon icon={faArrowRight} />  
        </Col> 

        <Col md="3" className="vcotizacionp"> 
         Ingresa tus datos
        </Col>         
        <Col md="1" className="vcotizacionp">                           
         <FontAwesomeIcon icon={faArrowRight} />  
        </Col> 

        <Col md="4" className="vcotizacionp"> 
         Enviar cotización
        </Col>          
      </Row>  
                                             
      <Row>       
        <Col md="3" className="vcompanias"> 
          <Cotiza />
        </Col> 
        <Col md="9" className="vcompanias"> 
         <ListasCompanias/>         
         <p className="descoberturas">Coberturas</p>
         <ListasCoberturas/>         
         <p className="desclausulas">Clausulas</p>
         <ListasClausulas/>
         <TasasLista />
        </Col> 
      </Row>            
    </div>  
  );
}

export default Cotizacion