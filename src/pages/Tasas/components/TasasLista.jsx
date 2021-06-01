import React from 'react';
import { useSelector } from 'react-redux'
import {              
    Row,
    Col
  } from "reactstrap";



function TasasLista () {          

  const { data } = useSelector(state => state.tasas)
  const { habilitado } = useSelector(state => state.cotizaciones)  

  const component =  <>
    <Row className="mt-2">            
    <Col md="3" className="tasaco">Prima Contado</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasaco">
        {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaContado)}
      </Col>
    ))}                
    </Row>
    <Row>            
    <Col md="3"className="tasacr">Prima Cŕedito</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasacr">       
       {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaCredito)}
      </Col>
    ))}                
    </Row>
    <Row>            
    <Col md="3" className="tasaf">Franquicia</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasaf">       
       {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.franquicia)}
      </Col>
    ))}                
    </Row>
    </>

  return (    
   <>
    {habilitado ? component : null}
   </>
  );
}

export default TasasLista