import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import ModeloImagen from './ModeloImagen'

function ModeloForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.modelos.item)  
  const [enabled,setEnabled] = useState(true)
       
  const changeHandler = event => {    
  const { name, value } = event.target    
   dispatch(crudActions.changeValue('MODELOS_CHANGE',name,value))  
 }

const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      
      dispatch(crudActions.putList('MODELOS_ADD','modelos',item))            
    }else{
      dispatch(crudActions.createList('MODELOS_ADD','modelos',item))      
    }    
    setEnabled(false)    
 }


  return (    
      <div className="herramientas">         
        <h6>Registro de modelos</h6>                        
           <Row>
           <Col md={8}>
           <Form onSubmit={ submitHandle}>  
            <h5>Datos </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>                    
                    <Col md="8" className="subcajas">
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
            </Col>
            <Col md={4}>
            { enabled ?
              <ModeloImagen />: null
            }
            </Col>
          </Row>  
        </div>               
  );
}

export default ModeloForm