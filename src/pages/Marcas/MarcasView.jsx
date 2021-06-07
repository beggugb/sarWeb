import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import MarcasTable from '../Marcas/components/MarcasTable'
import MarcaForm from './components/MarcaForm'

function MarcasView () {     

  return (
    <>         
    <MarcaForm/>
    <MarcasTable/>
    </> 
  );
}

export default MarcasView