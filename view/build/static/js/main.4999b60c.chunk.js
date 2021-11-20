(this.webpackJsonpreactlogin=this.webpackJsonpreactlogin||[]).push([[0],{216:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),o=a.n(c),i=(a(216),a(12)),s=a(23),l="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"https://mern-socket.herokuapp.com",d=a(29),j=a.n(d),u=a(16),m=a(81),h=a(417),b=a(424),O=a(408),x=a(411),p=a(423),v=a(413),g=a(420),f=a(416),y=a(422),w=a(421),C=a(63),S=a.n(C),T=a(419),k=a(191),E=a(418),I=a(36),W=function(e,t){switch(t.type){case"USER_LOGIN":return t.payload.firstName&&t.payload.lastName&&t.payload.email&&t.payload.access_token&&t.payload._id?Object(u.a)(Object(u.a)({},e),{},{user:t.payload}):(console.log("invalid data in USER_LOGIN reducer "),e);case"USER_LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{user:null});case"TOGGLE_THEME":return Object(u.a)(Object(u.a)({},e),{},{darkTheme:!e.darkTheme});default:return e}},N=a(1),F=Object(n.createContext)("Initial Value"),q={darkTheme:!0,user:{}};function _(e){var t=e.children,a=Object(n.useReducer)(W,q),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(N.jsx)(F.Provider,{value:{state:c,dispatch:o},children:t})}var L=I.a({email:I.b("Enter your email").email("Enter a valid email").required("Email is required"),password:I.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),B=function(e){return Object(N.jsxs)(T.a,Object(u.a)(Object(u.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(N.jsx)(g.a,{color:"inherit",href:l,children:"Your Website"})," ",(new Date).getFullYear(),"."]}))},G=Object(k.a)(),R=function(){var e=Object(s.g)(),t=Object(n.useContext)(F).dispatch,a=Object(m.a)({validationSchema:L,initialValues:{email:"",password:""},onSubmit:function(e){console.log("values: ",e),j.a.post("".concat(l,"/api/v1/login"),{email:e.email,password:e.password},{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email&&(t({type:"USER_LOGIN",payload:{firstName:e.data.firstName,lastName:e.data.lastName,email:e.data.email,access_token:e.data.access_token,_id:e.data._id}}),window.location.reload())})).catch((function(e){console.log("error: ",e)}))}});return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(E.a,{theme:G,children:Object(N.jsxs)(f.a,{container:!0,component:"main",sx:{height:"100vh",overflow:"hidden"},children:[Object(N.jsx)(O.a,{}),Object(N.jsx)(f.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(N.jsx)(f.a,{item:!0,xs:12,sm:8,md:5,component:w.a,elevation:6,square:!0,children:Object(N.jsxs)(y.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(h.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(S.a,{})}),Object(N.jsx)(T.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(N.jsxs)(y.a,{component:"form",noValidate:!0,onSubmit:a.handleSubmit,sx:{mt:1},children:[Object(N.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,color:"primary",variant:"outlined",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(N.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",color:"primary",variant:"outlined",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(N.jsx)(p.a,{control:Object(N.jsx)(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(N.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},color:"primary",children:"Sign In"}),Object(N.jsxs)(f.a,{container:!0,children:[Object(N.jsx)(f.a,{item:!0,xs:!0,children:Object(N.jsx)(g.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(N.jsx)(f.a,{item:!0,children:Object(N.jsx)(g.a,{onClick:function(){e.push("/signup")},variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(N.jsx)(B,{sx:{mt:5}})]})]})})]})})})},P=I.a({firstName:I.b("Enter your First name").required("Name is required"),lastName:I.b("Enter your Last name").required("Name is required"),email:I.b("Enter your email").email("Enter a valid email").required("Email is required"),password:I.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),D=function(e){return Object(N.jsxs)(T.a,Object(u.a)(Object(u.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(N.jsx)(g.a,{color:"inherit",href:l,children:"Your Website"})," ",(new Date).getFullYear(),"."]}))},A=Object(k.a)(),U=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(s.g)(),o=Object(m.a)({validationSchema:P,initialValues:{firstName:"",lastName:"",email:"",password:""},onSubmit:function(e){console.log("values: ",e),j.a.post("".concat(l,"/api/v1/user"),{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password}).then((function(e){console.log("res: ",e.data),e.data.email&&r(!0)})).catch((function(e){console.log("error: ",e)}))}});return a?Object(N.jsx)(s.a,{to:"/login"}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(E.a,{theme:A,children:Object(N.jsxs)(f.a,{container:!0,component:"main",sx:{height:"100vh",overflow:"hidden"},children:[Object(N.jsx)(O.a,{}),Object(N.jsx)(f.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(N.jsx)(f.a,{item:!0,xs:12,sm:8,md:5,component:w.a,elevation:6,square:!0,children:Object(N.jsxs)(y.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(h.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(S.a,{})}),Object(N.jsx)(T.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(N.jsxs)(y.a,{component:"form",noValidate:!0,onSubmit:o.handleSubmit,sx:{mt:3},children:[Object(N.jsxs)(f.a,{container:!0,spacing:2,children:[Object(N.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(N.jsx)(x.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,color:"primary",variant:"outlined",value:o.values.name,onChange:o.handleChange,error:o.touched.name&&Boolean(o.errors.name),helperText:o.touched.name&&o.errors.name})}),Object(N.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(N.jsx)(x.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"given-name",autoFocus:!0,color:"primary",variant:"outlined",value:o.values.name,onChange:o.handleChange,error:o.touched.name&&Boolean(o.errors.name),helperText:o.touched.name&&o.errors.name})}),Object(N.jsx)(f.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",color:"primary",variant:"outlined",value:o.values.email,onChange:o.handleChange,error:o.touched.email&&Boolean(o.errors.email),helperText:o.touched.email&&o.errors.email})}),Object(N.jsx)(f.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",color:"primary",variant:"outlined",value:o.values.password,onChange:o.handleChange,error:o.touched.password&&Boolean(o.errors.password),helperText:o.touched.password&&o.errors.password})}),Object(N.jsx)(f.a,{item:!0,xs:12,children:Object(N.jsx)(p.a,{control:Object(N.jsx)(v.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(N.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},color:"primary",children:"Sign Up"}),Object(N.jsx)(f.a,{container:!0,justifyContent:"flex-end",children:Object(N.jsx)(f.a,{item:!0,children:Object(N.jsx)(g.a,{onClick:function(){c.push("/login")},variant:"body2",children:"Already have an account? Sign in"})})}),Object(N.jsx)(D,{sx:{mt:5}})]})]})})]})})})},M=a(427),V=a(428),Y=a(429),H=a(185),z=a.n(H),J=function(){var e=Object(s.g)(),t=Object(n.useContext)(F).dispatch;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(y.a,{sx:{flexGrow:1},children:Object(N.jsx)(M.a,{position:"static",children:Object(N.jsxs)(V.a,{children:[Object(N.jsx)(Y.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(N.jsx)(z.a,{})}),Object(N.jsx)(T.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Saylani Web Application"}),Object(N.jsx)(b.a,{color:"inherit",onClick:function(){e.push("/")},children:"Home"}),Object(N.jsx)(b.a,{color:"inherit",onClick:function(){e.push("/livescore")},children:"Live Score"}),Object(N.jsx)(b.a,{color:"inherit",onClick:function(){e.push("/livescore-admin")},children:"Live Score Admin"}),Object(N.jsx)(b.a,{color:"inherit",onClick:function(){j.a.post("".concat(l,"/api/v1/logout"),{},{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),t({type:"USER_LOGOUT"})}))},children:"Logout"})]})})})})},K=a(426),Q=a(414),X=a(430),Z=a(186),$=a.n(Z),ee=I.a({title:I.b("Enter your email").required("Email is required")}),te=function(){var e=Object(n.useContext)(F).state,t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),d=s[0],u=s[1];Object(n.useEffect)((function(){j.a.get("".concat(l,"/api/v1/post"),{withCredentials:!0}).then((function(e){console.log("res: ",e.data),c(e.data)})).catch((function(e){console.log("error: ",e)}))}),[d]);var h=Object(m.a)({initialValues:{title:"",description:""},onSubmit:function(t){var a;console.log("values: ",t),j.a.post("".concat(l,"/api/v1/post"),{title:t.title,description:t.description,firstName:null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.firstName,access_token:e.user.access_token},{withCredentials:!0}).then((function(e){console.log("res: ",e.data),u(!d)})).catch((function(e){console.log("error: ",e)}))},validationSchema:ee});return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(y.a,{sx:{flexGrow:1,m:2},children:[Object(N.jsx)(T.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Posts"}),Object(N.jsx)(y.a,{component:"form",noValidate:!0,onSubmit:h.handleSubmit,sx:{mt:1},children:Object(N.jsx)(w.a,{style:{margin:16,padding:16},elevation:3,children:Object(N.jsxs)(f.a,{container:!0,alignItems:"center",spacing:2,children:[Object(N.jsx)(f.a,{xs:5,md:10,item:!0,style:{paddingRight:16},children:Object(N.jsx)(x.a,{fullWidth:!0,placeholder:"Title",color:"primary",id:"outlined-basic",label:"Title",variant:"filled",name:"title",value:h.values.title,onChange:h.handleChange,error:h.touched.title&&Boolean(h.errors.title),helperText:h.touched.title&&h.errors.title})}),Object(N.jsx)(f.a,{xs:5,md:10,item:!0,style:{paddingRight:16},children:Object(N.jsx)(x.a,{fullWidth:!0,color:"primary",id:"outlined-basic",placeholder:"Description",label:"Description",variant:"filled",name:"description",value:h.values.description,onChange:h.handleChange,error:h.touched.description&&Boolean(h.errors.description),helperText:h.touched.description&&h.errors.description})}),Object(N.jsx)(f.a,{xs:2,md:2,item:!0,children:Object(N.jsx)(b.a,{fullWidth:!0,color:"success",variant:"contained",type:"submit",children:"Add"})})]})})}),Object(N.jsxs)(w.a,{style:{margin:16,padding:16},elevation:3,children:[Object(N.jsx)(T.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Recently Added:"}),Object(N.jsx)(K.a,{spacing:3,children:r.map((function(t){return Object(N.jsx)(w.a,{style:{margin:10},elevation:3,id:t._id,children:Object(N.jsx)(Q.a,{secondaryAction:Object(N.jsx)(Y.a,{edge:"end","aria-label":"delete",onClick:function(t){return a=t,void j.a.delete("".concat(l,"/api/v1/post"),{data:{id:a.target.parentNode.id,access_token:e.user.access_token},withCredentials:!0}).then((function(e){console.log("res: ",e.data),u(!d)})).catch((function(e){console.log("error: ",e)}));var a},id:t._id,children:Object(N.jsx)($.a,{})}),children:Object(N.jsx)(X.a,{primary:t.title,secondary:t.description+" By "+t.firstName})})},t._id)}))})]})]})})};var ae=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(J,{}),Object(N.jsx)(te,{})]})},ne=a(410),re=a(425),ce=a(190),oe=function(e){return Object(N.jsxs)(T.a,Object(u.a)(Object(u.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(N.jsx)(g.a,{color:"inherit",href:l,children:"Your Website"})," ",(new Date).getFullYear(),"."]}))},ie=Object(k.a)();var se=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){j.a.get("".concat(l,"/api/v1/score"),{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),r(e.data)}))}),[]),Object(n.useEffect)((function(){var e=Object(ce.a)(l);return e.on("connect",(function(){console.log("connected to server")})),e.on("disconnect",(function(e){console.log("disconnected from server: ",e)})),e.on("SCORE",(function(e){console.log(e),r(e)})),function(){e.close()}}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(J,{}),Object(N.jsxs)(E.a,{theme:ie,children:[Object(N.jsx)(O.a,{}),Object(N.jsx)(T.a,{component:"h1",variant:"h4",sx:{my:3},children:"Live Score"}),Object(N.jsx)(T.a,{component:"h2",variant:"h5",sx:{my:3},children:"Match"}),Object(N.jsxs)(ne.a,{spacing:2,direction:"row",divider:Object(N.jsx)(re.a,{orientation:"vertical",flexItem:!0}),justifyContent:"space-around",alignItems:"center",children:[Object(N.jsxs)(ne.a,{spacing:2,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(N.jsx)(h.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(S.a,{})}),Object(N.jsx)(T.a,{component:"h2",variant:"h5",sx:{my:3},children:null===a||void 0===a?void 0:a.teamOne}),Object(N.jsxs)(T.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:["(",a.teamOneStatus,")"]}),Object(N.jsxs)(T.a,{variant:"h4",component:"div",children:[null===a||void 0===a?void 0:a.teamOneScore," / ",null===a||void 0===a?void 0:a.teamOneWicket]}),Object(N.jsxs)(T.a,{sx:{mb:1.5},color:"text.secondary",children:["(",a.teamOneOver," overs)"]})]}),Object(N.jsxs)(ne.a,{spacing:2,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(N.jsx)(h.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(S.a,{})}),Object(N.jsx)(T.a,{component:"h2",variant:"h5",sx:{my:3},children:null===a||void 0===a?void 0:a.teamTwo}),Object(N.jsxs)(T.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:["(",a.teamTwoStatus,")"]}),Object(N.jsxs)(T.a,{variant:"h4",component:"div",children:[null===a||void 0===a?void 0:a.teamTwoScore," / ",null===a||void 0===a?void 0:a.teamTwoWicket]}),Object(N.jsxs)(T.a,{sx:{mb:1.5},color:"text.secondary",children:["(",a.teamTwoOver," overs)"]})]})]}),Object(N.jsx)(ne.a,{spacing:2,direction:"row",divider:Object(N.jsx)(re.a,{orientation:"vertical",flexItem:!0}),justifyContent:"space-around",alignItems:"center",sx:{my:5},children:Object(N.jsxs)(T.a,{variant:"h5",component:"div",children:["comentry: ",(null===a||void 0===a?void 0:a.comentry)||"Hassan Ali just droped the catch"]})}),Object(N.jsx)(ne.a,{spacing:2,direction:"row",divider:Object(N.jsx)(re.a,{orientation:"vertical",flexItem:!0}),justifyContent:"space-around",alignItems:"center",sx:{my:5},children:Object(N.jsx)(T.a,{variant:"h5",component:"div",children:"Live from Stadium"})}),Object(N.jsx)(oe,{sx:{my:5}})]})]})},le=(a(346),function(e){return Object(N.jsxs)(T.a,Object(u.a)(Object(u.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(N.jsx)(g.a,{color:"inherit",href:l,children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}),de=Object(k.a)();var je=function(){var e=Object(n.useState)({teamOne:"",teamOneFlag:"https://source.unsplash.com/random",teamOneStatus:"",teamOneScore:"",teamOneWicket:"",teamOneOver:"",teamTwo:"",teamTwoFlag:"https://source.unsplash.com/random",teamTwoStatus:"",teamTwoScore:"",teamTwoWicket:"",teamTwoOver:"",commentry:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),o=Object(i.a)(c,2),s=(o[0],o[1]);return Object(n.useEffect)((function(){j.a.get("".concat(l,"/api/v1/score"),{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),r(e.data)}))}),[]),Object(n.useEffect)((function(){j.a.get("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json").then((function(e){console.log("flags +++: ",e.data),s(e.data)}))}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(J,{}),Object(N.jsxs)(E.a,{theme:de,children:[Object(N.jsx)(O.a,{}),Object(N.jsx)(T.a,{component:"h1",variant:"h4",sx:{my:3},children:"Dashboard Control page"}),Object(N.jsx)(T.a,{component:"h2",variant:"h5",sx:{my:3},children:"Match"}),Object(N.jsxs)(y.a,{component:"form",noValidate:!0,autoComplete:"off",fullWidth:!0,children:[Object(N.jsx)(ne.a,{spacing:2,direction:"row",divider:Object(N.jsx)(re.a,{orientation:"vertical",flexItem:!0}),justifyContent:"end",alignItems:"center",sx:{my:5},children:Object(N.jsx)(b.a,{variant:"contained",onClick:function(){j.a.post("".concat(l,"/api/v1/score"),a,{withCredentials:!0}).then((function(e){console.log("res: ",e.data)}))},children:"Go Live!"})}),Object(N.jsxs)(ne.a,{spacing:2,direction:"row",divider:Object(N.jsx)(re.a,{orientation:"vertical",flexItem:!0}),justifyContent:"space-around",alignItems:"center",children:[Object(N.jsxs)(ne.a,{spacing:2,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(N.jsx)(x.a,{label:"Team 1",variant:"standard",value:a.teamOne,onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamOne:e.target.value})}))},placeholder:"Enter Team One"}),Object(N.jsx)(x.a,{label:"Status",variant:"standard",value:a.teamOneStatus,onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamOneStatus:e.target.value})}))},placeholder:"Status Of Team"}),Object(N.jsxs)(y.a,{component:"div",children:[Object(N.jsx)(x.a,{label:"Score",variant:"standard",type:"number",value:a.teamOneScore,sx:{mx:1},onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamOneScore:e.target.value})}))},placeholder:"What's The Score"}),Object(N.jsx)(x.a,{label:"Wicket(s)",variant:"standard",type:"number",value:a.teamOneWicket,sx:{mx:1},onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamOneWicket:e.target.value})}))},placeholder:"How Many Wickets"})]}),Object(N.jsx)(x.a,{label:"Over(s)",variant:"standard",type:"number",value:a.teamOneOver,onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamOneOver:e.target.value})}))},placeholder:"How Many Overs"})]}),Object(N.jsxs)(ne.a,{spacing:2,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(N.jsx)(x.a,{label:"Team 2",variant:"standard",value:a.teamTwo,onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamTwo:e.target.value})}))},placeholder:"Enter Team Two"}),Object(N.jsx)(x.a,{label:"Status",variant:"standard",value:a.teamTwoStatus,onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamTwoStatus:e.target.value})}))},placeholder:"Status Of Team"}),Object(N.jsxs)(y.a,{component:"div",children:[Object(N.jsx)(x.a,{label:"Score",variant:"standard",type:"number",value:a.teamTwoScore,sx:{mx:1},onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamTwoScore:e.target.value})}))},placeholder:"What's The Score"}),Object(N.jsx)(x.a,{label:"Wicket(s)",variant:"standard",type:"number",value:a.teamTwoWicket,sx:{mx:1},onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamTwoWicket:e.target.value})}))},placeholder:"How Many Wickets"})]}),Object(N.jsx)(x.a,{label:"Over(s)",variant:"standard",type:"number",value:a.teamTwoOver,onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{teamTwoOver:e.target.value})}))},placeholder:"How Many Overs"})]})]}),Object(N.jsx)(ne.a,{spacing:2,direction:"row",divider:Object(N.jsx)(re.a,{orientation:"vertical",flexItem:!0}),justifyContent:"space-around",alignItems:"center",sx:{my:5},children:Object(N.jsx)(T.a,{variant:"h5",component:"div",children:Object(N.jsx)(x.a,{label:"Commentry",variant:"standard",value:a.comentry,onChange:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{comentry:e.target.value})}))},placeholder:"who is batting"})})}),Object(N.jsx)(ne.a,{spacing:2,direction:"row",divider:Object(N.jsx)(re.a,{orientation:"vertical",flexItem:!0}),justifyContent:"space-around",alignItems:"center",sx:{my:5},children:Object(N.jsx)(T.a,{variant:"h5",component:"div",children:"Live from Stadium"})})]}),Object(N.jsx)(le,{sx:{my:5}})]})]})};var ue=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return j.a.get("".concat(l,"/api/v1/getcookie"),{withCredentials:!0}).then((function(e){r(!0)})).catch((function(e){console.log("error: ",e),r(!1)})),Object(N.jsx)(N.Fragment,{children:a?Object(N.jsxs)(s.d,{children:[Object(N.jsx)(s.b,{exact:!0,path:"/",children:Object(N.jsx)(ae,{})}),Object(N.jsx)(s.b,{exact:!0,path:"/livescore",children:Object(N.jsx)(se,{})}),Object(N.jsx)(s.b,{exact:!0,path:"/livescore-admin",children:Object(N.jsx)(je,{})}),Object(N.jsx)(s.a,{to:"/"})]}):Object(N.jsxs)(s.d,{children:[Object(N.jsx)(s.b,{exact:!0,path:"/",children:Object(N.jsx)(R,{})}),Object(N.jsx)(s.b,{exact:!0,path:"/login",children:Object(N.jsx)(R,{})}),Object(N.jsx)(s.b,{exact:!0,path:"/signup",children:Object(N.jsx)(U,{})}),Object(N.jsx)(s.a,{to:"/"})]})})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,431)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},he=a(72);o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(_,{children:Object(N.jsx)(he.a,{children:Object(N.jsx)(ue,{})})})}),document.getElementById("root")),me()}},[[356,1,2]]]);
//# sourceMappingURL=main.4999b60c.chunk.js.map