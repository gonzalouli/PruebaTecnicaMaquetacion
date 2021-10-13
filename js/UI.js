
let listaPlatos =[]

class UI{
    constructor(){
        this.productos = [ {
            "id": 1,
            "nombre": "Niguiri Salmon",
            "precio": 1.25,
            "contenido": "Salmon y arroz Sushi Meshi",
            "descripcion": "Sabroso niguiri de arroz con salmon de noruega. Exquisito para los paladares finos",
            "img": "niguirisalmon.jpg"
            },
            {
            "id": 2,
            "nombre": "Niguiri Atun",
            "precio": 1.50,
            "contenido": "Atun y arroz Sushi Meshi ",
            "descripcion": "Nuestro niguiri mas exlusivo. Atun de almadrava sobre una cama de arros Sushi Meshi",
            "img": "niguiriatun.jpg"
            },
            {
            "id": 3,
            "nombre": "Takoyaki (8 ud)",
            "precio": 7,
            "contenido": "Pulpo, harina, laminas de bonito y nuestra salsa especial",
            "descripcion": "Sabroso niguiri de arroz con salmon de noruega. Exquisito para los paladares finos",
            "img": "takoyaki.jpg"
            },
            {    
            "id": 4,
            "nombre": "Ramen de la casa",
            "precio": 9,
            "contenido": "Fideos, tofu, lomo de cerdo, alga nori, wakame, huevo, setas y naturo",
            "descripcion": "Exquisito bol de ramen de carne y algas. Ideal para las noches mas frias",
            "img": "ramendelacasa.jpg"
            },
            {
            "id": 5,
            "nombre": "Sopa de miso",
            "precio": 5,
            "contenido": "Tofu, caldo dashi, alga wakame, puerro, miso y fideos (opcional)",
            "descripcion": "Para los vegetarianos la sopa de miso es la mejor opcion para introducirse en el mundo oriental. Podemos agragar fideos a gusto del cliente",
            "img": "sopamiso.jpg"
            },
            {
            "id": 6,
            "nombre": "Sashimi variado",
            "precio": 20,
            "contenido": "Atun, salmon, pulpo y pez mantequilla",
            "descripcion": "Plato variado de sashimi. El pescado crudo junto al wasabi hace sentir todo el sabor en tu paladar. Exquisito y exotico",
            "img": "sashimi.jpg"
            }]
    }

    
    mostrarArticulos(){
        const form = document.querySelector('.carta');
        const grid = document.createElement('div');
        

        grid.classList.add('container')
        console.log(this.productos)
        this.productos.forEach( (producto)=>
        {
            const card = document.createElement('div');
            card.classList.add('card', "mt-5",'mb-5')
            card.innerHTML =
            `
                <div class="card-body mx-auto">
                    <img class="card-img-top producto" alt="${producto.id}" draggable="true" src="../img/platos/${producto.img}" ondragstart="drag(event)">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <lu>
                        <li class="card-text" id="productos">${producto.descripcion}</li>
                        <li class="card-text" id="contenido">${producto.contenido}</li>
                        <li class="card-text" id="contenido">Precio: ${producto.precio} €</li>
                    </lu>
                    <button class="btn btn-primary mt-3" id="agregar" value="${producto.id}"> Agregar al carrito</button>
                </div>
                
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

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function drag(ev){
    console.log("draggando")
    ev.dataTransfer.setData("text", ev.target.id);
}