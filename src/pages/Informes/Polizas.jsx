import React, { useRef }  from 'react'
import Moment from 'react-moment';
import {     
  Table,
  Button } from "reactstrap";
import { useSelector } from 'react-redux'


import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    
    return (
      <>
  <div className="invoice-box"> 
  <div className="sol">
    <h5 className="text-center mb-2">INFORME DE COTIZACIONES</h5>   
    <h6 className="text-center" >
    ( <Moment format="DD/MM/YYYY">{this.props.pdesde}</Moment> ) - 
    ( <Moment format="DD/MM/YYYY">{this.props.phasta}</Moment> )
    </h6>                           
                       
     <h6 className="ml-3" >Total: { this.props.ptotal }</h6>
     <h6 className="ml-3" >Sumatoria: {new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(this.props.pdetalle)}</h6>
     </div>


       <div className="sol"> 
          <Table className="table-reporteb">
            <thead>
                <tr>                      
                    <th width="10%" className="text-dark">Fecha</th>                    
                    <th width="15%" className="text-dark">Producto</th>
                    <th width="30%" className="text-dark">Cliente</th>                    
                    <th width="15%" className="text-dark">Compania</th>                    
                    <th width="10%" className="text-dark">Prima Total</th>                    
                    <th width="5%" className="text-dark">Tipo</th>                    
                    <th width="15%" className="text-dark">Agente</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>                    
                    <td><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>
                    <td>{item.Producto.nombre}</td>
                    <td>{item.Cliente.nombres}</td>
                    <td>{item.Companium.nombre}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"USD"}).format(item.primaTotal)}</td>                    
                    <td>{item.contado ? 'contado':'credito' }</td>
                    <td>{item.Usuario.nombre}</td>
                    </tr>  
                    ))}
            </tbody>
        )}
         </Table>                    
      
       </div>    
      <p><b> Usuario : </b>{this.props.puser.nombre}</p>    
    </div>      
    </> 
    );
  }}


function Polizas () {    
  const componentRef = useRef();   
  const { polizas, desde, hasta, total, detalle } = useSelector(state => state.informes)  
  const user = useSelector(state => state.usuarios.item)  


return(
    <div>
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={user}
            pdetalle={detalle}
            ptotal={total}
            pdata={polizas}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Polizas