var M=Object.defineProperty;var h=(e,n,l)=>n in e?M(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l;var c=(e,n,l)=>h(e,typeof n!="symbol"?n+"":n,l);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}})();var a;let w=(a=class extends Dato{constructor(n,l,o,t){super(n,l,o,t),this._id=++a.contFenty}get id(){return this._id}},c(a,"contFenty",0),a);var r;let D=(r=class extends Dato{constructor(n,l,o,t){super(n,l,o,t),this._id=++r.contChanel}get id(){return this._id}},c(r,"contChanel",0),r);var s;let I=(s=class extends Dato{constructor(n,l,o,t){super(n,l,o,t),this._id=++s.contMaybelline}get id(){return this._id}},c(s,"contMaybelline",0),s);const b=[new Maybelline("Contorno Maybelline","Maybelline",132e3,50),new Maybelline("Base Maybelline","Maybelline",15e4,50),new Maybelline("Corrector Maybelline","Maybelline",97e3,50)],f=[new Fenty("Labial Fenty","Fenty",9e4,50),new Fenty("Balsamo Fenty","Fenty",5e4,50),new Fenty("Brillo Fenty","Fenty",95e3,50)],v=[new Chanel("Rimel Chanel","Chanel",105e3,50),new Chanel("Sombra Chanel","Chanel",85e3,50),new Chanel("Iluminador Chanel","Chanel",47e3,50)];function g(){L(),C(),E(),H()}window.cargarApp=g;let y=()=>{let e=0;for(let n of b)e+=n.disponible;return e},u=()=>{let e=0;for(let n of f)e+=n.disponible;return e},p=()=>{let e=0;for(let n of v)e+=n.disponible;return e},L=()=>{let e=y()+u()+p();document.getElementById("totalInventario").innerHTML=e,document.getElementById("maybelline").innerHTML=y(),document.getElementById("fenty").innerHTML=u(),document.getElementById("chanel").innerHTML=p()};const m=e=>e.toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),C=()=>{let e="";for(let n of b)e+=F(n);document.getElementById("listaMaybelline").innerHTML=e},F=e=>`
        <div class="elemento limpiarEstilos">
            <div class="elementoDescripcion">${e.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elementoValor">${m(e.precio)}</div>
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
    `,E=()=>{let e="";for(let n of f)e+=T(n);document.getElementById("listaFenty").innerHTML=e},T=e=>`
      <div class="elemento limpiarEstilos">
          <div class="elementoDescripcion">${e.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elementoValor">${m(e.precio)}</div>
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
  `,H=()=>{let e="";for(let n of v)e+=$(n);document.getElementById("listaChanel").innerHTML=e},$=e=>`
      <div class="elemento limpiarEstilos">
          <div class="elementoDescripcion">${e.descripcion}</div>
          <div class="derecha limpiarEstilos">
              <div class="elementoValor">${m(e.precio)}</div>
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
  `;
