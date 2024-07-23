(function(){"use strict";var t={299:function(t,e,a){var r=a(5130),o=a(6768);const n={id:"app"};function u(t,e,a,r,u,c){const s=(0,o.g2)("NavbarComp"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(s),(0,o.bF)(i)])}var c=a(4232),s=a.p+"img/kreas_logo.aac4a132.png";const i=t=>((0,o.Qi)("data-v-6f57fed0"),t=t(),(0,o.jt)(),t),d={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},m=i((()=>(0,o.Lk)("a",{class:"navbar-brand",href:"/"},[(0,o.Lk)("img",{src:s,alt:"KREAS Logo",class:"navbar-logo"}),(0,o.Lk)("span",null,"e-commerce")],-1))),p={class:"d-flex ms-auto"},f=i((()=>(0,o.Lk)("i",{class:"fas fa-home me-3"},null,-1))),v=i((()=>(0,o.Lk)("i",{class:"fas fa-shopping-cart me-3"},null,-1))),h={key:0,class:"badge bg-danger"};function y(t,e,a,r,n,u){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",d,[(0,o.Lk)("div",l,[m,(0,o.Lk)("div",p,[(0,o.bF)(s,{class:"nav-link",to:"/"},{default:(0,o.k6)((()=>[f])),_:1}),(0,o.bF)(s,{class:"nav-link",to:"/cart"},{default:(0,o.k6)((()=>[v,r.cartItemCount>0?((0,o.uX)(),(0,o.CE)("span",h,(0,c.v_)(r.cartItemCount),1)):(0,o.Q3)("",!0)])),_:1})])])])}a(4114);var k=a(3367);const b=(0,k.nY)("cart",{state:()=>({cart:[]}),actions:{addToCart(t){if(!t||!t.name)return void console.error("Product is not valid:",t);const e=this.cart.find((e=>e.product.name===t.name));e?e.quantity+=t.quantity||1:this.cart.push({product:t,quantity:t.quantity||1})},updateCartItem(t,e){if(!t||!t.name)return void console.error("Product is not valid:",t);const a=this.cart.find((e=>e.product.name===t.name));a&&(a.quantity=e)},removeFromCart(t){t&&t.name?this.cart=this.cart.filter((e=>e.product.name!==t.name)):console.error("Product is not valid:",t)}},getters:{totalItems:t=>t.cart.reduce(((t,e)=>t+e.quantity),0),cartTotal:t=>t.cart.reduce(((t,e)=>t+e.product.price*e.quantity),0),discountedTotal:t=>{const e=t.cart.reduce(((t,e)=>t+e.quantity),0),a=t.cart.reduce(((t,e)=>t+e.product.price*e.quantity),0);return e>3?.9*a:a}}});var C={name:"NavbarComp",setup(){const t=b(),e=(0,o.EW)((()=>t.cart.reduce(((t,e)=>t+e.quantity),0)));return{cartItemCount:e}}},L=a(1241);const g=(0,L.A)(C,[["render",y],["__scopeId","data-v-6f57fed0"]]);var T=g,_={name:"App",components:{NavbarComp:T}};const E=(0,L.A)(_,[["render",u]]);var Q=E,q=a(973);const w={class:"container"},x={class:"row"};function A(t,e,a,r,n,u){const c=(0,o.g2)("SearchBar"),s=(0,o.g2)("ProductItem");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(c,{searchQuery:r.searchQuery,"onUpdate:searchQuery":e[0]||(e[0]=t=>r.searchQuery=t)},null,8,["searchQuery"]),(0,o.Lk)("div",w,[(0,o.Lk)("div",x,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.filteredProducts,(t=>((0,o.uX)(),(0,o.Wv)(s,{key:t.name,product:t,onAddToCart:r.addToCart},null,8,["product","onAddToCart"])))),128))])])])}var X=a(144);const I={class:"search-bar"};function N(t,e,a,n,u,c){return(0,o.uX)(),(0,o.CE)("div",I,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>u.localSearchQuery=t),onInput:e[1]||(e[1]=(...t)=>c.updateSearch&&c.updateSearch(...t)),placeholder:"Search for products...",class:"form-control"},null,544),[[r.Jo,u.localSearchQuery]])])}var S={props:{searchQuery:{type:String,default:""}},data(){return{localSearchQuery:this.searchQuery}},methods:{updateSearch(){this.$emit("update:searchQuery",this.localSearchQuery)}},watch:{searchQuery(t){this.localSearchQuery=t}}};const F=(0,L.A)(S,[["render",N],["__scopeId","data-v-21d6fef9"]]);var O=F;const j={class:"col-12 col-sm-6 col-md-4 mb-4"},P={class:"card h-100"},D=["src","alt"],V={class:"card-body"},K={class:"card-title"},U={key:0,class:"card-text"},W={class:"card-text"},$={class:"d-flex align-items-center"},J={key:1,class:"mt-2 alert alert-success"};function R(t,e,a,n,u,s){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("div",P,[(0,o.Lk)("img",{src:a.product.image,class:"card-img-top",alt:a.product.name},null,8,D),(0,o.Lk)("div",V,[(0,o.Lk)("h5",K,(0,c.v_)(a.product.name),1),a.showDetails?((0,o.uX)(),(0,o.CE)("p",U,(0,c.v_)(a.product.description),1)):(0,o.Q3)("",!0),(0,o.Lk)("p",W,(0,c.v_)(a.product.price)+" $",1),(0,o.Lk)("div",$,[(0,o.Lk)("button",{class:"btn btn-outline-secondary",onClick:e[0]||(e[0]=(...t)=>s.decreaseQuantity&&s.decreaseQuantity(...t))},"-"),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"form-control mx-2","onUpdate:modelValue":e[1]||(e[1]=t=>u.quantity=t),min:"1",style:{width:"50px"}},null,512),[[r.Jo,u.quantity,void 0,{number:!0}]]),(0,o.Lk)("button",{class:"btn btn-outline-secondary",onClick:e[2]||(e[2]=(...t)=>s.increaseQuantity&&s.increaseQuantity(...t))},"+"),(0,o.Lk)("button",{class:"btn btn-secondary ms-2 custom-btn",onClick:e[3]||(e[3]=(...t)=>s.addToCart&&s.addToCart(...t))},(0,c.v_)(a.buttonText),1),a.showDetails?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(i,{key:0,to:{name:"product-detail",params:{name:a.product.name}},class:"btn btn-secondary ms-2 custom-btn"},{default:(0,o.k6)((()=>[(0,o.eW)("View Details")])),_:1},8,["to"]))]),u.showConfirmation?((0,o.uX)(),(0,o.CE)("div",J," Added to cart! ")):(0,o.Q3)("",!0)])])])}var B={props:{product:Object,showDetails:{type:Boolean,default:!1},buttonText:{type:String,default:"Add to Cart"}},data(){return{quantity:1,showConfirmation:!1,buttonTextTemp:"Add to Cart"}},methods:{increaseQuantity(){this.quantity++},decreaseQuantity(){this.quantity>1&&this.quantity--},addToCart(){if(this.product&&this.quantity>0){const t=b();t.addToCart({...this.product,quantity:this.quantity}),this.showConfirmation=!0,this.buttonTextTemp="Added!",setTimeout((()=>{this.showConfirmation=!1,this.buttonTextTemp="Add to Cart"}),2e3)}else console.error("Product or quantity is invalid")}},computed:{buttonTextComputed(){return this.showConfirmation?"Added!":this.buttonText}}};const M=(0,L.A)(B,[["render",R],["__scopeId","data-v-48fdb0d6"]]);var Y=M,z={components:{SearchBar:O,ProductItem:Y},setup(){const t=(0,X.KR)([]),e=(0,X.KR)(""),a=b(),r=async()=>{const e=await fetch("https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json");t.value=await e.json()},n=t=>{a.addToCart(t)},u=(0,o.EW)((()=>t.value.filter((t=>t.name.toLowerCase().includes(e.value.toLowerCase())))));return(0,o.sV)(r),{products:t,addToCart:n,searchQuery:e,filteredProducts:u}}};const G=(0,L.A)(z,[["render",A]]);var H=G;const Z=t=>((0,o.Qi)("data-v-245f8500"),t=t(),(0,o.jt)(),t),tt={class:"cart-page"},et=Z((()=>(0,o.Lk)("h1",null,"Your Cart",-1))),at={key:0},rt=Z((()=>(0,o.Lk)("p",null,"Your cart is empty.",-1))),ot=[rt],nt={key:1},ut={key:0},ct=["onClick"],st={class:"quantity-controls"},it=["onClick"],dt=["onUpdate:modelValue"],lt=["onClick"],mt={class:"cart-total"},pt={key:0},ft=Z((()=>(0,o.Lk)("p",null,"Discount Applied: 10% off",-1))),vt={key:1},ht=Z((()=>(0,o.Lk)("h2",null,"Order Summary",-1))),yt={key:0},kt=Z((()=>(0,o.Lk)("p",null,"Discount Applied: 10% off",-1))),bt=Z((()=>(0,o.Lk)("h2",null,"Customer Details",-1))),Ct={class:"form-group"},Lt=Z((()=>(0,o.Lk)("label",{for:"firstName"},"First Name",-1))),gt={class:"form-group"},Tt=Z((()=>(0,o.Lk)("label",{for:"lastName"},"Last Name",-1))),_t={class:"form-group"},Et=Z((()=>(0,o.Lk)("label",{for:"address"},"Address",-1))),Qt={class:"form-group"},qt=Z((()=>(0,o.Lk)("label",{for:"cardNumber"},"Card Number",-1))),wt=Z((()=>(0,o.Lk)("button",{type:"submit",class:"btn btn-secondary custom-btn"},"Esegui l'ordine",-1)));function xt(t,e,a,n,u,s){return(0,o.uX)(),(0,o.CE)("div",tt,[et,0===n.cartItems.length?((0,o.uX)(),(0,o.CE)("div",at,ot)):((0,o.uX)(),(0,o.CE)("div",nt,[n.checkout?((0,o.uX)(),(0,o.CE)("div",vt,[ht,(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.cartItems,(t=>((0,o.uX)(),(0,o.CE)("li",{key:t.product.name},(0,c.v_)(t.quantity)+"x "+(0,c.v_)(t.product.name),1)))),128))]),(0,o.Lk)("h3",null,"Total: $"+(0,c.v_)(n.cartTotal.toFixed(2)),1),n.discountApplied?((0,o.uX)(),(0,o.CE)("div",yt,[kt,(0,o.Lk)("h3",null,"Discounted Total: $"+(0,c.v_)(n.discountedTotal.toFixed(2)),1)])):(0,o.Q3)("",!0),bt,(0,o.Lk)("form",{onSubmit:e[6]||(e[6]=(0,r.D$)(((...t)=>n.placeOrder&&n.placeOrder(...t)),["prevent"]))},[(0,o.Lk)("div",Ct,[Lt,(0,o.bo)((0,o.Lk)("input",{id:"firstName","onUpdate:modelValue":e[1]||(e[1]=t=>n.customer.firstName=t),required:"",class:"form-control"},null,512),[[r.Jo,n.customer.firstName]])]),(0,o.Lk)("div",gt,[Tt,(0,o.bo)((0,o.Lk)("input",{id:"lastName","onUpdate:modelValue":e[2]||(e[2]=t=>n.customer.lastName=t),required:"",class:"form-control"},null,512),[[r.Jo,n.customer.lastName]])]),(0,o.Lk)("div",_t,[Et,(0,o.bo)((0,o.Lk)("input",{id:"address","onUpdate:modelValue":e[3]||(e[3]=t=>n.customer.address=t),required:"",class:"form-control"},null,512),[[r.Jo,n.customer.address]])]),(0,o.Lk)("div",Qt,[qt,(0,o.bo)((0,o.Lk)("input",{id:"cardNumber","onUpdate:modelValue":e[4]||(e[4]=t=>n.customer.cardNumber=t),required:"",class:"form-control"},null,512),[[r.Jo,n.customer.cardNumber]])]),wt,(0,o.Lk)("button",{onClick:e[5]||(e[5]=(...t)=>n.cancelCheckout&&n.cancelCheckout(...t)),class:"btn btn-secondary custom-btn"},"Torna indietro")],32)])):((0,o.uX)(),(0,o.CE)("div",ut,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.cartItems,(t=>((0,o.uX)(),(0,o.CE)("div",{key:t.product.name,class:"cart-item"},[(0,o.Lk)("h3",null,(0,c.v_)(t.product.name),1),(0,o.Lk)("p",null,"Price: $"+(0,c.v_)(t.product.price.toFixed(2)),1),(0,o.Lk)("p",null,"Quantity: "+(0,c.v_)(t.quantity),1),(0,o.Lk)("button",{onClick:e=>n.removeFromCart(t.product)},"Remove",8,ct),(0,o.Lk)("div",st,[(0,o.Lk)("button",{onClick:e=>n.decreaseQuantity(t.product)},"-",8,it),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":e=>t.quantity=e,min:"1"},null,8,dt),[[r.Jo,t.quantity,void 0,{number:!0}]]),(0,o.Lk)("button",{onClick:e=>n.increaseQuantity(t.product)},"+",8,lt)])])))),128)),(0,o.Lk)("div",mt,[(0,o.Lk)("h3",null,"Total: $"+(0,c.v_)(n.cartTotal.toFixed(2)),1),n.discountApplied?((0,o.uX)(),(0,o.CE)("div",pt,[ft,(0,o.Lk)("h3",null,"Discounted Total: $"+(0,c.v_)(n.discountedTotal.toFixed(2)),1)])):(0,o.Q3)("",!0)]),(0,o.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>n.startCheckout&&n.startCheckout(...t)),class:"btn btn-secondary custom-btn"},"Conferma e Ordina")]))]))])}var At={setup(){const t=b(),e=(0,o.EW)((()=>t.cart)),a=(0,o.EW)((()=>t.cartTotal)),r=(0,o.EW)((()=>t.discountedTotal)),n=(0,o.EW)((()=>t.totalItems>3)),u=(0,X.KR)(!1),c=(0,X.KR)({firstName:"",lastName:"",address:"",cardNumber:""}),s=e=>{t.removeFromCart(e)},i=e=>{const a=t.cart.find((t=>t.product.name===e.name));a&&t.updateCartItem(e,a.quantity+1)},d=e=>{const a=t.cart.find((t=>t.product.name===e.name));a&&a.quantity>1&&t.updateCartItem(e,a.quantity-1)},l=()=>{u.value=!0},m=()=>{u.value=!1},p=()=>{alert("Order placed successfully!"),t.cart=[],u.value=!1,c.value={firstName:"",lastName:"",address:"",cardNumber:""}};return{cartItems:e,cartTotal:a,discountedTotal:r,discountApplied:n,removeFromCart:s,increaseQuantity:i,decreaseQuantity:d,checkout:u,customer:c,startCheckout:l,cancelCheckout:m,placeOrder:p}}};const Xt=(0,L.A)(At,[["render",xt],["__scopeId","data-v-245f8500"]]);var It=Xt;const Nt={class:"container"},St={key:0,class:"row"},Ft={key:1},Ot=(0,o.Lk)("p",null,"Loading...",-1),jt=[Ot];function Pt(t,e,a,r,n,u){const c=(0,o.g2)("ProductItem");return(0,o.uX)(),(0,o.CE)("div",Nt,[r.product?((0,o.uX)(),(0,o.CE)("div",St,[(0,o.bF)(c,{product:r.product,showDetails:!0,buttonText:"Add to Cart",onAddToCart:r.addToCart},null,8,["product","onAddToCart"])])):((0,o.uX)(),(0,o.CE)("div",Ft,jt))])}var Dt={components:{ProductItem:Y},setup(){const t=(0,X.KR)(null),e=(0,q.lq)(),a=b(),r=async()=>{const a=await fetch("https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json"),r=await a.json();t.value=r.find((t=>t.name===e.params.name))},n=t=>{t&&a.addToCart(t)};return(0,o.sV)(r),{product:t,addToCart:n}}};const Vt=(0,L.A)(Dt,[["render",Pt]]);var Kt=Vt;const Ut=[{path:"/",name:"home",component:H},{path:"/cart",name:"cart",component:It},{path:"/product/:name",name:"product-detail",component:Kt,props:t=>({name:t.params.name})}],Wt=(0,q.aE)({history:(0,q.LA)("/progetto_vuejs2_rc/"),routes:Ut});var $t=Wt;a(8077);const Jt=(0,r.Ef)(Q),Rt=(0,k.Ey)();Jt.use($t),Jt.use(Rt),Jt.mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,n){if(!r){var u=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],n=t[d][2];for(var c=!0,s=0;s<r.length;s++)(!1&n||u>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[s])}))?r.splice(s--,1):(c=!1,n<u&&(u=n));if(c){t.splice(d--,1);var i=o();void 0!==i&&(e=i)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[r,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/progetto_vuejs2_rc/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,u=r[0],c=r[1],s=r[2],i=0;if(u.some((function(e){return 0!==t[e]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(s)var d=s(a)}for(e&&e(r);i<u.length;i++)n=u[i],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},r=self["webpackChunkkreas_ecommerce"]=self["webpackChunkkreas_ecommerce"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(299)}));r=a.O(r)})();
//# sourceMappingURL=app.0141ad5a.js.map