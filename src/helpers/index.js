const formatearDinero = (valor) =>{
    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'CLP'
    })
    return formatter.format(valor)
}

export {
    formatearDinero
}