(this["webpackJsonpne-admin"]=this["webpackJsonpne-admin"]||[]).push([[0],{281:function(e,t,n){},289:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(35),c=n.n(r),o=n(298),s=n(182),l=n(38),d=n(150),j=n.n(d),u=n(168),b=n(43),h=n(302),m=n(187),f=n(301),O=n(305),p=n(306),x=n(311),g=n(46),y=n(299),v=n(74),k=n(192),w=n(169),T=n(170),A=n(193),C=n(185),S=n(186),I=n(5),D=["advlist autolink lists link image charmap print preview anchor hr","searchreplace visualblocks fullscreen","insertdatetime table paste code wordcount"],R="file edit view insert format tools table tc",M=["formatselect bold italic underline forecolor","alignleft aligncenter alignright alignjustify bullist numlist outdent indent","link","undo redo","hr fullscreen"].join("|"),P={menubar:"edit insert format table"},F="jmqj7w1ihjd7561wrckugckoxwytq694mx57h29bonaq86it",U=function(e){Object(A.a)(n,e);var t=Object(C.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.plugins,i=e.menubar,r=e.toolbar,c=e.options,o=void 0===c?{}:c,s=Object(k.a)(e,["value","onChange","plugins","menubar","toolbar","options"]),l=Object.assign({},P,o);return Object(I.jsx)(S.a,Object(v.a)(Object(v.a)({},s),{},{apiKey:F,initialValue:t,init:Object(v.a)({plugins:"undefined"!==typeof a?a:D,menubar:"undefined"!==typeof i?i:R,toolbar:"undefined"!==typeof r?r:M},l),onEditorChange:n}))}}]),n}(i.a.Component);U.config=function(e){return F=e},U.setDefaultPlugins=function(e){return D=e},U.setDefaultMenubar=function(e){return R=e},U.setDefaultToolbar=function(e){return M=e},U.setDefaultOptions=function(e){return P=e};var V,L,_=U,z=n(137),B=n(80),N=n(316),E=n(196),H=n(12),W=n(310),q=n(151),G=n(53),J=n(314),K=n(315),X=n(195),Q=Object(a.memo)((function(e){var t=e.setVote,n=e.vote,a=e.imgURL,i=e.sum,r=e.title,c=e.hideVote,s=e.style;return Object(I.jsx)("div",{style:Object(v.a)({border:"1px solid #444",borderRadius:7,overflow:"hidden",maxWidth:640},s),children:Object(I.jsxs)(o.a,{style:{flexDirection:"row"},children:[Object(I.jsxs)(o.a,{style:{flex:"none",width:48,alignItems:"center"},children:[Object(I.jsx)(G.a,{title:"Upvote",children:Object(I.jsx)(g.a,{shape:"circle",type:"text",icon:Object(I.jsx)(J.a,{style:{fontSize:"1.2em"}}),onClick:function(){var e=!0;t((function(t){return e?(e=!1,++t):t}))},style:{margin:"6px 6px 0 6px"}})}),Object(I.jsx)(O.a.Text,{style:{fontWeight:500,fontSize:"0.875rem",lineHeight:1.57,textAlign:"center",color:"rgba(255, 255, 255, .7)"},children:c?"Vote":n}),Object(I.jsx)(G.a,{title:"Downvote",placement:"bottom",children:Object(I.jsx)(g.a,{shape:"circle",type:"text",onClick:function(){var e=!0;t((function(t){return e?(e=!1,--t):t}))},icon:Object(I.jsx)(K.a,{style:{fontSize:"1.2em"}})})}),Object(I.jsx)("div",{style:{flexGrow:1}}),Object(I.jsx)(G.a,{title:"Info",children:Object(I.jsx)(g.a,{shape:"circle",type:"text",style:{marginBottom:12},icon:Object(I.jsx)(X.a,{style:{fontSize:"1.5em"}})})})]}),Object(I.jsxs)(o.a,{children:[Object(I.jsxs)(o.a,{style:{padding:"6px 10px 10px"},children:[Object(I.jsx)(O.a.Title,{style:{fontWeight:500,fontSize:"1.25rem",lineHeight:1.6,marginBottom:0},children:0===r.trim().length?"Article Title":r}),Object(I.jsx)(O.a.Text,{style:{fontWeight:400,fontSize:"0.875rem",lineHeight:1.43,color:"rgba(255, 255, 255, .7)"},children:0===i.trim().length?"Article Description/summary":i})]}),Object(I.jsx)("div",{style:{backgroundImage:'url("'.concat(a,'")'),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",aspectRatio:"16/9",width:"100%"}})]})]})})})),Y=n.p+"static/media/cardDefBg.e6e41d76.webp";function Z(){var e=h.a.useForm(),t=Object(b.a)(e,1)[0],n=Object(a.useState)(""),i=Object(b.a)(n,2),r=i[0],c=i[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),l=s[0],d=s[1],v=Object(a.useState)(!1),k=Object(b.a)(v,2),w=k[0],T=k[1],A=Object(a.useState)(0),C=Object(b.a)(A,2),S=C[0],D=C[1],R=Object(a.useState)({}),M=Object(b.a)(R,2),P=M[0],F=M[1],U=Object(a.useState)(null),G=Object(b.a)(U,2),J=G[0],K=G[1],X=Object(a.useState)(!1),Z=Object(b.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useRef)();Object(a.useEffect)((function(){H.a.auth().onAuthStateChanged(F),V=H.a.firestore(),L=H.a.storage().ref()}),[]);var ne=function(){var e=Object(u.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.url){e.next=5;break}return e.next=4,new Promise((function(e){var n=new FileReader;n.readAsDataURL(t.originFileObj),n.onload=function(){return e(n.result)}}));case 4:n=e.sent;case 5:(new Image).src=n,window.open(n).document.write("<head><title>NE Admin - Preview of ".concat(t.name,"</title></head><body style=\"margin:0;min-height:100vh;\n        background-image:url('").concat(n,"');background-size:contain;background-position:center;background-repeat:no-repeat;background-color:#000\">\n        </body>"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.a.Title,{children:"Add Articles"}),Object(I.jsxs)(h.a,{form:t,onFinish:function(e){ee(!0),console.log(e),V.collection("articles").doc((+new Date).toString()).set({title:e.title,sum:e.sum,body:e.body,hideVote:!!e.hideVote,coverURL:e.fileUpload.file.response.downloadURL,uid:P.uid}).then((function(){e.fileUpload.file.response.ref.updateMetadata({customMetadata:{permanent:"yes"}}).then((function(){ee(!1),t.resetFields(),m.b.success("Added article").then()})).catch((function(e){ee(!1),t.resetFields(),m.b.warn("Added article but failed to modify file metadata")}))})).catch((function(e){ee(!1),m.b.error("We ran into an error adding this article. Please try again later").then(),console.error(e)}))},onValuesChange:function(e,t){return localStorage.tempArticle=Object(q.compress)(JSON.stringify(t))},initialValues:localStorage.tempArticle?JSON.parse(Object(q.decompress)(localStorage.tempArticle)):{},name:"article",children:[Object(I.jsx)(h.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Imagine an article without a title..."}],children:Object(I.jsx)(p.a,{onChange:function(e){return c(e.target.value)}})}),Object(I.jsx)(h.a.Item,{label:"Description/summary",onChange:function(e){return d(e.target.value)},name:"sum",rules:[{required:!0,message:"An article without a summary is boring..."}],extra:"A short summary of this article, displayed below the title in the article card",children:Object(I.jsx)(p.a,{})}),Object(I.jsx)(h.a.Item,{label:"Body",name:"body",extra:"Drag the lower right corner of editor to resize",rules:[{required:!0,message:"Article without body = no article"}],children:Object(I.jsx)(_,{onInit:function(e,t){return te.current=t},options:{contextmenu:"copy paste",images_reuse_filename:!0,images_upload_handler:function(e,t,n,a){var i=L.child("editorImages/"+Object(W.a)()+"-"+e.filename()).put(e.blob());i.on("state_changed",(function(e){a(e.bytesTransferred/e.totalBytes*100)}),(function(e){n("Upload failed: "+e.message)}),(function(){i.snapshot.ref.getDownloadURL().then((function(e){t(e)}))}))},branding:!1,skin:"custom_dark",skin_url:"https://cryptoalgorithm.github.io/tinyMCE-theme/custom_dark"}})}),Object(I.jsx)(h.a.Item,{label:"Hide votes",extra:"Number of votes will not appear and can only be viewed by admins",name:"hideVote",children:Object(I.jsx)(x.a,{checked:w,onChange:T,checkedChildren:Object(I.jsx)(z.a,{}),unCheckedChildren:Object(I.jsx)(B.a,{})})}),Object(I.jsx)(h.a.Item,{label:"Upload cover image",name:"fileUpload",extra:"Recommended dimensions: at least 600px wide, 16:9 aspect ratio, smaller than 10MB",rules:[{required:!0,message:"Please input your username!"}],children:Object(I.jsxs)(f.a.Dragger,{name:"files",customRequest:function(e){var t=e.onSuccess,n=e.onError,a=e.file,i=e.onProgress,r=L.child("articleAttachments/"+Object(W.a)()+"-"+a.name).put(a);r.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;i({percent:t})}),(function(e){n("Upload failed: "+e.message)}),(function(){r.snapshot.ref.getDownloadURL().then((function(e){K(e),t({downloadURL:e,ref:r.snapshot.ref})}))}))},maxCount:1,listType:"picture-card",onPreview:ne,beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type||"image/webp"===e.type;t||m.b.error("Unsupported file format").then();var n=e.size/1024/1024<5;return n||m.b.error("Image must smaller than 5MB").then(),!(!t||!n)||f.a.LIST_IGNORE},onRemove:function(e){return e.response.ref.delete().then((function(){m.b.success("Deleted file "+e.name).then(),K(null)})).catch((function(t){console.error(t),m.b.error("Failed to delete file "+e.name).then()}))},children:[Object(I.jsx)("p",{className:"ant-upload-drag-icon",children:Object(I.jsx)(N.a,{})}),Object(I.jsx)("p",{className:"ant-upload-text",children:"Click or drag an image to this area to upload"}),Object(I.jsx)("p",{className:"ant-upload-hint",children:"This image will be displayed in the article card"})]})}),Object(I.jsxs)(h.a.Item,{children:[Object(I.jsx)(g.a,{type:"primary",htmlType:"submit",loading:$,children:"Add article"}),Object(I.jsx)(y.a,{icon:Object(I.jsx)(E.a,{style:{color:"red"}}),title:"Clear form? Removes all entered data and cannot be undone",onConfirm:function(){return t.resetFields()},okButtonProps:{danger:!0},okText:"Clear",cancelText:"Cancel",children:Object(I.jsx)(g.a,{danger:!0,htmlType:"button",style:{marginLeft:".5rem"},children:"Clear form"})})]})]}),Object(I.jsx)(O.a.Title,{level:4,children:"Article Card Preview"}),Object(I.jsx)(O.a.Text,{children:"A preview of the article card as it would be displayed"}),Object(I.jsx)(Q,{setVote:D,vote:S,imgURL:null!==J&&void 0!==J?J:Y,style:{marginTop:"1rem"},sum:l,title:r,hideVote:w})]})}var $=n(155),ee=n(313),te=n(317),ne=n(318),ae=$.a.SubMenu,ie=["add","man","mod"],re={add:["addArticle"],man:["articleMgmt","linkMgmt"],mod:["imgMod"]},ce=Object(a.memo)((function(e){var t=e.page,n=Object(a.useState)(function(){for(var e in re)if(re[e].includes(t))return[e];return[]}()),i=Object(b.a)(n,2),r=i[0],c=i[1];return Object(I.jsxs)($.a,{onOpenChange:function(e){var t=e.find((function(e){return-1===r.indexOf(e)}));-1===ie.indexOf(t)?c(e):c(t?[t]:[])},openKeys:r,onClick:function(e){return document.location="/"+e.key},style:{width:256},selectedKeys:t,mode:"inline",children:[Object(I.jsx)(ae,{icon:Object(I.jsx)(ee.a,{}),title:"Add",children:Object(I.jsx)($.a.Item,{children:"Add Articles"},"addArticle")},"add"),Object(I.jsxs)(ae,{icon:Object(I.jsx)(te.a,{}),title:"Manage",children:[Object(I.jsx)($.a.Item,{children:"Article Management"},"articleMgmt"),Object(I.jsx)($.a.Item,{children:"Link Management"},"linkMgmt")]},"man"),Object(I.jsx)(ae,{icon:Object(I.jsx)(ne.a,{}),title:"Moderate",children:Object(I.jsx)($.a.Item,{children:"Image Post Moderation"},"imgMod")},"mod")]})})),oe=n(309),se=Object(a.memo)((function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(oe.a,{status:"404",title:"Error 404 - Not found",subTitle:"Oops, the page you're looking for could not be found",extra:Object(I.jsx)(g.a,{type:"primary",href:"/",children:"Go to home"})})})})),le=n(303),de=n(320),je=n(307),ue=n(319),be=n(178),he=n.n(be),me={signInFlow:"popup",callbacks:{signInSuccess:function(){return!1}},signInOptions:["microsoft.com"]};function fe(e){var t=e.visible,n=e.setVisible,i=Object(a.useState)({}),r=Object(b.a)(i,2),c=r[0],s=r[1],l=Boolean(c);return Object(a.useEffect)((function(){H.a.auth().onAuthStateChanged((function(e){return s(e?{name:e.displayName,uid:e.uid,email:e.email}:null)}))}),[]),Object(I.jsxs)(je.a,{title:"Account",centered:!0,destroyOnClose:!0,footer:[Object(I.jsx)(g.a,{onClick:function(){return n(!1)},children:"Close"},"close")],visible:t,onOk:function(){return n(!1)},onCancel:function(){return n(!1)},children:[l&&Object(I.jsxs)(o.a,{children:[Object(I.jsx)(O.a.Title,{level:4,children:"User Info"}),Object(I.jsxs)(O.a.Text,{children:["Display Name: ",c.name]}),Object(I.jsxs)(O.a.Text,{children:["Email: ",c.email]}),Object(I.jsxs)(O.a.Text,{children:["UID:",Object(I.jsx)(O.a.Text,{code:!0,children:c.uid})]}),Object(I.jsx)(O.a.Text,{type:"secondary",style:{marginTop:".25rem"},children:"This info is private and only visible to you"}),Object(I.jsx)(g.a,{style:{marginTop:".5rem"},icon:Object(I.jsx)(ue.a,{}),danger:!0,onClick:function(){return H.a.auth().signOut()},children:"Sign out"})]}),!l&&Object(I.jsx)(he.a,{uiConfig:me,firebaseAuth:H.a.auth()})]})}var Oe=Object(a.memo)((function(e){var t=e.page,n=Object(a.useState)(!1),i=Object(b.a)(n,2),r=i[0],c=i[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(le.a,{onBack:function(){return window.history.back()},title:"NE Things Admin",subTitle:t,extra:[Object(I.jsx)(g.a,{type:"primary",icon:Object(I.jsx)(de.a,{}),onClick:function(){return c(!0)},children:"Account"},"login")]}),Object(I.jsx)(fe,{visible:r,setVisible:c})]})})),pe=n(321),xe=n(322),ge=Object(a.memo)((function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(pe.a,{style:{fontSize:"12em",marginBottom:"1rem",marginRight:"auto"}}),Object(I.jsx)(O.a.Title,{children:"Hi there!"}),Object(I.jsxs)(O.a.Text,{children:["Click on one of the items in the menu ",Object(I.jsx)(xe.a,{})," to get started!"]})]})}));function ye(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(O.a.Title,{children:"Link Management"})})}var ve,ke=n(300),we=n(308),Te=n(180),Ae=n(312),Ce=n(304),Se=(n(281),n.p+"static/media/placeholder.9c0edb23.svg"),Ie=n(152),De=n.n(Ie);function Re(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!0),c=Object(b.a)(r,2),s=c[0],l=c[1],d=Object(a.useState)(null),j=Object(b.a)(d,2),u=j[0],h=j[1];return Object(a.useEffect)((function(){(ve=H.a.firestore()).collection("articles").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push(Object(v.a)(Object(v.a)({},e.data()),{},{_key:e.id}))})),i(t),l(!1)}))}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.a.Title,{children:"Article Management"}),s&&Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(ke.a,{size:"large",tip:"Loading articles from database..."})}),0===n.length&&!s&&Object(I.jsx)(O.a.Text,{children:'No Articles. Go to "Add Articles" to add the first article!'}),0!==n.length&&!s&&Object(I.jsx)(we.a,{defaultActiveKey:["1"],style:{borderRadius:7},destroyInactivePanel:!0,children:n.map((function(e){var t,n;return Object(I.jsx)(we.a.Panel,{header:e.title,extra:Object(I.jsx)(Te.a,{destroyTooltipOnHide:!0,visible:u===e._key,onVisibleChange:function(t){return h(t?e._key:null)},content:Object(I.jsxs)(o.a,{onClick:function(e){return e.stopPropagation()},children:[Object(I.jsx)(O.a.Text,{style:{fontWeight:700,fontSize:"1.2em"},children:"Confirm Delete"}),Object(I.jsx)(O.a.Text,{children:"This action cannot be undone"}),Object(I.jsx)(g.a,{danger:!0,type:"primary",onClick:function(){ve.collection("articles").doc(e._key).delete().then((function(){return m.b.success("Deleted article '".concat(e.title,"'")).then()})).catch((function(e){console.error(e),m.b.error("Couldn't delete article. Please try again later").then()})),h(null)},style:{marginTop:".25rem"},children:"Delete Permanently"})]}),trigger:"click",onClick:function(e){e.stopPropagation()},children:Object(I.jsx)(g.a,{icon:Object(I.jsx)(E.a,{style:{fontSize:20}}),danger:!0,size:"small",type:"text"})}),children:Object(I.jsxs)(o.a,{children:[Object(I.jsxs)(O.a.Title,{level:5,children:["Information for article '",e.title,"'"]}),Object(I.jsxs)(O.a.Text,{children:["Description: ",Object(I.jsx)("span",{style:{fontWeight:600},children:e.sum})]}),Object(I.jsxs)(O.a.Text,{children:["Votes are\xa0",Object(I.jsx)("span",{style:{fontWeight:600,color:e.hideVote?"red":"green"},children:e.hideVote?"hidden":"visible"})]}),Object(I.jsxs)(O.a.Text,{children:["Time Added: ",Object(I.jsx)("span",{style:{fontWeight:600},children:new Date(parseInt(e._key.toString())).toString()})]}),Object(I.jsx)(O.a.Title,{level:5,children:"Cover Image"}),Object(I.jsx)(Ae.b,{style:{marginBottom:".5rem"},children:Object(I.jsx)(Ce.a,{width:"auto",height:150,src:null!==(t=e.coverURL)&&void 0!==t?t:"",style:{width:"auto",borderRadius:5},fallback:Se})}),Object(I.jsxs)(we.a,{style:{borderRadius:6},destroyInactivePanel:!0,children:[Object(I.jsxs)(we.a.Panel,{header:"Article Body",children:[Object(I.jsx)("div",{dangerouslySetInnerHTML:{__html:De.a.sanitize(e.body,{ADD_TAGS:["iframe"],ADD_ATTR:["allow","allowfullscreen","frameborder","scrolling"]})},className:"artCont",style:{padding:"1rem",borderRadius:5,border:"1px solid #444"}}),Object(I.jsx)(O.a.Text,{type:"secondary",italic:1,style:{marginTop:".1rem"},children:"This is a preview - There might be subtle differences when viewed on the website"})]}),Object(I.jsx)(we.a.Panel,{header:"Card Preview",children:Object(I.jsx)(Q,{setVote:function(){},vote:0,style:{margin:"auto"},hideVote:e.hideVote,imgURL:null!==(n=e.coverURL)&&void 0!==n?n:Y,title:e.title,sum:e.sum})})]})]})},e._key)}))})]})}De.a.addHook("uponSanitizeElement",(function(e,t){if("iframe"===t.tagName&&!(e.getAttribute("src")||"").startsWith("https://www.youtube.com/embed/"))return e.parentNode.removeChild(e)}));var Me=[{path:"addArticle",name:"Add Articles",elem:Object(I.jsx)(Z,{})},{path:"articleMgmt",name:"Manage Articles",elem:Object(I.jsx)(Re,{})},{path:"linkMgmt",name:"Manage Related Links",elem:Object(I.jsx)(ye,{})}];function Pe(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(s.a,{children:Object(I.jsxs)(o.a,{style:{minHeight:"100vh"},children:[Object(I.jsxs)(l.c,{children:[Me.map((function(e){return Object(I.jsx)(l.a,{path:"/"+e.path,children:Object(I.jsx)(Oe,{page:e.name})},e.name)})),Object(I.jsx)(l.a,{exact:!0,path:"/",children:Object(I.jsx)(Oe,{page:"Home"})}),Object(I.jsx)(l.a,{children:Object(I.jsx)(Oe,{page:"404 - Not Found"})})]}),Object(I.jsxs)(o.a,{style:{flexDirection:"row"},children:[Object(I.jsxs)(l.c,{children:[Me.map((function(e){return Object(I.jsx)(l.a,{path:"/"+e.path,children:Object(I.jsx)(ce,{page:e.path,ps:Me})},e.path)})),Object(I.jsx)(l.a,{children:Object(I.jsx)(ce,{page:"",ps:Me})})]}),Object(I.jsx)(o.a,{style:{padding:".75rem"},children:Object(I.jsxs)(l.c,{children:[Me.map((function(e){return Object(I.jsx)(l.a,{path:"/"+e.path,children:e.elem},e.elem)})),Object(I.jsx)(l.a,{exact:!0,path:"/",children:Object(I.jsx)(ge,{})}),Object(I.jsx)(l.a,{children:Object(I.jsx)(se,{})})]})})]})]})})})}var Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,323)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};n(288),n(289),n(293),n(167),n(294),n(295),n(290);H.a.initializeApp({apiKey:"AIzaSyDkJIx8hbU_5-8aPBzfsKi1vHwQliKG5hg",authDomain:"ne-edu.firebaseapp.com",projectId:"ne-edu",storageBucket:"ne-edu.appspot.com",messagingSenderId:"296273538078",appId:"1:296273538078:web:dda01455949345d57b520f",measurementId:"G-0XJHB0Z6JV"}),H.a.appCheck().activate("6LedN1kbAAAAAFFSX5v4tpkG2xY0lVRSkm9fP90f"),c.a.render(Object(I.jsx)(Pe,{}),document.getElementById("root")),Fe()}},[[292,1,2]]]);
//# sourceMappingURL=main.5f3b2e85.chunk.js.map