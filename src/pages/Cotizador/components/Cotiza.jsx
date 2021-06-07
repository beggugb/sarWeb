import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { cotizacionActions, crudActions } from '../../../actions'
import {  
  Row,
  Col , Form, FormGroup, Label, Input, Button 
} from "reactstrap"
import { apiErp } from "../../../helpers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";


import ClienteBuscar from '../../Clientes/components/ClienteBuscar'
import MarcasSelect from '../../Marcas/components/MarcasSelect'
import ModelosSelect from '../../Modelos/components/ModelosSelect'

function Cotiza () {  
  const dispatch = useDispatch()   
  const pitem = useSelector(state => state.productos.item) 
  const citem = useSelector(state => state.clientes.item)    
  const item = useSelector(state => state.modelos.item) 
  const {habilitado} = useSelector(state => state.cotizaciones) 
  let usu = JSON.parse(localStorage.getItem('user'))

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
    if(citem)
    {
    let fecha = new Date() 
    let dating ={}   
    dating.orden = 1
    dating.nro = 1
    dating.ivigencia = fecha
    dating.fvigencia = fecha
    dating.valor = monto
    dating.tipoId = item.tipoId
    dating.productoId = pitem.id
    dating.clienteId = citem.id
    dating.modelo = item.filename
    dating.usuarioId = usu.id
    dispatch(cotizacionActions.createList('COTIZACIONES_ADD','cotizaciones',dating))   
    dispatch({type:'COTIZACIONES_RESET'})
    dispatch({type:'CLIENTES_RESET'})     
    dispatch({type:'TASAS_RESET'})     
    setMonto(0)    
    dispatch({type:'COTIZACIONES_HABILITADO',est:false})
  }  }       

  
  return (    
    <>
  	<Row>
    <Col className="herramientas">         
      <Form onSubmit={ submitHandle}>                                  
        <div className="sub-form">
        <h6>Datos cotización</h6>     
          <Row>
            <Col md="3" className="subcajas">
              <Label>Marca :</Label>
            </Col>                    
            <Col md="9" className="subcajas">
              <FormGroup>                          
                <MarcasSelect/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="3" className="subcajas">
              <Label>Modelo :</Label>
            </Col>                    
            <Col md="9" className="subcajas">
              <FormGroup>                          
                <ModelosSelect/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="3" className="subcajas">
              <Label>Valor :</Label>
            </Col>                    
            <Col md="9" className="subcajas">
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
          </Row>           
          <Row>
            <Col md="12" className="subcajas">
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
  </Row>
   
  {item.filename ?   
  <Row>
    <Col className="herramientas">                            
      <div className="sub-form">
        <img          
          className="img-perfil text-center"
          src={apiErp + "/static/images/modelos/md/" + item.filename}
        /> 
      </div>
    </Col>  
  </Row>   
  :null}  
  {habilitado ?   
  <>
  <Row>
    <Col className="herramientas">                            
      <div className="sub-form">
        <ClienteBuscar className="mb-3"/>  

      </div>
    </Col>  
  </Row>  
  <Row className="mt-3">
    <Col className="herramientas">                            
      <div className="sub-form">
        <Button 
              type="button"
              className={citem.id ? "btn-md btn-success" : "btn-md btn-disabled" } 
              onClick={() => {handleSave()}}
            >              
            <FontAwesomeIcon icon={faSave} />  
            {''} Guardar cotización
            </Button> 
      </div>
    </Col>  
  </Row>
  </>  
  :null}  
  </>
  );
}

export default Cotiza