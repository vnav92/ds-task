(this["webpackJsonpds-task"]=this["webpackJsonpds-task"]||[]).push([[0],{139:function(e,t,a){e.exports={wrapper:"main-layout_wrapper__J6QqQ",content:"main-layout_content__2fN9Z"}},142:function(e,t,a){e.exports={lengthCounter:"text-area_lengthCounter__i4N2T",lengthCounterError:"text-area_lengthCounterError__3tcmT"}},145:function(e,t,a){e.exports={wrapper:"profile_wrapper__2IYn0",avatar:"profile_avatar__3d7-Z"}},174:function(e,t,a){e.exports={formItem:"form-group_formItem__3kPT-"}},177:function(e,t,a){e.exports={header:"page-heading_header__2Wjx1"}},178:function(e,t,a){e.exports={imageUploadError:"image-upload_imageUploadError__V5Rpi"}},197:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),i=a(27),l=a.n(i),o=(a(197),a(198),a(115)),s=a(16),j=a(139),b=a.n(j),d=a(6),m=function(e){var t=e.children;return Object(d.jsxs)("div",{className:b.a.wrapper,children:[Object(d.jsx)(S,{}),Object(d.jsx)("main",{className:b.a.content,children:t})]})},u=a(36),h=a(46),O=a(305),x=a(51),p=a.n(x),f=function(e){var t=e.field,a=e.form,r=Object(h.a)(e,["field","form"]);return Object(d.jsx)(O.a,Object(u.a)(Object(u.a)({},t),{},{onChange:function(e,r){return a.setFieldValue(t.name,r)},value:t.value?p()(t.value):null},r))},v=a(309),g=a(49),_=a(189),N=function(e){var t=e.field,a=(e.form,e.tooltipContent),r=Object(h.a)(e,["field","form","tooltipContent"]);return Object(d.jsx)(v.a,Object(u.a)(Object(u.a)({suffix:a&&Object(d.jsx)(g.a,{title:a,children:Object(d.jsx)(_.a,{style:{color:"rgba(0,0,0,.45)"}})})},t),r))},F=a(307),E=a(174),I=a.n(E),R=function(e){var t=e.label,a=e.validationError,r=e.htmlFor,n=e.children;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(F.a.Item,{label:t,labelCol:{span:24},validateStatus:a?"error":"",help:a,htmlFor:r,className:I.a.formItem,children:n})})},y=a(62),q=a(302),L=a(3),C=a.n(L),D=a(190),P=a(311);!function(e){e.FORM="/form",e.PROFILE="/profile"}(r||(r={}));var w=[{route:r.FORM,icon:D.a},{route:r.PROFILE,icon:P.a}],k=a(74),A=a.n(k),S=function(){var e=Object(s.f)().pathname;return Object(d.jsx)("nav",{className:A.a.navWrapper,children:Object(d.jsx)("ul",{className:A.a.listWrapper,children:w.map((function(t){return Object(d.jsx)("li",{className:A.a.listItem,children:Object(d.jsx)(o.b,{className:A.a.link,to:t.route,children:Object(d.jsx)(q.a,{component:t.icon,className:C()(A.a.icon,Object(y.a)({},A.a.activeIcon,e===t.route))})})},t.route)}))})})},T=a(177),W=a.n(T),U=function(e){var t=e.className,a=e.children,r=Object(h.a)(e,["className","children"]);return Object(d.jsx)("header",{children:Object(d.jsx)("h1",Object(u.a)(Object(u.a)({className:C()(W.a.header,t)},r),{},{children:a}))})},B=a(142),J=a.n(B),M=function(e){var t=e.field,a=e.form,r=Object(h.a)(e,["field","form"]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v.a.TextArea,Object(u.a)(Object(u.a)({},t),r)),Object(d.jsxs)("div",{className:C()(J.a.lengthCounter,Object(y.a)({},J.a.lengthCounterError,a.errors[t.name]&&a.touched[t.name])),children:[t.value.split("").length," / ",r.maxLength]})]})},z=a(34),V=a(187),Q=a(306),Z=a(178),Y=a.n(Z),G=function(e){var t=e.field,a=e.form,r=Object(h.a)(e,["field","form"]),c=Object(n.useState)(null),i=Object(z.a)(c,2),l=i[0],o=i[1];Object(n.useEffect)((function(){t.value&&o(t.value)}),[t.value]);return Object(d.jsx)(Q.a,Object(u.a)(Object(u.a)({name:"avatar",listType:"picture-card",className:C()(Object(y.a)({},Y.a.imageUploadError,a.errors[t.name]&&a.touched[t.name])),showUploadList:!1,beforeUpload:function(e){var t=e.size/1024/1024<3;return t||V.b.error("Image should not be bigger than ".concat(3,"mb")),t},customRequest:function(){},onChange:function(e){return function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),e&&a.readAsDataURL(e)}(e.file.originFileObj,(function(e){o(e),a.setFieldValue(t.name,e)}))}},r),{},{children:l?Object(d.jsx)("img",{src:l,alt:"avatar",style:{width:"100%"}}):"+"}))},H=a(52),K=a(303),X=a(304),$="formData",ee=function(){var e=localStorage.getItem($);if(e)return JSON.parse(e)},te=a(60),ae={firstName:"",lastName:"",emailAddress:"",phoneNumber:"",birthdayDate:"",about:"",avatar:""},re=function(e){return"Please provide at least ".concat(e," digits")},ne=function(e,t){return"".concat(e," should be shorter than ").concat(t," digits")},ce=te.a().shape({firstName:te.b().required("Required").min(2,re(2)).max(50,ne("First name",50)),lastName:te.b().required("Required").min(2,re(2)).max(100,ne("Last name",100)),emailAddress:te.b().email("Invalid email format").required("Required").max(80,ne("Email",80)),phoneNumber:te.b().required("Required").test("isTelephoneNumber","Incorrect telephone number",(function(e){return Boolean(e&&"+"===e[0]&&!isNaN(e.slice(1))&&e.split("").length>7)})),birthdayDate:te.b().required("Required"),about:te.b().required("Required").min(5,re(10)).max(500,ne("Description",500)),avatar:te.b().required("Required")}),ie=function(){var e=Object(s.g)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(U,{children:"Form"}),Object(d.jsx)(H.c,{initialValues:ee()||ae,onSubmit:function(t){!function(e){localStorage.setItem($,JSON.stringify(e))}(t),e(r.PROFILE)},validationSchema:ce,children:function(e){var t=e.errors,a=e.touched;return Object(d.jsxs)(H.b,{children:[Object(d.jsxs)(K.a,{gutter:5,children:[Object(d.jsx)(X.a,{xs:24,sm:12,children:Object(d.jsx)(R,{label:"First name",htmlFor:"firstName",validationError:a.firstName&&t.firstName,children:Object(d.jsx)(H.a,{component:N,name:"firstName"})})}),Object(d.jsx)(X.a,{xs:24,sm:12,children:Object(d.jsx)(R,{label:"Last name",htmlFor:"lastName",validationError:a.lastName&&t.lastName,children:Object(d.jsx)(H.a,{component:N,name:"lastName"})})})]}),Object(d.jsxs)(K.a,{gutter:5,children:[Object(d.jsx)(X.a,{xs:24,sm:12,children:Object(d.jsx)(R,{label:"Email address",htmlFor:"emailAddress",validationError:a.emailAddress&&t.emailAddress,children:Object(d.jsx)(H.a,{component:N,name:"emailAddress"})})}),Object(d.jsx)(X.a,{xs:24,sm:12,children:Object(d.jsx)(R,{label:"Phone number",htmlFor:"phoneNumber",validationError:a.phoneNumber&&t.phoneNumber,children:Object(d.jsx)(H.a,{component:N,name:"phoneNumber",tooltipContent:"Phone number must begin with country code, for example '+48' for Poland."})})})]}),Object(d.jsx)(K.a,{children:Object(d.jsx)(X.a,{span:24,children:Object(d.jsx)(R,{label:"About",htmlFor:"about",validationError:a.about&&t.about,children:Object(d.jsx)(H.a,{component:M,name:"about",maxLength:500})})})}),Object(d.jsx)(K.a,{children:Object(d.jsx)(X.a,{span:7,children:Object(d.jsx)(R,{label:"Birthday date",htmlFor:"birthdayDate",validationError:a.birthdayDate&&t.birthdayDate,children:Object(d.jsx)(H.a,{component:f,name:"birthdayDate"})})})}),Object(d.jsx)(K.a,{children:Object(d.jsx)(X.a,{span:7,children:Object(d.jsx)(R,{label:"Avatar",htmlFor:"avatar",validationError:a.avatar&&t.avatar,children:Object(d.jsx)(H.a,{component:G,name:"avatar"})})})}),Object(d.jsx)("button",{type:"submit",children:"click"})]})}})]})},le=a(308),oe=a(310),se=a(145),je=a.n(se),be=le.a.Title,de=le.a.Text,me=function(){var e=Object(n.useState)(null),t=Object(z.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(ee()||null)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(U,{children:"Profile"}),a?Object(d.jsxs)("div",{className:je.a.wrapper,children:[Object(d.jsx)(oe.a,{src:a.avatar,className:je.a.avatar,size:{xs:150,sm:200,md:200,lg:200,xl:200,xxl:200}}),Object(d.jsxs)(be,{children:[a.firstName," ",a.lastName]}),Object(d.jsx)(de,{children:a.birthdayDate}),Object(d.jsx)(de,{children:a.emailAddress}),Object(d.jsx)(de,{children:a.phoneNumber})]}):Object(d.jsx)("p",{children:"empty"})]})},ue=function(){return Object(d.jsx)(o.a,{children:Object(d.jsx)(m,{children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:r.FORM,element:Object(d.jsx)(ie,{})}),Object(d.jsx)(s.b,{path:r.PROFILE,element:Object(d.jsx)(me,{})}),Object(d.jsx)(s.b,{path:"/",element:Object(d.jsx)(s.a,{replace:!0,to:r.PROFILE})})]})})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,312)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ue,{})}),document.getElementById("root")),he()},74:function(e,t,a){e.exports={navWrapper:"navigation_navWrapper__6kDD_",listWrapper:"navigation_listWrapper__jzp0B",listItem:"navigation_listItem__1LMld",link:"navigation_link__3kE9z",icon:"navigation_icon__L_E-3",activeIcon:"navigation_activeIcon__1RvNW"}}},[[301,1,2]]]);
//# sourceMappingURL=main.e1f59f06.chunk.js.map