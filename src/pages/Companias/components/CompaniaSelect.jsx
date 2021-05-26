import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'

import { useCallback } from 'react';
import Select from 'react-select'


function CompaniaSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.companias.data)    
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getListItems(xredux, payload))  
  },[dispatch])

   const changesHandler = prop => event => {                                 
     dispatch({ type: 'COMPANIAS_ITEMS', response: event });
 }

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('COMPANIAS_LISTA','companias');
    }
     return () =>{            
        dispatch(crudActions.setReset('COMPANIAS_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);
   
  return (    
    <>        
        <Select
          defaultValue={[data[0]]}
          isMulti
          name="compania"
          options={data}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={ changesHandler('compania')} 
        />
    </>
  );
}

export default CompaniaSelect