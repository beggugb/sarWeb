import React,{useState, useEffect} from 'react';
import { apiErp } from "../../../helpers";
import { useSelector, useDispatch } from 'react-redux'
import {              
    Row,
    Col
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function TasasCompaniaLista () {          

  const dispatch = useDispatch()
  const { data } = useSelector(state => state.tasas)
  const { item } = useSelector(state => state.cotizaciones)
  const [ichecka, setIchecka] = useState(0)
  const [icheckb, setIcheckb] = useState(0)
  let usu = JSON.parse(localStorage.getItem('user'))

  const selectHandler = (iok,tipo) => {                                                   
      
      if(tipo === 'contado')
      {
        setIchecka(iok.id)
        setIcheckb(0)  
      }else{
        setIcheckb(iok.id)  
        setIchecka(0)  
      }
      let fecha = new Date()
      let dato={                
        contado: tipo === 'contado' ? true : false, 
        primaTotal: tipo === 'contado' ? iok.primaContado : iok.primaCredito, 
        valor: parseFloat(item.valor),
        comision:0,
        filename: iok.filename,
        lcompania: iok.nombre,
        franquicia: iok.franquicia,
        observaciones:'',
        primaSaldo: parseFloat(item.valor),
        ivigencia:fecha,
        fvigencia:fecha,
        primaPagada:0,        
        estado:false,
        companiaId: iok.companiaId,
        clienteId: item.clienteId,
        lcliente: item.Cliente.nombres,
        lemail: item.Cliente.email,
        usuarioId: usu.id,
        rolId: usu.rolId,
        ramoId:1,
        productoId: item.productoId,
        cotizacionId: item.id,
        transcripcion: true
      }
      dispatch({type:'POLIZAS_SET_ITEM',response: dato});
 }


   useEffect(() =>{        
     return () =>{             
        dispatch({type:'TASAS_RESET_DATA'})
        dispatch({type:'COTIZACIONES_RESET_ITEM'})
        dispatch({type:'POLIZAS_RESET_ITEM'})        
    }; 
  }, []);

  const component =  <>
    <Row className="mt-2">                
    <Col md="3" className="tasacom">Compañias</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasacom">
         <img
            alt="compania"
            className="img-perfil"
            src={apiErp + "/static/images/companias/md/" + item.filename}
          />
      </Col>
    ))}
    </Row>
      <Row>            
    <Col md="3" className="tasaf">Franquicia</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasaf">       
       {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.franquicia)}
      </Col>
    ))}                
    </Row>
    <Row>
    <Col md="3" className="tasacr">Prima Contado</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasacr" onClick={()=> selectHandler(item,'contado')}>          
        {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaContado)}
        { item.id ===  ichecka ? <FontAwesomeIcon icon={faCheck} className="check"/>: null}      
      </Col>
    ))}                
    </Row>
    <Row>            
    <Col md="3"className="tasacr">Prima Cŕedito</Col>
    {data.map((item) => (                                 
      <Col key={item.id} className="tasacr" onClick={()=> selectHandler(item,'credito')}>              
       {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaCredito)}
       { item.id ===  icheckb ? <FontAwesomeIcon icon={faCheck} className="check"/>: null}
      </Col>
    ))}                
    </Row>
  
    </>

  return (    
   <>
    {component }
    </>
  );
}

export default TasasCompaniaLista