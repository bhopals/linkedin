(this.webpackJsonplinkedin=this.webpackJsonplinkedin||[]).push([[0],{49:function(n,e,t){},55:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var i=t(3),a=t.n(i),r=t(27),c=t.n(r),o=(t(49),t(12)),s=(t(55),t(4)),d=t(5),l=t(26),x=t.n(l),b=t(33),p=t(25),j=p.a.initializeApp({apiKey:"AIzaSyCbN870WlTDIphMMHAVklYGV5c6slVRLxc",authDomain:"linkedin-clone-cce9e.firebaseapp.com",projectId:"linkedin-clone-cce9e",storageBucket:"linkedin-clone-cce9e.appspot.com",messagingSenderId:"1092482674741",appId:"1:1092482674741:web:8f040ef22f161374c2817c",measurementId:"G-892HJ1WJBL"}),g=j.firestore(),h=j.auth(),u=new p.a.auth.GoogleAuthProvider,m=j.storage(),O=g,f="SET_USER",v="SET_LOADING_STATUS",w="GET_ARTICLES",y=function(n){return{type:f,user:n}},k=function(n){return{type:v,status:n}};function z(){return function(n){var e;O.collection("articles").orderBy("actor.date","desc").onSnapshot((function(t){e=t.docs.map((function(n){return n.data()})),n(function(n){return{type:w,payload:n}}(e))}))}}var S,N,I,A,C,L,U,R,T,E,D,F,G,M,P,W,J,B,H,V,_,K,X,Y,q,Q,Z,$,nn,en,tn,an,rn,cn,on,sn,dn,ln,xn,bn,pn,jn,gn,hn,un,mn,On,fn,vn,wn,yn,kn,zn,Sn,Nn,In,An,Cn,Ln,Un,Rn,Tn,En=t(2),Dn=d.a.div(S||(S=Object(s.a)(["\n  padding: 0px;\n"]))),Fn=d.a.nav(N||(N=Object(s.a)(["\n  max-width: 1120px;\n  margin: auto;\n  padding: 12px 0 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n\n  & > a {\n    width: 135px;\n    height: 34px;\n    @media (max-width: 768px) {\n      padding: 0 5px;\n    }\n  }\n"]))),Gn=d.a.a(I||(I=Object(s.a)(["\n  font-size: 16px;\n  padding: 10px 12px;\n  text-decoration: none;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-right: 12px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n    color: rgba(0, 0, 0, 0.9);\n    text-decoration: none;\n  }\n"]))),Mn=d.a.a(A||(A=Object(s.a)(["\n  box-shadow: inset 0 0 0 1px #0a66c2;\n  color: #0a66c2;\n  border-radius: 24px;\n  transition-duration: 167ms;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 40px;\n  padding: 10px 24px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0);\n  &:hover {\n    color: #0a66c2;\n    text-decoration: none;\n    background-color: rgba(112, 181, 249, 0.15);\n  }\n"]))),Pn=d.a.section(C||(C=Object(s.a)(["\n  align-content: start;\n  min-height: 700px;\n  display: flex;\n  padding-bottom: 138px;\n  padding-top: 40px;\n  padding: 60px 0;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 1128px;\n  align-items: center;\n  margin: auto;\n  @media (max-width: 768px) {\n    margin: auto;\n    min-height: 0px;\n  }\n"]))),Wn=d.a.div(L||(L=Object(s.a)(["\n  width: 100%;\n  h1 {\n    padding-bottom: 0;\n    width: 55%;\n    font-size: 56px;\n    color: #2977c9;\n    font-weight: 200;\n    line-height: 70px;\n    @media (max-width: 768px) {\n      text-align: center;\n      font-size: 20px;\n      width: 100%;\n      line-height: 2;\n    }\n\n    img {\n      z-index: -1;\n      width: 700px;\n      height: 670px;\n      position: absolute;\n      bottom: -2px;\n      right: -150px;\n      @media (max-width: 768px) {\n        top: 230px;\n        width: initial;\n        position: initial;\n        height: initial;\n      }\n    }\n  }\n"]))),Jn=d.a.div(U||(U=Object(s.a)(["\n  margin-top: 100px;\n  width: 408px;\n  @media (max-width: 768px) {\n    margin-top: 20px;\n  }\n"]))),Bn=d.a.button(R||(R=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n  height: 56px;\n  width: 100%;\n  border-radius: 28px;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),\n    inset 0 0 0 1px rgb(0 0 0 / 0%);\n  vertical-align: middle;\n  z-index: 0;\n  transition-duration: 167ms;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(207, 207, 207, 0.25);\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),Hn=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{signIn:function(){return n((function(n){h.signInWithPopup(u).then((function(e){n(y(e.user))})).catch((function(n){return alert(n.message)}))}))}}}))((function(n){return Object(En.jsxs)(Dn,{children:[Object(En.jsxs)(Fn,{children:[Object(En.jsx)("a",{href:"/",children:Object(En.jsx)("img",{src:"/images/login-logo.svg",alt:""})}),Object(En.jsxs)("div",{children:[Object(En.jsx)(Gn,{children:"Join Now"}),Object(En.jsx)(Mn,{children:"Sign in"})]})]}),Object(En.jsxs)(Pn,{children:[Object(En.jsxs)(Wn,{children:[Object(En.jsx)("h1",{children:"Welcome to your professional community"}),Object(En.jsx)("img",{src:"/images/login-hero.svg",alt:""})]}),Object(En.jsx)(Jn,{children:Object(En.jsxs)(Bn,{onClick:function(){return n.signIn()},children:[Object(En.jsx)("img",{src:"/images/google.svg",alt:""}),"Sign in with Google"]})})]})]})})),Vn=t(21),_n=t(28),Kn=t.n(_n),Xn=d.a.div(T||(T=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  padding: 0 10px;\n  color: black;\n  background-color: rgba(0, 0, 0, 0.8);\n  animation: fadeIn 0.3s;\n"]))),Yn=d.a.div(E||(E=Object(s.a)(["\n  width: 100%;\n  max-width: 552px;\n  background-color: white;\n  max-height: 90%;\n  overflow: initial;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  top: 32px;\n  margin: 0 auto;\n"]))),qn=d.a.div(D||(D=Object(s.a)(["\n  display: block;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n  justify-content: space-between;\n  align-items: center;\n  button {\n    border: 0;\n    height: 40px;\n    width: 40px;\n    min-width: auto;\n    color: rgba(0, 0, 0, 0.15);\n    background-color: #fff;\n\n    img,\n    svg {\n      border: 0;\n      pointer-events: none;\n      width: 20px;\n      background-color: #fff;\n    }\n  }\n"]))),Qn=d.a.div(F||(F=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow-y: auto;\n  vertical-align: baseline;\n  background-color: transparent;\n  padding: 8px 12px;\n"]))),Zn=d.a.div(G||(G=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n\n  svg,\n  img {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background-clip: content-box;\n    border: 2px solid transparent;\n  }\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.5;\n    margin-left: 5px;\n  }\n"]))),$n=d.a.div(M||(M=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 24px 12px 16px;\n"]))),ne=d.a.div(P||(P=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  min-width: auto;\n  color: rgba(0, 0, 0, 0.5);\n"]))),ee=d.a.div(W||(W=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  padding-right: 8px;\n  "," {\n    width: 40px;\n  }\n"])),ne),te=d.a.div(J||(J=Object(s.a)(["\n  padding-left: 8px;\n  margin-right: auto;\n  border-left: 1px solid rgba(0, 0, 0, 0.15);\n  "," {\n    img {\n      margin-right: 5px;\n    }\n  }\n"])),ne),ie=d.a.button(B||(B=Object(s.a)(["\n  min-width: 60px;\n  border-radius: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: white;\n  background: ",";\n  color: ",";\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.disabled?"rgba(0,0,0,0.8)":"#0a66c2"}),(function(n){return n.disabled?"rgba(1,1,1,0.2)":"white"}),(function(n){return n.disabled?"rgba(0,0,0,0.08)":"#004182"})),ae=d.a.div(H||(H=Object(s.a)(["\n  padding: 12px 24px;\n  textarea {\n    width: 100%;\n    min-height: 100px;\n    resize: none;\n  }\n\n  input {\n    width: 100%;\n    height: 25px;\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n"]))),re=d.a.div(V||(V=Object(s.a)(["\n  text-align: center;\n  img {\n    width: 100%;\n  }\n"]))),ce=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{postArticle:function(e){return n(function(n){return function(e){if(e(k(!0)),""!=n.image){var t=m.ref("images/".concat(n.image.name)).put(n.image);t.on("state-changed",(function(n){var e=n.bytesTransferred/n.totalBytes*100;console.log("Progress: ".concat(e,"%")),"RUNNING"===n.state&&console.log("Progress: ".concat(e,"%"))}),(function(n){return console.log(n.code)}),Object(b.a)(x.a.mark((function i(){var a;return x.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.snapshot.ref.getDownloadURL();case 2:a=i.sent,O.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImg:a,comments:0,description:n.description}),e(k(!1));case 5:case"end":return i.stop()}}),i)}))))}else n.video&&(O.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImg:"",comments:0,description:n.description}),e(k(!1)))}}(e))}}}))((function(n){var e=Object(i.useState)(""),t=Object(Vn.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)(""),o=Object(Vn.a)(c,2),s=o[0],d=o[1],l=Object(i.useState)(""),x=Object(Vn.a)(l,2),b=x[0],j=x[1],g=Object(i.useState)(""),h=Object(Vn.a)(g,2),u=h[0],m=h[1],O=n.showModal,f=n.handleClick,v=function(n){m(""),r(""),d(n)},w=function(n){j(""),m(""),r(""),d(""),f(n)};return Object(En.jsx)(En.Fragment,{children:"open"===O&&Object(En.jsx)(Xn,{children:Object(En.jsxs)(Yn,{children:[Object(En.jsxs)(qn,{children:[Object(En.jsx)("h2",{children:"Create a post"}),Object(En.jsx)("button",{onClick:function(n){return w(n)},children:Object(En.jsx)("img",{src:"/images/close-icon.png",alt:"Close"})})]}),Object(En.jsxs)(Qn,{children:[Object(En.jsxs)(Zn,{children:[n.user.photoURL?Object(En.jsx)("img",{src:n.user.photoURL,alt:"Name"}):Object(En.jsx)("img",{src:"/images/user.svg",alt:"Name"}),Object(En.jsx)("span",{children:n.user.displayName})]}),Object(En.jsxs)(ae,{children:[Object(En.jsx)("textarea",{value:b,placeholder:"What do you want to talk about?",onChange:function(n){return j(n.target.value)},autoFocus:!0}),"image"===s?Object(En.jsxs)(re,{children:[Object(En.jsx)("input",{type:"file",id:"file",name:"upload-image",accept:"image/jpg, image/png, image/jpeg",style:{display:"none"},onChange:function(n){var e=n.target.files[0];""!==e&&void 0!==e?m(e):alert("not an Image, the file is a ".concat(typeof e))}}),Object(En.jsx)("p",{children:Object(En.jsx)("label",{htmlFor:"file",children:"Select an image to share"})}),u&&Object(En.jsx)("img",{src:URL.createObjectURL(u)})]}):"media"===s&&Object(En.jsxs)(En.Fragment,{children:[Object(En.jsx)("input",{type:"text",placeholder:"Please input a video link",value:a,onChange:function(n){return r(n.target.value)}}),a&&Object(En.jsx)(Kn.a,{width:"100%",url:a})]})]})]}),Object(En.jsxs)($n,{children:[Object(En.jsxs)(ee,{children:[Object(En.jsx)(ne,{onClick:function(){return v("image")},children:Object(En.jsx)("img",{src:"/images/shared-img.png",alt:"Share Image"})}),Object(En.jsx)(ne,{onClick:function(){return v("media")},children:Object(En.jsx)("img",{src:"/images/shared-vid.png",alt:"Share Asset"})})]}),Object(En.jsx)(te,{children:Object(En.jsxs)(ne,{children:[Object(En.jsx)("img",{src:"/images/shared-comment.png",alt:"Share Asset"}),"Anyone"]})}),Object(En.jsx)(ie,{disabled:!b,onClick:function(e){return function(e){if(e.preventDefault(),e.target===e.currentTarget){var t={image:u,video:a,user:n.user,description:b,timestamp:p.a.firestore.Timestamp.now()};n.postArticle(t),w(e)}}(e)},children:"Post"})]})]})})})})),oe=d.a.div(_||(_=Object(s.a)(["\n  grid-area: main;\n"]))),se=d.a.div(K||(K=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  border-radius: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),de=Object(d.a)(se)(X||(X=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #958b7b;\n  margin: 0 0 8px 0;\n  background: #fff;\n\n  div {\n    button {\n      outline: none;\n      color: rgba(0, 0, 0, 0.6);\n      font-size: 14px;\n      line-height: 1.5;\n      min-height: 48px;\n      background: transparent;\n      border: none;\n      display: flex;\n      align-items: center;\n      font-weight: 600;\n\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.07);\n        border-radius: 6px;\n      }\n    }\n\n    .post-space {\n      box-shadow: 1px 1px 2px 1px rgba(159, 156, 156, 0.75);\n    }\n\n    .post-icon {\n      width: 27px;\n    }\n\n    &:first-child {\n      display: flex;\n      align-items: center;\n      padding: 8px 16px;\n\n      img {\n        width: 48px;\n        margin-right: 8px;\n        border-radius: 50%;\n      }\n\n      button {\n        margin: 4px 0;\n        flex-grow: 1;\n        border-radius: 35px;\n        padding-left: 16px;\n        border: 1px solid rgba(0, 0, 0, 0, 15);\n        border-radius: 35px;\n        background-color: #fff;\n        text-align: left;\n      }\n    }\n\n    &:nth-child(2) {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-around;\n      padding-bottom: 4px;\n\n      button {\n        img {\n          margin: 0 4px 0 -2px;\n        }\n\n        span {\n          color: #70b5f9;\n        }\n      }\n    }\n  }\n"]))),le=Object(d.a)(se)(Y||(Y=Object(s.a)(["\n  padding: 0;\n  margin: 0 0 8px;\n  overflow: visible;\n"]))),xe=d.a.div(q||(q=Object(s.a)(["\n  padding-right: 40px;\n  flex-wrap: nowrap;\n  padding: 12px 16px 0;\n  margin-bottom: 8px;\n  align-items: center;\n  display: flex;\n\n  a {\n    margin-right: 12px;\n    flex-grow: 1;\n    overflow: hidden;\n    display: flex;\n    text-decoration: none;\n\n    img {\n      width: 48px;\n      height: 48px;\n    }\n\n    & > div {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      flex-basis: 0;\n      margin-left: 8px;\n      overflow: hidden;\n\n      span {\n        text-align: left;\n\n        &:first-child {\n          font-size: 14px;\n          font-weight: 700;\n          color: rgba(0, 0, 0, 1);\n        }\n\n        &:nth-child(n + 1) {\n          font-size: 12px;\n          color: rgba(0, 0, 0, 0.6);\n        }\n      }\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 12px;\n    outline: none;\n    border: none;\n    top: 0;\n    background: transparent;\n  }\n"]))),be=d.a.div(Q||(Q=Object(s.a)(["\n  padding: 0 16px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 14px;\n  text-align: left;\n"]))),pe=d.a.div(Z||(Z=Object(s.a)(["\n  margin-top: 8px;\n  width: 100%;\n  display: block;\n  position: relative;\n  background-color: #f9fafb;\n\n  img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n  }\n"]))),je=d.a.ul($||($=Object(s.a)(["\n  line-height: 100%;\n  display: flex;\n  align-items: flex-start;\n  overflow: auto;\n  list-style: none;\n  margin: 0 16px;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9e5df;\n\n  li {\n    margin-right: 5px;\n    font-size: 12px;\n\n    button {\n      display: flex;\n      border: none;\n      background: #fff;\n    }\n  }\n\n  img {\n    width: 18px;\n  }\n"]))),ge=d.a.div(nn||(nn=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  min-height: 40px;\n  padding: 4px 8px;\n\n  button {\n    display: inline-flex;\n    align-items: center;\n    padding: 8px;\n    color: #0a66c2;\n    border: none;\n    background-color: #fff;\n\n    @media (min-width: 768px) {\n      span {\n        margin-left: 8px;\n      }\n    }\n  }\n"]))),he=d.a.div(en||(en=Object(s.a)(["\n  text-align: center;\n  & > img {\n    width: 30px;\n  }\n"]))),ue=Object(o.b)((function(n){return{loading:n.articleState.loading,user:n.userState.user,articles:n.articleState.articles}}),(function(n){return{getArticles:function(){return n(z())}}}))((function(n){var e=Object(i.useState)("close"),t=Object(Vn.a)(e,2),a=t[0],r=t[1];Object(i.useEffect)((function(){n.getArticles()}),[]);var c=function(n){if(n.preventDefault(),n.target===n.currentTarget)if("close"===a)r("open");else r("close")};return Object(En.jsx)(En.Fragment,{children:0===n.articles.length?Object(En.jsx)("p",{children:"No articles to show."}):Object(En.jsxs)(oe,{children:[Object(En.jsxs)(de,{children:[Object(En.jsxs)("div",{children:[n.user&&n.user.photoURL?Object(En.jsx)("img",{src:n.user.photoURL}):Object(En.jsx)("img",{src:"/images/user.svg",alt:""}),Object(En.jsx)("button",{onClick:c,disabled:!!n.loading,className:"post-space",children:"Start a Post"})]}),Object(En.jsxs)("div",{children:[Object(En.jsxs)("button",{children:[Object(En.jsx)("img",{src:"/images/photo-icon.png",className:"post-icon",alt:""}),Object(En.jsx)("span",{children:"Photo"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("img",{src:"/images/video-icon.png",className:"post-icon",alt:""}),Object(En.jsx)("span",{children:"Video"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("img",{src:"/images/event-icon.png",className:"post-icon",alt:""}),Object(En.jsx)("span",{children:"Event"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("img",{src:"/images/article-icon.png",className:"post-icon",alt:""}),Object(En.jsx)("span",{children:"Write article"})]})]})]}),Object(En.jsxs)(he,{children:[n.loading&&Object(En.jsx)("img",{src:"./images/spin-loading.gif"}),n.articles.length>0&&n.articles.map((function(n,e){return Object(En.jsxs)(le,{children:[Object(En.jsxs)(xe,{children:[Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:n.actor.image,alt:""}),Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:n.actor.title}),Object(En.jsx)("span",{children:n.actor.description}),Object(En.jsx)("span",{children:n.actor.date.toDate().toLocaleDateString()})]})]}),Object(En.jsx)("button",{children:Object(En.jsx)("img",{src:"images/ellipsis.png",alt:""})})]}),Object(En.jsx)(be,{children:n.description}),Object(En.jsx)(pe,{children:Object(En.jsx)("a",{children:!n.sharedImg&&n.video?Object(En.jsx)(Kn.a,{width:"100%",url:n.video}):n.sharedImg&&Object(En.jsx)("img",{src:n.sharedImg})})}),Object(En.jsxs)(je,{children:[Object(En.jsx)("li",{children:Object(En.jsxs)("button",{children:[Object(En.jsx)("img",{src:"images/like-icon.png",alt:""}),Object(En.jsx)("img",{src:"images/clap-icon.png",alt:""}),Object(En.jsx)("span",{children:"62"})]})}),Object(En.jsx)("li",{children:Object(En.jsxs)("a",{children:[n.comments," comments"]})})]}),Object(En.jsxs)(ge,{children:[Object(En.jsxs)("button",{children:[Object(En.jsx)("i",{className:"far fa-thumbs-up"}),Object(En.jsx)("span",{children:"Like"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("i",{className:"far fa-comment"}),Object(En.jsx)("span",{children:"Comment"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("i",{className:"fas fa-share"}),Object(En.jsx)("span",{children:"Share"})]}),Object(En.jsxs)("button",{children:[Object(En.jsx)("i",{className:"fab fa-telegram-plane"}),Object(En.jsx)("span",{children:"Send"})]})]})]},e)}))]}),Object(En.jsx)(ce,{showModal:a,handleClick:c})]})})})),me=d.a.div(tn||(tn=Object(s.a)(["\n  grid-area: leftside;\n"]))),Oe=d.a.div(an||(an=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  transition: box-shadow 83ms;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),fe=d.a.div(rn||(rn=Object(s.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 12px 12px 16px;\n  word-wrap: break-word;\n  word-break: break-word;\n"]))),ve=d.a.div(cn||(cn=Object(s.a)(['\n  background: url("/images/card-bg.svg");\n  background-position: center;\n  background-size: 462px;\n  height: 54px;\n  margin: -12px -12px 0;\n']))),we=d.a.div(on||(on=Object(s.a)(['\n  box-shadow: none;\n  background-image: url("/images/photo.svg");\n  width: 72px;\n  height: 72px;\n  box-sizing: border-box;\n  background-clip: content-box;\n  background-color: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 60%;\n  border: 2px solid white;\n  margin: -38px auto 12px;\n  border-radius: 50%;\n']))),ye=d.a.div(sn||(sn=Object(s.a)(["\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.9);\n  font-weight: 600;\n"]))),ke=d.a.div(dn||(dn=Object(s.a)(["\n  color: #0a66c2;\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 400;\n"]))),ze=d.a.div(ln||(ln=Object(s.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding-bottom: 12px;\n  padding-top: 12px;\n\n  & > a {\n    text-decoration: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 12px;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.08);\n    }\n\n    div {\n      display: flex;\n      flex-direction: column;\n      text-align: left;\n      span {\n        font-size: 12px;\n        line-height: 1.333;\n        &:first-child {\n          color: rgba(0, 0, 0, 0.6);\n        }\n        &:nth-child(2) {\n          color: rgba(0, 0, 0, 1);\n        }\n      }\n    }\n  }\n\n  svg {\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),Se=d.a.div(xn||(xn=Object(s.a)(["\n  border-color: rgba(0, 0, 0, 0.8);\n  text-align: left;\n  padding: 12px;\n  font-size: 12px;\n  display: block;\n  span {\n    display: flex;\n    align-items: center;\n    color: rgba(0, 0, 0, 1);\n    svg {\n      color: rgba(0, 0, 0, 0.6);\n    }\n  }\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n"]))),Ne=Object(d.a)(Oe)(bn||(bn=Object(s.a)(["\n  padding: 8px 0 0;\n  display: flex;\n  text-align: left;\n  flex-direction: column;\n  a {\n    color: black;\n    padding: 4px 12px 4px 12px;\n    font-size: 12px;\n    &:hover {\n      color: #0a66c2;\n    }\n    span {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    &:last-child {\n      color: rgba(0, 0, 0, 0.6);\n      text-decoration: none;\n      border-top: 1px solid #d6cec2;\n      padding: 12px;\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.08);\n      }\n    }\n  }\n"]))),Ie=Object(o.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(En.jsxs)(me,{children:[Object(En.jsxs)(Oe,{children:[Object(En.jsxs)(fe,{children:[Object(En.jsx)(ve,{}),Object(En.jsxs)("a",{children:[Object(En.jsx)(we,{}),Object(En.jsxs)(ye,{children:["Welcome ",n.user?n.user.displayName:"there","!"]})]}),Object(En.jsx)("a",{children:Object(En.jsx)(ke,{children:"Add a photo"})})]}),Object(En.jsx)(ze,{children:Object(En.jsxs)("a",{children:[Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:"Connections"}),Object(En.jsx)("span",{children:"Grow your network"})]}),Object(En.jsx)("img",{src:"/images/widget-icon.svg",alt:""})]})}),Object(En.jsx)(Se,{children:Object(En.jsxs)("span",{children:[Object(En.jsx)("img",{src:"/images/item-icon.svg",alt:""}),"My Items"]})})]}),Object(En.jsxs)(Ne,{children:[Object(En.jsx)("a",{children:Object(En.jsx)("span",{children:"Groups"})}),Object(En.jsx)("a",{children:Object(En.jsxs)("span",{children:["Events",Object(En.jsx)("img",{src:"/images/plus-icon.svg",alt:""})]})}),Object(En.jsx)("a",{children:Object(En.jsx)("span",{children:"Follow Hashtags"})}),Object(En.jsx)("a",{children:Object(En.jsx)("span",{children:"Discover more"})})]})]})})),Ae=d.a.div(pn||(pn=Object(s.a)(["\n  grid-area: rightside;\n"]))),Ce=d.a.div(jn||(jn=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n  padding: 12px;\n"]))),Le=d.a.div(gn||(gn=Object(s.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.6);\n"]))),Ue=d.a.ul(hn||(hn=Object(s.a)(["\n  margin-top: 16px;\n  li {\n    display: flex;\n    align-items: center;\n    margin: 12px 0;\n    position: relative;\n    font-size: 14px;\n    & > div {\n      display: flex;\n      flex-direction: column;\n    }\n    button {\n      background-color: transparent;\n      color: rgba(0, 0, 0, 0.6);\n      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);\n      padding: 16px;\n      align-items: center;\n      border-radius: 15px;\n      box-sizing: border-box;\n      font-weight: 600;\n      display: inline-flex;\n      justify-content: center;\n      max-height: 32px;\n      max-width: 480px;\n      text-align: center;\n      outline: none;\n    }\n  }\n"]))),Re=d.a.div(un||(un=Object(s.a)(['\n  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 48px;\n  margin-right: 8px;\n']))),Te=d.a.a(mn||(mn=Object(s.a)(["\n  color: #0a66c2;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n"]))),Ee=Object(d.a)(Ce)(On||(On=Object(s.a)(["\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),De=function(n){return Object(En.jsxs)(Ae,{children:[Object(En.jsxs)(Ce,{children:[Object(En.jsxs)(Le,{children:[Object(En.jsx)("h2",{children:"Add to your feed"}),Object(En.jsx)("img",{src:"/images/feed-icon.svg",alt:""})]}),Object(En.jsxs)(Ue,{children:[Object(En.jsxs)("li",{children:[Object(En.jsx)("a",{children:Object(En.jsx)(Re,{})}),Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:"#linkedin"}),Object(En.jsx)("button",{children:"Follow"})]})]}),Object(En.jsxs)("li",{children:[Object(En.jsx)("a",{children:Object(En.jsx)(Re,{})}),Object(En.jsxs)("div",{children:[Object(En.jsx)("span",{children:"#Vidoe"}),Object(En.jsx)("button",{children:"Follow"})]})]})]}),Object(En.jsxs)(Te,{children:["view all Recommendation",Object(En.jsx)("img",{src:"/images/right-icon.svg",alt:""})]})]}),Object(En.jsx)(Ee,{children:Object(En.jsx)("img",{src:"/images/jobs-ad.png",alt:""})})]})},Fe=t(10),Ge=d.a.div(fn||(fn=Object(s.a)(["\n  padding-top: 52px;\n  max-width: 100%;\n"]))),Me=d.a.div(vn||(vn=Object(s.a)(["\n  min-height: 50px;\n  padding: 16px 0;\n  box-sizing: border-box;\n  text-align: center;\n  text-decoration: underline;\n  display: flex;\n  justify-content: center;\n  h5 {\n    color: #0a66c2;\n    font-size: 14px;\n    a {\n      font-weight: 700;\n    }\n  }\n\n  p {\n    font-size: 14px;\n    color: #434649;\n    font-weight: 600;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    padding: 0 5px;\n  }\n"]))),Pe=d.a.div(wn||(wn=Object(s.a)(["\n  max-width: 1128px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),We=d.a.div(yn||(yn=Object(s.a)(['\n  display: grid;\n  grid-template-areas: "leftside  main  rightside";\n  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);\n  column-gap: 25px;\n  row-gap: 25px;\n  /* grid-template-rows: auto; */\n  margin: 25px 0;\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5px;\n  }\n']))),Je=Object(o.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(En.jsxs)(Ge,{children:[!n.user&&Object(En.jsx)(Fe.a,{to:"/"}),Object(En.jsx)(Me,{children:Object(En.jsxs)(Pe,{children:[Object(En.jsx)("h5",{children:Object(En.jsx)("a",{children:"Hirring in a hurry? - "})}),Object(En.jsx)("p",{children:"Find talented pros in record time with Upwork and keep business moving."})]})}),Object(En.jsxs)(We,{children:[Object(En.jsx)(Ie,{}),Object(En.jsx)(ue,{}),Object(En.jsx)(De,{})]})]})})),Be=d.a.div(kn||(kn=Object(s.a)(["\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  left: 0;\n  padding: 0 24px;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 100;\n"]))),He=d.a.div(zn||(zn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  min-height: 100%;\n  max-width: 1128px;\n"]))),Ve=d.a.span(Sn||(Sn=Object(s.a)(["\n  font-size: 0px;\n  margin-right: 8px;\n"]))),_e=d.a.div(Nn||(Nn=Object(s.a)(["\n  width: 40px;\n  position: absolute;\n  z-index: 1;\n  top: 10px;\n  left: 2px;\n  border-radius: 0 2px 2px 0;\n  margin: 0;\n  pointer-events: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ke=d.a.div(In||(In=Object(s.a)(["\n  opacity: 1;\n  flex-grow: 1;\n  position: relative;\n  & > div {\n    max-width: 280px;\n    input {\n      border: none;\n      box-shadow: none;\n      background-color: #eef3f8;\n      border-radius: 2px;\n      color: rgba(0, 0, 0, 0.9);\n      width: 218px;\n      padding: 0 8px 0 40px;\n      line-height: 1.75;\n      font-weight: 400;\n      font-size: 14px;\n      height: 34px;\n      border-color: #dec6f1;\n      vertical-align: text-top;\n    }\n  }\n"]))),Xe=d.a.nav(An||(An=Object(s.a)(["\n  margin-left: auto;\n  display: block;\n  @media (max-width: 768px) {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background: white;\n    width: 100%;\n  }\n"]))),Ye=d.a.ul(Cn||(Cn=Object(s.a)(['\n  display: flex;\n  flex-wrap: nowrap;\n  list-style-type: none;\n\n  .active {\n    span:after {\n      content: "";\n      transform: scaleX(1);\n      border-bottom: 2px solid var(--white, #fff);\n      top: 0;\n      bottom: 0;\n      position: absolute;\n      transition: transform 0.2s ease-in-out;\n      width: 100%;\n      border-color: rgba(0, 0, 0, 0.9);\n    }\n  }\n']))),qe=d.a.li(Ln||(Ln=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  a {\n    align-items: center;\n    background: transparent;\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    font-weight: 400;\n    justify-content: center;\n    line-height: 1.5;\n    min-height: 52px;\n    min-width: 80px;\n    text-decoration: none;\n    position: relative;\n\n    span {\n      color: rgba(0, 0, 0, 0.6);\n      display: flex;\n      align-items: center;\n    }\n\n    @media (max-width: 768px) {\n      min-width: 70px;\n    }\n  }\n\n  &:hover,\n  &:active {\n    a {\n      span {\n        color: rgba(0, 0, 0, 0.9);\n      }\n    }\n  }\n"]))),Qe=d.a.div(Un||(Un=Object(s.a)(["\n  position: absolute;\n  top: 45px;\n  background: white;\n  border-radius: 0 0 5px 5px;\n  width: 100px;\n  height: 40px;\n  font-size: 15px;\n  transition-duration: 167ms;\n  display: none;\n"]))),Ze=Object(d.a)(qe)(Rn||(Rn=Object(s.a)(["\n  a > svg {\n    width: 24px;\n    border-radius: 50%;\n  }\n  a > img {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n  }\n  span {\n    display: flex;\n    align-items: center;\n  }\n  &:hover {\n    "," {\n      align-items: center;\n      justify-content: center;\n      display: flex;\n    }\n  }\n"])),Qe),$e=Object(d.a)(Ze)(Tn||(Tn=Object(s.a)(["\n  border-left: 1px solid rgba(0, 0, 0, 0.08);\n"]))),nt=Object(o.b)((function(n){return{user:n.userState.user}}),(function(n){return{signOut:function(){return n((function(n){h.signOut().then((function(){n(y(null))})).catch((function(n){console.log(n.message)}))}))}}}))((function(n){return Object(En.jsx)(Be,{children:Object(En.jsxs)(He,{children:[Object(En.jsx)(Ve,{children:Object(En.jsx)("a",{href:"/home",children:Object(En.jsx)("img",{src:"/images/home-logo.svg"})})}),Object(En.jsxs)(Ke,{children:[Object(En.jsx)("div",{children:Object(En.jsx)("input",{type:"text",placeholder:"Search"})}),Object(En.jsx)(_e,{children:Object(En.jsx)("img",{src:"/images/search-icon.svg",alt:""})})]}),Object(En.jsx)(Xe,{children:Object(En.jsxs)(Ye,{children:[Object(En.jsx)(qe,{className:"active",children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-home.svg",alt:""}),Object(En.jsx)("span",{children:"Home"})]})}),Object(En.jsx)(qe,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-network.svg",alt:""}),Object(En.jsx)("span",{children:"Network"})]})}),Object(En.jsx)(qe,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-jobs.svg",alt:""}),Object(En.jsx)("span",{children:"Jobs"})]})}),Object(En.jsx)(qe,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-messaging.svg",alt:""}),Object(En.jsx)("span",{children:"Messaging"})]})}),Object(En.jsx)(qe,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-notifications.svg",alt:""}),Object(En.jsx)("span",{children:"Notifications"})]})}),Object(En.jsxs)(Ze,{children:[Object(En.jsxs)("a",{children:[n.user&&n.user.photoURL?Object(En.jsx)("img",{src:n.user.photoURL,alt:""}):Object(En.jsx)("img",{src:"/images/user.svg",alt:""}),Object(En.jsxs)("span",{children:["Me",Object(En.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]}),Object(En.jsx)(Qe,{onClick:function(){return n.signOut()},children:Object(En.jsx)("a",{children:"Sign Out"})})]}),Object(En.jsx)($e,{children:Object(En.jsxs)("a",{children:[Object(En.jsx)("img",{src:"/images/nav-work.svg",alt:""}),Object(En.jsx)("span",{children:"Work"}),Object(En.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})})]})})]})})})),et=t(32);var tt=Object(o.b)((function(n){return{}}),(function(n){return{getUserAuth:function(){return n((function(n){h.onAuthStateChanged(function(){var e=Object(b.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&n(y(t));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}))}}}))((function(n){return Object(i.useEffect)((function(){n.getUserAuth()}),[]),Object(En.jsx)("div",{className:"App",children:Object(En.jsx)(et.a,{children:Object(En.jsxs)(Fe.d,{children:[Object(En.jsx)(Fe.b,{exact:!0,path:"/",children:Object(En.jsx)(Hn,{})}),Object(En.jsxs)(Fe.b,{exact:!0,path:"/home",children:[Object(En.jsx)(nt,{}),Object(En.jsx)(Je,{})]})]})})})})),it=t(24),at=t(44),rt=t(17),ct={user:null},ot=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;return e.type===f?Object(rt.a)(Object(rt.a)({},n),{},{user:e.user}):n},st={articles:[],loading:!1},dt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(rt.a)(Object(rt.a)({},n),{},{articles:e.payload});case v:return Object(rt.a)(Object(rt.a)({},n),{},{loading:e.status});default:return n}},lt=Object(it.b)({userState:ot,articleState:dt}),xt=Object(it.c)(lt,Object(it.a)(at.a));c.a.render(Object(En.jsx)(a.a.StrictMode,{children:Object(En.jsx)(o.a,{store:xt,children:Object(En.jsx)(tt,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.3174b5f9.chunk.js.map