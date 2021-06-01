import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import { stylesErp } from '../../../helpers'

import { useCallback } from 'react';
import Select from 'react-select'
const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.value === valor
      )
  
  }

function ModelosSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.modelos.data)
  const item = useSelector(state => state.modelos.item)
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

  useEffect(() =>{    
    /*if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('MODELOS_LISTA','modelos');
    }*/
     return () =>{            
        dispatch(crudActions.setReset('MODELOS_RESET'))
    };
  }, [dispatch]);

  const changeHandler = event => {            
    let io = event ? event.value: 0
    let il = event ? event.label: ''
    let it = event ? event.tipoId: 0
    let ifi = event ? event.filename: 0    
    dispatch(crudActions.changeValue('MODELOS_CHANGE','id',io))
    dispatch(crudActions.changeValue('MODELOS_CHANGE','nombre',il))
    dispatch(crudActions.changeValue('MODELOS_CHANGE','tipoId',it))     
    dispatch(crudActions.changeValue('MODELOS_CHANGE','filename',ifi))     
   }
 
  return (    
    <>
        <Select                                                               
            defaultValue={data[0]}
            name="modeloId"    
            id="modeloId"                    
            options={data}      
            isClearable={true} 
            onChange={ changeHandler }                         
            value={defaultVal(data,item.id)}             
            styles={stylesErp}              
        />
    </>
  );
}

export default ModelosSelect