import React from 'react';
import { Row, Col} from "reactstrap"



import ListasCompanias from '../../ProductosCompanias/components/ListasCompanias'
import ListasClausulas from '../../ProductosClausulas/components/ListasClausulas'
import ListasCoberturas from '../../ProductosCoberturas/components/ListasCoberturas'

function ProductoView ({pky}) {                    
  return (    
  	<div className="vproducto">	                                                    
      <Row>       
        <Col md="12" className="vcompanias"> 
         <ListasCompanias/>         
         <p className="descoberturas text-white">Coberturas</p>
         <ListasCoberturas/>         
         <p className="desclausulas text-white">Clausulas</p>
         <ListasClausulas/>         
        </Col> 
      </Row>              
    </div>  
  );
}

export default ProductoView