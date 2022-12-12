import React, { useState, useEffect } from "react";

const [statusId, setStatusId] = useState(0);
//funcion para encender / apagar
//si esta encendido statusID sera > 0 entonces se pone a 0 y se para la secuencia
const StartSecuence = () => {
    if (statusId) {
        clearInterval(statusId);
        setStatusId(0);
        setColor("");
        return;
    }
    //endender secuencia
    const newStatusId = setInterval(() => {
        setColor((color) => color == "red" ? color = "yellow" : color == "yellow" ? color = "green" : color = "red")
    }, 1000);
    setStatusId(newStatusId);
    return color;
}
export default StartSecuence;