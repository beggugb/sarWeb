import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { cotizacionActions, crudActions } from '../../../actions'
import {  
  Row,
  Col , Form, FormGroup, Label, Input, Button 
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

import TiposSelect from '../../Tipos/components/TiposSelect'
import ClienteBuscar from '../../Clientes/components/ClienteBuscar'

function Cotiza () {  
  const dispatch = useDispatch()   
  const pitem = useSelector(state => state.productos.item) 
  const citem = useSelector(state => state.clientes.item)  
  const item = useSelector(state => state.tipos.item)    
  const [monto,setMonto] = useState()

  
  const changeHandler = event => {    
  
  const {  value } = event.target  
    setMonto(value)
 }
const submitHandle = event => {       
   event.preventDefault()    
   let dato ={}
    dato.monto = monto
    dato.tipoId = item.id
    dato.productoId = pitem.id
    dispatch(crudActions.createList('TASAS_LISTA','cotizaciones/cotizar',dato))     
     /*let est = habilitado === true ? false : true;*/
    dispatch({type:'COTIZACIONES_HABILITADO',est:true})
 }    


  const handleSave = () => {   
    let fecha = new Date() 
    let dating ={}   
    dating.orden = 1
    dating.nro = 1
    dating.ivigencia = fecha
    dating.fvigencia = fecha
    dating.valor = monto
    dating.tipoId = item.id
    dating.productoId = pitem.id
    dating.clienteId = citem.id
    dispatch(cotizacionActions.createList('COTIZACIONES_ADD','cotizaciones',dating))   
    dispatch({type:'COTIZACIONES_RESET'})
    dispatch({type:'CLIENTES_RESET'})     
    dispatch({type:'TASAS_RESET'})     
    setMonto(0)    
    dispatch({type:'COTIZACIONES_HABILITADO',est:false})
  }             
  return (    
  	<div className="herramientas">     
    <Row>
      <Col md={11}>
      <Form onSubmit={ submitHandle}>              
        <div className="sub-form">              
          <Row>
            <Col md="1" className="subcajas">
              <Label>Tipo :</Label>
            </Col>                    
            <Col md="3" className="subcajas">
              <FormGroup>                          
                <TiposSelect/>
              </FormGroup>
            </Col>

            <Col md="1" className="subcajas">
              <Label>Valor :</Label>
            </Col>                    
            <Col md="2" className="subcajas">
              <FormGroup>                          
                <Input
                  id="monto"
                  type="number"
                  name="monto"                                                        
                  value={monto || ''}
                  onChange={changeHandler}   
                  required={true}
                />
              </FormGroup>
            </Col>

             <Col md="1" className="subcajas">
              <Label>Cliente :</Label>
            </Col>                    
            <Col md="3" className="subcajas">
              <FormGroup>                          
                <ClienteBuscar/>
              </FormGroup>
            </Col>

            <Col md="1" className="subcajas">
              <Button 
               type="submit"
               className="btn-md btn-info">              
                   {' '} Cotizar
              </Button>
            </Col>            
          </Row>               
        </div>           
      </Form> 
      </Col>

      <Col md={1}>
        <div className="sub-form">
            <Button 
              type="button"
              className="btn-md btn-success"
              onClick={() => {handleSave()}}
            >              
               <FontAwesomeIcon icon={faSave} />  
              </Button>
        </div> 
      </Col>                                   
    </Row>                                     
    </div>  
  );
}

export default Cotiza