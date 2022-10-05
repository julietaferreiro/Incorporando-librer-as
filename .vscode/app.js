//Bienvenido al MUNDO DEL CELULAR
// Imprimimos la Fecha de la Compra

const hoy = new Date()
console.log( hoy.toLocaleDateString() )

//Definimos nuestro array de celulares con los modelos
const celulares=[celular1, celular2, celular3, celular4,celular5, celular6, celular7]

// accedemos al html con el DOM y buscamos la clase a donde vamos a cargar nuestras cards

const cardCelular = document.getElementById('cardCelular')
//creamos nuestra funcion para crear los productos automaticamente al momento de cargar la pagina

celulares.forEach((cell) => {
    const card= document.createElement('div')
    card.setAttribute('class','card')
    card.setAttribute('style','width: 18rem;')
    card.innerHTML = `
        
            <img src="${cell.img}" class="card-img-top" alt="...">
            <div class="card-body bg-dark text-white">
              <h5 class="card-title">Celular ${cell.modelo}  </h5>
              <p class="card-text">Descripcion: ${cell.descripcion} </p>
              <p>Precio $${cell.precio}</p>
              <button data-id="${cell.id}" class="btn btn-danger boton">Agregar al Carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></button>
            </div>
        </div>

    
    `
    cardCelular.append(card)
})

//seleccionamos todos los botones que tenemos con la clase boton
const BotonesCarrito = document.querySelectorAll('.boton')
console.log(BotonesCarrito);

const articuloagregado=(e) => {
    const celularelegido= e.target.getAttribute('data-id')
    const buscar_modelo = celulares.find((cell) => cell.id == celularelegido )
    console.log(celularelegido);
    shopCell.push(buscar_modelo)
    console.log('shopCell', shopCell)
    localStorage.setItem('shopCell', JSON.stringify(shopCell))
    mostrarTotal(compraTotal(shopCell))
    mostrarCuenta(shopCell)
    mostrarcarrito()
    Toastify({
        text: "Agregado al Carrito",
        duration: 1000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#2e2c2c",
        },
        onClick: function(){} // Callback after click
      }).showToast();
   
}
const carrito= document.querySelector('.carrito')
const compra= document.querySelector('.compra')

const mostrarcarrito = () => {
    compra.innerHTML = '';
    compra.className = 'listcompra'
    shopCell.forEach((celular)=>{
        const buttonselected = document.createElement('div')
        buttonselected.setAttribute('data-id', celular.id)
        buttonselected.innerHTML= ` <img src="${celular.icon}" alt=""></img>
        <p> ${celular.modelo}- Valor: $${celular.precio} </p>
        <button onclick="eliminarDelCarrito(${celular.id})" class="boton-eliminar">X</button>
        `
        compra.append(buttonselected)
    })
}
const compraTotal=(agregarCell)=>{
    let compra = 0
    agregarCell.forEach((cellphone)=>{
        compra += cellphone.precio 
    })
    return compra
}

// mostramos el total de la compra
const mostrarTotal=(compra)=>{ 
    const comptotal= document.querySelector('#total')
    comptotal.innerHTML= compra.toLocaleString()
}
const mostrarCuenta = (arr) => {
    const divCuenta = document.querySelector('.total-carrito')
    divCuenta.innerHTML = arr.length
}
//seleccionamos todos los botones del carrito y al momento de hacer click se agrega al carrito
BotonesCarrito.forEach((agregar) => {
    agregar.addEventListener('click', articuloagregado)
    
})

//verificamos en la memoria si hay algo guardado y si lo hay lo mostramos.. si no mostramos un array vacio
let shopCell= []
JSON.parse(localStorage.getItem('shopCell')) ? (
    shopCell = JSON.parse(localStorage.getItem('shopCell')),
    mostrarTotal(compraTotal(shopCell)),
    mostrarCuenta(shopCell),
    mostrarcarrito()
) 
: (shopCell= [])
 


const eliminarDelCarrito = (cellid) =>{
    const item = shopCell.find((cell)=> cell.id === cellid)
    const indice = shopCell.indexOf(item)
    shopCell.splice(indice,1)
    mostrarTotal(compraTotal(shopCell))
    mostrarCuenta(shopCell)
    mostrarcarrito()
    
}

//boton vaciar carrito
const vaciarCarrito = () => {
    Swal.fire({
        title: 'Estas seguro de Borrar el Carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo Borrarlo'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado',
            'Tu Carrito ha sido Borrado',
            'success'
          )
          localStorage.getItem('shopCell') && (localStorage.removeItem('shopCell'), shopCell= [],mostrarTotal(compraTotal(shopCell)),mostrarCuenta(shopCell),mostrarcarrito())
        }
      })
    
}

const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

//Buscador
//Creamos nuestro Array de objetos donde vamos a buscar si hay disponibles a traves del buscador.. 
const telefonos = [
    {nombre: 'Samsung Galaxy A12', valor: 60000, img:"./img/samsungicon.jpg"},
    {nombre: 'Nokia 23 M 32 GB 2 GB Ram', valor: 48402, img:"./img/nokiaicon.jpg"} ,   
    {nombre:'LG K50s X540 32 GB 3gb Ram', valor: 35999, img:"./img/lgicon.jpg"},
    {nombre: 'Motorola G22 128GB', valor: 36499,img:"./img/motorolaicon.jpg"},
    {nombre: 'Motorola G22 128GB', valor: 36499,img:"./img/motorolaicon.jpg"},
    {nombre: 'Motorola G22 128GB', valor: 36499,img:"./img/motorolaicon.jpg"},
    {nombre: 'Motorola G22 128GB', valor: 36499,img:"./img/motorolaicon.jpg"},
     
] 
//creamos nuestras variables seleccionandola desde el html por sus ID
const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton2')
const resultado = document.querySelector('#resultado')

//Creamos nuestra funcion flecha para buscar el resultado en nuestro array..
const filtrar = (event) =>{
    event.preventDefault()
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase()
    for(let telefono of telefonos){
        let nombre = telefono.nombre.toLowerCase()
        buscador = (nombre.indexOf(texto) !== -1) && (resultado.innerHTML +=`<div><img src="${telefono.img}" alt="...">
        <li>${telefono.nombre}</li>
        <li>Valor: $${telefono.valor} </li></div>
        `)
    }   
    (resultado.innerHTML === '') && (resultado.innerHTML += `<li> Producto no encontrado... </li>`)
}   
boton.addEventListener('click', filtrar)
//Fin del ciclo
//alerts
