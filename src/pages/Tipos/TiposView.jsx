import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import TiposTable from '../Tipos/components/TiposTable'
import TipoForm from './components/TipoForm'

function TiposView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('TIPOS_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <TipoForm/>
    <TiposTable/>
    </> 
  );
}

export default TiposView