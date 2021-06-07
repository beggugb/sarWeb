import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { productoActions, crudActions } from '../../../actions'
import {  
  Card
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {      
  faTags  
} from "@fortawesome/free-solid-svg-icons";

import { useCallback } from 'react';

function MarcasList ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.marcas.data)  
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

  const add = (key) => {  
   dispatch(productoActions.getListDetalle('PRODUCTOS_LISTA','productos',key)) 
  }

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('MARCAS_LISTA','marcas');
    }
     return () =>{            
       dispatch({type:'MARCAS_RESET_DATA'})
    };
  }, []);




   
return (    
  <div className="lmarcas">
    {data.map((item) => (                                 
        <Card 
          onClick={() => {add(item.id)}}
          className="marca" 
          key={item.id}>          
          <div className="imagen">
            <FontAwesomeIcon icon={faTags} />
            <span>{item.label}</span>
          </div>                              
          
        </Card>

       ))} 
    </div>    
  );
}

export default MarcasList