(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{101:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(27),c=a.n(i),o=(a(82),a.p,a(133)),s=a(49),l=a(104),j=a(135),d=a(137),b=a(145),p=a(138),h=a(139),u=a(146),m=a(3),g=Object(o.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function O(t){var e=g(),a=t.post,r=Object(n.useState)(0),i=Object(s.a)(r,2),c=i[0],o=i[1];return c?Object(m.jsx)(L,{post:a}):Object(m.jsx)(j.a,{item:!0,xs:12,children:Object(m.jsx)(b.a,{onClick:function(){return o(!c)},component:"a",href:"#",children:Object(m.jsxs)(d.a,{className:e.card,children:[Object(m.jsx)("div",{className:e.cardDetails,children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(l.a,{component:"h2",variant:"h5",children:a.title}),Object(m.jsx)(l.a,{variant:"subtitle1",color:"textSecondary"}),Object(m.jsx)(l.a,{variant:"subtitle1",color:"textSecondary",children:new Date(a.createdAt).toDateString()}),Object(m.jsx)(l.a,{variant:"subtitle1",paragraph:!0,children:a.body.split("\n")[0]}),Object(m.jsx)(l.a,{variant:"subtitle1",color:"primary",children:"Continue reading..."})]})}),Object(m.jsx)(u.a,{xsDown:!0,children:Object(m.jsx)(h.a,{className:e.cardMedia,image:"https://source.unsplash.com/random",title:a.imageTitle})})]})})})}var x=a(32),v=a(142),f=a(73),y=a(62),k=a(8),S=a(140),w={overrides:{h1:{component:l.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:l.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:l.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:l.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:l.a,props:{paragraph:!0}},a:{component:S.a},li:{component:Object(k.a)((function(t){return{listItem:{marginTop:t.spacing(1)}}}))((function(t){var e=t.classes,a=Object(f.a)(t,["classes"]);return Object(m.jsx)("li",{className:e.listItem,children:Object(m.jsx)(l.a,Object(x.a)({component:"span"},a))})}))}}};function C(t){return Object(m.jsx)(y.a,Object(x.a)({options:w},t))}var T=a(141),B=Object(o.a)((function(t){return{toolbar:{borderBottom:"1px solid ".concat(t.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:t.spacing(1),flexShrink:0}}}));function N(t){var e=B(),a=(t.sections,t.title);return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(T.a,{className:e.toolbar,children:Object(m.jsx)(l.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle,children:a})}),Object(m.jsx)(T.a,{component:"nav",variant:"dense",className:e.toolbarSecondary})]})}var A=Object(o.a)((function(t){return{markdown:Object(x.a)(Object(x.a)({},t.typography.body2),{},{padding:t.spacing(3,0)})}}));function P(t){var e=A(),a=t.post;return Object(m.jsxs)(j.a,{item:!0,xs:12,md:8,children:[Object(m.jsx)(l.a,{children:a.title}),Object(m.jsx)(v.a,{}),Object(m.jsx)(C,{className:e.markdown,children:a.body})]})}var _=a(25),I=a(103),F=Object(o.a)((function(t){return{sidebarAboutBox:{padding:t.spacing(2),backgroundColor:t.palette.grey[200]},sidebarSection:{marginTop:t.spacing(3)}}}));function E(t){var e=F(),a=(t.archives,t.description),n=t.social,r=t.title;return Object(m.jsx)(j.a,{item:!0,lg:12,children:Object(m.jsxs)(I.a,{elevation:0,className:e.sidebarAboutBox,children:[Object(m.jsx)(l.a,{variant:"h6",gutterBottom:!0,children:r}),Object(m.jsx)(l.a,{children:a}),Object(m.jsx)(l.a,{variant:"h6",gutterBottom:!0,className:e.sidebarSection,children:"Social"}),n.map((function(t){var e;return Object(m.jsx)(S.a,(e={display:"block",variant:"body1",href:"#"},Object(_.a)(e,"href",t.url),Object(_.a)(e,"children",Object(m.jsxs)(j.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(m.jsx)(j.a,{item:!0,children:Object(m.jsx)(t.icon,{})}),Object(m.jsx)(j.a,{item:!0,children:t.name})]})),e),t)}))]})})}var D=Object(o.a)((function(t){return{mainGrid:{marginTop:t.spacing(3)}}}));function L(t){D();var e=t.post;return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsx)(P,{post:e})})}var R,M=a(147),W=a(63),G=a(64),H=a(65),K=a(43),U=a(66),z=a(48),Q=a.n(z),q=function(){function t(){Object(G.a)(this,t),Q.a.config(),this.Client=new U.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ckojbw7xpgmn601xj6g44gn8o/master",{headers:{authorization:"Bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GCMS_URL:"https://api-eu-central-1.graphcms.com/v2/ckojbw7xpgmn601xj6g44gn8o/master"}).REACT_APP_GCMS_AUTH)}})}return Object(H.a)(t,[{key:"fetchPosts",value:function(){return Object(K.a)(R||(R=Object(W.a)(["\n      query {\n        posts {\n          id\n          title\n          body\n          createdAt\n          \n        }\n      }\n    "])))}}]),t}(),J=Object(o.a)((function(t){return{mainFeaturedPost:{position:"relative",backgroundColor:t.palette.grey[800],color:t.palette.common.white,marginBottom:t.spacing(4),backgroundImage:"url(https://unsplash.com/photos/1K6IQsQbizI)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(_.a)({position:"relative",padding:t.spacing(3)},t.breakpoints.up("md"),{padding:t.spacing(6),paddingRight:0})}}));function V(t){var e=J(),a=t.post;return Object(m.jsxs)(I.a,{className:e.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")},children:[Object(m.jsx)("img",{style:{display:"none"},src:a.image,alt:a.imageText}),Object(m.jsx)("div",{className:e.overlay}),Object(m.jsx)(j.a,{container:!0,children:Object(m.jsx)(j.a,{item:!0,md:6,children:Object(m.jsxs)("div",{className:e.mainFeaturedPostContent,children:[Object(m.jsx)(l.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:a.title}),Object(m.jsx)(l.a,{variant:"h5",color:"inherit",paragraph:!0,children:a.description})]})})})]})}var X=a(67),Y=a.n(X),Z=a.p+"static/media/bg_img.cf4df7da.jpg",$=function(t){var e=r.a.useState([]),a=Object(s.a)(e,2),n=(a[0],a[1]),i=new q,c={title:"Collection of thorough research on use cases of AI",description:"Theory and Applications of Artficial neural Networks in various fields. Written in the format of overview papers, made with hard-work and tight-deadlines :)",image:Z,imgText:"main image description",linkText:"Continue reading\u2026"},o={title:"About",description:"I'm a final year Computer Engineering Student sharing my overviews of research in the area of Artificial Intelligence",social:[{name:"LinkedIn",icon:Y.a,url:"https://www.linkedin.com/in/mine-ibraimi-572238155/"}]};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a,{container:!0,spacing:4,children:[Object(m.jsxs)(j.a,{item:!0,children:[Object(m.jsx)(V,{post:c}),Object(m.jsx)(M.a,{query:i.fetchPosts(),children:function(t){var e=t.loading,a=t.error,r=t.data;if(e)return Object(m.jsx)("div",{children:"Loading..."});if(a)return console.log(a),Object(m.jsx)("div",{className:"mx-auto alert-danger",children:"Error!"});var i=r.posts;return n(i),i.slice(0,5).map((function(t){return Object(m.jsx)(j.a,{container:!0,spacing:4,children:Object(m.jsx)(O,{post:t},t.title)})}))}})]}),Object(m.jsx)(j.a,{item:!0,children:Object(m.jsx)(E,{title:o.title,description:o.description,social:o.social})})]})})},tt=a(143);function et(){return Object(m.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(m.jsx)(S.a,{color:"inherit",href:"https://material-ui.com/",children:"Mine's Blog"})," ",(new Date).getFullYear(),"."]})}var at=Object(o.a)((function(t){return{footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6,0)}}}));function nt(t){var e=at(),a=t.description,n=t.title;return Object(m.jsx)("footer",{className:e.footer,children:Object(m.jsxs)(tt.a,{maxWidth:"lg",children:[Object(m.jsx)(l.a,{variant:"h6",align:"center",gutterBottom:!0,children:n}),Object(m.jsx)(l.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:a}),Object(m.jsx)(et,{})]})})}var rt=a(144);var it=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(rt.a,{}),Object(m.jsxs)(tt.a,{maxWidth:"lg",children:[Object(m.jsx)(N,{title:"My Artificial Intelligence Blog"}),Object(m.jsx)("main",{children:Object(m.jsx)($,{})}),Object(m.jsx)(nt,{title:"Congrats you've seen it all.",description:"Made with love "})]})]})},ct=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,149)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))},ot=a(11),st=a(72);Q.a.config();var lt=new st.a({uri:"https://api-eu-central-1.graphcms.com/v2/ckojbw7xpgmn601xj6g44gn8o/master"});c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(ot.a,{client:lt,children:Object(m.jsx)(it,{})})}),document.getElementById("root")),ct()},82:function(t,e,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.2003d516.chunk.js.map