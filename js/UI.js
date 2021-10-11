
let listaPlatos =[]

class UI{
    constructor(){
        
    }
    mostrarArticulos(){
        const form = document.querySelector('.carta');
        console.log("mostrararticulos")
        const grid = document.createElement('div');
        const prods = JSON.parse(productos.json)

        grid.classList.add('container','mx-auto')

        prods.forEach( (producto)=>
        {
            const card = document.createElement('div');
            card.classList.add('card')
            card.innerHTML =
            `
                <img class="card-img-top" src="../img/platos/${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <lu>
                    <li class="card-text" id="productos">${producto.descripcion}</li>
                    <li class="card-text" id="contenido">${producto.contenido}</li>
                    </lu>
                    <p class="card-text">${producto.precio}</p>
                </div>
                <button id="agregar" value=${producto.id}>Agragar al carrito</button>
            `
            grid.appendChild(card)

        })
        
        form.appendChild(grid)
    }
}


const ui = new UI();

document.addEventListener("DOMContentLoaded", ()=>
{
    ui.mostrarArticulos();

    document.querySelector("#agregar").addEventListener("click", (e)=>
    {
        e.preventDefault();
        listaPlatos.push(e.target.value)
    } )


    
})