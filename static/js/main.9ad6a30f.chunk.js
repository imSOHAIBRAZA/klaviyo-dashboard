(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){"use strict";var n=a(23),r=a(0),A=a.n(r);t.a=Object(n.a)({},A.a,{ID:A.a.oneOfType([A.a.string,A.a.number]).isRequired,component:A.a.oneOfType([A.a.string,A.a.func]),date:A.a.oneOfType([A.a.instanceOf(Date),A.a.string])})},21:function(e,t,a){"use strict";var n,r=a(3),A=a.n(r),o=(n="cr",{create:function(e){var t=e;return"string"===typeof n&&(t="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return A()(t,a)},e:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return A()("".concat(t,"__").concat(e),n)},m:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return A()("".concat(t,"--").concat(e),n)}}}});t.a=o},22:function(e,t,a){"use strict";a.d(t,"a",function(){return g}),a.d(t,"b",function(){return E});var n=a(9),r=a(10),A=a(12),o=a(11),c=a(13),i=a(36),l=a.n(i),s=a(1),m=a.n(s),u=a(85),p=a(31),d=a(32),f=a(33),b=a(86),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(A.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).changeAuthState=function(e){return function(t){t.preventDefault(),a.props.onChangeAuthState(e)}},a.handleSubmit=function(e){e.preventDefault()},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,A=e.passwordInputProps,o=e.confirmPasswordLabel,c=e.confirmPasswordInputProps,i=e.children,s=e.onLogoClick;return m.a.createElement(u.a,{onSubmit:this.handleSubmit},t&&m.a.createElement("div",{className:"text-center pb-4"},m.a.createElement("img",{src:l.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:s})),m.a.createElement(p.a,null,m.a.createElement(d.a,{for:a},a),m.a.createElement(f.a,n)),m.a.createElement(p.a,null,m.a.createElement(d.a,{for:r},r),m.a.createElement(f.a,A)),this.isSignup&&m.a.createElement(p.a,null,m.a.createElement(d.a,{for:o},o),m.a.createElement(f.a,c)),m.a.createElement(p.a,{check:!0},m.a.createElement(d.a,{check:!0},m.a.createElement(f.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),m.a.createElement("hr",null),m.a.createElement(b.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),m.a.createElement("div",{className:"text-center pt-1"},m.a.createElement("h6",null,"or"),m.a.createElement("h6",null,this.isSignup?m.a.createElement("a",{href:"#login",onClick:this.changeAuthState(g)},"Login"):m.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(E)},"Signup"))),i)}},{key:"isLogin",get:function(){return this.props.authState===g}},{key:"isSignup",get:function(){return this.props.authState===E}}]),t}(m.a.Component),g="LOGIN",E="SIGNUP";h.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}},t.c=h},27:function(e,t,a){e.exports=a.p+"static/media/100_4.978e51b5.jpg"},36:function(e,t){e.exports="data:image/png;base64,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"},44:function(e,t,a){e.exports=a.p+"static/media/background_1920-2.c54eef50.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/100_1.1f7beca5.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/100_2.82e7c41e.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/100_3.6e25d86d.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/100_5.fd533725.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/sidebar-4.80d4a4e5.jpg"},54:function(e,t,a){e.exports=a(84)},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),A=a(20),o=a.n(A),c=a(9),i=a(10),l=a(12),s=a(11),m=a(13),u=a(22),p=a(0),d=a.n(p),f=a(30),b=!!Object({NODE_ENV:"production",PUBLIC_URL:"/KlaviyoDashboard"}).REACT_APP_GOOGLE_ANALYTICS;b&&f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/KlaviyoDashboard"}).REACT_APP_GOOGLE_ANALYTICS);var h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){b&&(this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView))}},{key:"sendPageView",value:function(e){f.a.set({page:e.pathname}),f.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component);h.contextTypes={router:d.a.object};var g=h,E=a(8),v=a(21),y=a(88),x=v.a.create("content"),k=function(e){var t=e.tag,a=e.className,n=Object(E.a)(e,["tag","className"]),A=x.b(a);return r.a.createElement(t,Object.assign({className:A},n))};k.defaultProps={tag:y.a};var N=k,j=function(e){var t=e.children,a=Object(E.a)(e,["children"]);return r.a.createElement("main",Object.assign({className:"cr-app bg-light"},a),r.a.createElement(N,{fluid:!0},t))},O=a(89),P=a(90),S=a(91),w=function(e){return r.a.createElement("a",Object.assign({href:Object({NODE_ENV:"production",PUBLIC_URL:"/KlaviyoDashboard"}).REACT_APP_SOURCE_URL,target:"_blank",rel:"noopener noreferrer"},e))},z=function(){return r.a.createElement(O.a,null,r.a.createElement(P.a,{navbar:!0},r.a.createElement(S.a,null)))},L=a(23),C=a(18),T=a(3),V=a.n(T),W=a(27),R=a.n(W),M=function(e){var t=e.rounded,a=e.circle,n=e.src,A=e.size,o=e.tag,c=e.className,i=e.style,l=Object(E.a)(e,["rounded","circle","src","size","tag","className","style"]),s=V()({"rounded-circle":a,rounded:t},c);return r.a.createElement(o,Object.assign({src:n,style:Object(L.a)({width:A,height:A},i),className:s},l))};M.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:R.a,style:{}};var U=M,q=a(92),H=a(93),G=a(94),X=a(95),B=a(96),Y=function(e){var t=e.avatar,a=e.avatarSize,n=e.title,A=e.subtitle,o=e.text,c=e.children,i=e.className,l=Object(E.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),s=V()("bg-gradient-theme",i);return r.a.createElement(q.a,Object.assign({inverse:!0,className:s},l),r.a.createElement(H.a,{className:"d-flex justify-content-center align-items-center flex-column"},r.a.createElement(U,{src:t,size:a,className:"mb-2"}),r.a.createElement(G.a,null,n),r.a.createElement(X.a,null,A),r.a.createElement(B.a,null,r.a.createElement("small",null,o))),c)};Y.defaultProps={avatarSize:80};var I=Y,K=a(97),D=a(86),F=function(e){var t=e.color,a=e.header,n=e.avatar,A=e.avatarSize,o=e.name,c=e.date,i=e.text,l=e.className,s=e.buttonProps,m=Object(E.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),u="bg-".concat(t),p=V()(u,l);return r.a.createElement(q.a,Object.assign({inverse:!0,className:p},m),a&&"string"===typeof a?r.a.createElement(K.a,{className:u},a):a,r.a.createElement(H.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},r.a.createElement(U,{size:A,src:n}),r.a.createElement(B.a,{className:"text-center"},r.a.createElement("strong",{className:"d-block"},o),r.a.createElement("small",{className:"text-muted"},c)),r.a.createElement(B.a,{className:"text-center"},i),r.a.createElement(D.a,Object.assign({color:"primary"},s))))};F.defaultProps={color:"gradient-secondary",avatarSize:60};var J=a(100),Z=a(101),Q=a(98),_=a(99),$=a(31),ee=a(32),te=a(33),ae=(C.a.arrayOf(C.a.shape({id:C.a.ID,title:C.a.string,done:C.a.bool})),function(e){var t=e.todos,a=Object(E.a)(e,["todos"]);return r.a.createElement(Q.a,Object.assign({flush:!0},a),t.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,a=e.title,n=e.done;return r.a.createElement(_.a,{key:t,className:"border-0"},r.a.createElement($.a,{check:!0},r.a.createElement(ee.a,{check:!0},r.a.createElement(te.a,{type:"checkbox",checked:n,readOnly:!0}),n?r.a.createElement("strike",null,a):r.a.createElement("span",null,a))))}),r.a.createElement(D.a,{block:!0},"Add"))});ae.defaultProps={todos:[]};var ne=ae,re=a(44),Ae=function(e){var t=e.image,a=e.title,n=e.subtitle,A=e.todos,o=Object(E.a)(e,["image","title","subtitle","todos"]);return r.a.createElement(q.a,o,r.a.createElement("div",{className:"position-relative"},r.a.createElement(J.a,{src:t}),r.a.createElement(Z.a,{className:"bg-dark",style:{opacity:.2}},r.a.createElement(G.a,{className:"text-white"},a),r.a.createElement(B.a,{className:"text-white"},n))),r.a.createElement(ne,{todos:A}))};Ae.defaultProps={image:a.n(re).a,title:"Tasks",subtitle:"Due soon..."};var oe=a(102),ce=function(e){var t=e.notificationsData;return t&&t.length&&t.map(function(e){var t=e.id,a=e.avatar,n=e.message,A=e.date;return r.a.createElement(oe.a,{key:t,className:"pb-2"},r.a.createElement(oe.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(U,{tag:oe.a,object:!0,src:a,alt:"Avatar"})),r.a.createElement(oe.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(oe.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},A)))})};ce.defaultProps={notificationsData:[]};var ie=ce,le=a(7),se=a(85),me=function(){return r.a.createElement(se.a,{inline:!0,className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(le.m,{size:"20",className:"cr-search-form__icon-search text-secondary"}),r.a.createElement(te.a,{type:"search",className:"cr-search-form__input",placeholder:"Search for someone..."}))},ue=a(45),pe=a.n(ue),de=a(46),fe=a.n(de),be=a(47),he=a.n(be),ge=a(48),Ee=a.n(ge),ve=[{id:1,avatar:pe.a,message:"David sent you a message",date:"3 min ago"},{id:2,avatar:fe.a,message:"Jane mentioned you here",date:"1 hour ago"},{id:3,avatar:he.a,message:"Clark sent a pull request",date:"yesterday"},{id:4,avatar:R.a,message:"Alicia signed up",date:"3 days ago"},{id:5,avatar:Ee.a,message:"Keith shared this article",date:"a week ago"}],ye=a(103),xe={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},ke={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.position,a=void 0===t?"bottom-right":t,n=e.size,A=void 0===n?"sm":n,o=e.style,c=void 0===o?{}:o,i=e.className,l=Object(E.a)(e,["position","size","style","className"]);return function(e){return function(t){var n=t.tag,o=void 0===n?"div":n,s=Object(E.a)(t,["tag"]);return r.a.createElement(o,{className:"d-inline-block position-relative"},r.a.createElement(e,s),r.a.createElement(ye.a,Object.assign({className:V()("position-absolute",i),style:Object(L.a)({},xe[a],ke[A],{borderRadius:"50%",border:"2px solid #fff"},c)},l)))}}},je=a(104),Oe=a(109),Pe=a(105),Se=v.a.create("header"),we=Ne({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(le.j),ze=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),A=0;A<n;A++)r[A]=arguments[A];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},a.toggleNotificationPopover=function(){a.setState({isOpenNotificationPopover:!a.state.isOpenNotificationPopover}),a.state.isNotificationConfirmed||a.setState({isNotificationConfirmed:!0})},a.toggleUserCardPopover=function(){a.setState({isOpenUserCardPopover:!a.state.isOpenUserCardPopover})},a.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isNotificationConfirmed;return r.a.createElement(O.a,{light:!0,expand:!0,className:Se.b("bg-dark")},r.a.createElement(P.a,{navbar:!0,className:"mr-2"},r.a.createElement(D.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(le.a,{size:25}))),r.a.createElement(P.a,{navbar:!0},r.a.createElement(me,null)),r.a.createElement(P.a,{navbar:!0,className:Se.e("nav-right")},r.a.createElement(S.a,{className:"d-inline-flex"},r.a.createElement(je.a,{id:"Popover1",className:"position-relative"},e?r.a.createElement(le.k,{size:25,className:"text-secondary can-click",onClick:this.toggleNotificationPopover}):r.a.createElement(we,{size:25,className:"text-secondary can-click animated swing infinite",onClick:this.toggleNotificationPopover})),r.a.createElement(Oe.a,{placement:"bottom",isOpen:this.state.isOpenNotificationPopover,toggle:this.toggleNotificationPopover,target:"Popover1"},r.a.createElement(Pe.a,null,r.a.createElement(ie,{notificationsData:ve})))),r.a.createElement(S.a,null,r.a.createElement(je.a,{id:"Popover2"},r.a.createElement(U,{onClick:this.toggleUserCardPopover,className:"can-click"})),r.a.createElement(Oe.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement(Pe.a,{className:"p-0 border-light"},r.a.createElement(I,{title:"Jane",subtitle:"jane@jane.com",text:"Last updated 3 mins ago",className:"border-light"},r.a.createElement(Q.a,{flush:!0},r.a.createElement(_.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(le.l,null)," Profile"),r.a.createElement(_.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(le.g,null)," Stats"),r.a.createElement(_.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(le.i,null)," Messages"),r.a.createElement(_.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(le.o,null)," Settings"),r.a.createElement(_.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(le.d,null)," Help"),r.a.createElement(_.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(le.c,null)," Signout"))))))))}}]),t}(r.a.Component),Le=a(53),Ce=function(e){var t=e.component,a=e.layout,n=Object(E.a)(e,["component","layout"]);return r.a.createElement(Le.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},Te=a(49),Ve=a.n(Te),We={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},Re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),A=0;A<n;A++)r[A]=arguments[A];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleContentClick=function(e){!t.isSidebarOpen()||"xs"!==a.props.breakpoint&&"sm"!==a.props.breakpoint&&"md"!==a.props.breakpoint||a.openSidebar("close")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){var e=this;this.checkBreakpoint(this.props.breakpoint),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(le.f,null),message:"Welome to Reduction Admin!",level:"info"})},1500),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(le.h,null),message:"Reduction is carefully designed template powered by React and Bootstrap4!",level:"info"})},2500)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,t=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light"},r.a.createElement(Ye,null),r.a.createElement(N,{fluid:!0,onClick:this.handleContentClick},r.a.createElement(ze,null),t,r.a.createElement(z,null)),r.a.createElement(Ve.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:We}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),t}(r.a.Component),Me=a(25),Ue=(a(36),a(50)),qe=a.n(Ue),He=a(112),Ge={backgroundSize:"cover",backgroundRepeat:"no-repeat"},Xe=[{to:"/",name:"dashboard",exact:!0,Icon:le.e},{to:"/compaigns",name:"Compaigns",exact:!1,Icon:le.n},{to:"/flows",name:"flows",exact:!1,Icon:le.p},{to:"/email-templates",name:"Email Templates",exact:!1,Icon:le.b}],Be=v.a.create("sidebar"),Ye=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),A=0;A<n;A++)r[A]=arguments[A];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},a.handleClick=function(e){return function(){a.setState(function(t){var a=t["isOpen".concat(e)];return Object(Me.a)({},"isOpen".concat(e),!a)})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("aside",{className:Be.b(),"data-image":qe.a},r.a.createElement("div",{className:Be.e("background"),style:Ge}),r.a.createElement("div",{className:Be.e("content")},r.a.createElement(O.a,null,r.a.createElement(w,{className:"navbar-brand d-flex"},r.a.createElement("span",{className:"text-white"},"Bene"))),r.a.createElement(P.a,{vertical:!0},Xe.map(function(e,t){var a=e.to,n=e.name,A=e.exact,o=e.Icon;return r.a.createElement(S.a,{key:t,className:Be.e("nav-item")},r.a.createElement(je.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:He.a,to:a,activeClassName:"active",exact:A},r.a.createElement(o,{className:Be.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}))))}}]),t}(r.a.Component),Ie=a(106),Ke=function(e){var t=e.color,a=void 0===t?"primary":t;return r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(Ie.a,{color:a}))},De=a(107),Fe=a(108),Je=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),A=0;A<n;A++)r[A]=arguments[A];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleAuthState=function(e){e===u.a?a.props.history.push("/login"):a.props.history.push("/signup")},a.handleLogoClick=function(){a.props.history.push("/")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(De.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},r.a.createElement(Fe.a,{md:6,lg:4},r.a.createElement(q.a,{body:!0},r.a.createElement(u.c,{authState:this.props.authState,onChangeAuthState:this.handleAuthState,onLogoClick:this.handleLogoClick}))))}}]),t}(r.a.Component),Ze=a(51),Qe=a.n(Ze),_e=a(111),$e=a(113),et=a(110),tt=(a(83),r.a.lazy(function(){return Promise.all([a.e(3),a.e(6)]).then(a.bind(null,128))})),at=r.a.lazy(function(){return a.e(5).then(a.bind(null,130))}),nt=r.a.lazy(function(){return a.e(4).then(a.bind(null,131))}),rt=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(_e.a,{basename:"/".concat("/KlaviyoDashboard".split("/").pop())},r.a.createElement(g,null,r.a.createElement($e.a,null,r.a.createElement(Ce,{exact:!0,path:"/login",layout:j,component:function(e){return r.a.createElement(Je,Object.assign({},e,{authState:u.a}))}}),r.a.createElement(Ce,{exact:!0,path:"/signup",layout:j,component:function(e){return r.a.createElement(Je,Object.assign({},e,{authState:u.b}))}}),r.a.createElement(Re,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Ke,null)},r.a.createElement(Le.a,{exact:!0,path:"/",component:at}),r.a.createElement(Le.a,{exact:!0,path:"/compaigns",component:nt}),r.a.createElement(Le.a,{exact:!0,path:"/login-modal",component:tt}))),r.a.createElement(et.a,{to:"/"}))))}}]),t}(r.a.Component),At=Qe()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(rt);o.a.render(r.a.createElement(At,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9ad6a30f.chunk.js.map