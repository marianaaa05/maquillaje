class Dato {
    // Constructor
    constructor(descripcion, categoria, precio, disponible) {
        this._descripcion = descripcion; // Inicializar el atributo _descripcion con el valor proporcionado
        this._categoria = categoria; // Inicializar el atributo _valor con el valor proporcionado
        this._precio = precio;
        this._disponible = disponible;
    }

    // Métodos getter y setter para la descripción
    
    get descripcion() { // Getter para obtener la descripción
        return this._descripcion; // Devuelve el valor de _descripcion
    }
    get categoria() { // Getter para obtener la descripción
        return this._categoria; // Devuelve el valor de _descripcion
    }
    get precio() { // Getter para obtener la descripción
        return this._precio; // Devuelve el valor de _descripcion
    }
    get disponible() { // Getter para obtener la descripción
        return this._disponible; // Devuelve el valor de _descripcion
    }
    //------------------------------

    set descripcion(descripcion) { // Setter para actualizar la descripción
        this._descripcion = descripcion; // Actualiza el valor de _descripcion con el valor proporcionado
    }
    set categoria(categoria) { // Setter para actualizar la descripción
        this._categoria = categoria; // Actualiza el valor de _descripcion con el valor proporcionado
    }
    set precio(precio) { // Setter para actualizar la descripción
        this._precio = precio; // Actualiza el valor de _descripcion con el valor proporcionado
    }
    set disponible(disponible) { // Setter para actualizar la descripción
        this._disponible = disponible; // Actualiza el valor de _descripcion con el valor proporcionado
    }
}