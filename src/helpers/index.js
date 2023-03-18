const formatearDinero = (valor) =>{
    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'CLP'
    });
    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;
    //a mayor cantidad, menor interés
    if(cantidad < 1500000){
        total = cantidad + 1.5;
    }else if(cantidad >= 1500000 && cantidad < 2500000){
        total = cantidad * 1.4
    }else if(cantidad >= 2500000 && cantidad < 4000000){
        total = cantidad * 1.3
    }else {
        total = cantidad * 1.2
    }

    //a mayor plazo, mayor interés
    if(plazo === 6){
        total *= 1.1
    }else if(plazo === 12){
        total *= 1.2
    }else{
        total *= 1.3
    }
    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}