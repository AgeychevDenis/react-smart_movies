(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{100:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(28),a=n.n(i),r=n(7),o=n(5),l=n(2),j=(n(95),n(1)),u=function(){return Object(j.jsxs)("div",{className:"error-page",style:{textAlign:"center"},children:[Object(j.jsx)("h1",{children:"404"}),Object(j.jsx)("span",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(j.jsx)("p",{children:"\u041c\u044b \u0441\u043e\u0436\u0430\u043b\u0435\u0435\u043c, \u043d\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0412\u044b \u043f\u044b\u0442\u0430\u043b\u0438\u0441\u044c \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043c\u0435\u043d\u044e \u0441\u0430\u0439\u0442\u0430"}),Object(j.jsx)(o.b,{to:"/",className:"error-page__btn-error",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})]})},b=n(3),d=n(4),m=n(9),h=n(10),p=n(56),O=n(57),x=["id"],f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).onShow=function(){c.setState((function(e){return{show:!e.show}}))},c.state={show:!1},c}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.show,t=this.props,n=t.title,c="menu__link menu__link-sub icon-square",s="sub-menu__list";e&&(c+=" click",s+=" open");var i=t.data.map((function(e){var t=e.id,n=Object(O.a)(e,x);return Object(j.jsx)(_,Object(p.a)({},n),t)}));return Object(j.jsxs)("li",{className:"menu__item",children:[Object(j.jsx)("button",{onClick:this.onShow,type:"button",className:c,children:n}),Object(j.jsx)("ul",{className:s,children:i})]})}}]),n}(c.Component),_=function(e){var t=e.subtitle;return Object(j.jsx)("li",{className:"sub-menu__item",children:Object(j.jsx)(o.b,{to:"/",className:"sub-menu__link",children:t})})},v=f,N=(n(97),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).onActive=function(){c.setState((function(e){return{active:!e.active}}))},c.state={active:!1,data:[{id:1,subtitle:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"},{id:2,subtitle:"\u0421\u043c\u043e\u0442\u0440\u044f\u0442 \u0441\u0435\u0439\u0447\u0430\u0441"},{id:3,subtitle:"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435"},{id:4,subtitle:"\u041b\u0443\u0447\u0448\u0435\u0435"}],data2:[{id:1,subtitle:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0430\u043a\u0442\u0435\u0440\u044b"}]},c}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.active,n=e.data,c=e.data2,s="menu__icon icon-menu",i="menu__body";return t&&(s+=" active",i+=" active"),Object(j.jsxs)("div",{className:"header__menu menu",children:[Object(j.jsx)("button",{onClick:this.onActive,type:"button",className:s,children:Object(j.jsx)("span",{})}),Object(j.jsx)("nav",{className:i,children:Object(j.jsxs)("ul",{className:"menu__list",children:[Object(j.jsx)(v,{title:"\u0427\u0442\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",data:n}),Object(j.jsx)("li",{className:"menu__item",children:Object(j.jsx)(o.b,{to:"/",className:"menu__link",children:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440\u044b"})}),Object(j.jsx)(v,{title:"\u0410\u043a\u0442\u0435\u0440\u044b",data:c}),Object(j.jsx)("li",{className:"menu__item",children:Object(j.jsx)(o.b,{to:"/",className:"menu__link",children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"})})]})})]})}}]),n}(c.Component)),k=function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};e.any()?document.documentElement.classList.add("touch"):document.documentElement.classList.add("mouse")},g=(n(98),function(e){return k(),Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsxs)(o.b,{to:"/",className:"header__logo",children:[Object(j.jsx)("h1",{children:"SMART"}),Object(j.jsx)("p",{children:"\u0443\u043c\u043d\u0430\u044f \u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0430"})]}),Object(j.jsx)(N,{}),Object(j.jsxs)("div",{className:"header__actions",children:[Object(j.jsx)("button",{onClick:function(){return e.setModalSearch(!0)},className:"header__link",children:Object(j.jsx)("i",{className:"icon-search"})}),Object(j.jsx)("button",{onClick:function(){return e.setModalLogin(!0)},className:"header__link",children:Object(j.jsx)("i",{className:"icon-user"})})]})]})})}),y=(n(99),function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"footer__container container",children:[Object(j.jsxs)("div",{className:"footer__top",children:[Object(j.jsx)("div",{className:"footer__top-social social",children:Object(j.jsxs)("ul",{className:"social-list",children:[Object(j.jsx)("li",{className:"social-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"social-list__link icon-vk"})}),Object(j.jsx)("li",{className:"social-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"social-list__link icon-facebook"})}),Object(j.jsx)("li",{className:"social-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"social-list__link icon-twitter"})}),Object(j.jsx)("li",{className:"social-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"social-list__link icon-instagram"})}),Object(j.jsx)("li",{className:"social-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"social-list__link icon-youtube"})})]})}),Object(j.jsx)("div",{className:"footer__top-list",children:Object(j.jsxs)("ul",{className:"footer-list",children:[Object(j.jsx)("li",{className:"footer-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"footer-list__link",children:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438"})}),Object(j.jsx)("li",{className:"footer-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"footer-list__link",children:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440\u044b"})}),Object(j.jsx)("li",{className:"footer-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"footer-list__link",children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"})}),Object(j.jsx)("li",{className:"footer-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"footer-list__link",children:"\u0410\u043a\u0442\u0435\u0440\u044b"})}),Object(j.jsx)("li",{className:"footer-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"footer-list__link",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(j.jsx)("li",{className:"footer-list__item",children:Object(j.jsx)(o.b,{to:"/",className:"footer-list__link",children:"\u041e \u043d\u0430\u0441"})})]})})]}),Object(j.jsx)("div",{className:"footer__bottom",children:Object(j.jsxs)("p",{children:["\xa9 2022, ",Object(j.jsx)(o.b,{to:"/",children:"SMART"})," 18+"]})})]})})}),w=n(58),C=n(207),S=n(21),E=n(12),A=n(55),M=(n(82),function(e){var t=e.open,n=e.onClose,s=Object(c.useState)(null),i=Object(r.a)(s,2),a=i[0],l=i[1],u=Object(A.a)(),b=u.loading,d=u.error,m=u.getMovieByName,h=u.clearError,p=function(e){l(e)};var O,x=d?Object(j.jsx)("div",{className:"modal-search__critical-error",children:Object(j.jsx)(E.a,{})}):null,f=a?a.length>0?Object(j.jsx)("div",{className:"modal-search__wrapper",children:(O=a,O.slice(0,8).map((function(e,t){return Object(j.jsxs)("div",{className:"modal-search__inner",children:[Object(j.jsx)("i",{className:"icon-video"}),Object(j.jsxs)(o.b,{onClick:n,to:"/movie/".concat(e.id),className:"modal-search__success",children:[" ",Object(j.jsx)("span",{children:e.title})," ",Object(j.jsx)("span",{children:"(".concat(e.year,")")})]})]},t)})))}):Object(j.jsx)("div",{className:"modal-search__error",children:"\u0424\u0438\u043b\u044c\u043c \u043d\u0435 \u0431\u044b\u043b \u043d\u0430\u0439\u0434\u0435\u043d. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443"}):null;return Object(j.jsx)(C.a,{in:t,timeout:300,classNames:"popup",mountOnEnter:!0,unmountOnExit:!0,children:Object(j.jsx)(E.d,{initialValues:{movieName:""},validationSchema:S.b({movieName:S.c().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!")}),onSubmit:function(e){var t,n=e.movieName;t=n,h(),m(t).then(p)},children:Object(j.jsx)("div",{className:"popup",children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsxs)("div",{className:"popup__body",children:[Object(j.jsx)("h1",{className:"popup__title",children:"\u041f\u043e\u0438\u0441\u043a"}),Object(j.jsxs)(E.c,{children:[Object(j.jsx)(E.b,{id:"movieName",name:"movieName",type:"text",placeholder:"\u0424\u0438\u043b\u044c\u043c\u044b",className:"popup__input"}),Object(j.jsx)("button",{type:"submit",className:"popup__btn button__search",disabled:b,children:Object(j.jsx)("div",{className:"inner",children:"\u041d\u0430\u0439\u0442\u0438"})})]}),Object(j.jsx)("button",{onClick:n,className:"close",children:"\xd7"})]}),f,x]})})})})}),I=(n(202),function(e){var t=e.open,n=e.onClose;return Object(j.jsx)(C.a,{in:t,timeout:300,classNames:"popup",mountOnEnter:!0,unmountOnExit:!0,children:Object(j.jsx)(E.d,{initialValues:{telephone:"",password:"",terms:!1},validationSchema:S.b({telephone:S.c().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0432 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u0432\u043e\u0442 \u0442\u0430\u043a: +79XXXXXXXXX"),password:S.c().min(6,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"),terms:S.a().required("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435").oneOf([!0],"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435")}),onSubmit:function(e){return console.log(JSON.stringify(e,null,2))},children:Object(j.jsx)("div",{className:"popup",children:Object(j.jsx)("div",{className:"popup__container popup-login__container",children:Object(j.jsxs)("div",{className:"popup__body",children:[Object(j.jsx)("h1",{className:"popup__title",children:"\u0412\u0445\u043e\u0434 | \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)("p",{}),Object(j.jsxs)(E.c,{className:"form",children:[Object(j.jsx)("label",{htmlFor:"telephone",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(j.jsx)(E.b,{id:"telephone",name:"telephone",type:"tel",autoComplete:"off"}),Object(j.jsx)(E.a,{component:"div",className:"error",name:"telephone"}),Object(j.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)(E.b,{id:"password",name:"password",type:"password",autoComplete:"off"}),Object(j.jsx)(E.a,{component:"div",className:"error",name:"password"}),Object(j.jsxs)("label",{className:"form__lable-checkbox",children:[Object(j.jsx)(E.b,{name:"terms",type:"checkbox",className:"form__checkbox"}),Object(j.jsx)("div",{className:"form__checkbox-mark"}),"\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0438 \u0438 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"]}),Object(j.jsx)(E.a,{component:"div",className:"error",name:"terms"}),Object(j.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(j.jsx)("button",{onClick:n,className:"close",children:"\xd7"})]})})})})})}),X=(n(203),n(204),Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,230))}))),P=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,227))}));var T=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),a=Object(r.a)(i,2),b=a[0],d=a[1];return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(g,{setModalLogin:d,setModalSearch:s}),Object(j.jsx)(M,{open:n,onClose:function(){return s(!1)}}),Object(j.jsx)(I,{open:b,onClose:function(){return d(!1)}}),Object(j.jsx)("main",{children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(w.a,{}),children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(X,{})}),Object(j.jsx)(l.a,{path:"/movie/:movieId",element:Object(j.jsx)(P,{})}),Object(j.jsx)(l.a,{path:"*",element:Object(j.jsx)(u,{})})]})})}),Object(j.jsx)(y,{})]})})};n(205);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))},55:function(e,t,n){"use strict";var c=n(13),s=n.n(c),i=n(24),a=n(7),r=n(0);t.a=function(){var e=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(null),l=Object(a.a)(o,2),j=l[0],u=l[1],b=Object(r.useCallback)(function(){var e=Object(i.a)(s.a.mark((function e(t){var n,i,a,r,o,l=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",i=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3?l[3]:void 0,c(!0),e.prev=4,e.next=7,fetch(t,{method:n,body:i,headers:a});case 7:if((r=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(r.status));case 10:return e.next=12,r.json();case 12:return o=e.sent,c(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),c(!1),u(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,request:b,error:j,clearError:Object(r.useCallback)((function(){return u(null)}),[])}}(),t=e.loading,n=e.request,c=e.error,o=e.clearError,l="817e16ef-f08e-4086-b21e-0d3737b1b32d",j=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1","GET",null,{"X-API-KEY":l,"Content-Type":"application/json"});case 2:return t=e.sent,e.abrupt("return",t.films.map(m));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("http://myjson.dit.upm.es/api/bins/dok9");case 2:return t=e.sent,e.abrupt("return",t.collection.map(h));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=".concat(t,"&page=1"),"GET",null,{"X-API-KEY":l,"Content-Type":"application/json"});case 2:return c=e.sent,e.abrupt("return",c.films.map(p));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(t),"GET",null,{"X-API-KEY":l,"Content-Type":"application/json"});case 2:return c=e.sent,e.abrupt("return",O(c));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.filmId,imageUrl:e.posterUrl,rating:e.rating,year:e.year,country:e.countries[0].country,time:e.filmLength,title:e.nameRu,genre:e.genres[0].genre}},h=function(e){return{id:e.id,imageUrl:e.imageUrl,title:e.title,subtitle:e.subtitle}},p=function(e){return{id:e.filmId,title:e.nameRu,year:e.year}},O=function(e){return{id:e.kinopoiskId,name:e.nameRu,imageUrl:e.posterUrlPreview,age:e.ratingAgeLimits.slice(3,5),ratingImdb:e.ratingImdb||"\u2014",ratingKinopoisk:e.ratingKinopoisk,year:e.year,description:e.description,shortDescription:e.shortDescription||"\u2014",countries:e.countries.map((function(e,t){return(t?", ":"")+e.country})),genres:e.genres.map((function(e,t){return(t?", ":"")+e.genre}))}};return{loading:t,error:c,clearError:o,getAllCharacters:j,getCollection:u,getMovie:d,getMovieByName:b}}},58:function(e,t,n){"use strict";n(100);var c=n(1);t.a=function(){return Object(c.jsxs)("div",{className:"lds-roller",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}},82:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[206,1,2]]]);
//# sourceMappingURL=main.fc82d0e5.chunk.js.map