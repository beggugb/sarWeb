import React,{useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { stylesErp, paises  } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEye, faEyeSlash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import AgenteImagen from './AgenteImagen'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const roles =  [                                
                {"value":1,"label":"Administrador"},
                {"value":2,"label":"Agente"},                
                ];

function AgenteForm () {     
  const dispatch = useDispatch()
   
  const item = useSelector(state => state.agentes.item)  
  const [password1,setPassword1] = useState()
  const [password2,setPassword2] = useState()
  const [state,setState] = useState('password')  
       
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('AGENTES_CHANGE',name,value))  
 }

 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('AGENTES_CHANGE',prop,value))  
    
 }


 const chanHandler = event => {    
  const { name, value } = event.target      
    if(name === 'password1')
    {
      setPassword1(value)
    }else{
      setPassword2(value)
    }
 }

const view = () => {       
    let dat =  state === 'text' ? 'password' : 'text'    
    setState(dat)

 }



const submitHandle = event => {       
    event.preventDefault()    
    let itemd = item
    itemd.password = password1
    if(item.id)
    {      
      dispatch(crudActions.putUnit('agentes',itemd))            
    }else{
      dispatch(crudActions.createUnit('AGENTES_ADD','agentes',itemd))      
    }    
    setPassword1('')
    setPassword2('')
 }

         
  return (    
      <div className="herramientas">         
        <h6>Registro de Agentes</h6>     
         <Row>
          <Col md={9}>
           <Form onSubmit={ submitHandle}>  
            <h5>Datos de contanto </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>                    
                    <Col md="10" className="subcajas">
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
                </Row>
            
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Username :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="username"
                            id="username"                            
                            value={item.username || ''}
                            onChange={ changeHandler }                                    
                            enabled="false"
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Tipo :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                      <Select                                                               
                          defaultValue={roles[0]}
                          name="rol"    
                          id="rol"                    
                          options={roles}      
                          isClearable={true}                          
                          value={defaultVal(roles,item.rolId)}                                                                                                                                
                          onChange={ changesHandler('rolId')} 
                          styles={stylesErp} 
                          />
                      </FormGroup>
                    </Col>                                                         
                </Row>

                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Password :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type={state}
                            name="password1"
                            id="password1"                            
                            value={password1 || ''}
                            onChange={ chanHandler }                                     
                            enabled="false"
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Retry :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                      <Input
                            type={state}
                            name="password2"
                            id="password2"                            
                            value={password2 || ''}
                            onChange={ chanHandler }                                  
                            enabled="false"
                          />
                      </FormGroup>
                    </Col>                    
                     <Col md="2" className="subcajas">                      
                      <FormGroup>                                                  
                        {password1 === password2 ?                           
                        <FontAwesomeIcon icon={faCheck} onClick={ view } className="viewtext"/>  : 
                        <FontAwesomeIcon icon={faTimes}  onClick={ view } className="viewpassword" />}                                                    
                      </FormGroup>                      
                    </Col>                                                         
                </Row>
                <Row>                      
                    <Col md="2" className="subcajas">
                     <Label>Mostrar contraseña  :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                      {state === 'text' ? 
                        <FontAwesomeIcon icon={faEyeSlash} onClick={ view } className="viewpassword"/>  : 
                        <FontAwesomeIcon icon={faEye}  onClick={ view } className="viewtext"/>}                          
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
              <AgenteImagen />
            </Col>
          </Row>  
        </div>               
  );
}

export default AgenteForm