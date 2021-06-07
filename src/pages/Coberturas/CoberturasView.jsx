import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import CoberturasTable from '../Coberturas/components/CoberturasTable'
import CoberturaForm from './components/CoberturaForm'

function CoberturasView () {     
  
  return (
    <>         
    <CoberturaForm/>
    <CoberturasTable/>
    </> 
  );
}

export default CoberturasView