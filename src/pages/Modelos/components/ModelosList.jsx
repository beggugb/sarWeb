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

function ModelosList ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.modelos.data)  
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('MODELOS_LISTA','modelos');
    }
     return () =>{            
        dispatch(crudActions.setReset('MODELOS_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);


 const add = (key) => {  
   dispatch(productoActions.getListDetalle('PRODUCTOS_LISTA','productos',key)) 
 }

   
return (    
  <div className="lmodelos">
    {data.map((item) => (                                 
        <Card 
          onClick={() => {add(item.id)}}
          className="modelo" 
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

export default ModelosList