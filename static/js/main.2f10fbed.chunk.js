(this["webpackJsonpreactjs-material-ui-rtl-plugin"]=this["webpackJsonpreactjs-material-ui-rtl-plugin"]||[]).push([[0],{131:function(e,t,n){},482:function(e,t){},504:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(46),i=n.n(r),j=n(538),o=n(28),u=n(8),s=(n(131),n(534)),l=n(33),b=function(e){return{menuList:e.menuList}},d={addMenuItem:function(e){return{type:"CHANGE_MENU",item:e}}},O=n(1),h=Object(l.b)(b,d)((function(e){var t=e.client,n=e.menuList,a=e.addMenuItem;return Object(c.useEffect)((function(){t.getEntries({content_type:"menu"}).then((function(e){e.items.forEach((function(e){var t={text:e.fields.textMenu,url:e.fields.slug};a(t)}))}))}),[t,a]),Object(O.jsx)("div",{children:Object(O.jsx)("div",{"data-testid":"menu",children:n&&n.menuList.map((function(e,t){return Object(O.jsx)(s.a,{to:e.url,variant:"outlined",component:o.b,children:e.text},t)}))})})})),p=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Welcome! "}),Object(O.jsx)("p",{children:"On this website you will see solutions to the most common tasks on React. Basically, we will deal with data structures such as arrays and arrays of objects."}),Object(O.jsx)("p",{children:"It is assumed that you are already familiar with the basics of React, so I will not dwell on explaining how states, props and hooks work."}),Object(O.jsx)("p",{children:"I'll show you how to add, remove, and modify array elements. Also, you will learn how to display an array of objects and change any of its properties using inputs. We will look at how to create a universal form for changing and adding new elements."})]})},x=n(118),f=n(539),m=n(541),v=n(540),g=n(542),y=n(543),C=n(110),S=n.n(C),_=n(544),k=function(e){var t=e.title;return Object(O.jsxs)(c.Fragment,{children:[Object(O.jsxs)(g.a,{sx:{borderBottom:1,borderColor:"divider"},className:"header-toolbar",children:[Object(O.jsx)(y.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,sx:{flex:1},children:t}),Object(O.jsxs)(_.a,{"data-testid":"github-link-header",href:"https://github.com/ElizPN",underline:"none","white-space":"nowrap",children:["My GitHub",Object(O.jsx)(S.a,{color:"primary",fontSize:"large"})]})]}),Object(O.jsx)(g.a,{component:"nav",variant:"dense",sx:{justifyContent:"space-between",overflowX:"auto"}})]})},w=n(545);function E(){return Object(O.jsxs)(y.a,{variant:"body2",color:"text.secondary",align:"center",children:["\xa9 ",Object(O.jsx)(_.a,{"data-testid":"github-link",color:"inherit",href:"https://github.com/ElizPN",children:"My GitHub"}),(new Date).getFullYear(),"."]})}function L(){return Object(O.jsx)(w.a,{component:"footer",sx:{bgcolor:"background.paper",py:6},children:Object(O.jsxs)(v.a,{maxWidth:"lg",children:[Object(O.jsx)(y.a,{variant:"h6",align:"center",gutterBottom:!0}),Object(O.jsx)(y.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p"}),Object(O.jsx)(E,{})]})})}var N=n(4),G=n(6);var B=n(49);function A(e){var t,n=0,c=Object(B.a)(e);try{for(c.s();!(t=c.n()).done;){n+=t.value}}catch(a){c.e(a)}finally{c.f()}return n/e.length}var M=[{id:"GYi9G_uC4gBF1e2SixDvu",prop1:"value11",prop2:"value12",prop3:"value13"},{id:"IWSpfBPSV3SXgRF87uO74",prop1:"value21",prop2:"value22",prop3:"value23"},{id:"JAmjRlfQT8rLTm5tG2m1L",prop1:"value31",prop2:"value32",prop3:"value33"}],R={id:"JAmjRlfQT8rLTm5tG2m1L",prop1:"value21 !",prop2:"value22 !",prop3:"value23 !"};var T=n(31);function I(){return Object(T.a)()}var W=[{id:I(),name:"apples",catg:"catg1",cost:100},{id:I(),name:"pears",catg:"catg2",cost:200},{id:I(),name:"potato",catg:"catg3",cost:300}];var P=n(5),H=n(20),F=[{id:J(),name:"prod1",catg:"catg1",cost:100},{id:J(),name:"prod2",catg:"catg2",cost:200},{id:J(),name:"prod3",catg:"catg3",cost:300}];function J(){return Object(T.a)()}function Y(){return Object(T.a)()}var z=[{id:Y(),name:"prod1",catg:"catg1",cost:100},{id:Y(),name:"prod2",catg:"catg2",cost:200},{id:Y(),name:"prod3",catg:"catg3",cost:300}];function D(){return{id:Y(),name:"",catg:"",cost:""}}function Q(){return Object(T.a)()}var U=[{id:Q(),name:"prod1",catg:"catg1",cost:100},{id:Q(),name:"prod2",catg:"catg2",cost:200},{id:Q(),name:"prod3",catg:"catg3",cost:300}];function X(){return{id:Q(),name:"",catg:"",cost:""}}var K=["Stockholm","Malmo","Gnesta","Gothenburg"];var V=[];V.counter=function(){var e=Object(c.useState)(0),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),i=Object(N.a)(r,2),j=i[0],o=i[1],u=Object(c.useState)(0),s=Object(N.a)(u,2),l=s[0],b=s[1],d=Object(c.useState)(0),h=Object(N.a)(d,2),p=h[0],x=h[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:n,onChange:function(e){a(e.target.value)}}),Object(O.jsx)("input",{value:j,onChange:function(e){o(e.target.value)}}),Object(O.jsx)("button",{"data-testid":"btn-sum",onClick:function(){b(Number(n)+Number(j))},children:"Count Sum"}),Object(O.jsx)("button",{"data-testid":"btn-prod",onClick:function(){x(Number(n)-Number(j))},children:"Count Product"}),Object(O.jsxs)("p",{children:["Sum: ",l]}),Object(O.jsxs)("p",{children:["Prod: ",p]})]})},V.select_city=function(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],r=K.map((function(e,t){return Object(O.jsx)("option",{children:e},t)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("select",{value:n,onChange:function(e){a(e.target.value)},children:r}),Object(O.jsxs)("p",{children:[" Your choice: ",n]})]})},V.increase_array=function(){var e=Object(c.useState)([1,2,3,4,5]),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object.assign([],n);return r.push(6),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:n}),Object(O.jsx)("button",{onClick:function(){a(r)},children:"BTN"})]})},V.delete_element_by_index=function(){var e=Object(c.useState)([1,2,3,4,5,6]),t=Object(N.a)(e,2),n=t[0],a=t[1],r=n.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:e}),Object(O.jsx)("button",{onClick:function(){return function(e){var t=n.slice(0,e),c=n.slice(e+1);return a([].concat(Object(G.a)(t),Object(G.a)(c)))}(t)},children:"BTN"})]},t)}));return Object(O.jsx)("div",{children:r})},V.add_element_from_input=function(){var e=Object(c.useState)(["a","b","c","d","e"]),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(N.a)(r,2),j=i[0],o=i[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:j,onChange:function(e){o(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){var e=[].concat(Object(G.a)(n),[j]);a(e),o(" ")},children:"Add element"}),Object(O.jsx)("div",{children:n.map((function(e,t){return Object(O.jsx)("p",{children:e},t)}))})]})},V.binding_inputs_to_array=function(){var e=Object(c.useState)([1,2,3,4,5,6,7,8,9]),t=Object(N.a)(e,2),n=t[0],a=t[1],r=n.map((function(e,t){return Object(O.jsx)("input",{value:e,onChange:function(e){return function(e,t){var c=n.slice(0,e),r=n.slice(e+1);return a([].concat(Object(G.a)(c),[parseInt(t.target.value)||0],Object(G.a)(r)))}(t,e)}},t)}));return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[" ",A(n)]}),r]})},V.edit_array=function(){var e=Object(c.useState)([1,2,3,4,5]),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(N.a)(r,2),j=i[0],o=i[1],u=n.map((function(e,t){return Object(O.jsx)("p",{onClick:function(){return o(t)},children:e},t)}));return Object(O.jsxs)("div",{children:[u,Object(O.jsx)("input",{value:0===j||j?n[j]:" ",onChange:function(e){var t=n.slice(0,j),c=n.slice(j+1);a([].concat(Object(G.a)(t),[e.target.value],Object(G.a)(c)))}})," "]})},V.generic_form_array=function(){var e,t=Object(c.useState)([1,2,3,4,5]),n=Object(N.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),j=Object(N.a)(i,2),o=j[0],u=j[1],s=Object(c.useState)(""),l=Object(N.a)(s,2),b=l[0],d=l[1],h=a.map((function(e,t){return Object(O.jsx)("p",{onClick:function(){u(t)},children:e},t)}));return e=o>=0?Object(O.jsx)("input",{value:a[o],onChange:function(e){var t=a.slice(0,o),n=a.slice(o+1);return r([].concat(Object(G.a)(t),[e.target.value],Object(G.a)(n)))},onBlur:function(){u(null)}}):Object(O.jsx)("input",{value:b,onChange:function(e){d(e.target.value)},onBlur:function(){r([].concat(Object(G.a)(a),[b]))}}),Object(O.jsxs)("div",{children:[h,e]})},V.del_elem_from_objects_array=function(){var e=Object(c.useState)(W),t=Object(N.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.catg}),Object(O.jsx)("td",{children:e.cost}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){!function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}(e.id)},children:"delete"})})]},e.id)}));return Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:r})})},V.change_element_in_objects_array=function(){var e=Object(c.useState)(M),t=Object(N.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:e.prop1}),Object(O.jsx)("span",{children:e.prop2}),Object(O.jsx)("span",{children:e.prop3})]},e.id)}));return Object(O.jsxs)("div",{children:[r,Object(O.jsx)("button",{onClick:function(){var e;e=R,a(n.map((function(t){return t.id===e.id?e:t})))},children:"Change third element"})]})},V.form_to_add_elements=function(){var e=Object(c.useState)(z),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(D()),i=Object(N.a)(r,2),j=i[0],o=i[1],u=n.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.catg}),Object(O.jsx)("td",{children:e.cost})]},e.id)}));function s(e,t){o(Object(H.a)(Object(H.a)({},j),{},Object(P.a)({},e,t.target.value)))}return Object(O.jsxs)("div",{children:[Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:u})}),Object(O.jsx)("input",{value:j.name,onChange:function(e){return s("name",e)}}),Object(O.jsx)("input",{value:j.catg,onChange:function(e){return s("catg",e)}}),Object(O.jsx)("input",{value:j.cost,onChange:function(e){return s("cost",e)}}),Object(O.jsx)("button",{onClick:function(){a([].concat(Object(G.a)(n),[j])),o(D())},children:"add element"})]})},V.edit_objects_array=function(){var e=Object(c.useState)(F),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(N.a)(r,2),j=i[0],o=i[1],u=n.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.catg}),Object(O.jsx)("td",{children:e.cost}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return o(e.id)},children:"Change"})})]},e.id)}));function s(e){return n.reduce((function(t,n){return n.id===j?n[e]:t}),"")}function l(e,t){var c=n.map((function(n){return n.id===j?Object(H.a)(Object(H.a)({},n),{},Object(P.a)({},e,t.target.value)):n}));a(c)}var b=s("name"),d=s("catg"),h=s("cost");return Object(O.jsxs)("div",{children:[Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:u})}),Object(O.jsx)("input",{value:b,onChange:function(e){return l("name",e)}}),Object(O.jsx)("input",{value:d,onChange:function(e){return l("catg",e)}}),Object(O.jsx)("input",{value:h,onChange:function(e){return l("cost",e)}})]})},V.generic_form_to_modify_objecs_array=function(){var e=Object(c.useState)(U),t=Object(N.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(N.a)(r,2),j=i[0],o=i[1],u=Object(c.useState)(X()),s=Object(N.a)(u,2),l=s[0],b=s[1],d=n.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.catg}),Object(O.jsx)("td",{children:e.cost}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return o(e.id)},children:"Change"})})]},e.id)}));function h(e){return j?n.reduce((function(t,n){return n.id===j?n[e]:t})," "):l[e]}function p(e,t){var c=n.map((function(n){return n.id===j?Object(H.a)(Object(H.a)({},n),{},Object(P.a)({},e,t.target.value)):n}));j?a(c):b(Object(H.a)(Object(H.a)({},l),{},Object(P.a)({},e,t.target.value)))}var x=h("name"),f=h("catg"),m=h("cost");return Object(O.jsxs)("div",{children:[Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:d})}),Object(O.jsx)("input",{value:x,onChange:function(e){return p("name",e)}}),Object(O.jsx)("input",{value:f,onChange:function(e){return p("catg",e)}}),Object(O.jsx)("input",{value:m,onChange:function(e){return p("cost",e)}}),Object(O.jsx)("button",{onClick:function(){j?o(null):(a([].concat(Object(G.a)(n),[l])),b(X()))},children:"Save"})]})};var Z=n(536);function q(e){var t=e.ComponentExample,n=e.title,c=e.body;return Object(O.jsxs)(w.a,{children:[Object(O.jsx)("h2",{"data-testid":"title",children:n}),Object(O.jsx)("div",{"data-testid":"body",children:c}),Object(O.jsxs)(Z.a,{sx:{maxWidth:200,border:1,p:"10px"},children:[Object(O.jsx)(y.a,{sx:{mb:1.5},color:"primary.main",children:"Try yourself"}),t&&Object(O.jsx)(t,{})]})]})}var $=n(50),ee=n(114),te=n(535),ne=n(78),ce={renderNode:Object(P.a)({},ne.BLOCKS.PARAGRAPH,(function(e,t){return 1===e.content.length&&e.content[0].marks.find((function(e){return"code"===e.type}))?Object(O.jsx)("div",{children:t}):Object(O.jsx)("p",{children:t})})),renderMark:Object(P.a)({},ne.MARKS.CODE,(function(e){return Object(O.jsx)(te.a,{language:"javascript",style:ee.obsidian,showLineNumbers:!0,children:e})}))};function ae(e){var t=e.client,n=Object(c.useState)(""),a=Object(N.a)(n,2),r=a[0],i=a[1],j=Object(c.useState)(),o=Object(N.a)(j,2),s=o[0],l=o[1],b=Object(c.useState)(""),d=Object(N.a)(b,2),h=d[0],p=d[1],x=V[h],f=Object(u.e)().pathname;return Object(c.useEffect)((function(){t.getEntries({"fields.slug":f,content_type:"page"}).then((function(e){e.items.forEach((function(e){i(e.fields.title);var t=Object($.documentToReactComponents)(e.fields.body,ce);l(t),p(e.fields.nameComponent)}))}))}),[t,f]),Object(O.jsx)(w.a,{children:Object(O.jsx)(q,{ComponentExample:x,title:r,body:s})})}var re=n(533),ie=Object(l.b)(b,d)((function(e){var t,n=e.client,a=e.menuList,r=Object(u.e)().pathname,i=Object(c.useState)([]),j=Object(N.a)(i,2),l=j[0],b=j[1];if(Object(c.useEffect)((function(){n.getEntries({content_type:"page","fields.chapter":r}).then((function(e){var t=e.items.map((function(e){var t=Object($.documentToReactComponents)(e.fields.body),n=Array.from(t),c=Object(N.a)(n,1)[0];return{title:e.fields.title,url:e.fields.slug,body:c}}));b(t)}))}),[n,r]),!l.length)return Object(O.jsx)("p",{children:"Loading..."});var d=l.map((function(e,t){return Object(O.jsxs)(re.a,{mb:5,spacing:.5,children:[Object(O.jsx)(s.a,{role:"link",to:e.url,variant:"outlined",component:o.b,children:e.title}),Object(O.jsx)(w.a,{children:e.body})]},t)}));var h=a&&a.menuList.filter((function(e){if(e.url===r)return!0})),p=h&&h[0]?null===(t=h[0])||void 0===t?void 0:t.text:"";return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{"data-testid":"titleChapter",children:p}),Object(O.jsx)("div",{children:d})]})})),je=n(115),oe=Object(je.a)({reducer:{menuList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{menuList:[]},t=arguments.length>1?arguments[1]:void 0;return"CHANGE_MENU"===t.type?Object(H.a)(Object(H.a)({},e),{},{menuList:[].concat(Object(G.a)(e.menuList),[t.item])}):e}}}),ue=n(449).createClient({space:"a4alnltpsauh",accessToken:"n_8u2e0aBdG_U7V2o6u1ClYynSy1MZeblGnrCXOuWhQ"}),se=Object(x.a)();function le(){return Object(O.jsxs)(f.a,{theme:se,children:[Object(O.jsx)(m.a,{}),Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(v.a,{maxWidth:"lg",children:[Object(O.jsx)(k,{title:"Typical challenges in React "}),Object(O.jsx)(l.a,{store:oe,children:Object(O.jsx)(h,{client:ue})}),Object(O.jsx)("main",{children:Object(O.jsx)(j.a,{container:!0,spacing:5,sx:{mt:3},children:" "})}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",element:Object(O.jsx)(p,{})}),Object(O.jsx)(u.a,{path:"/entries/:chapter/:page",element:Object(O.jsx)(ae,{client:ue})}),Object(O.jsx)(u.a,{path:"/category/:chapter",element:Object(O.jsx)(l.a,{store:oe,children:Object(O.jsx)(ie,{client:ue})})})]})]}),Object(O.jsx)(L,{})]})]})}i.a.render(a.a.createElement(a.a.Suspense,{fallback:null,children:a.a.createElement(le)}),document.getElementById("root"))}},[[504,1,2]]]);
//# sourceMappingURL=main.2f10fbed.chunk.js.map