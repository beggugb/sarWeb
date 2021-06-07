import React,{useEffect} from 'react';
import { apiErp } from "../../../helpers";
import { useSelector, useDispatch } from 'react-redux'
import {              
    Row,
    Col
  } from "reactstrap";


function TasasCompaniaListas () {          

  const dispatch = useDispatch()
  const { data } = useSelector(state => state.tasas)


   useEffect(() =>{        
     return () =>{             
        dispatch({type:'TASAS_RESET_DATA'})
        dispatch({type:'COTIZACIONES_RESET_ITEM'})        
    }; 
  }, []);

  const component =  <>
    <Row className="mt-2">                
    <Col md="3" className="tasacom">Compañias</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasacom">
         <img
            alt="compania"
            className="img-perfil"
            src={apiErp + "/static/images/companias/md/" + item.filename}
          />
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
    <Row>
    <Col md="3" className="tasacr">Prima Contado</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasacr">          
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
  
    </>

  return (    
   <>
    {component }
    </>
  );
}

export default TasasCompaniaListas