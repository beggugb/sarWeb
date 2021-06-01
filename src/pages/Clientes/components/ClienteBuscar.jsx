import React,{useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { productoActions,crudActions } from '../../../actions'
import {  
  FormGroup, Input, Label 
} from "reactstrap"


function ClienteBuscar () {     
  const dispatch = useDispatch()   
  const [it,setIt] = useState()
  const { lista } = useSelector(state => state.clientes)         
  
  const changeHandler = event => {      
  const { value } = event.target
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
      <Label>Cliente :</Label>          
        <Input
          id="nombre"
          type="text"
          name="nombre"      
          placeholder="...nombre cliente"                                                  
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