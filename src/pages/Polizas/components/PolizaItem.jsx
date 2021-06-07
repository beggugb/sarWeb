import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
function PolizaItem () {                    
  const dispatch = useDispatch()
  const { item } = useSelector(state => state.polizas)  

  useEffect(() =>{        
    return () =>{             
        dispatch({type:'POLIZAS_RESET_ITEM'})        
    };
  }, []);


  return (    
  	<div className="repPoliza">	
      <h6>Resumen de póliza # {item.nro}</h6>
      <h5><b>Compañia:</b> {item.Companium.nombre}</h5>
      <p><b>Ramo:</b> {item.Ramo.nombre}</p>
      <p><b>Vigencia:</b> {item.ivigencia} - {item.fvigencia}</p>
      <p><b>Cliente:</b> {item.Cliente.nombres}</p>
      <p><b>Producto:</b> {item.Producto.nombre}</p>
      <p><b># Cotización:</b> {item.cotizacionId}</p>
      


    </div>  
  );
}

export default PolizaItem