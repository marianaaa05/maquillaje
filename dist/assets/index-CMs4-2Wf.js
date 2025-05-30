var L=Object.defineProperty;var F=(e,t,i)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var m=(e,t,i)=>F(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();var o;let V=(o=class extends Dato{constructor(t,i,a,n){super(t,i,a,n),this._id=++o.contMaybelline}get id(){return this._id}},m(o,"contMaybelline",0),o);var r;let N=(r=class extends Dato{constructor(t,i,a,n){super(t,i,a,n),this._id=++r.contFenty}get id(){return this._id}},m(r,"contFenty",0),r);var s;let P=(s=class extends Dato{constructor(t,i,a,n){super(t,i,a,n),this._id=++s.contChanel}get id(){return this._id}},m(s,"contChanel",0),s);const p=[new Maybelline("Contorno Maybelline","Maybelline",132e3,50),new Maybelline("Base Maybelline","Maybelline",15e4,50),new Maybelline("Corrector Maybelline","Maybelline",97e3,50)],y=[new Fenty("Labial Fenty","Fenty",9e4,50),new Fenty("Balsamo Fenty","Fenty",5e4,50),new Fenty("Brillo Fenty","Fenty",95e3,50)],f=[new Chanel("Rimel Chanel","Chanel",105e3,50),new Chanel("Sombra Chanel","Chanel",85e3,50),new Chanel("Iluminador Chanel","Chanel",47e3,50)];let T=()=>{u(),v(),h(),M()},g=()=>{let e=0;for(let t of p)e+=t.disponible;return e},C=()=>{let e=0;for(let t of y)e+=t.disponible;return e},E=()=>{let e=0;for(let t of f)e+=t.disponible;return e},u=()=>{let e=g()+C()+E();document.getElementById("totalInventario").innerHTML=e,document.getElementById("maybelline").innerHTML=g(),document.getElementById("fenty").innerHTML=C(),document.getElementById("chanel").innerHTML=E()};const b=e=>e.toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),v=()=>{let e="";for(let t of p)e+=w(t);document.getElementById("listaMaybelline").innerHTML=e},w=e=>`
        <div class="elemento limpiarEstilos">
            <div class="elementoDescripcion">${e.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elementoValor">${b(e.precio)}</div>
                <div class="elementoDisponible">${e.disponible}</div>
                <div class="elementoEliminar">
                    <button class="elementoEliminarBtn" onclick='eliminarMaybelline(${e.id})'>
                        <span class="material-symbols-outlined">
                            cancel
                        </span>
                    </button>
                </div>
            </div> 
        </div>
    `,h=()=>{let e="";for(let t of y)e+=H(t);document.getElementById("listaFenty").innerHTML=e},H=e=>`
      <div class="elemento limpiarEstilos">
          <div class="elementoDescripcion">${e.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elementoValor">${b(e.precio)}</div>
              <div class="elementoDisponible">${e.disponible}</div>
              <div class="elementoEliminar">
                  <button class="elementoEliminarBtn" onclick='eliminarFenty(${e.id})'>
                      <span class="material-symbols-outlined">
                          cancel
                      </span>
                  </button>
              </div>
          </div> 
      </div>
  `,M=()=>{let e="";for(let t of f)e+=B(t);document.getElementById("listaChanel").innerHTML=e},B=e=>`
      <div class="elemento limpiarEstilos">
          <div class="elementoDescripcion">${e.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elementoValor">${b(e.precio)}</div>
              <div class="elementoDisponible">${e.disponible}</div>
              <div class="elementoEliminar">
                  <button class="elementoEliminarBtn" onclick='eliminarChanel(${e.id})'>
                      <span class="material-symbols-outlined">
                          cancel
                      </span>
                  </button>
              </div>
          </div> 
      </div>
  `;let $=()=>{let e=document.getElementById("formulario"),t=e.categoria.value,i=e.descripcion.value,a=parseFloat(e.precio.value),n=parseFloat(e.disponible.value);if(i.trim()!==""&&!isNaN(a)&&a>0&&!isNaN(n)){let l;if(t==="maybelline")l=p;else if(t==="fenty")l=y;else if(t==="chanel")l=f;else{alert("Categoría de producto no válida.");return}let c=l.find(d=>d.descripcion===i);if(c)c.disponible+=n;else{let d;t==="maybelline"?d=new Maybelline(i,t,a,n):t==="fenty"?d=new Fenty(i,t,a,n):t==="chanel"&&(d=new Chanel(i,t,a,n)),l.push(d)}u(),t==="maybelline"?v():t==="fenty"?h():t==="chanel"&&M()}else alert("Por favor, completa todos los campos correctamente.")};const I=()=>{let e=document.getElementById("formularioVenta"),t=e.categoriaVenta.value,i=e.descripcionVenta.value;parseFloat(e.precioVenta.value);let a=parseInt(e.cantidadVenta.value);if(t==="maybelline"){let n=p.find(l=>l.descripcion===i);n&&a<=n.disponible?(n.disponible-=a,v(),u()):alert(n?"No hay suficiente inventario para realizar esta venta.":"El producto seleccionado no existe.")}else if(t==="fenty"){let n=y.find(l=>l.descripcion===i);n&&a<=n.disponible?(n.disponible-=a,h(),u()):alert(n?"No hay suficiente inventario para realizar esta venta.":"El producto seleccionado no existe.")}else if(t==="chanel"){let n=f.find(l=>l.descripcion===i);n&&a<=n.disponible?(n.disponible-=a,M(),u()):alert(n?"No hay suficiente inventario para realizar esta venta.":"El producto seleccionado no existe.")}};window.cargarApp=T;window.venderProducto=I;window.agregarDato=$;
