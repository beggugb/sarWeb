import React,{useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { productoActions,crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem
} from "reactstrap"
import { stylesErp, paises  } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import ClienteImagen from './ClienteImagen'

function ClienteBuscar () {     
  const dispatch = useDispatch()   
  const [it,setIt] = useState()
  const {lista, item} = useSelector(state => state.clientes)         
  
  const changeHandler = event => {      
  const { name, value } = event.target
  let dato = value ? value :   0
  setIt(dato)
  dispatch(productoActions.getListDetalle('CLIENTES_LISTA','clientes',dato))
  
  }

  const changesHandler = (id,name) => {         
   dispatch(crudActions.changeValue('CLIENTES_CHANGE','id',id))  
   setIt(name)
   dispatch({type: 'CLIENTES_RESET_LISTA'})
  }

     
  return (    
      <>
      <FormGroup>                          
        <Input
          id="nombre"
          type="text"
          name="nombre"                                                        
          value={it || ''}
          onChange={changeHandler}                                                   
          onClick={() => {setIt('')}}
        />
      </FormGroup>
      {lista &&
      <div className="cbuscar" >
      {lista.map((item) => (                                         
        <p 
        key={item.id}
        onClick={() => {changesHandler(item.id,item.nombres)}}
        >
        {item.nombres}
        </p>
      ))}        
    </div>  
     }
      </>
  );
}

export default ClienteBuscar