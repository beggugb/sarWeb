import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import CoberturasTable from '../Coberturas/components/CoberturasTable'
import CoberturaForm from './components/CoberturaForm'

function CoberturasView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('COBERTURAS_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <CoberturaForm/>
    <CoberturasTable/>
    </> 
  );
}

export default CoberturasView