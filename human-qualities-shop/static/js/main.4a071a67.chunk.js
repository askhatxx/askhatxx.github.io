(this["webpackJsonphuman-qualities-shop"]=this["webpackJsonphuman-qualities-shop"]||[]).push([[0],{28:function(t,e,a){t.exports=a(40)},33:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(14),c=a.n(r),o=(a(33),a(8)),u=a(11),s=a(4),l=a(18),m=a.n(l),d=a(24),p=function(){var t=Object(d.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout((function(){return t(h)}),1e3)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=[{id:"1",title:"Sense of humor",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/01.jpg",onMain:!1,price:3200,quantity:100},{id:"2",title:"Health",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/02.jpg",onMain:!1,price:5300,quantity:100},{id:"3",title:"Supermind",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/03.jpg",onMain:!0,price:2600,quantity:100},{id:"4",title:"Calm",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/04.jpg",onMain:!0,price:5800,quantity:100},{id:"5",title:"Power",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/05.jpg",onMain:!0,price:1800,quantity:0},{id:"6",title:"Style",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/06.jpg",onMain:!1,price:1400,quantity:0},{id:"7",title:"Stress resistance",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/07.jpg",onMain:!0,price:4500,quantity:0},{id:"8",title:"Equanimity",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/08.jpg",onMain:!0,price:2e3,quantity:100},{id:"9",title:"Charisma",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"https://askhatxx.github.io/human-qualities-shop/images/09.jpg",onMain:!0,price:4500,quantity:100}],E=function(t){return{id:t||Date.now().toString(),title:"Does not exist",text:"404",image:"https://askhatxx.github.io/human-qualities-shop/images/img404.jpg",onMain:!1,price:0,quantity:1}},g=function(t){return{type:"ADD_TO_CART",payload:t}},f=function(t){return function(){t({type:"STATUS_LOADING"}),p().then((function(e){t({type:"FETCH_PRODUCTS",payload:e}),t({type:"STATUS_SUCCESS"})})).catch((function(){t({type:"STATUS_ERROR"})}))}},v=a(26),b=function(){var t=Object(n.useState)(!1),e=Object(v.a)(t,2),a=e[0],r=e[1],c=Object(u.g)(),s=Object(u.f)();Object(n.useEffect)((function(){r(!1)}),[c]);var l=function(){r((function(t){return!t}))};return i.a.createElement("nav",{className:function(){var t=["navbar"];return a&&t.push("open"),t.join(" ")}()},i.a.createElement("div",{onClick:function(){s.goBack()},className:"/"===c.pathname?"back hidden":"back"},"\u2190"),i.a.createElement("div",{className:"brend"},i.a.createElement(o.b,{to:"/"},"Human Qualities Shop")),i.a.createElement("button",{className:"btn-menu",onClick:l},"\u2261"),i.a.createElement("div",{className:"menu collapse"},i.a.createElement("button",{className:"btn-close",onClick:l},"\xd7"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.b,{to:"/",activeClassName:"active",exact:!0},"Main")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"/qualities",activeClassName:"active"},"Qualities")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"/cart",activeClassName:"active"},"Cart")))))},S=function(t){var e=t.className,a=t.product,n=t.showQuantity,r=t.button,c=t.link;return i.a.createElement("div",{className:e||""},i.a.createElement("div",{className:"product"},i.a.createElement("div",{className:"product-image"},c?i.a.createElement(o.b,{to:c.url},i.a.createElement("img",{src:a.image,alt:a.title})):i.a.createElement("img",{src:a.image,alt:a.title})),i.a.createElement("div",{className:"product-options"},i.a.createElement("div",{className:"product-title"},a.title),i.a.createElement("div",{className:"product-text"},a.text),i.a.createElement("div",{className:"product-price"},"Price: ",a.price),n&&i.a.createElement("div",{className:"product-quantity"},"Quantity: ",a.quantity),c&&i.a.createElement(o.b,{className:"product-link btn",to:c.url},c.text),r&&i.a.createElement("button",{className:"product-button btn",onClick:r.func,disabled:0===a.quantity},0===a.quantity?"Sold Out":r.text))))},y=function(t){var e=t.status;return"STATUS_ERROR"===e?i.a.createElement("h1",null,"Error"):"STATUS_LOADING"===e?i.a.createElement("div",{className:"spinner"},i.a.createElement("div",{className:"lds-ring"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))):i.a.createElement("h1",null,"Something went wrong")},x={addToCart:g},T=Object(s.b)((function(t){return{products:t.products.filter((function(t){return t.onMain})),status:t.status}}),x)((function(t){var e=t.products,a=t.status,n=t.addToCart;return"STATUS_SUCCESS"!==a?i.a.createElement(y,{status:a}):i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"page-title page-title-main"},i.a.createElement("h2",null,"Best of the week")),i.a.createElement("div",{className:"row products"},e.map((function(t){return i.a.createElement(S,{className:"col",product:t,showQuantity:!1,button:{text:"Add to cart",func:function(){return n(t.id)}},link:{text:"More info",url:"/qualities/".concat(t.id)},key:t.id})}))))})),q=a(6),N={addToCart:g},C=Object(s.b)((function(t){return{products:Object(q.a)(t.products),cartTotal:t.cart.length,status:t.status}}),N)((function(t){var e=t.products,a=t.cartTotal,n=t.status,r=t.addToCart;return"STATUS_SUCCESS"!==n?i.a.createElement(y,{status:n}):i.a.createElement("div",{className:"qualities"},i.a.createElement("div",{className:"page-title"},i.a.createElement("h2",null,"All products"),i.a.createElement("div",null,0!==a?"Cart: ".concat(a):"Cart is empty")),i.a.createElement("div",{className:"row products"},e.map((function(t){return i.a.createElement(S,{className:"col",product:t,showQuantity:!1,button:{text:"Add to cart",func:function(){return r(t.id)}},link:{text:"More info",url:"/qualities/".concat(t.id)},key:t.id})}))))})),O=function(){return i.a.createElement("div",{className:"not-exist"},"Product does not exist :(")},j={addToCart:g},k=Object(s.b)((function(t){return{products:Object(q.a)(t.products),cartTotal:t.cart.length,status:t.status}}),j)((function(t){var e=t.products,a=t.cartTotal,n=t.status,r=t.addToCart,c=t.match;if("STATUS_SUCCESS"!==n)return i.a.createElement(y,{status:n});var o=e.find((function(t){return t.id===c.params.id}));return o?i.a.createElement("div",{className:"quality"},i.a.createElement("div",{className:"page-title"},i.a.createElement("h2",null,"Quality description"),i.a.createElement("div",null,0!==a?"Cart: ".concat(a):"Cart is empty")),i.a.createElement(S,{product:o,showQuantity:!1,button:{text:"Add to cart",func:function(){return r(o.id)}}})):i.a.createElement(O,null)})),A=a(27),w={removeFromCart:function(t){return{type:"REMOVE_FROM_CART",payload:t}}},_=Object(s.b)((function(t){return{cart:t.cart.reduce((function(e,a){var n=e.findIndex((function(t){return t.id===a}));if(-1!==n)return e[n].quantity++,Object(q.a)(e);var i=t.products.findIndex((function(t){return t.id===a}));return[].concat(Object(q.a)(e),-1!==i?[Object(A.a)({},t.products[i],{quantity:1})]:[E(a)])}),[]),status:t.status}}),w)((function(t){var e=t.cart,a=t.status,n=t.removeFromCart;if("STATUS_SUCCESS"!==a)return i.a.createElement(y,{status:a});var r=e.reduce((function(t,e){return t+e.price*e.quantity}),0);return i.a.createElement("div",{className:"cart"},i.a.createElement("div",{className:"page-title"},i.a.createElement("h2",null,"Your cart"),i.a.createElement("div",null,"Total price: ",r)),0===e.length?i.a.createElement("div",{className:"cart-empty"},"Cart is empty"):i.a.createElement("div",{className:"products"},e.map((function(t){return i.a.createElement(S,{product:t,showQuantity:!0,button:{text:"Remove from cart",func:function(){return n(t.id)}},link:{text:"More info",url:"/qualities/".concat(t.id)},key:t.id})}))))})),R=function(){return i.a.createElement("div",{className:"page-404"},"Page 404 :(")},U=Object(s.b)(null,(function(t){return{fetchProductsReady:f(t)}}))((function(t){var e=t.fetchProductsReady;return Object(n.useEffect)((function(){e()})),i.a.createElement(o.a,null,i.a.createElement("header",{className:"head"},i.a.createElement("div",{className:"container"},i.a.createElement(b,null))),i.a.createElement("div",{className:"container padding-container"},i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/",exact:!0,component:T}),i.a.createElement(u.a,{path:"/qualities",exact:!0,component:C}),i.a.createElement(u.a,{path:"/qualities/:id",exact:!0,component:k}),i.a.createElement(u.a,{path:"/cart",component:_}),i.a.createElement(u.a,{path:"/",component:R}))),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},"HQS - Lorem ipsum dolor sit amet...")))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(12),L=Object(M.b)({products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_PRODUCTS":return[].concat(Object(q.a)(t),Object(q.a)(e.payload));default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":return[].concat(Object(q.a)(t),[e.payload]);case"REMOVE_FROM_CART":return t.filter((function(t){return t!==e.payload}));default:return t}},status:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"STATUS_LOADING",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"STATUS_LOADING":case"STATUS_SUCCESS":case"STATUS_ERROR":return e.type;default:return t}}}),D=Object(M.c)(L);c.a.render(i.a.createElement(s.a,{store:D},i.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.4a071a67.chunk.js.map