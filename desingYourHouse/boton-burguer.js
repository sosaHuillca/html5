window.customElements.define('btn-burguer',
class Element extends HTMLElement {
  
  static get observedAttributes(){
    return [
    ];
  }

  html(){
    return `
    <button>
      <span class="l1"></span>
      <span class="l2"></span>
      <span class="l3"></span>
    </button>
    `;
  }

  style(){
    return `
    :host {
      }
    
    button{
      width:40px;
      height:40px;
      position:relative;
      cursor: pointer;
      transform: scale(4);
      background-color:transparent;
      position:relative;
      border:none;
    }

    span{
      position:absolute;
      top:50%;
      left:50%;
      display:block;
      width:100%;
      height:5px;
      background-color:black;
      border-radius:5px;
      transform: translate(-50%, -50%);
      transition: transform 0.7s, width 0.5s;
    }

    .l1{
      transform: translate(-50%, -15px);
      }
 
    .l3{
      transform: translate(-50%, 10px);
       }

      .activo .l1{
        transform: translate(-50%, -50%)rotate(45deg);
      }
      .activo .l3{
        transform: translate(-50%, -50%)rotate(-45deg);
      }

      .activo .l2{
        width:0px;
      }
      
    `;
  }

  connectedCallback(){
    const btn = this.shadowRoot.querySelector('button');

    btn.addEventListener('click',()=>{
      btn.classList.toggle('activo');
    })
  }

  constructor(){super();
    this.attachShadow({mode:'open'});
    this.render();
  }

  attributeChangedCallback(attr, oldVal, newVal){
    this[attr] = newVal
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML =  `
      <style>${this.style()}</style>
      ${this.html()}
    `;
}

})
