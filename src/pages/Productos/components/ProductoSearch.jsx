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



function ProductoSearch () {     
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    "nombre":""    
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
    dispatch(crudActions.searchList('PRODUCTOS_DATA','productos',item))  

 }
          
  return (    
      <div className="herramientas">          
           <div className="caja">
                <Row>
                  <Col md="10" className="cajas text-white">Lista de Productos</Col>
                </Row>                                
           </div>
           <div className="subcaja">
           <Form onSubmit={ submitHandle}>                   
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>
                    <Col md="4" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="nombre"
                            type="text"
                            name="nombre"                            
                            placeholder="--todos--"
                            value={item.nombre}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>
                    
                    <Col md="2" className="subcajas">
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

export default ProductoSearch