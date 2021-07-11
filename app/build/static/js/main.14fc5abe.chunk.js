(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{59:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var a,i,l,r,c,o,s,u,d,b,j,f,p,h,m,O,x,v,g,y,w,S,E=t(0),M=t(15),F=t.n(M),k=t(8),T=t(34),z=[],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_SHOES_DATA":return n.data;default:return e}},D=t(7),_={size:[],type:null,model:null,sort:null},C=function(e){return{type:"SET_FILTER",filter:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_FILTER":return Object(D.a)(Object(D.a)({},e),n.filter);case"CLEAR_FILTER":return _;default:return e}},I=t(26),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_FAVORITE_MODEL":return n.data;case"ADD_FAVORITE_MODEL":return[].concat(Object(I.a)(e),[n.id]);case"REMOVE_FAVORITE_MODEL":return e.filter((function(e){return e!==n.id}));default:return e}},V=Object(T.a)({shoesData:A,filter:R,favoriteModels:L}),N=Object(T.b)(V),J=t(5),U=t(3),K=t(4),H=Object(K.a)(a||(a=Object(U.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-family: 'Rubik';\n    overflow-y: scroll;\n  }\n\n  & a {\n    text-decoration: none;\n    color: black;\n  }\n\n  & ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n"]))),P=K.b.div(i||(i=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  min-height: 100vh;\n"]))),B=(t(59),t(20)),Y=K.b.nav(l||(l=Object(U.a)(["\n  display: flex;\n  justify-content: flex-start;\n  box-shadow: 0px 0px 1px black;\n  padding: 0.5em 0;\n"]))),q=K.b.span(r||(r=Object(U.a)(["\n  & > a {\n    display: flex;\n    align-items: center;\n    padding: 1em;\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n    font-weight: bold;\n    \n    @media(max-width: 600px) {\n      display: none;\n    }\n  }\n"]))),G=Object(K.b)(B.b)(c||(c=Object(U.a)(["\n  display: block;\n  padding: 1em;\n  text-align: center;\n"]))),Q=K.b.ul(o||(o=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  color: black;\n\n  @media(max-width: 600px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  "," {\n    color: #808080;\n\n    &."," {\n      color: black;\n      text-shadow: 0.3px 0.3px 1px black;\n    }\n\n    &:hover {\n      color: black;\n    }\n  }\n"])),G,"is-active"),W=t(1),X=function(){return Object(W.jsxs)(Y,{children:[Object(W.jsx)(q,{children:Object(W.jsx)(G,{to:"/",children:'"VANS"'})}),Object(W.jsxs)(Q,{children:[Object(W.jsx)("li",{children:Object(W.jsx)(G,{exact:!0,activeClassName:"is-active",to:"/",children:"Models"})}),Object(W.jsx)("li",{children:Object(W.jsx)(G,{activeClassName:"is-active",to:"/favorites",children:"Favorites"})}),Object(W.jsx)("li",{children:Object(W.jsx)(G,{activeClassName:"is-active",to:"/about",children:"About"})})]})]})},Z=K.b.section(s||(s=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1em;\n  row-gap: 1em;\n  padding-top: 3em;\n\n  & > h4 {\n    margin: 0;\n  }\n\n  @media(max-width: 600px) {\n    padding: 3em 1em;\n  }\n"]))),$=function(){return Object(W.jsxs)(Z,{children:[Object(W.jsx)("h4",{children:" Filters and favorites are being saved in your localStorage everytime you make a change. "}),Object(W.jsx)("h4",{children:" The data is being refreshed every day at 00:00, it takes around 5 minutes to refresh the database. "})]})},ee=t(33),ne=t.n(ee),te=t(48),ae=t(49),ie=t.n(ae),le=function(){var e=Object(te.a)(ne.a.mark((function e(){var n,t;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ie.a.get("/api/getVansData"),e.next=3,n;case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(k.b)(),n=Object(k.c)((function(e){return e.shoesData}));return Object(E.useEffect)((function(){le().then((function(n){return e({type:"SET_SHOES_DATA",data:n})})).catch((function(e){return console.log(e)}))}),[e]),n},ce=function(){var e=Object(k.b)(),n=Object(k.c)((function(e){return e.favoriteModels}));Object(E.useEffect)((function(){var n=window.localStorage.getItem("favoriteModels");if(n){var t=JSON.parse(n);e({type:"SET_FAVORITE_MODEL",data:t})}}),[e]);return{favoriteModels:n,addModelToFavorite:function(t){e({type:"ADD_FAVORITE_MODEL",id:t}),window.localStorage.setItem("favoriteModels",JSON.stringify([].concat(Object(I.a)(n),[t])))},removeModelFromFavorite:function(t){e({type:"REMOVE_FAVORITE_MODEL",id:t}),window.localStorage.setItem("favoriteModels",JSON.stringify(n.filter((function(e){return e!==t}))))}}},oe=t(18),se=function(){var e=function(e){return null!==e.size&&!e.size.includes(null)&&0!==e.size.length},n=function(e,n){if(!n)return e;var t=n.split("-"),a=Object(oe.a)(t,2),i=a[0],l=a[1];return"date"===i?e.sort((function(e,n){return"asc"===l?new Date(e.lastUpdated)-new Date(n.lastUpdated):new Date(n.lastUpdated)-new Date(e.lastUpdated)})):"price"===i&&e.sort((function(e,n){return"asc"===l?e.price-n.price:n.price-e.price})),e},t=function(n,t){return n.filter((function(n){return!e(t)||n.sizes.some((function(e){return t.size.includes(e)}))})).filter((function(e){return!t.type||((n=e.name).includes("Pro")?"Pro":n.includes("ComfyCush")?"ComfyCush":"Other")===t.type;var n})).filter((function(e){return!t.model||e.name.includes(t.model)}))};return{isSizeFilterSet:e,prepareList:function(e,a){var i=e.filter((function(e){return e.sizes.length>0})),l=e.filter((function(e){return 0===e.sizes.length}));return n(t(i,a),a.sort).concat(n(t(l,a),a.sort))}}},ue=K.b.li(u||(u=Object(U.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto auto;\n  box-shadow: 0px 0px 1px black;\n  padding: 1em;\n  margin-top: 1em;\n"]))),de=K.b.a(d||(d=Object(U.a)(["\n  box-shadow: 0px 0px 1px black;\n  align-items: center;\n\n  & img {\n    height: 8em;\n    width: auto;\n    transform: scale(0.9);\n    transition: .2s ease-out;\n\n    &:hover {\n      transform: scale(1)\n    }\n  }\n\n  @media (max-width: 600px) {\n    display: flex;\n  }\n"]))),be=K.b.div(b||(b=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 1em;\n\n  @media (max-width: 600px) {\n    row-gap: 1em;\n  }\n"]))),je=K.b.h4(j||(j=Object(U.a)(["\n  padding: 0em;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  column-gap: 0.5em;\n"]))),fe=K.b.button(f||(f=Object(U.a)(["\n  height: 2em;\n  border: 0;\n  box-shadow: 0px 0px 1px black;\n  cursor: pointer;\n  padding: 0.5em;\n\n  & img {\n    width: auto;\n    height: 100%;\n  }\n\n  &:hover {\n    background: ",";\n  }\n\n  background: ",";\n"])),(function(e){return e.isFavorite?"#eb4034":"red"}),(function(e){return e.isFavorite?"red":"transparent"})),pe=K.b.ul(p||(p=Object(U.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 0.5em;\n  \n  & li {\n    padding: 0.3em;\n    box-shadow: 0px 0px 1px black;\n    user-select: none;\n  }\n\n  & span {\n    color: red;\n  }\n\n  @media (max-width: 600px) {\n    column-gap: 0;\n\n    & li {\n      width: 2em;\n      text-align: center;\n    }\n  }\n"]))),he=K.b.span(h||(h=Object(U.a)(["\n  font-size: 1.1em;\n"]))),me=K.b.span(m||(m=Object(U.a)(["\n  font-size: 0.9em;\n  color: #8e8e8e;\n  font-weight: 100;\n"]))),Oe=t.p+"static/media/favorite.21d2cda7.svg",xe=function(e){var n=e.model,t=e.isFavorite,a=ce(),i=a.addModelToFavorite,l=a.removeModelFromFavorite,r=se().isSizeFilterSet,c=Object(k.c)((function(e){return e.filter}));return Object(W.jsxs)(ue,{children:[Object(W.jsx)(de,{href:n.url,children:Object(W.jsx)("img",{src:n.img,alt:"preview"})}),Object(W.jsxs)(be,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(fe,{isFavorite:t,onClick:function(){return e=n.id,void(t?l(e):i(e));var e},children:Object(W.jsx)("img",{src:Oe,alt:"toggleFavorite"})}),Object(W.jsxs)("a",{href:n.url,children:[" ",n.name," "]})]}),Object(W.jsx)(pe,{children:n.sizes.length>0?n.sizes.filter((function(e){return!r(c)||c.size.includes(e)})).map((function(e){return Object(W.jsxs)("li",{children:[" ",e," "]},e)})):Object(W.jsx)("span",{children:" Unavailable "})}),Object(W.jsxs)(he,{children:[" ",n.price," z\u0142 "]}),Object(W.jsxs)(me,{children:[" ",n.lastUpdated," "]})]})]})},ve=K.b.h4(O||(O=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1em;\n  padding-top: 2em;\n  column-gap: 0.5em;\n\n  @media(max-width: 600px) {\n    display: inline-block;\n    padding: 1em;\n    line-height: 2em;\n\n    & > button {\n      margin: 0 1em;\n    }\n  }\n"]))),ge=function(){var e=re(),n=ce().favoriteModels,t=e.filter((function(e){return n.includes(e.id)})),a=function(e){return null!==e.size&&!e.size.includes(null)&&0!==e.size.length};return Object(W.jsx)("ul",{children:t.length>0?t.map((function(e){return Object(W.jsx)(xe,{model:e,isSizeFilterSet:a,isFavorite:!!n.includes(e.id)},e.id)})):Object(W.jsxs)(ve,{children:["You dont have any favorites yet, add the model you like by clicking",Object(W.jsx)(fe,{children:Object(W.jsx)("img",{src:Oe,alt:"toggleFavorite"})}),"in models section."]})})},ye=K.b.section(x||(x=Object(U.a)(["\n  display: flex;\n  padding: 1em;\n  column-gap: 1em;\n\n  & > div {\n    flex-grow: 1;\n    flex-basis: 33%;\n  }\n\n  @media (max-width: 600px) {\n    flex-direction: column;\n    row-gap: 1em;\n  }\n"]))),we=K.b.button(v||(v=Object(U.a)(["\n  background: 0;\n  cursor: pointer;\n  border: 1px solid hsl(0, 0%, 80%);\n  border-radius: 4px;\n\n  & > img {\n    height: 1.5em;\n    padding: 0 0.5em;\n  }\n\n  &:hover {\n    border: 1px solid hsl(0, 0%, 70%);\n  }\n\n  @media (max-width: 600px) {\n    grid-template-columns: 1fr;\n    row-gap: 1em;\n    padding: 0.5em;\n  }\n"]))),Se=t(51),Ee={option:function(e,n){return Object(D.a)({},e)},control:function(e){return Object(D.a)(Object(D.a)({},e),{},{backgroundColor:"white",width:"auto"})},multiValue:function(e,n){n.data;return Object(D.a)({},e)},multiValueLabel:function(e,n){var t=n.data;return Object(D.a)(Object(D.a)({},e),{},{color:t.color})},multiValueRemove:function(e,n){var t=n.data;return Object(D.a)(Object(D.a)({},e),{},{color:t.color,":hover":{backgroundColor:t.color,color:"white"}})}},Me=t(21),Fe=function(){var e=Object(k.b)(),n=Object(k.c)((function(e){return e.filter}));Object(E.useEffect)((function(){var n=window.localStorage.getItem("filters");if(n){var t=JSON.parse(n);e(C(t))}}),[e]);var t={changeFilter:function(t,a){e(C(Object(Me.a)({},t,a))),window.localStorage.setItem("filters",JSON.stringify(Object(D.a)(Object(D.a)({},n),Object(Me.a)({},t,a))))},clearFilter:function(){e({type:"CLEAR_FILTER"}),window.localStorage.setItem("filters",JSON.stringify({size:[],type:null,model:null,sort:null}))}};return Object(D.a)({value:n},t)},ke=function(e){var n=e.placeholderText,t=e.filterKey,a=e.options,i=e.isMulti,l=e.isSearchable,r=Fe();return Object(W.jsx)(Se.a,{styles:Ee,placeholder:n||"Select",value:Array.isArray(r.value[t])?r.value[t].map((function(e){return{value:e,label:e}})):null!==r.value[t]&&{value:r.value[t],label:r.value[t]},onChange:function(e){var n=Array.isArray(e)?e.map((function(e){return e.value})):e.value;r.changeFilter(t,n)},options:a,isMulti:i,isSearchable:l})},Te=t.p+"static/media/filter-remove.5983630d.svg",ze=[{value:"34.5",label:"34.5"},{value:"35",label:"35"},{value:"36",label:"36"},{value:"36.5",label:"36.5"},{value:"37",label:"37"},{value:"38",label:"38"},{value:"38.5",label:"38.5"},{value:"39",label:"39"},{value:"40",label:"40"},{value:"40.5",label:"40.5"},{value:"41",label:"41"},{value:"42",label:"42"},{value:"42.5",label:"42.5"},{value:"43",label:"43"},{value:"44",label:"44"},{value:"44.5",label:"44.5"},{value:"45",label:"45"}],Ae=[{value:null,label:"all"},{value:"Pro",label:"Pro"},{value:"ComfyCush",label:"ComfyCush"},{value:"Other",label:"Other"}],De=[{value:null,label:"all"},{value:"Old Skool",label:"Old Skool"},{value:"Authentic",label:"Authentic"},{value:"Era",label:"Era"},{value:"MTE",label:"MTE"},{value:"Slip-On",label:"Slip-On"},{value:"UltraRange",label:"UltraRange"},{value:"Sk8-Hi",label:"Sk8-Hi"}],_e=function(){var e=Fe();return Object(W.jsxs)(ye,{children:[Object(W.jsx)(ke,{placeholderText:"Select size",filterKey:"size",options:ze,isMulti:!0}),Object(W.jsx)(ke,{placeholderText:"Select type",filterKey:"type",options:Ae,isMulti:!1}),Object(W.jsx)(ke,{placeholderText:"Select silhouette",filterKey:"model",options:De,isMulti:!1}),Object(W.jsx)(we,{onClick:e.clearFilter,title:"Clear filter",children:Object(W.jsx)("img",{src:Te,alt:"clear filter"})})]})},Ce=t(50),Re=function(e,n){var t=Object(E.useState)({prev:0,next:10}),a=Object(oe.a)(t,2),i=a[0],l=a[1],r=Object(E.useState)(!0),c=Object(oe.a)(r,2),o=c[0],s=c[1],u=Object(E.useState)(e.slice(i.prev,i.next)),d=Object(oe.a)(u,2),b=d[0],j=d[1];return Object(E.useEffect)((function(){0===b.length&&0!==e.length&&(j(e.slice(i.prev,i.next)),e.length>10&&s(!0))}),[e]),Object(E.useEffect)((function(){j(e.slice(0,10)),s(!1),e.length>10&&(l({prev:0,next:10}),s(!0))}),[n]),{current:b,getMoreData:function(){b.length!==e.length?(setTimeout((function(){j(b.concat(e.slice(i.prev+10,i.next+10)))}),1e3),l((function(e){return{prev:e.prev+10,next:e.next+10}}))):s(!1)},hasMore:o}},Ie=K.b.div(g||(g=Object(U.a)(["\n  height: 5em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Le=t.p+"static/media/spinner.7593a230.svg",Ve=function(){return Object(W.jsx)(Ie,{children:Object(W.jsx)("img",{src:Le,alt:"Loading..."})})},Ne=K.b.section(y||(y=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Je=K.b.span(w||(w=Object(U.a)(["\n  color: #989898;\n  text-align: center;\n  padding-bottom: 1em;\n"]))),Ue=K.b.div(S||(S=Object(U.a)(["\n  width: 10em;\n  align-self: flex-end;\n  padding-right: 1em;\n\n  @media(max-width: 600px) {\n    width: calc(100% - 2em);\n  }\n"]))),Ke=function(){return Object(W.jsx)(Ue,{children:Object(W.jsx)(ke,{options:[{value:"price-asc",label:"price ascending"},{value:"price-desc",label:"price descending"},{value:"date-asc",label:"date ascending"},{value:"date-desc",label:"date descending"}],placeholderText:"Select size",filterKey:"sort",isMulti:!1,isSearchable:!1})})},He=function(){var e=re(),n=ce().favoriteModels,t=se().prepareList,a=Object(k.c)((function(e){return e.filter})),i=t(e,a),l=Re(i,a);return Object(W.jsxs)(Ne,{children:[Object(W.jsxs)(Je,{children:[" ",i.length," models match the following filters "]}),Object(W.jsx)(Ke,{}),Object(W.jsx)(Ce.a,{dataLength:l.current.length,next:l.getMoreData,hasMore:l.hasMore,loader:Object(W.jsx)(Ve,{}),children:Object(W.jsx)("ul",{children:l.current&&l.current.map((function(e){return Object(W.jsx)(xe,{model:e,isFavorite:!!n.includes(e.id)},e.id)}))})})]})},Pe=function(){return Object(W.jsxs)(P,{children:[Object(W.jsx)(H,{}),Object(W.jsx)(X,{}),Object(W.jsxs)(J.c,{children:[Object(W.jsx)(J.a,{path:"/about",children:Object(W.jsx)($,{})}),Object(W.jsx)(J.a,{path:"/favorites",children:Object(W.jsx)(ge,{})}),Object(W.jsxs)(J.a,{path:"/",children:[Object(W.jsx)(_e,{}),Object(W.jsx)(He,{})]})]})]})};F.a.render(Object(W.jsx)(B.a,{children:Object(W.jsx)(k.a,{store:N,children:Object(W.jsx)(Pe,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.14fc5abe.chunk.js.map