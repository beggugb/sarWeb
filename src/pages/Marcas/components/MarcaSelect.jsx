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

function MarcaSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const {data,item} = useSelector(state => state.marcas)  
  
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  },[dispatch])

   const changeHandler = event => {        
    let data = {
        id: event ? event.value: 0, 
        nombre: event ? event.label: ''
    }   
     dispatch({type:'MARCAS_SET_ITEM',response:data})
   }



  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('MARCAS_LISTA','marcas');
    }
     return () =>{            
        dispatch({type:'MARCAS_RESET'})
    };
  }, []);


 
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

export default MarcaSelect