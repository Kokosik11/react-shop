import{j as C,r as u,L as v,N as f,u as S,R as L,S as $,a as N,b as w,c as F,B as j}from"./vendor.9336eb51.js";const D=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}};D();const e=C.exports.jsx,r=C.exports.jsxs,B=({className:n})=>{const c=n,[i,s]=u.exports.useState([]),[t,a]=u.exports.useState([]);u.exports.useEffect(()=>{fetch("https://fakestoreapi.com/products").then(l=>l.json()).then(l=>{s(l)})},[]);const o=l=>{const h=l.toLowerCase(),d=i.filter(m=>(console.log(m.title.toLowerCase().search(h)),m.title.toLowerCase().search(h)!==-1));a(h?d.slice(0,7):[])};return r("div",{className:c,children:[e("input",{onChange:l=>o(l.target.value),className:c+"_field",type:"text",placeholder:"\u041F\u043E\u0438\u0441\u043A..."}),e("div",{className:c+"_filtered",children:t.map(l=>r(v,{to:`/item/${l.id}`,className:c+"_row",children:[e("div",{className:c+"_image",children:e("img",{src:l.image,alt:l.title})}),e("div",{children:l.title})]},l.id))})]})};const R=({className:n,pathname:c,setPathname:i})=>{const s=n;return r("div",{className:s,children:[r(f,{className:s+"_logo",to:"/home",children:[e("div",{className:s+"_logo-img"}),e("div",{className:s+"_logo-heading",children:"Simple store"})]}),r("div",{className:s+"_right-content",children:[e(B,{className:"search"}),r("div",{className:s+"_links",children:[e(f,{exact:!0,onClick:()=>i(),activeClassName:"active-menu-item",className:"SectionNavigation-Item Section",to:"/about-us",children:e("span",{className:"Section-Title",children:"\u041E \u043D\u0430\u0441"})}),e(f,{exact:!0,onClick:()=>i(),activeClassName:"active-menu-item",className:"SectionNavigation-Item Section",to:"/categories",children:e("span",{className:"Section-Title",children:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"})}),e(f,{exact:!0,onClick:()=>i(),activeClassName:"active-menu-item",className:"SectionNavigation-Item Section",to:"/cart",children:e("span",{className:"Section-Title",children:"\u041A\u043E\u0440\u0437\u0438\u043D\u0430"})})]})]})]})};const k=({className:n,addItemToCart:c,item:i})=>{const s=n;return r("div",{className:s+"_item",children:[e(v,{className:s+"_link",to:`/item/${i.id}`,children:e("img",{src:i.image})}),r("div",{className:s+"_item-info",children:[e("div",{className:s+"_item-title",children:i.title}),r("div",{className:s+"_item-row",children:[e("button",{onClick:()=>c(i),className:s+"_item-tocart",children:"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"}),e("span",{className:s+"_item-rate",children:i.rating.rate}),r("div",{className:s+"_item-price",children:["$",i.price]})]})]})]},i.id)},O=({className:n,addItemToCart:c,items:i})=>{const s=n;return e("div",{className:s,children:e("div",{className:s+"_items",children:i.map(t=>e(k,{className:s,item:t,addItemToCart:c},t.id))})})};const G=({removeItemFromCart:n,handleBuy:c,status:i,className:s,items:t})=>{const a=s,[o,l]=u.exports.useState(0),h=()=>(l(d=>0),()=>{l(d=>0)});return u.exports.useEffect(()=>{h()},[]),u.exports.useEffect(()=>{let d=t.map(m=>o+m.price);l(d.reduce((m,g)=>m+g,0))},[t]),t.length&&e("div",{className:a,children:r("div",{className:a+"_container",children:[t.map((d,m)=>r("div",{className:a+"_row",children:[r("div",{className:a+"_info",children:[e("div",{className:a+"_image",children:e("img",{src:d.image,alt:d.title})}),e(v,{className:a+"_title-link",to:`/item/${d.id}`,children:e("div",{className:a+"_title",children:d.title})}),r("div",{className:a+"_price",children:["$",d.price]})]}),e("button",{onClick:()=>{n(m),h()},className:a+"_remove",children:"x"})]},m)),e("div",{className:a+"_ordering",children:r("div",{className:a+"_row",children:[r("div",{className:a+"_summ",children:["\u0412\u0441\u0435\u0433\u043E: ",r("b",{children:["$",o.toFixed(2)]})]}),e("button",{onClick:c,className:a+"_buy",children:"\u041A\u0443\u043F\u0438\u0442\u044C"})]})})]})})||e("div",{className:a,children:r("div",{className:a+"_container is-empty",children:[i&&e("div",{className:a+"_row status",children:"\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0430!"}),e("div",{className:a+"_row",children:e("h3",{children:"\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"})})]})})};const P=({onLoad:n,addItemToCart:c,className:i,items:s})=>{const t=i;let{id:a}=S(),o=s[a-1];return n&&e("div",{className:i,children:r("div",{className:t+"_container",children:[e("div",{className:i+"_image",children:e("img",{src:o.image,alt:o.title})}),r("div",{className:i+"_info",children:[r("div",{className:i+"_info-header",children:[e("h2",{children:o.title}),e("div",{className:t+"_description",children:o.description})]}),r("div",{className:i+"_info-footer",children:[e(L,{total:5,rating:o.rating.rate}),r("div",{className:i+"_price",children:["$",o.price]}),e("button",{onClick:()=>c(o),className:i+"_tocart",children:"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"})]})]})]})})};const T=({category:n})=>{const[c,i]=u.exports.useState({});return u.exports.useEffect(()=>{console.log(n),fetch(`https://fakestoreapi.com/products/category/${n}`).then(s=>s.json()).then(s=>i(t=>s[0]))},[]),r(v,{className:"category",to:`/category/${c.category}`,children:[e("img",{src:c.image,alt:c.title}),e("h3",{children:c.category})]})},K=({className:n})=>{const c=n,[i,s]=u.exports.useState([]);return u.exports.useEffect(()=>{fetch("https://fakestoreapi.com/products/categories").then(t=>t.json()).then(t=>s(t))},[]),e("div",{className:c,children:e("div",{className:c+"_container",children:i.map(t=>e(T,{category:t.replaceAll(" ","%20")},t))})})};const H=({className:n,addItemToCart:c})=>{const i=n;let{name:s}=S();const[t,a]=u.exports.useState([]);return u.exports.useEffect(()=>{fetch(`https://fakestoreapi.com/products/category/${s}`).then(o=>o.json()).then(o=>a(o))},[]),e("div",{className:i,children:e("div",{className:i+"_items",children:t.map(o=>e(k,{className:i,item:o,addItemToCart:c},o.id))})})};var J="./assets/linkedin.44990d5b.svg",E="./assets/github.5c4cf940.svg";const y=n=>r("a",{href:n.to,target:"_blank",className:n.className,children:[e("img",{src:n.icon,alt:n.alt}),n.children]}),M=({className:n})=>{const c=n;return e("div",{className:c,children:r("div",{className:c+"_content",children:[r("div",{className:c+"_text",children:[e("span",{className:"blue",children:e("b",{children:"Simple Store"})})," - \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u0434\u043B\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u043D\u0430 React \u0438 \u0434\u043B\u044F \u043C\u043E\u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E. API \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432\u0437\u044F\u0442\u043E \u0441 \u0441\u0430\u0439\u0442\u0430 fakestoreapi."]}),r("div",{className:c+"_links",children:[e(y,{className:c+"_link",icon:J,alt:"Icon: Linkedin",to:"https://www.linkedin.com/in/konstantin-bozhko/",children:"LinkedIn"}),e(y,{className:c+"_link",icon:E,alt:"Icon: Github",to:"https://github.com/Kokosik11/react-shop",children:"Github (\u043F\u0440\u043E\u0435\u043A\u0442\u0430)"}),e(y,{className:c+"_link",icon:E,alt:"Icon: Github",to:"https://github.com/Kokosik11",children:"Github"})]})]})})};function q({history:n}){const[c,i]=u.exports.useState(""),[s,t]=u.exports.useState([]),[a,o]=u.exports.useState([]);u.exports.useState("");const[l,h]=u.exports.useState(!1),[d,m]=u.exports.useState(!1),g=()=>{m(!0),t([])},_=p=>{m(!1),t(x=>[...x,p])},b=p=>{t(s.filter((x,A)=>p!==A))},I=()=>{setTimeout(()=>{i(window.location.pathname)})};return u.exports.useEffect(()=>{t(JSON.parse(localStorage.getItem("cart"))||[]),console.log(s)},[]),u.exports.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(s))},[s]),u.exports.useEffect(()=>{fetch("https://fakestoreapi.com/products").then(p=>p.json()).then(p=>{o(p),h(x=>!0)})},[]),r("div",{className:"App",children:[e(R,{className:"header",pathname:c,setPathname:I}),r($,{children:[e(N,{exact:!0,path:"/home",children:e(O,{items:a,addItemToCart:_,className:"home"})}),e(N,{exact:!0,path:"/about-us",children:e(M,{className:"about-us"})}),e(N,{exact:!0,path:"/categories",children:e(K,{className:"categories"})}),e(N,{exact:!0,path:"/cart",children:e(G,{removeItemFromCart:b,handleBuy:g,status:d,className:"cart",items:s})}),e(N,{exact:!0,path:"/item/:id",children:e(P,{onLoad:l,addItemToCart:_,className:"item",items:a})}),e(N,{exact:!0,path:"/category/:name",children:e(H,{className:"category-items",addItemToCart:_})}),e(w,{from:"/",to:"/home"})]})]})}F.render(e(j,{children:e(q,{})}),document.getElementById("root"));
