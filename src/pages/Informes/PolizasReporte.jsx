import React, { useEffect, useState } from 'react';
import {  informeActions } from '../../actions'
import DatePicker from 'react-date-picker';
import { useSelector, useDispatch } from 'react-redux'
import {  
  Row,
  Col,    
  FormGroup,
  Label,
  Form,
  Button

} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Polizas from './Polizas'
import UsuarioSelect from '../Usuarios/components/UsuarioSelect'



function PolizasReporte () {     
  const dispatch = useDispatch()
    const [activeTab] = useState('1');    
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date());    
    const itemp = useSelector(state => state.usuarios.item) 
      

  useEffect(() =>{        
    return () =>{             
        dispatch({type:'INFORMES_RESET'})                     
        console.log('descarga')
    };
  }, []);



 const submitHandle = event => {       
   event.preventDefault()       
   const item = {}
   item.desde = value1
   item.hasta = value2         
   item.usuarioId = itemp.id ? itemp.id : 0
   dispatch(informeActions.informes('INFORMES_POLIZAS','polizas',item,value1,value2))          
   
 }
  
  return (
    <div className="informes">    
           <Form onSubmit={ submitHandle}>  
            <h6>Parametros </h6>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Agente :</Label>
                    </Col>   
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                      <UsuarioSelect/>
                    </FormGroup>
                    </Col>                                       
                    <Col md="1" className="subcajas">
                      <Label>Desde :</Label>
                    </Col>   
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                      <DatePicker
                        onChange={onChange1}
                        value={value1}
                      />
                    </FormGroup>
                    </Col>

                      <Col md="1" className="subcajas">
                      <Label>Hasta :</Label>
                    </Col>   
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                      <DatePicker
                        onChange={onChange2}
                        value={value2}
                      />
                    </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                      <Button 
                      type="submit"
                      className="btn-md btn-info">
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} Generar
                      </Button>
                      </FormGroup>  
                    </Col>                    
                </Row>
                               
            </div>                 
            
            </Form>  

    <Row>
      <Col>
        <Polizas/>
      </Col>
    </Row>
        
    </div>

  );
}

export default PolizasReporte