import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";


function MarcaForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.marcas.item)  
       
  const changeHandler = event => {    
  const { name, value } = event.target    
   dispatch(crudActions.changeValue('MARCAS_CHANGE',name,value))  
 }

const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      
      dispatch(crudActions.putList('MARCAS_ADD','marcas',item))            
    }else{
      dispatch(crudActions.createList('MARCAS_ADD','marcas',item))      
    }        
 }


  return (    
      <div className="herramientas">         
        <h6>Registro de marcas</h6>                        
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
                            id="nombre"
                            type="text"
                            name="nombre"                                                        
                            value={item.nombre}
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

export default MarcaForm