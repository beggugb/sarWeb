import React,{useEffect} from 'react';
import { crudActions } from '../../../actions'
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col  
} from "reactstrap"




function NotaView () {                    
  const dispatch = useDispatch()
  const { item } = useSelector(state => state.notas)  
  
  useEffect(() =>{      
    return () =>{             
        dispatch({type:'NOTAS_RESET_ITEM'})        
    };
  }, []);

  return (    
  	<div className="vproductos">	
      <Row>
      <h6>Póliza</h6>
        <Col>
         sdfs
        </Col>
      </Row>
      
      <Row>
      <h6>Coberturas</h6>
        <Col>
         sdfs
        </Col>
      </Row>
      
      <Row>
      <h6>Clausulas</h6>
        <Col>
         sdfs
        </Col>
      </Row>
      <Row>
        <Col>
         sdfs
        </Col>
      </Row>

      <Row>
      <h6>Financiero</h6>
        <Col md="4">
         nota
        </Col>
        <Col md="8">
         pagoe
        </Col>
      </Row>

    </div>  
  );
}

export default NotaView