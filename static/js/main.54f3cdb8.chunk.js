(this["webpackJsonpreact-vk-app"]=this["webpackJsonpreact-vk-app"]||[]).push([[0],{110:function(e,t,a){e.exports=a(241)},115:function(e,t,a){},116:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(45),c=a.n(l),s=(a(115),a(13)),o=(a(116),a(6)),u=a(18),i=a(249),m=a(243),d=a(247);function E(){return r.a.createElement(i.a,{bg:"primary",expand:"lg",variant:"primary"},r.a.createElement(m.a,null,r.a.createElement(o.c,{className:"navbar-brand",to:"/"},r.a.createElement("img",{alt:"logo",className:"img-thumbnail",src:"/assets/img/logo.png",width:"40"})),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"w-100"},r.a.createElement(o.c,{className:"nav-link",to:"/",exact:!0},"Home")))))}var f=a(15),p=a.n(f),h=a(64),b=a(26),v=a(246),g=a(244),y=a(105),_=a(245),x=a(24),O=a.n(x),w=r.a.createContext(),j=["HIDDEN","FEMALE","MALE"];function N(){var e=Object(n.useContext)(w),t=e.state,a=e.dispatch;return 0!==t.length&&r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{className:"mb-4"},r.a.createElement(y.a,null,r.a.createElement("h2",null,"Added Users"))),t.map((function(e){return r.a.createElement(g.a,{className:e.showFriends?"choosed user":"user",key:e.id},r.a.createElement(y.a,{md:2},r.a.createElement("img",{src:e.photo_100,alt:e.first_name})),r.a.createElement(y.a,{md:2},r.a.createElement("h3",null,e.first_name," ",e.last_name)),r.a.createElement(y.a,{md:3},r.a.createElement("p",null,r.a.createElement("b",null,"Date of Birth"),": ",e.bdate),r.a.createElement("p",null,r.a.createElement("b",null,"Gender"),": ",j[e.sex]),r.a.createElement("p",null,r.a.createElement("b",null,"Friends count"),": ",e.friendsCount||"Information closed"),r.a.createElement("p",null,r.a.createElement("b",null,"Profile"),": ",e.is_closed?"Closed":"Opened")),r.a.createElement(y.a,{md:2},r.a.createElement(v.a.Group,null,r.a.createElement(o.b,{className:"btn btn-primary",to:"/user/".concat(e.id)},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438")),r.a.createElement(v.a.Group,null,r.a.createElement(_.a,{type:"button",onClick:function(){a({type:"REMOVE_USER",payload:e.id})}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),r.a.createElement(y.a,{md:3},r.a.createElement(v.a.Group,null,r.a.createElement(_.a,{className:"btn btn-primary",onClick:function(){a({type:"CHECK_USER",payload:e.id})}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439"))))})))}var k=a(28),C=a(106),F=a.n(C),S=a(107),U=a.n(S);function I(){var e=Object(n.useContext)(w).state.filter((function(e){return e.showFriends})),t=Object(k.a)(e.map((function(e){return e.friends})).flat());t.forEach((function(e){var a=0;t.forEach((function(t){t.id===Number(e.id)&&(a+=1),e.match="mutual-".concat(a)}))}));var a=F()(U()(t,"id"),["first_name","last_name"]);return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{className:"mb-4"},r.a.createElement("h2",null,"Friend list")),a.map((function(e){var t=e.first_name,a=e.last_name,n=e.photo_50,l=e.id,c=e.match;return r.a.createElement(g.a,{key:l,className:c},r.a.createElement(y.a,{md:3},r.a.createElement(o.b,{to:"/user/".concat(l)},r.a.createElement("img",{src:n,alt:t}))),r.a.createElement(y.a,{md:8},r.a.createElement(o.b,{to:"/user/".concat(l)},t," ",a)))})))}function D(){var e=Object(n.useContext)(w),t=e.state,a=e.dispatch,l=e.requests,c=Object(n.useState)(""),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),E=d[0],f=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(p.a.mark((function e(t,n){var r,c,s,o,u,i,m,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,O()({method:"post",url:l.userInfo(t)});case 4:if(r=e.sent,c=r.data.response){e.next=9;break}return console.log("User with this id does not exist"),e.abrupt("return",!1);case 9:if(s=c[0],!n.every((function(e){return e.id!==s.id}))){e.next=22;break}return e.next=14,O()({method:"post",url:l.getUserFriends(s.id)});case 14:o=e.sent,u=o.data.response?o.data.response.items:[],i=u.filter((function(e){return!e.deactivated}))||[],m=i.length,d=Object(h.a)(Object(h.a)({},s),{},{friendsCount:m,friends:i,showFriends:!1}),a({type:"ADD_USER",payload:d}),e.next=23;break;case 22:console.log("This user is already on the list");case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(t,a){e.apply(this,arguments)}(E,t),function(){return f("")}}),[t,a,l,E]),Object(n.useEffect)((function(){localStorage.setItem("users",JSON.stringify(t))}),[t]),r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),f(u),i("")}},r.a.createElement(g.a,null,r.a.createElement(y.a,{md:9},r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Control,{required:!0,size:"lg",type:"text",placeholder:"user id",onChange:function(e){var t=e.target.value;i(t)},value:u}),r.a.createElement(v.a.Text,{className:"text-muted"},"Enter user id"))),r.a.createElement(y.a,{md:3},r.a.createElement(v.a.Group,{align:"right"},r.a.createElement(_.a,{className:"w-100",size:"lg",variant:"primary",type:"submit"},"Submit"))))),r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement("hr",null))),r.a.createElement(g.a,{className:"userlist"},r.a.createElement(y.a,{md:9},r.a.createElement(N,null)),r.a.createElement(y.a,{md:3,className:"all-friend-list"},r.a.createElement(I,null))))}var R=a(248);var A=function(e){var t=e.data,a=t.filter((function(e){return"photo"===e.type})),l=t.filter((function(e){return"video"===e.type})),c=t.filter((function(e){return"audio"===e.type}));return r.a.createElement(n.Fragment,null,a.length>0?r.a.createElement(R.a,null,a.map((function(e){var t=e.photo,a=t.sizes,n=t.text,l=t.id;return r.a.createElement(R.a.Item,{key:l},r.a.createElement("img",{className:"d-block w-100",src:a[4].url,alt:"First slide"}),r.a.createElement(R.a.Caption,null,r.a.createElement("p",null,n)))}))):null,l.length>0||c.length>0?r.a.createElement("i",null,"Post contains audio or video. Use official VK APP"):null)};function G(e){var t=e.data,a=e.id,l=Object(n.useContext)(w).requests,c=Object(n.useState)(null),o=Object(s.a)(c,2),u=o[0],i=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"post",url:l.userInfo(a)});case 2:if(t=e.sent,n=t.data.response){e.next=7;break}return console.log("User with this id does not exist"),e.abrupt("return",!1);case 7:console.log(n[0]),i(n[0]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,l]),Object(n.useEffect)((function(){u&&(document.title="".concat(u.first_name," ").concat(u.last_name,"'s Wall"))})),!!t&&(0===t.length?r.a.createElement("h2",null,"This user hid his wall from accessing from outside"):t.map((function(e){return r.a.createElement("div",{className:"wall-post",key:e.id},r.a.createElement(g.a,{className:"post-header"},r.a.createElement(y.a,{md:2},r.a.createElement("img",{src:u.photo_100,alt:"",className:"profile-picture"})),r.a.createElement(y.a,{md:6},r.a.createElement("h5",null,u.first_name," ",u.last_name),r.a.createElement("h6",{className:"date"},new Date(1e3*e.date).toLocaleString()))),r.a.createElement(g.a,{className:"post-body"},r.a.createElement(y.a,{md:12},e.copy_history?r.a.createElement(r.a.Fragment,null,e.copy_history[0].attachments?r.a.createElement(A,{data:e.copy_history[0].attachments}):null,r.a.createElement("p",null,e.copy_history[0].text?e.copy_history[0].text:null)):null),r.a.createElement(y.a,{md:12},e.attachments?r.a.createElement(A,{data:e.attachments}):null,r.a.createElement("p",null,e.text))))})))}var T=function(e){var t=e.friends;return r.a.createElement(n.Fragment,null,t.map((function(e){var t=e.first_name,a=e.last_name,n=e.photo_100,l=e.id;return r.a.createElement(g.a,{key:l},r.a.createElement(y.a,{md:3},r.a.createElement(o.b,{to:"/user/".concat(l)},r.a.createElement("img",{src:n,alt:t}))),r.a.createElement(y.a,{md:8},r.a.createElement(o.b,{to:"/user/".concat(l)},t," ",a)))})))};function q(){var e=Object(n.useContext)(w),t=e.state,a=e.requests,l=Object(n.useState)(null),c=Object(s.a)(l,2),o=c[0],i=c[1],m=Object(u.f)().id;Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(t){var n,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,O()({method:"post",url:a.userWall(t)});case 4:n=e.sent,(r=n.data).error?(console.log(r.error.error_msg),i([])):(l=r.response,i(Object(k.a)(l.items)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(m)}),[m,a]);var d=t.filter((function(e){return e.friends.find((function(e){return e.id===Number(m)}))}));return m?r.a.createElement(n.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{md:9},r.a.createElement("h2",null,"User wall"),r.a.createElement("hr",null)),r.a.createElement(y.a,{md:3},r.a.createElement("h2",null,"Friends with"),r.a.createElement("hr",null))),r.a.createElement(g.a,{className:"userlist"},r.a.createElement(y.a,{md:9,className:"wall"},r.a.createElement(G,{data:o,id:m})),r.a.createElement(y.a,{md:3,className:"friends-list"},r.a.createElement(T,{friends:d})))):r.a.createElement("h2",null,"This user doesnot exist")}var P=a(50),W=a(65),H=a.n(W),J=function(e,t){switch(t.type){case"REMOVE_USER":return e.filter((function(e){return e.id!==t.payload}));case"ADD_USER":return[t.payload].concat(Object(k.a)(e));case"CHECK_USER":var a=e.find((function(e){return e.id===t.payload})),n=a.showFriends,r=e.findIndex((function(e){return e.id===t.payload})),l=H()(a,{showFriends:{$set:!n}});return H()(e,Object(P.a)({},r,{$set:l}));default:return e}},K=localStorage.getItem("users")||"[]",M=JSON.parse(K),z="4b7861134b7861134b786113794b09feea44b784b78611315d6ecd19751dc711d47446d",B={userInfo:function(e){return"/method/users.get?&user_ids=".concat(e,"&fields=photo_100,bdate,sex&access_token=").concat(z,"&v=5.89")},userWall:function(e){return"/method/wall.get?&owner_id=".concat(e,"&access_token=").concat(z,"&v=5.103")},getUserFriends:function(e){return"/method/friends.get?&user_id=".concat(e,"&order=name&fields=photo_50&access_token=").concat(z,"&v=5.89")}};var L=function(){var e=Object(n.useReducer)(J,M),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement(w.Provider,{value:{state:a,dispatch:l,ACCESS_TOKEN:z,requests:B}},r.a.createElement(o.a,null,r.a.createElement(E,null),r.a.createElement("div",{className:"container pt-4"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:D}),r.a.createElement(u.a,{path:"/user/:id",component:q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.54f3cdb8.chunk.js.map