import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import ClausulasTable from '../Clausulas/components/ClausulasTable'
import ClausulaForm from './components/ClausulaForm'

function ClausulasView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('CLAUSULAS_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <ClausulaForm/>
    <ClausulasTable/>
    </> 
  );
}

export default ClausulasView