import './App.scss';
import React from "react";
//import {CgCopy} from "react-icons/cg";
import {QRCode} from "react-qrcode-logo";

class Transfermovil extends React.Component{
    constructor(props){
        super(props);
        this.propsToString = this.propsToString.bind(this);
        this.propsToBasic = this.propsToBasic.bind(this);
    }
    propsToString(){
        let r = "TRANSFERMOVIL_ETECSA, TRANSFERENCIA";
        r = r.concat("," + this.props["bank"]);
        r = r.concat("," + this.props["card"]);
        r = r.concat("," + this.props["mobile"]);
        return r;
    }
    propsToBasic(){
        let r = {};
        r["bank"] = this.props["bank"];
        r["card"] = this.props["card"];
        r["mobile"] = this.props["mobile"];
        return Object.keys(r);
    }
    componentDidUpdate(){
        let qr = document.getElementById('react-qrcode-logo');
        qr.title = "Datos de la transferencia: \n" + this.propsToString();
    }
    render(){
        return <div className='tm-main' >
                    <div title={this.propsToString()} className='tm-qr'>
                    <QRCode quietZone="30" 
                        ecLevel='H'
                        fgColor={this.props.color}
                        eyeRadius={[
                            [0, 90, 90, 90], 
                            [30, 0, 90, 90], 
                            [90, 90, 90, 0],
                            [90, 90, 90, 0]
                        ]}
                        qrStyle="dots" 
                        value={this.propsToString()} size={250}/>
                    </div>
                    <div style={{backgroundColor: "black"}} className='tm-container'>
                        {(()=>{
                            let r = [];
                            for (let el of this.propsToBasic())
                                r.push(<span key={r.length} className='tm-label'>{this.props[el]}</span>);
                            return r;
                        })()}
                    </div>
                    <label style={{marginTop: "5%", fontWeight: "bold", fontSize: "medium", }} htmlFor="tm_tarea">
                        Nro. de Transaccion o Mensaje de transferencia (PAGOxMOVIL)
                    </label>
                    <textarea id="tm_tarea" required className='tm-tarea' placeholder='Nro. de Transaccion o Mensaje de transferencia (PAGOxMOVIL)'></textarea>               
            </div>;
    }
}

Transfermovil.defaultProps = {
    bank: "Bank",
    card: "Card",
    mobile: "Mobile",
    color: "red"
};
export default Transfermovil;
