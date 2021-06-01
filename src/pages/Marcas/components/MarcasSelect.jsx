import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { productoActions, crudActions } from '../../../actions'
import { stylesErp } from '../../../helpers'

import { useCallback } from 'react';
import Select from 'react-select'
const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.value === valor
      )
  
  }

function MarcasSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.marcas.data)
  const item = useSelector(state => state.marcas.item)
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('MARCAS_LISTA','marcas');
    }
     return () =>{            
        dispatch(crudActions.setReset('MARCAS_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

  const changeHandler = event => {        
    let io = event ? event.value: 0 
    let il = event ? event.label: ''    
    dispatch(crudActions.changeValue('MARCAS_CHANGE','id',io)) 
    dispatch(crudActions.changeValue('MARCAS_CHANGE','nombre',il)) 
    dispatch(productoActions.getListDetalle('MODELOS_LISTA','modelos',io))  
    dispatch(crudActions.setReset('MODELOS_RESET_ITEM'))       
   }
 
  return (    
    <>
        <Select                                                               
            defaultValue={data[0]}
            name="marcaId"    
            id="marcaId"                    
            options={data}      
            isClearable={true} 
            onChange={ changeHandler }                         
            value={defaultVal(data,item.id)}             
            styles={stylesErp}              
        />
    </>
  );
}

export default MarcasSelect