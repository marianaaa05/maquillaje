// Arreglos para almacenar lod datos de cada categoría
const maybelline = [
    new Maybelline ('Contorno Maybelline','Maybelline', 132000, 50),
    new Maybelline ('Base Maybelline','Maybelline', 150000, 50), 
    new Maybelline ('Corrector Maybelline','Maybelline', 97000, 50)
];    


const fenty = [
    new Fenty ('Labial Fenty','Fenty', 90000, 50), 
    new Fenty ('Balsamo Fenty','Fenty', 50000, 50),
    new Fenty ('Brillo Fenty','Fenty', 95000, 50)
];

const chanel = [
    new Chanel ('Rimel Chanel','Chanel', 105000, 50), 
    new Chanel ('Sombra Chanel','Chanel', 85000, 50),
    new Chanel ('Iluminador Chanel','Chanel', 47000, 50)
];


// Función para cargar la aplicación
let cargarApp = () => {
    cargarCabecera(); // Cargar la cabecera de la aplicación
    cargarMaybelline(); // Cargar la lista 
    cargarFenty(); // Cargar la lista 
    cargarChanel();
}

// Función para calcular el total 
let totalMaybelline = () => {
    let totalMaybelline = 0;
    for (let may of maybelline) {
        totalMaybelline += may.disponible; // Sumar en totalCategoria el valor asignado a disponible
    }
    return totalMaybelline;
}


let totalFenty = () => {
    let totalFenty = 0;
    for (let fen of fenty) {
        totalFenty += fen.disponible; // Sumar el valor de cada ingreso al total
    }
    return totalFenty;
}

let totalChanel = () => {
    let totalChanel = 0;
    for (let cha of chanel) {
        totalChanel += cha.disponible; // Sumar el valor de cada ingreso al total
    }
    return totalChanel;
}

let cargarCabecera = () => {
    //inventario total
    let inventarioTotal = totalMaybelline() + totalFenty() + totalChanel(); 
    // Actualizar los elementos HTML con los valores calculados
    document.getElementById('totalInventario').innerHTML = (inventarioTotal); // Mostrar el inventario total
    document.getElementById('maybelline').innerHTML = (totalMaybelline()); 
    document.getElementById('fenty').innerHTML = (totalFenty()); 
    document.getElementById('chanel').innerHTML = (totalChanel());
}
//----------------------------------------------------------------------------------

const formatoMoneda = (precio) => {
      return precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
}



// Función para cargar los Maybelline en el HTML
const cargarMaybelline = () => {
    let maybellineHTML = '';
    for (let may of maybelline) {
        maybellineHTML += crearMaybellineHTML(may); // Crear HTML para cada producto agregado y concatenarlo
    }
    document.getElementById('listaMaybelline').innerHTML = maybellineHTML; // Mostrar HTML en la lista
}

// Función para crear el HTML Maybelline
const crearMaybellineHTML = (may) => {
    let maybellineHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elementoDescripcion">${may.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elementoValor">${formatoMoneda(may.precio)}</div>
                <div class="elementoDisponible">${may.disponible}</div>
                <div class="elementoEliminar">
                    <button class="elementoEliminarBtn" onclick='eliminarMaybelline(${may.id})'>
                        <span class="material-symbols-outlined">
                            cancel
                        </span>
                    </button>
                </div>
            </div> 
        </div>
    `;
    return maybellineHTML; // Devolver HTML para un ingreso
}

// Función para eliminar un ingreso
const eliminarMaybelline = (id) => {
    let indiceEliminar = maybelline.findIndex(may => may.id === id); // Encontrar índice del ingreso a eliminar
    maybelline.splice(indiceEliminar, 1); // Eliminar ingreso del arreglo
    cargarCabecera(); // Recargar cabecera
    cargarMaybelline(); // Recargar lista de ingresos
}
//------------------------------------------------------------------

// Función para cargar fenty en el HTML
const cargarFenty = () => {
  let fentyHTML = '';
  for (let fen of fenty) {
      fentyHTML += crearFentyHTML(fen); // Crear HTML para cada ingreso y concatenarlo
  }
  document.getElementById('listaFenty').innerHTML = fentyHTML; // Mostrar HTML de ingresos en la lista
}

// Función para crear el HTML de un ingreso
const crearFentyHTML = (fen) => {
  let fentyHTML = `
      <div class="elemento limpiarEstilos">
          <div class="elementoDescripcion">${fen.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elementoValor">${formatoMoneda(fen.precio)}</div>
              <div class="elementoDisponible">${fen.disponible}</div>
              <div class="elementoEliminar">
                  <button class="elementoEliminarBtn" onclick='eliminarFenty(${fen.id})'>
                      <span class="material-symbols-outlined">
                          cancel
                      </span>
                  </button>
              </div>
          </div> 
      </div>
  `;
  return fentyHTML; // Devolver HTML para un ingreso
}

// Función para eliminar un producto ingresado
const eliminarFenty = (id) => {
  let indiceEliminar = fenty.findIndex(fen => fen.id === id); // Encontrar índice del ingreso a eliminar
  fenty.splice(indiceEliminar, 1); // Eliminar ingreso del arreglo
  cargarCabecera(); // Recargar cabecera
  cargarFenty(); // Recargar lista de ingresos
}
//------------------------------------------------------------------

// Función para cargar los ingresos en el HTML
const cargarChanel = () => {
  let chanelHTML = '';
  for (let cha of chanel) {
      chanelHTML += crearChanelHTML(cha); // Crear HTML para cada ingreso y concatenarlo
  }
  document.getElementById('listaChanel').innerHTML = chanelHTML; // Mostrar HTML de ingresos en la lista
}

// Función para crear el HTML de Chanel
const crearChanelHTML = (cha) => {
  let chanelHTML = `
      <div class="elemento limpiarEstilos">
          <div class="elementoDescripcion">${cha.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elementoValor">${formatoMoneda(cha.precio)}</div>
              <div class="elementoDisponible">${cha.disponible}</div>
              <div class="elementoEliminar">
                  <button class="elementoEliminarBtn" onclick='eliminarChanel(${cha.id})'>
                      <span class="material-symbols-outlined">
                          cancel
                      </span>
                  </button>
              </div>
          </div> 
      </div>
  `;
  return chanelHTML; // Devolver HTML para un ingreso
}
// Función para eliminar un ingreso
const eliminarChanel = (id) => {
  let indiceEliminar = chanel.findIndex(cha => cha.id === id); // Encontrar índice del ingreso a eliminar
  chanel.splice(indiceEliminar, 1); // Eliminar ingreso del arreglo
  cargarCabecera(); // Recargar cabecera
  cargarChanel(); // Recargar lista de ingresos
}
//------------------------------------------------------------------
//------------------------------------------------------------------

let agregarDato = () => {
    let formulario = document.getElementById('formulario');
    let categoria = formulario['categoria'].value;
    let descripcion = formulario['descripcion'].value;
    let precio = parseFloat(formulario['precio'].value); // Convertir el precio a número
    let disponible = parseFloat(formulario['disponible'].value);

    // Verificar que la descripción no esté vacía y que el precio sea un número válido
    if (descripcion.trim() !== '' && !isNaN(precio) && precio > 0 && !isNaN(disponible)) {
        let listaProductos;

        // Determinar la lista de productos según la categoría
        if (categoria === 'maybelline') {
            listaProductos = maybelline;
        } else if (categoria === 'fenty') {
            listaProductos = fenty;
        } else if (categoria === 'chanel') {
            listaProductos = chanel;
        } else {
            alert("Categoría de producto no válida.");
            return;
        }

        // Buscar si el producto ya existe en la categoría correspondiente
        let productoExistente = listaProductos.find(item => item.descripcion === descripcion);

        if (productoExistente) {
            // Si el producto ya existe se aumenta la cantidad disponible
            productoExistente.disponible += disponible;
        } else {
            // Si el producto no existe, lo creamos y lo agregamos a la lista correspondiente
            let nuevoProducto;
            if (categoria === 'maybelline') {
                nuevoProducto = new Maybelline(descripcion, categoria, precio, disponible);
            } else if (categoria === 'fenty') {
                nuevoProducto = new Fenty(descripcion, categoria, precio, disponible);
            } else if (categoria === 'chanel') {
                nuevoProducto = new Chanel(descripcion, categoria, precio, disponible);
            }

            // Agregar el nuevo producto a la lista correspondiente
            listaProductos.push(nuevoProducto);
        }

        // Recargar cabecera y lista de productos
        cargarCabecera(); // Recargar cabecera
        // Recargar lista de productos correspondiente
        if (categoria === 'maybelline') {
            cargarMaybelline();
        } else if (categoria === 'fenty') {
            cargarFenty();
        } else if (categoria === 'chanel') {
            cargarChanel();
        }
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
}

//------vender-------------------------------------------
const venderProducto = () => {
    let formularioVenta = document.getElementById('formularioVenta');
    let categoriaVenta = formularioVenta['categoriaVenta'].value;
    let descripcionVenta = formularioVenta['descripcionVenta'].value;
    let precioVenta = parseFloat(formularioVenta['precioVenta'].value); // Precio de venta
    let cantidadVenta = parseInt(formularioVenta['cantidadVenta'].value); // Cantidad vendida

    // Actualizar el inventario según la categoría seleccionada
    if (categoriaVenta === 'maybelline') {
        let producto = maybelline.find(item => item.descripcion === descripcionVenta);
        if (producto && cantidadVenta <= producto.disponible) {
            producto.disponible -= cantidadVenta; // Restar la cantidad vendida del inventario
            cargarMaybelline(); // Recargar la lista de productos Maybelline
            cargarCabecera(); // Recargar la cabecera
        } else if (!producto) {
            alert('El producto seleccionado no existe.');
        } else {
            alert('No hay suficiente inventario para realizar esta venta.');
        }
    } else if (categoriaVenta === 'fenty') {
        let producto = fenty.find(item => item.descripcion === descripcionVenta);
        if (producto && cantidadVenta <= producto.disponible) {
            producto.disponible -= cantidadVenta; // Restar la cantidad vendida del inventario
            cargarFenty(); // Recargar la lista de productos Fenty
            cargarCabecera(); // Recargar la cabecera
        } else if (!producto) {
            alert('El producto seleccionado no existe.');
        } else {
            alert('No hay suficiente inventario para realizar esta venta.');
        }
    } else if (categoriaVenta === 'chanel') {
        let producto = chanel.find(item => item.descripcion === descripcionVenta);
        if (producto && cantidadVenta <= producto.disponible) {
            producto.disponible -= cantidadVenta; // Restar la cantidad vendida del inventario
            cargarChanel(); // Recargar la lista de productos Chanel
            cargarCabecera(); // Recargar la cabecera
        } else if (!producto) {
            alert('El producto seleccionado no existe.');
        } else {
            alert('No hay suficiente inventario para realizar esta venta.');
        }
    }
}
