import React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import CompaniaImagen from './CompaniaImagen'


function CompaniaForm () {     
  const dispatch = useDispatch()
   
  const item = useSelector(state => state.companias.item)  
       
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('COMPANIAS_CHANGE',name,value))  
 }


const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      dispatch(crudActions.putUnit('companias',item))            
    }else{
      dispatch(crudActions.createUnit('COMPANIAS_ADD','companias',item))      
    }    
 }


         
  return (    
      <div className="herramientas">                 
         <Row>
          <Col md={9}>
           <Form onSubmit={ submitHandle}>  
            <h5>Datos de compañia </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>                    
                    <Col md="5" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="nombre"
                            type="text"
                            name="nombre"                                                        
                            value={item.nombre || ''}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Nit :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="nit"
                            id="nit"                            
                            value={item.nit || ''}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Dirección :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="direccion"
                            id="direccion"                            
                            value={item.direccion || ''}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Teléfono :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="telefono"
                            type="text"
                            name="telefono"                                                        
                            value={item.telefono || ''}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>                                                         
                </Row>
            
              

                <Row>
                    <Col md="5" className="subcajas">
                    <Button 
                      type="submit"
                      className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} {item.id ? " Actualizar" : " Guardar"}
                      </Button>
                    </Col>                                                                                               
                </Row>
            </div>           
            </Form>    
            </Col>
            <Col md={3} className="subcajas">                          
              <CompaniaImagen />
            </Col>
          </Row>  
        </div>               
  );
}

export default CompaniaForm