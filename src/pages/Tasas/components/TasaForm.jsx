import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import TiposSelect from '../../Tipos/components/TiposSelect'



function TasaForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.tasas.item)  
  const titem = useSelector(state => state.tipos.item)  
  const ckey = useSelector(state => state.productoscompania.ckey)  
       
  const changeHandler = event => {    
  const { name, value } = event.target    
   dispatch(crudActions.changeValue('TASAS_CHANGE',name,value))  
 }

const submitHandle = event => {       
    event.preventDefault()    
    let dato = item
    dato.productocompaniaId = ckey
    dato.tipoId = titem.id
    if(item.id)
    {      
      dispatch(crudActions.putList('TASAS_LISTA','tasas',item))            
    }else{
      dispatch(crudActions.createList('TASAS_LISTA','tasas',item))      
    }        
 }


  return (    
      <div className="herramientas">         
        <h6>Registro de tasas</h6>                        
           <Form onSubmit={ submitHandle}>  
            <h5>Datos </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Tipo :</Label>
                    </Col>                    
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                         <TiposSelect/>
                      </FormGroup>
                    </Col>   
                    <Col md="2" className="subcajas">
                      <Label>Desde :</Label>
                    </Col>                 
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                        <Input
                            id="desde"
                            type="number"
                            name="desde"                                                        
                            value={item.desde}
                            onChange={changeHandler} 
                            min="0.00"
                            step="0.001"
                            max="100000.00"
                            presicion={2}    
                            required                                              
                          />
                      </FormGroup>  
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Hasta :</Label>
                    </Col>                 
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                        <Input
                            id="hasta"
                            type="number"
                            name="hasta"                                                        
                            value={item.hasta}
                            onChange={changeHandler}     
                            min="0.00"
                            step="0.001"
                            max="100000.00"
                            presicion={2}    
                            required                                              
                          />
                      </FormGroup>  
                    </Col>                    
                </Row>

                <Row>                    
                    <Col md="2" className="subcajas">
                      <Label>Tasa Contado :</Label>
                    </Col>                 
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                        <Input
                            id="tasaContado"
                            type="number"
                            name="tasaContado"                                                        
                            value={item.tasaContado}
                            onChange={changeHandler}     
                            min="0.00"
                            step="0.001"
                            max="100000.00"
                            presicion={2}    
                            required                                              
                          />
                      </FormGroup>  
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Tasa Crédito :</Label>
                    </Col>                 
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                        <Input
                            id="tasaCredito"
                            type="number"
                            name="tasaCredito"                                                        
                            value={item.tasaCredito}
                            onChange={changeHandler}   
                            min="0.00"
                            step="0.001"
                            max="100000.00"
                            presicion={2}      
                            required                                              
                          />
                      </FormGroup>  
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Franquicia :</Label>
                    </Col>                    
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="franquicia"
                            type="number"
                            name="franquicia"                                                        
                            value={item.franquicia}
                            onChange={changeHandler} 
                            min="0.00"
                            step="0.001"
                            max="10000.00"
                            presicion={2}        
                            required                                              
                          />
                      </FormGroup>
                    </Col>                       
                </Row>

                <Row>                                       
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

export default TasaForm