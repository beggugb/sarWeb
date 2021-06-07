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

function RamosSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.ramos.data)
  const item = useSelector(state => state.ramos.item)
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

  const changeHandler = event => {    
    let io = event ? event.value: 0    
    dispatch(crudActions.changeValue('RAMOS_CHANGE','id',io))     
   }

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('RAMOS_LISTA','ramos');
    }
     return () =>{            
        dispatch({type:'RAMOS_RESET'})
    };
  }, []);
 
  return (    
    <>
        <Select                                                               
            defaultValue={data[0]}
            name="ramoId"    
            id="ramoId"                    
            options={data}      
            isClearable={true} 
            onChange={ changeHandler }                         
            value={defaultVal(data,item.id)}             
            styles={stylesErp}              
        />
    </>
  );
}

export default RamosSelect