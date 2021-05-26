import React,{useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { productoActions, crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import CompaniaSelect from '../../Companias/components/CompaniaSelect'
import RamoSelect from '../../Ramos/components/RamosSelect'
import DatePicker from 'react-date-picker';

function ProductoForm ({getComponent}) {     
  const dispatch = useDispatch()   
  const item = useSelector(state => state.productos.item)  
  const ritem = useSelector(state => state.ramos.item)  
  const items = useSelector(state => state.companias.items)  
  const [value, onChange] = useState(new Date());        
  
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('PRODUCTOS_CHANGE',name,value))  
 }


const submitHandle = event => {       
    event.preventDefault()    

    let newitem = item
    newitem.ramoId = ritem.id
    newitem.vigencia = value
    const dato = {
      item : newitem,
      items : items
    }
    dispatch(productoActions.createList('PRODUCTOS_ADD','productos',dato))  
    getComponent('lista')        
 }

         
  return (    
      <div className="herramientas">                 
         <Row>
          <Col md={12}>
           <Form onSubmit={ submitHandle}>  
            <h5>Datos de producto </h5>
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
                            required={true}
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Ramo :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                      <RamoSelect/>
                    </FormGroup>
                    </Col>                                     
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Compañias :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>
                      <CompaniaSelect/>
                    </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Vigencia :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                    <FormGroup>
                      <DatePicker
                        onChange={onChange}
                        value={value}
                      />
                    </FormGroup>
                    </Col>
                    <Col md="1" className="subcajas">
                    <Button 
                      type="submit"
                      className="btn-md btn-info">
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} 
                      </Button>
                    </Col>
                </Row>               
            </div>           
            </Form>    
            </Col>            
          </Row>  
        </div>               
  );
}

export default ProductoForm