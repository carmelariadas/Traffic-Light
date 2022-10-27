import React, {useState} from "react";


const TrafficLight = () =>{

const[marcado, setMarcado]=useState("marcarGreen")
const siguienteColor = () =>{
    if(marcado=="marcarGreen"){
        setMarcado("marcarYellow");
    }
    if(marcado=="marcarYellow"){
        setMarcado("marcarRed");
    }
    if(marcado=="marcarRed"){
        if(purpura==true){
            setMarcado("marcarPurpura");
        }else{
        setMarcado("marcarGreen");
        }
    }
    if(marcado=="marcarPurpura"){
        setMarcado("marcarGreen");
    }
};


const[purpura, setPurpura]=useState(false);




const añadirOQuitarPurpura = () =>{
    setPurpura(!purpura)
};

return(
    <>
        <div className="container d-flex justify-content-center mt-5">
            <button className="m-2" onClick={siguienteColor}>Alternar colores</button>
            <button className="m-2" onClick={añadirOQuitarPurpura}>color púrpura</button>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="semaforo d-flex flex-column">
                <button onClick={()=> setMarcado("marcarGreen")} className={marcado=="marcarGreen" ? "green-brillo lights rounded-circle " : "green lights rounded-circle"}></button>
                <button onClick={()=> setMarcado("marcarYellow")} className={marcado=="marcarYellow" ? "yellow-brillo lights rounded-circle " : "yellow lights rounded-circle"}></button>
                <button onClick={()=> setMarcado("marcarRed")} className={marcado=="marcarRed" ? "red-brillo lights rounded-circle " : "red lights rounded-circle"}></button>
                <button onClick={()=> setMarcado("marcarPurpura")} className={purpura==false ? "d-none" : marcado!="marcarPurpura" ? "purpura lights rounded-circle " : "purpura-brillo lights rounded-circle "}></button>
            </div>
        </div>
    </>
);
};

export default TrafficLight;