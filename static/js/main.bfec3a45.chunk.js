(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{101:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(27),c=a.n(i),o=(a(82),a.p,a(133)),s=a(49),l=a(104),d=a(135),j=a(137),b=a(145),p=a(138),h=a(139),u=a(146),m=a.p+"static/media/bg_img.cf4df7da.jpg",g=a(3),O=Object(o.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function x(t){var e=O(),a=t.post,r=Object(n.useState)(0),i=Object(s.a)(r,2),c=i[0],o=i[1];return c?Object(g.jsx)(d.a,{item:!0,xs:12,children:Object(g.jsx)(R,{post:a},a.id)}):Object(g.jsx)(d.a,{item:!0,xs:12,children:Object(g.jsx)(b.a,{onClick:function(){return o(!c)},children:Object(g.jsxs)(j.a,{className:e.card,children:[Object(g.jsx)("div",{className:e.cardDetails,children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(l.a,{component:"h2",variant:"h5",children:a.title}),Object(g.jsx)(l.a,{variant:"subtitle1",color:"textSecondary"}),Object(g.jsx)(l.a,{variant:"subtitle1",color:"textSecondary",children:new Date(a.createdAt).toDateString()}),Object(g.jsx)(l.a,{variant:"subtitle1",paragraph:!0,children:a.body.markdown.split("\n")[0]}),Object(g.jsx)(l.a,{variant:"subtitle1",color:"primary",children:"Continue reading..."})]})}),Object(g.jsx)(u.a,{xsDown:!0,children:Object(g.jsx)(h.a,{className:e.cardMedia,image:m,title:a.imageTitle})})]})})})}var v=a(32),f=a(142),y=a(73),k=a(62),S=a(8),w=a(140),C={overrides:{h1:{component:l.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:l.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:l.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:l.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:l.a,props:{paragraph:!0}},a:{component:w.a},li:{component:Object(S.a)((function(t){return{listItem:{marginTop:t.spacing(1)}}}))((function(t){var e=t.classes,a=Object(y.a)(t,["classes"]);return Object(g.jsx)("li",{className:e.listItem,children:Object(g.jsx)(l.a,Object(v.a)({component:"span"},a))})}))}}};function T(t){return Object(g.jsx)(k.a,Object(v.a)({options:C},t))}var B=a(141),N=Object(o.a)((function(t){return{toolbar:{borderBottom:"1px solid ".concat(t.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:t.spacing(1),flexShrink:0}}}));function A(t){var e=N(),a=(t.sections,t.title);return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)(B.a,{className:e.toolbar,children:Object(g.jsx)(l.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle,children:a})}),Object(g.jsx)(B.a,{component:"nav",variant:"dense",className:e.toolbarSecondary})]})}var P=Object(o.a)((function(t){return{markdown:Object(v.a)(Object(v.a)({},t.typography.body2),{},{padding:t.spacing(3,0)})}}));function _(t){var e=P(),a=t.post;return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)(l.a,{variant:"h5",color:"inherit",gutterBottom:!0,children:a.title}),Object(g.jsx)(f.a,{}),Object(g.jsx)(T,{className:e.markdown,children:a.body.markdown})]})}var F=a(25),E=a(103),I=Object(o.a)((function(t){return{sidebarAboutBox:{padding:t.spacing(2),backgroundColor:t.palette.grey[200]},sidebarSection:{marginTop:t.spacing(3)}}}));function D(t){var e=I(),a=(t.archives,t.description),n=t.social,r=t.title;return Object(g.jsx)(d.a,{item:!0,lg:12,children:Object(g.jsxs)(E.a,{elevation:0,className:e.sidebarAboutBox,children:[Object(g.jsx)(l.a,{variant:"h6",gutterBottom:!0,children:r}),Object(g.jsx)(l.a,{children:a}),Object(g.jsx)(l.a,{variant:"h6",gutterBottom:!0,className:e.sidebarSection,children:"Social"}),n.map((function(t){var e;return Object(g.jsx)(w.a,(e={display:"block",variant:"body1",href:"#"},Object(F.a)(e,"href",t.url),Object(F.a)(e,"children",Object(g.jsxs)(d.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(g.jsx)(d.a,{item:!0,children:Object(g.jsx)(t.icon,{})}),Object(g.jsx)(d.a,{item:!0,children:t.name})]})),e),t)}))]})})}var L=Object(o.a)((function(t){return{mainGrid:{marginTop:t.spacing(3)}}}));function R(t){L();var e=t.post;return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)(_,{post:e},e.id)})}var M,W=a(147),q=a(63),z=a(64),G=a(65),H=a(43),U=a(66),K=a(48),J=a.n(K),Q=function(){function t(){Object(z.a)(this,t),J.a.config(),this.Client=new U.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckoveoq9fhgrp01z2hxkm09yx/master",{headers:{authorization:"Bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GCMS_URL:"https://api-eu-central-1.graphcms.com/v2/ckoveoq9fhgrp01z2hxkm09yx/master"}).REACT_APP_GCMS_AUTH)}})}return Object(G.a)(t,[{key:"fetchPosts",value:function(){return Object(H.a)(M||(M=Object(q.a)(["\n      query {\n        posts {\n          id\n          title\n          body{\n            markdown\n          }\n          createdAt\n        }\n      }\n    "])))}}]),t}(),V=Object(o.a)((function(t){return{mainFeaturedPost:{position:"relative",backgroundColor:t.palette.grey[800],color:t.palette.common.white,marginBottom:t.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(F.a)({position:"relative",padding:t.spacing(3)},t.breakpoints.up("md"),{padding:t.spacing(6),paddingRight:0})}}));function X(t){var e=V(),a=t.post;return Object(g.jsx)(d.a,{container:!0,children:Object(g.jsxs)(E.a,{className:e.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")},children:[Object(g.jsx)("img",{style:{display:"none"},src:a.image,alt:a.imageText}),Object(g.jsx)("div",{className:e.overlay}),Object(g.jsxs)("div",{className:e.mainFeaturedPostContent,children:[Object(g.jsx)(l.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:a.title}),Object(g.jsx)(l.a,{variant:"h5",color:"inherit",paragraph:!0,children:a.description})]})]})})}var Y=a(67),Z=a.n(Y),$=function(t){var e=r.a.useState([]),a=Object(s.a)(e,2),n=(a[0],a[1]),i=new Q,c={title:"Collection of thorough research on use cases of AI",description:"Theory and Applications of Artficial neural Networks in various fields. Written in the format of overview papers, made with hard-work and tight-deadlines :)",image:m,imgText:"main image description",linkText:"Continue reading\u2026"},o={title:"About",description:"I'm a final year Computer Engineering Student sharing my overviews of research in the area of Artificial Intelligence",social:[{name:"LinkedIn",icon:Z.a,url:"https://www.linkedin.com/in/mine-ibraimi-572238155/"}]};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.a,{container:!0,spacing:4,children:[Object(g.jsxs)(d.a,{item:!0,xs:12,children:[Object(g.jsx)(X,{post:c}),Object(g.jsx)(W.a,{query:i.fetchPosts(),children:function(t){var e=t.loading,a=t.error,r=t.data;if(e)return Object(g.jsx)("div",{children:"Loading..."});if(a)return console.log(a),Object(g.jsx)("div",{className:"mx-auto alert-danger",children:"Error!"});var i=r.posts;return n(i),i.slice(0,5).map((function(t){return Object(g.jsx)(d.a,{container:!0,spacing:4,children:Object(g.jsx)(x,{post:t},t.id)})}))}})]}),Object(g.jsx)(d.a,{item:!0,children:Object(g.jsx)(D,{title:o.title,description:o.description,social:o.social})})]})})},tt=a(143);function et(){return Object(g.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(w.a,{color:"inherit",href:"https://material-ui.com/",children:"Mine's Blog"})," ",(new Date).getFullYear(),"."]})}var at=Object(o.a)((function(t){return{footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6,0)}}}));function nt(t){var e=at(),a=t.description,n=t.title;return Object(g.jsx)("footer",{className:e.footer,children:Object(g.jsxs)(tt.a,{maxWidth:"lg",children:[Object(g.jsx)(l.a,{variant:"h6",align:"center",gutterBottom:!0,children:n}),Object(g.jsx)(l.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:a}),Object(g.jsx)(et,{})]})})}var rt=a(144);var it=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(rt.a,{}),Object(g.jsxs)(tt.a,{maxWidth:"lg",children:[Object(g.jsx)(A,{title:"My Artificial Intelligence Blog"}),Object(g.jsx)("main",{children:Object(g.jsx)($,{})}),Object(g.jsx)(nt,{title:"Congrats you've seen it all.",description:"Made with love "})]})]})},ct=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,149)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))},ot=a(11),st=a(72);J.a.config();var lt=new st.a({uri:"https://api-eu-central-1.graphcms.com/v2/ckoveoq9fhgrp01z2hxkm09yx/master"});c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(ot.a,{client:lt,children:Object(g.jsx)(it,{})})}),document.getElementById("root")),ct()},82:function(t,e,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.bfec3a45.chunk.js.map