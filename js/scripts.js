
const now = moment().format('yyyy-MM-DD')

document.addEventListener('DOMContentLoaded', ()=>{

    const fechaMin = document.querySelector('#date-imput');

    fechaMin.setAttribute('min', now);

    const enviar= document.querySelector('#enviar')

    enviar.addEventListener('submit', ()=>{

        const checked = document.querySelectorAll('#hour')

        let error=true;
        checked.forEach( (item,error )=>{
            if(item.checked==true){
                error=false
            }
        })
        if(error)
            mostrarAlerta("Seleccione una hora por favor","error")
        else
            mostrarAlerta("Mensaje enviado, contactaremos con usted proximamente","success")

    } )

    

} )


function mostrarAlerta(mensaje,tipo){

    const alerta = document.createElement('div')

    alerta.innerHTML = `
    <span class="alerta">${mensaje}</span>
    `
    if(tipo=="error")
        alerta.classList.add('alert', 'alert-danger')  
    else
        alerta.classList.add('alert', 'alert-success')  
    
    const formulario = document.querySelector('#idform')

    formulario.appendChild(alerta)

    setTimeout( ()=>{
        alerta.remove()
    },3000)
    




}