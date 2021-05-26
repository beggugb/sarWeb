import React from 'react';
import {  
  Row,
  Col  
} from "reactstrap"


import ClausulaSelect from '../../Clausulas/components/ClausulaSelect'
import CoberturaSelect from '../../Coberturas/components/CoberturaSelect'
import ListaCompanias from '../../ProductosCompanias/components/ListaCompanias'
import ListaClausulas from '../../ProductosClausulas/components/ListaClausulas'
import ListaCoberturas from '../../ProductosCoberturas/components/ListaCoberturas'


function ProductoDetalle ({pky}) {                    
  return (    
  	<div className="vproducto">	                    
      <Row>      	
        <Col md="12" className="vtitulos"> 
         Catalogo
        </Col> 
      </Row>  
      <Row>       
        <Col md="12" className="vcompanias"> 
         <ListaCompanias/>
         <CoberturaSelect/>                  
         <ListaCoberturas/>   
         <ClausulaSelect/>
         <ListaClausulas/>
         </Col> 
      </Row>              
    </div>  
  );
}

export default ProductoDetalle