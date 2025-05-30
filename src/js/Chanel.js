class Chanel extends Dato {
  static contChanel = 0; // Variable estática para llevar la cuenta de los ingresos creados

  constructor(descripcion, categoria, precio, disponible) {
      super(descripcion, categoria, precio, disponible); // Llama al constructor de la clase padre (Dato) con la descripción y el valor proporcionados
      this._id = ++Chanel.contChanel; // Asigna un ID único a cada ingreso incrementando el contador estático
  }

  get id() { // Método getter para obtener el ID del ingreso
      return this._id; // Devuelve el ID del ingreso
  }
}
