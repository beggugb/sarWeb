import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,
  Col,
  Button, Form, FormGroup, Input, Label
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



function ModeloSearch () {     
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    "nombres":"",
    "ci":"",
    "telefono":"",
    
  });

  const changeHandler = event => {    
  const { name, value } = event.target  
  setItem({
    ...item,
    [name]: value
  })  
 }



 const submitHandle = event => {       
    event.preventDefault()        
    dispatch(crudActions.searchList('MODELOS_DATA','modelos',item))  

 }
          
  return (    
      <div className="herramientas">          
           <div className="caja">
                <Row>
                  <Col md="10" className="cajas text-white">Lista de Modelos</Col>
                </Row>                                
           </div>
           <div className="subcaja">
           <Form onSubmit={ submitHandle}>                   
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="nombres"
                            type="text"
                            name="nombres"                            
                            placeholder="--todos--"
                            value={item.nombres}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Ci :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="ci"
                            id="ci"
                            placeholder="--todos--"
                            value={item.ci}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>
                    <Col md="2" className="subcajas">                    
                       <label>Teléfono:</label>                          
                    </Col>                    
                    <Col md="4" className="subcajas">
                    <FormGroup>                       
                                                                                      
                       <Input
                            type="text"
                            name="telefono"
                            id="telefono"
                            placeholder="--todos--"
                            value={item.telefono}
                            onChange={ changeHandler }                                    
                          />
                       </FormGroup>
                    </Col>                    
                    <Col md="3" className="subcajas">                    
                       
                    </Col>
                    <Col md="3" className="subcajas text-center">
                       <Button className="btn-md btn-info">
                       <FontAwesomeIcon icon={faSearch} />  
                        {' '} Buscar                          
                       </Button>
                    </Col>
                </Row> 
            </Form>                   
           </div>
        </div>               
  );
}

export default ModeloSearch