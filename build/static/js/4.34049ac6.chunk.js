(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[4],{212:function(e,t,c){"use strict";var r=c.p+"static/media/error.3ab12af3.gif",n=c(1);t.a=function(){return Object(n.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",overflow:"hidden",backgroundColor:"#000",borderRadius:"10px"},children:Object(n.jsx)("img",{src:r,alt:"error-message",style:{height:"280px"}})})}},215:function(e,t,c){},217:function(e,t,c){},218:function(e,t,c){},220:function(e,t,c){},221:function(e,t,c){},230:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),s=c(7),i=c(226),a=c(229),o=c(228),l=c(224),j=c(225),b=c(5),d=c(55),m=c(212),u=c(56),h=c(216),p=(c(215),c(1)),O=function(e){return Object(p.jsxs)(h.a,Object(u.a)(Object(u.a)({className:"skeleton",speed:2,width:200,height:330,viewBox:"0 0 200 330",backgroundColor:"rgba(255, 255, 255, 0.65)",foregroundColor:"#e3e3e3"},e),{},{children:[Object(p.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"200",height:"280"}),Object(p.jsx)("rect",{x:"0",y:"291",rx:"3",ry:"3",width:"200",height:"16"}),Object(p.jsx)("rect",{x:"0",y:"313",rx:"3",ry:"3",width:"200",height:"13"})]}))},x=c.p+"static/media/sort.d2ad4900.svg";c(217),c(218),c(219);o.a.use([l.a,j.a]);var _=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],o=t[1],j=Object(d.a)(),u=j.loading,h=j.error,_=j.getAllCharacters;Object(r.useEffect)((function(){_().then(f)}),[]);var f=function(e){o(e)};var v=function(e){var t=e.map((function(e,t){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(b.b,{to:"/movie/".concat(e.id),className:"promo__card",children:[Object(p.jsx)("div",{className:"promo__card-img",children:Object(p.jsx)("img",{src:e.imageUrl,alt:"promo"})}),Object(p.jsxs)("div",{className:"promo__content",children:[Object(p.jsxs)("p",{className:"promo__content-rating",children:[e.rating,Object(p.jsx)("img",{src:x,alt:"sort"}),Object(p.jsx)("span",{className:"name-rating",children:"\u043a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a"})]}),Object(p.jsx)("p",{className:"promo__content-year",children:e.year}),Object(p.jsx)("p",{className:"promo__content-country",children:e.country}),Object(p.jsxs)("p",{className:"promo__content-time",children:[e.time," \u043c\u0438\u043d\u0443\u0442"]})]}),Object(p.jsx)("h4",{className:"promo__wrapper-title",children:e.title}),Object(p.jsx)("p",{className:"promo__wrapper-subtitle",children:e.genre})]})},t)}));return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(a.a,{modules:[l.a],className:"promo__wrapper",spaceBetween:10,slidesPerView:6,slidesPerGroup:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{width:200,slidesPerView:1,slidesPerGroup:1},1320:{width:1280,slidesPerView:6}},children:t})})}(c),g=h?Object(p.jsx)(m.a,{}):null,N=u?Object(p.jsx)("div",{className:"promo__skeleton",children:Array(6).fill(0).map((function(e,t){return Object(p.jsx)(O,{},t)}))}):null,w=u||h?null:v;return Object(p.jsx)("section",{className:"promo",children:Object(p.jsxs)("div",{className:"promo__container container",children:[Object(p.jsx)("h2",{className:"promo__title title",children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0432\u0430\u043c \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(p.jsxs)("div",{className:"promo__slider",children:[g,N,w,Object(p.jsx)("button",{className:"swiper-button-next"}),Object(p.jsx)("button",{className:"swiper-button-prev"})]})]})})},f=c(57),v=(c(220),function(e){var t=e.imageUrl,c=e.title,r=e.subtitle;return Object(p.jsxs)(b.b,{to:"/",className:"collection__item",href:"#",children:[Object(p.jsx)("img",{className:"collection__item-img",src:t,alt:c}),Object(p.jsxs)("div",{className:"collection__item-info",children:[Object(p.jsx)("h4",{className:"collection__item-title",children:c}),Object(p.jsx)("div",{className:"collection__item-subtitle",children:r})]})]})}),g=(c(221),["id"]),N=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],i=Object(d.a)().getCollection;Object(r.useEffect)((function(){i().then(a)}),[]);var a=function(e){n(e)};var o=c.map((function(e){var t=e.id,c=Object(f.a)(e,g);return Object(p.jsx)(v,Object(u.a)({},c),t)}));return Object(p.jsx)("section",{className:"content",children:Object(p.jsx)("div",{className:"content__container container",children:Object(p.jsxs)("div",{className:"content__wrapper",children:[Object(p.jsx)(b.b,{to:"/",className:"content__title title icon-square",children:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438"}),Object(p.jsx)("div",{className:"content__inner collection",children:o})]})})})},w=c(3),y=c(4),k=c(9),C=c(10),P=function(e){Object(k.a)(c,e);var t=Object(C.a)(c);function c(){var e;Object(w.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(y.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(p.jsx)(m.a,{}):this.props.children}}]),c}(r.Component),E=P;t.default=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(E,{children:[Object(p.jsx)(_,{}),Object(p.jsx)(N,{})]})})}}}]);
//# sourceMappingURL=4.34049ac6.chunk.js.map