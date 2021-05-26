import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { productoActions, crudActions } from '../../../actions'
import { stylesErp } from '../../../helpers'
import {  
  Row,
  Col,  
  Button, FormGroup, Input
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from 'react';
import Select from 'react-select'

const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.valor === valor
      )
  
  }

function CoberturaSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.coberturas.data)
  
    
  const lista = useSelector(state => state.productocoberturas.lista)  
  const clista = useSelector(state => state.coberturasproductos.lista)  
  const pitem = useSelector(state => state.productos.item)
  const cdata = useSelector(state => state.productoscompania.data)
  

  const [ncobertura,setNcobertura] = useState('')
  const [newData,setNewData] = useState([])

  
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getListItems(xredux, payload))  

  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('COBERTURAS_LISTA','coberturas');      

    }

     return () =>{            
        dispatch(crudActions.setReset('COBERTURAS_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

  


  const update = (id, event) =>{           
    const newTodos = [...newData]
    const { value } = event.target
    newTodos[id].label = value    
    setNewData(newTodos)    
  }

  const save = () =>{           
   /* producto coberturas*/
    const newDat = [...lista]
    let nc = {}
    nc.coberturaId = ncobertura
    nc.productoId = pitem.id
    let label = defaultVal(data,ncobertura)
    nc.label = label[0].label
    newDat.push(nc)
    /* producto coberturas*/
     
   const newLista = [...clista]
   newData.map(item =>{
    return newLista.push(item)
   })
   dispatch(productoActions.setItems('COBERTURAS_PRODUCTOS_SET',newLista))
   dispatch(productoActions.setItems('PRODUCTOS_COBERTURAS_SET',newDat))
   setNewData([]) 
   setNcobertura(0)
  }

  const changeHandler = event => {          
    const { valor } =  event ? event : ''           
    const newDate = []    
    setNcobertura(valor)       
    cdata.map((item=>{
        let dat = {}   
        dat.key = item.id     
        dat.productocompaniaId = item.id
        dat.coberturaId = ''
        dat.productoId = item.productoId          
        dat.label= ''
        dat.coberturaId= valor
        newDate.push(dat)
      }))
    setNewData(newDate)
   }
 


  return (
      <>
      <Row>      
       <Col md="12" className="descoberturas text-center">  
        Coberturas
        </Col>
      </Row>
      <Row>      
       <Col md="3" className="descompania text-center">        
        <Select                                                               
            defaultValue={data[0]}
            name="ncobertura"    
            id="ncobertura"                    
            options={data}      
            isClearable={true} 
            value={defaultVal(data,ncobertura) || ''}
            onChange={ changeHandler }                                       
            styles={stylesErp} 
                      
        />
        </Col>        
       {newData.map((item,index) => (                                 
          <Col key={item.productocompaniaId} 
                className="descompania text-center">                                                 
              <FormGroup>                          
                  <Input
                   id={item.id}
                   type="text"
                   name={item.id}        
                   value={item.label}
                   onChange={event => update(index,event)}                    
                 />
              </FormGroup>                    
          </Col>
        ))}  
        <Col md="1">
          <Button 
            type="button"
            onClick={() => save()}
            className="btn-md btn-success">
            <FontAwesomeIcon icon={faPlus} />  
          </Button>                
        </Col>
      </Row>
      </>
  );
}

export default CoberturaSelect