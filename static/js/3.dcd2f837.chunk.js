(this["webpackJsonpreact-query-example"]=this["webpackJsonpreact-query-example"]||[]).push([[3],{82:function(e,t,r){"use strict";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,"default",(function(){return b}));var o=r(44),s=r(2),a=r(22),j=r(4);function b(){var e=Object(s.useState)({userId:1,id:1}),t=Object(o.a)(e,2),r=t[0],n=t[1],b=Object(s.useState)({}),l=Object(o.a)(b,2),d=l[0],u=l[1],O=Object(a.b)(1),p=O.isLoading,h=O.error,f=O.data,x=Object(a.c)(1,r),v=x.mutate,y=x.data,g=x.isLoading,m=x.isSuccess,w=x.error,S=function(e){n((function(t){return i(i({},t),{},c({},e.target.name,e.target.value))}))};return console.log("updatedData",y,"IsSaving",g,"isSaved",m,"saveError",w),console.log("Single post data:",f,d),Object(j.jsxs)("div",{style:{width:"100%",height:"200px",outline:"1px solid #000",overflow:"scroll"},children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(f),u(f)},children:[Object(j.jsx)("h1",{children:"Update Detail"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",name:"title",onChange:S})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Body"}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",name:"body",onChange:S})})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Save"})})]}),Object(j.jsx)("hr",{}),h?"Error occurred ".concat(h):null,p?"Fetching data":Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:f.title}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:f.body})]})]})}}}]);
//# sourceMappingURL=3.dcd2f837.chunk.js.map