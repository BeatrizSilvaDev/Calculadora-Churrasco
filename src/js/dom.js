function obterFormulario(){
    return document.forms.camposFormulario
}

function mostrarBebida (bebida){
    document.getElementById("valor-refri").innerText = bebida.valores.refri;
}

export { obterFormulario, mostrarBebida}