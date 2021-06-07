import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function NotaItem () {                    
  const dispatch = useDispatch()
  const { item } = useSelector(state => state.notas)  

  useEffect(() =>{        
    return () =>{             
        dispatch({type:'NOTAS_RESET_ITEM'})        
    };
  }, []);


  return (    
  	<div className="repNota">	
      <h5>Resumen Financiero</h5>
      <p><b># Nota {item.nro}</b></p>      
      <p><b>N° pagos:</b> {item.num}</p>
      <p><b>Vigencia:</b> ( {item.ivigencia} - {item.fvigencia} )</p>      
      <p><b>Prima total:</b> {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaTotal)}</p>      
    </div>  
  );
}

export default NotaItem