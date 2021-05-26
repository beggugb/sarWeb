import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";


function CoberturaForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.coberturas.item)  
       
  const changeHandler = event => {    
  const { name, value } = event.target    
   dispatch(crudActions.changeValue('COBERTURAS_CHANGE',name,value))  
 }

const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      
      dispatch(crudActions.putList('COBERTURAS_ADD','coberturas',item))            
    }else{
      dispatch(crudActions.createList('COBERTURAS_ADD','coberturas',item))      
    }        
 }


  return (    
      <div className="herramientas">         
        <h6>Registro de coberturas</h6>                        
           <Form onSubmit={ submitHandle}>  
            <h5>Datos </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>                    
                    <Col md="4" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="label"
                            type="text"
                            name="label"                                                        
                            value={item.label}
                            onChange={changeHandler}     
                            required                                              
                          />
                      </FormGroup>
                    </Col>                    
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                      <Button 
                      type="submit"
                      className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} {item.id ? " Actualizar" : " Guardar"}
                      </Button>
                      </FormGroup>  
                    </Col>                    
                </Row>
                               
            </div>                 
            
            </Form>                              
        </div>               
  );
}

export default CoberturaForm