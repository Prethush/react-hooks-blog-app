(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),n=r(16),c=r.n(n),o=r(2),l=r(3),i=r(4),d=Object(a.createContext)(),u=d.Provider,j=(d.Consumer,d),m=r(0);function b(e){var t=Object(a.useContext)(j).data.user,r=e.handleLogout;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.c,{activeClassName:"active",to:"/profiles/".concat(t.username),children:Object(m.jsxs)("li",{className:"flex items-center text-xl mx-3 ",children:[Object(m.jsx)("i",{className:"fas fa-user mr-2"}),Object(m.jsx)("span",{className:"",children:t.username})]})}),Object(m.jsx)(l.c,{activeClassName:"active",to:"/settings",children:Object(m.jsxs)("li",{className:"text-xl mx-3",children:[Object(m.jsx)("i",{className:"fas fa-cog mr-2"}),Object(m.jsx)("span",{className:"",children:"Setings"})]})}),Object(m.jsx)(l.c,{activeClassName:"active",to:"/addArticle",children:Object(m.jsxs)("li",{className:"text-xl mx-3",children:[Object(m.jsx)("i",{className:"fas fa-newspaper mr-2"}),Object(m.jsx)("span",{className:"",children:"New Article"})]})}),Object(m.jsx)("li",{className:"text-xl mx-3",children:Object(m.jsx)("span",{className:"cursor-pointer",onClick:r,children:"Logout"})})]})}function x(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.c,{activeClassName:"active",to:"/register",children:Object(m.jsx)("li",{className:"text-xl mr-6",children:"Sign up"})}),Object(m.jsx)(l.c,{activeClassName:"active",to:"/login",children:Object(m.jsx)("li",{className:"text-xl mr-6",children:"Log in"})})]})}var h=Object(i.f)((function(e){var t=Object(a.useContext)(j),r=t.data.isLoggedIn,s=t.handleLogout;return Object(m.jsxs)("header",{className:"flex flex-col items-center py-6 sm:flex sm:flex-col sm:py-4 lg:flex lg:flex-row lg:justify-between  bg-gray-100 lg:px-20  sm:px-12 sm:items-center",children:[Object(m.jsx)(l.c,{to:"/",children:Object(m.jsx)("h1",{className:"text-3xl py-4 sm:text-3xl md:text-4xl font-bold text-green-500 font-tertiary",children:"Blog App"})}),Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{className:"flex flex-col text-xs sm:flex sm:flex-row",children:r?Object(m.jsx)(b,{handleLogout:function(){localStorage.clear(),s(),e.history.push("/")}}):Object(m.jsx)(x,{})})})]})})),f="https://mighty-oasis-08080.herokuapp.com/api/",p=f+"articles",O=f+"user",g=f+"profiles/";r(33);var v=function(e){return Object(m.jsxs)("div",{className:"containern h-screen bg-blue-400",children:[Object(m.jsx)("div",{className:"loader",children:"..."}),Object(m.jsx)("div",{id:"load"})]})};r(34);var y=function(e){return Object(m.jsxs)("div",{className:"bouncing-loader",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})};var N=Object(i.f)((function(e){var t=Object(a.useContext)(j).data.isLoggedIn,r=e.articles,s=e.error;return s?Object(m.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:s}):r?r.length?Object(m.jsx)("article",{children:r.map((function(r){return Object(m.jsxs)("div",{className:"bg-gray-100 shadow-custom flex justify-between mb-12 w-full p-4 rounded-md",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"flex items-center my-8",children:[Object(m.jsx)("img",{src:r.author.image,alt:r.author.username,className:"w-14 h-14 rounded-full object-cover"}),Object(m.jsxs)("div",{className:"ml-4",children:[t?Object(m.jsx)(l.b,{to:"/profiles/".concat(r.author.username),children:Object(m.jsx)("h5",{className:"text-red-500 font-bold text-md lg:text-xl",children:r.author.username})}):Object(m.jsx)("h5",{className:"text-red-500 font-bold text-md lg:text-xl",children:r.author.username}),Object(m.jsx)("h6",{children:(a=r.createdAt,new Date(a).toISOString().split("T")[0])})]})]}),Object(m.jsx)("h2",{className:"text-xl lg:text-2xl font-bold mb-2",children:r.title}),Object(m.jsx)(l.b,{to:"/articles/".concat(r.slug),children:Object(m.jsx)("h4",{className:"bg-green-400 text-white font-bold rounded-lg inline-block py-1 px-3 text-sm",children:"Read More"})})]}),Object(m.jsxs)("div",{className:"flex items-center sm:text-md lg:text-xl",children:[Object(m.jsx)("i",{className:t?r.favorited?"fas fa-heart cursor-pointer text-pink-600":"fas fa-heart cursor-pointer":"fas fa-heart",onClick:function(t){return e.handleFavorite(t)},"data-id":r.favorited,"data-slug":r.slug}),Object(m.jsx)("span",{className:"ml-2",children:r.favoritesCount})]})]},r.slug);var a}))}):Object(m.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:"No articles found"}):Object(m.jsx)(y,{})}));var w=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=Object(a.useState)(null),n=Object(o.a)(s,2),c=n[0],l=n[1],i=Object(a.useState)(!1),d=Object(o.a)(i,2),u=d[0],j=d[1],m=Object(a.useState)(!1),b=Object(o.a)(m,2),x=b[0],h=b[1];return Object(a.useEffect)((function(){j(!0),fetch(e,t).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){l(e),j(!1)})).catch((function(e){h(!0),j(!1)}))}),r),{data:c,loading:u,error:x}};var S=function(e){var t="",r="",a=w("https://mighty-oasis-08080.herokuapp.com/api/tags",{method:"GET"});return a.data&&(t=a.data.tags.filter((function(e){return Boolean(e)}))),a.error&&(r="Not able to fetch Tags"),r?Object(m.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:r}):t?Object(m.jsx)("div",{className:"flex flex-wrap bg-gray-200 px-4 py-8 rounded-md",children:t.map((function(t){return Object(m.jsx)("span",{className:e.tagSelected===t?"bg-red-500 p-2 cursor-pointer text-white text-xs rounded-md mx-1 my-1":"bg-gray-700 p-2 cursor-pointer text-white text-xs rounded-md mx-1 my-1",onClick:function(t){return e.selectTag(t)},"data-value":t,children:t},t)}))}):Object(m.jsx)(y,{})};var k=function(e){var t=e.articlesPerPage,r=e.articlesCount,a=e.activePage,s=function(e,t){for(var r=Math.ceil(t/e),a=[],s=0;s<r;s++)a.push(s+1);return a}(t,r);return Object(m.jsx)(m.Fragment,{children:s.length>1&&s.map((function(t,r){return Object(m.jsx)("span",{className:Number(a)===r+1?"bg-black text-white py-2 px-4 mx-2 sm:mx-4 cursor-pointer my-2 ":"border border-gray-300 py-2 px-4 mx-2 sm:mx-4 my-2 cursor-pointer","data-id":r+1,onClick:function(t){return e.handleClick(t)},children:t},t)}))})};var C=function(e){var t=Object(a.useContext)(j),r=Object(a.useState)(null),s=Object(o.a)(r,2),n=s[0],c=s[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),d=i[0],u=i[1],b=Object(a.useState)(null),x=Object(o.a)(b,2),h=x[0],f=x[1],O=Object(a.useState)(""),g=Object(o.a)(O,2),v=g[0],y=g[1],w=Object(a.useState)(""),C=Object(o.a)(w,2),E=C[0],T=C[1],P=Object(a.useState)(1),A=Object(o.a)(P,2),L=A[0],D=A[1],I=Object(a.useState)(0),z=Object(o.a)(I,2),B=z[0],F=z[1],U=t.data.isLoggedIn;return Object(a.useState)((function(){T(U?"myfeed":"global")}),[]),Object(a.useEffect)((function(){var e=10*(L-1),t=v,r="myfeed"===E?"https://mighty-oasis-08080.herokuapp.com/api/articles/feed"+"?limit=".concat(10,"&offset=").concat(e):p+"?limit=".concat(10,"&offset=").concat(e)+(t&&"&tag=".concat(t));fetch(r,{method:"GET",headers:{Authorization:"Token "+localStorage.token}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){console.log(e),c(e.articles),f(e.articlesCount)})).catch((function(e){u("Not able to fetch Articles")}))}),[E,L,v,B]),console.log(U),Object(m.jsx)("main",{children:Object(m.jsxs)("section",{className:"px-8 py-12 lg:px-28 lg:py-12",children:[Object(m.jsxs)("div",{className:"flex mb-3 text-xs sm:text-lg lg:text-xl",children:[Object(m.jsxs)("span",{className:U?"myfeed"===E?"mr-8 cursor-pointer text-green-500 pb-2 border-b-2 border-green-500":" mr-8 cursor-pointer green":"hidden",onClick:function(){D(1),T("myfeed"),y("")},children:[" ",Object(m.jsx)("i",{className:"fas fa-newspaper mr-2"}),"My feed"]}),Object(m.jsxs)("span",{className:"global"===E?"cursor-pointer text-green-500 pb-2 border-b-2 border-green-500":"cursor-pointer",onClick:function(){y(""),T("global"),D(1)},children:[Object(m.jsx)("i",{className:"fas fa-newspaper mr-2"}),"Global Feed"]}),Object(m.jsxs)("div",{className:v?"visible text-xs sm:text-lg lg:text-xl":"hidden",children:[Object(m.jsx)("span",{className:"mx-4 text-gray-500",children:"/"}),Object(m.jsxs)("span",{className:"text-green-700 pb-2 border-b-2 border-green-700",children:["#",v]})]})]}),Object(m.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-between py-8",children:[Object(m.jsx)("div",{className:"flex-100 lg:flex-70",children:Object(m.jsx)(N,{articles:n,error:d,handleFavorite:function(e){var t=e.target.dataset,r=t.id,a=t.slug;U&&fetch(p+"/"+a+"/favorite",{method:"false"===r?"POST":"DELETE",headers:{Authorization:"Token "+localStorage.token}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){F(B+1)})).catch((function(e){return console.log(e)}))}})}),Object(m.jsx)("div",{className:"flex-100 lg:flex-25",children:Object(m.jsx)(S,{selectTag:function(e){var t=e.target.dataset.value;y(t),D(1),T("")},tagSelected:v})})]}),Object(m.jsx)("div",{className:"flex justify-center flex-wrap pt-4 py-6",children:Object(m.jsx)(k,{articlesCount:h,articlesPerPage:10,activePage:L,handleClick:function(e){var t=e.target.dataset.id;D(t)}})})]})})};var E=function(e){var t=Object(a.useContext)(j),r=e.comments,s=t.data.isLoggedIn,n=t.data.user.username;return r?Object(m.jsx)(m.Fragment,{children:r.length>0?r.map((function(t){return Object(m.jsxs)("div",{className:"flex flex-col sm:flex-row sm:item-center p-6 bg-gray-100 mb-8 relative shadow-custom rounded-md",children:[Object(m.jsx)("div",{className:"",children:Object(m.jsx)("img",{src:t.author.image,alt:t.author.username,className:"w-16 h-16 rounded-full"})}),Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center",children:[Object(m.jsx)("h4",{className:"my-2 sm:ml-6",children:t.author.username}),Object(m.jsxs)("h4",{className:"my-2 sm:ml-6",children:["#",(r=t.createdAt,new Date(r).toISOString().split("T")[0])]}),Object(m.jsx)("span",{className:n===t.author.username&&s?"sm:absolute sm:right-4 text-xl":"hidden",children:Object(m.jsx)("i",{className:"fas fa-trash cursor-pointer text-red-500","data-id":t.id,onClick:function(t){return e.handleDelete(t)}})})]}),Object(m.jsx)("p",{className:"sm:ml-6 my-4 text-xl font-semibold",children:t.body})]})]},t.createdAt);var r})):Object(m.jsx)("h2",{className:"text-xl",children:"No comments yet!"})}):Object(m.jsx)(y,{})};var T=function(e){var t=null,r=Object(a.useState)(""),s=Object(o.a)(r,2),n=s[0],c=s[1],l=Object(a.useState)(!1),i=Object(o.a)(l,2),d=i[0],u=i[1],b=Object(a.useState)(!1),x=Object(o.a)(b,2),h=x[0],f=x[1],O=Object(a.useContext)(j),g=e.slug,v=w(p+"/"+g+"/comments",{method:"GET"},[d,h]);v.data&&(t=v.data.comments),v.error&&console.log(v.error);var y=O.data.isLoggedIn;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:y?"":"hidden",children:Object(m.jsxs)("form",{className:"my-6 w-full",onSubmit:function(t){t.preventDefault();var r=e.slug;n&&fetch(p+"/"+r+"/comments",{method:"POST",body:JSON.stringify({comment:{body:n}}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){console.log(e),c(""),u(!d)})).catch((function(e){return console.log(e)}))},children:[Object(m.jsx)("textarea",{className:"w-full border-2 border-gray-400 rounded-md p-3 outline-none focus:border-blue-500",rows:"6",placeholder:"Enter Comments",value:n,onChange:function(e){var t=e.target.value;c(t)},name:"inputText"}),Object(m.jsx)("input",{type:"submit",value:"Add Comment",className:"bg-blue-500 w-min self-end my-4 py-2 px-4 text-white rounded-md cursor-pointer hover:bg-blue-400"})]})}),Object(m.jsx)("div",{className:"my-8",children:Object(m.jsx)(E,{comments:t,handleDelete:function(t){var r=t.target.dataset.id;console.log(typeof r);var a=e.slug;fetch(p+"/"+a+"/comments/"+r,{method:"DELETE",headers:{Authorization:"Token "+localStorage.token}}).then((function(e){if(!e.ok)return e.json().then((function(e){var t=e.errors;return Promise.reject(t)}));f(!h)})).catch((function(e){return console.log(e)}))}})})]})};var P=Object(i.f)((function(e){var t=null,r=null,s=Object(a.useContext)(j),n=s.data,c=n.isLoggedIn,o=n.user,l=w(p+"/".concat(e.match.params.slug),{method:"GET"});if(l.data&&(t=l.data.article),l.error&&(r="Not able to fetch Articles"),r)return Object(m.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:r});if(!t)return Object(m.jsx)(y,{});var i,d=t.tagList;return Object(m.jsxs)("main",{className:"pb-12",children:[Object(m.jsxs)("section",{className:"px-20 bg-articlePage text-white py-12",children:[Object(m.jsx)("h2",{className:"mt-2 mb-3 text-4xl",children:t.title}),Object(m.jsx)("p",{className:"",children:t.description}),Object(m.jsxs)("div",{className:"flex flex-col items-start py-6 sm:flex-row sm:items-center",children:[Object(m.jsx)("img",{src:t.author.image,alt:t.author.username,className:"w-16 h-16 object-cover rounded-full"}),Object(m.jsx)("span",{className:"mx-3 my-2",children:t.author.username}),Object(m.jsx)("span",{className:"mx-3 my-1",children:(i=t.createdAt,new Date(i).toISOString().split("T")[0])})]}),Object(m.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between",children:[Object(m.jsx)("div",{className:"flex flex-col sm:flex-row sm:justify-between",children:d.map((function(e){return e&&Object(m.jsx)("span",{className:"mr-3 bg-red-400 p-1 px-2 text-xs rounded-md w-max my-2",children:e},e)}))}),Object(m.jsxs)("div",{className:"my-3",children:[Object(m.jsx)("span",{className:c&&o.username===t.author.username?"bg-blue-500 py-2 px-4 text-white rounded-md mr-4 cursor-pointer":"hidden",onClick:function(){var r=t.slug;console.log(e,"props"),e.history.push({pathname:"/articles/edit/".concat(r),article:t})},children:"Edit"}),Object(m.jsx)("span",{className:c&&o.username===t.author.username?"bg-red-500 py-2 px-4 text-white rounded-md mr-4 cursor-pointer":"hidden",onClick:function(){var t=s.data.user;fetch(p+"/"+e.match.params.slug,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.token}}).then((function(r){if(!r.ok)return r.json().then((function(e){var t=e.errors;return Promise.reject(t)}));e.history.push("/profiles/".concat(t.username))})).catch((function(e){return console.log(e)}))},children:"Delete"})]})]})]}),Object(m.jsx)("section",{className:"px-20 py-12",children:Object(m.jsx)("p",{className:"text-xl",children:t.body})}),Object(m.jsxs)("section",{className:"px-20",children:[Object(m.jsx)("h2",{className:"text-3xl font-bold",children:"Comments"}),Object(m.jsx)(T,{slug:t.slug})]})]})}));var A=function(e){return Object(m.jsx)("h2",{className:"text-red-700 text-xl text-center py-8 font-bold",children:"404 Page Not Found"})};var L=Object(i.f)((function(e){var t=Object(a.useState)(""),r=Object(o.a)(t,2),s=r[0],n=r[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),i=l[0],d=l[1],u=Object(a.useState)(""),j=Object(o.a)(u,2),b=j[0],x=j[1],h=Object(a.useState)(""),f=Object(o.a)(h,2),O=f[0],g=f[1],v=Object(a.useState)(""),y=Object(o.a)(v,2),N=y[0],w=y[1],S=function(e){var t=e.target,r=t.name,a=t.value;"title"===r&&n(a),"description"===r&&d(a),"body"===r&&x(a),"tags"===r&&g(a)};return Object(m.jsx)("main",{children:Object(m.jsx)("section",{className:"pt-20 px-8",children:Object(m.jsxs)("form",{className:"w-full md:w-1/2 md:mx-auto p-8 border border-gray-400 rounded-md",onSubmit:function(t){t.preventDefault();var r="Bearer "+localStorage.token;t.preventDefault(),s&&i&&b&&O?fetch(p,{method:"POST",body:JSON.stringify({article:{title:s,description:i,body:b,tagList:O.split(",").map((function(e){return e.trim()}))}}),headers:{"Content-Type":"application/json",Authorization:r}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(t){e.history.push("/articles")})).catch((function(e){console.log(e),n(""),d(""),x(""),g(""),w("")})):(n(""),d(""),x(""),g(""),w("Enter all fields"))},children:[Object(m.jsx)("legend",{className:"text-2xl sm:text-3xl text-center font-bold my-3",children:"Add Article"}),Object(m.jsxs)("fieldset",{className:"",children:[Object(m.jsx)("span",{className:"text-red-500 my-1",children:N}),Object(m.jsx)("input",{type:"text",value:s,placeholder:"Title",name:"title",onChange:S,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("input",{type:"text",value:i,name:"description",placeholder:"Description",onChange:S,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("textarea",{rows:"6",value:b,name:"body",placeholder:"Articles's Body",onChange:S,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("input",{type:"text",value:O,name:"tags",placeholder:"Tag List(comma seperated)",onChange:S,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("input",{type:"submit",value:"Add Article",className:"my-2 p-2 rounded-md outline-none bg-blue-500 hover:bg-blue-400 text-white w-full"})]})]})})})}));function D(e,t,r){switch(t){case"username":e.username=r?r.length<6?"username should be atleast 6 characters":"":"username is required";break;case"passwd":e.passwd=function(e){return e?e.length<6?"Password must be alteast 6 characters long":-1===e.search(/[a-zA-Z]/)?"Password must contain atleast one letter":-1===e.search(/\d/)?"Password must contain atleast one number":"":"Password is required"}(r);break;case"email":e.email=r?/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)?"":"Email is invalid":"email is required"}}var I=Object(i.f)((function(e){var t=Object(a.useContext)(j),r=Object(a.useState)(t.data.user.image),s=Object(o.a)(r,2),n=s[0],c=s[1],l=Object(a.useState)(t.data.user.username),i=Object(o.a)(l,2),d=i[0],u=i[1],b=Object(a.useState)(t.data.user.email),x=Object(o.a)(b,2),h=x[0],f=x[1],p=Object(a.useState)(t.data.user.bio),g=Object(o.a)(p,2),v=g[0],N=g[1],w=Object(a.useState)(""),S=Object(o.a)(w,2),k=S[0],C=S[1],E=Object(a.useState)({username:"",email:"",passwd:""}),T=Object(o.a)(E,2),P=T[0],A=T[1],L=function(e){var t=e.target,r=t.name,a=t.value,s=P;D(s,r,a),"username"===r&&(u(a),A(s)),"email"===r&&(f(a),A(s)),"passwd"===r&&(C(a),A(s)),"bio"===r&&(N(a),A(s)),"image"===r&&(c(a),A(s))};return d||h||n||v?Object(m.jsx)("main",{className:"",children:Object(m.jsx)("section",{className:"pt-20 px-8",children:Object(m.jsxs)("form",{className:"w-full md:w-1/2 md:mx-auto p-8 border border-gray-400 rounded-md",onSubmit:function(r){r.preventDefault(),d&&n&&k&&h&&v&&fetch(O,{method:"PUT",body:JSON.stringify({user:{username:d,email:h,password:k,bio:v,image:"https://pbs.twimg.com/profile_images/1368973967025836036/yIJ1QI8o_400x400.jpg"}}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token}}).then((function(e){return console.log(e),e.ok?e.json():e.json().then((function(e){for(var t in e.errors)P[t]="".concat(t," ").concat(e.errors[t]);return Promise.reject({errors:P})}))})).then((function(r){t.handleUser(r.user),e.history.push("/profiles/".concat(r.user.username))})).catch((function(e){return A(P)}))},children:[Object(m.jsx)("legend",{className:"text-center text-2xl sm:text-3xl my-2 font-bold",children:"Settings"}),Object(m.jsxs)("fieldset",{className:"",children:[Object(m.jsx)("input",{type:"text",placeholder:"Image Url",value:n,onChange:L,name:"image",className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("input",{type:"text",name:"username",value:d,onChange:L,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("span",{className:"my-1 text-red-500",children:P.username}),Object(m.jsx)("input",{type:"email",name:"email",value:h,onChange:L,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("span",{className:"my-1 text-red-500",children:P.email}),Object(m.jsx)("input",{type:"password",name:"passwd",value:k,placeholder:"Password",onChange:L,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("span",{className:"my-1 text-red-500",children:P.passwd}),Object(m.jsx)("textarea",{value:v,rows:"6",name:"bio",placeholder:"Enter your Bio",onChange:L,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500 w-full"}),Object(m.jsx)("input",{type:"submit",value:"Update",className:"my-2 p-2 rounded-md outline-none bg-blue-500 hover:bg-blue-400 text-white w-full"})]})]})})}):Object(m.jsx)(y,{})}));var z=Object(i.f)((function(e){var t=Object(a.useState)(""),r=Object(o.a)(t,2),s=r[0],n=r[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),i=l[0],d=l[1],u=Object(a.useState)(""),b=Object(o.a)(u,2),x=b[0],h=b[1],f=Object(a.useState)(null),O=Object(o.a)(f,2),v=O[0],w=O[1],S=Object(a.useState)(1),C=Object(o.a)(S,2),E=C[0],T=C[1],P=Object(a.useState)("author"),A=Object(o.a)(P,2),L=A[0],D=A[1],I=Object(a.useState)(null),z=Object(o.a)(I,2),B=z[0],F=z[1],U=Object(a.useState)(0),G=Object(o.a)(U,2),J=G[0],M=G[1],q=Object(a.useContext)(j);if(Object(a.useEffect)((function(){var t=e.match.params.id;fetch(g+t,{method:"GET",headers:{Authorization:"Bearer "+localStorage.token}}).then((function(e){return console.log(e.ok),e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){var t=e.profile;console.log({profile:t}),n(t),console.log(s,"profile"),d(t.following)})).catch((function(e){return console.log(e)}))}),[e.match.params]),Object(a.useEffect)((function(){var e=s.username;console.log(s,"user");var t=10*(E-1);console.log("".concat(p,"?").concat(L,"=").concat(e,"&limit=").concat(10,"&offset=").concat(t)),e&&fetch("".concat(p,"?").concat(L,"=").concat(e,"&limit=").concat(10,"&offset=").concat(t),{method:"GET",headers:{Authorization:"Token "+localStorage.token}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){F(e.articles),w(e.articlesCount)})).catch((function(e){h("Not able to fetch Articles")}))}),[s,L,E,J]),!s)return Object(m.jsx)(y,{});var Z=s.username,H=s.image,W=s.bio,_=q.data.user.username;return Object(m.jsx)("main",{children:Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:"bg-articlePage text-white py-16 text-center",children:[Object(m.jsx)("img",{src:H,alt:Z,className:"w-40 h-40 rounded-full mx-auto"}),Object(m.jsx)("h2",{className:"text-2xl sm:text-3xl md:text-5xl my-4",children:Z}),Object(m.jsx)("h3",{className:"sm:text-lg md:text-2xl text-pink-300",children:W}),Object(m.jsxs)("button",{className:_!==Z?"visible bg-white text-gray-700 px-8 py-3 rounded-md mt-6":"hidden",onClick:function(){var e=s.username;fetch(g+"/"+e+"/follow",{method:i?"DELETE":"POST",headers:{Authorization:"Bearer "+localStorage.token}}).then((function(e){return e.ok?e.json():e.json().then((function(e){e.errors;return Promise.reject()}))})).then((function(e){var t=e.profile;console.log(t),d(t.following)})).catch((function(e){return console.log(e)}))},children:[i?"Unfollow ".concat(Z):"Follow ".concat(Z)," "]})]}),Object(m.jsxs)("article",{className:"px-8 sm:px-12 md:px-40",children:[Object(m.jsxs)("div",{className:"py-12",children:[Object(m.jsxs)("span",{className:"author"===L?"cursor-pointer text-md sm:text-xl text-green-500 pb-2 border-b-2 border-green-500":"cursor-pointer text-md sm:text-xl",onClick:function(){D("author"),T(1)},children:[Object(m.jsx)("i",{className:"fas fa-newspaper mr-2"}),"My Articles"]}),Object(m.jsx)("span",{className:"mx-4",children:"/"}),Object(m.jsxs)("span",{className:"favorited"===L?"cursor-pointer text-md sm:text-xl text-green-500 pb-2 border-b-2 border-green-500":"cursor-pointer text-md sm:text-xl",onClick:function(){D("favorited"),T(1)},children:[Object(m.jsx)("i",{className:"fas fa-newspaper mr-2"}),"Favorited"]})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)(N,{articles:B,error:x,isLoggedIn:q.data.isLoggedIn,handleFavorite:function(e){var t=e.target.dataset,r=t.id,a=t.slug,s="false"===r?"POST":"DELETE";console.log(s),console.log(r,a),fetch(p+"/"+a+"/favorite",{method:s,headers:{Authorization:"Token "+localStorage.token}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){M(J+1)})).catch((function(e){return console.log(e)}))}})})]}),Object(m.jsx)("div",{className:"text-center py-8",children:Object(m.jsx)(k,{articlesCount:v,articlesPerPage:10,activePage:E,handleClick:function(e){var t=e.target.dataset.id;T(t)}})})]})})})),B=r(19),F=r(8),U=r(9),G=r(11),J=r(10),M=function(e){Object(G.a)(r,e);var t=Object(J.a)(r);function r(e){var a;return Object(F.a)(this,r),(a=t.call(this)).getArticle=function(){fetch(p+"/".concat(a.props.match.params.slug)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.article,r=t.title,s=t.description,n=t.tagList,c=t.body;a.setState({article:t,title:r,body:c,description:s,tags:n.join(",")})})).catch((function(e){console.log(e)}))},a.handleChange=function(e){var t=e.target,r=t.name,s=t.value;a.setState(Object(B.a)({},r,s))},a.handleSubmit=function(e){var t=a.state,r=t.title,s=t.description,n=t.body,c=t.tags,o="Bearer "+localStorage.token;e.preventDefault(),r&&s&&n&&c?fetch(p+"/"+a.props.match.params.slug,{method:"PUT",body:JSON.stringify({article:{title:r,description:s,body:n,tagList:c.split(",").map((function(e){return e.trim()}))}}),headers:{"Content-Type":"application/json",Authorization:o}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){a.props.history.push("/articles/".concat(a.props.match.params.slug))})).catch((function(e){console.log(e)})):a.setState({error:"Enter all fields"})},a.state={article:"",title:"",description:"",body:"",tags:"",error:""},a}return Object(U.a)(r,[{key:"componentDidMount",value:function(){this.getArticle()}},{key:"render",value:function(){var e=this.state,t=e.title,r=e.description,a=e.body,s=e.tags,n=e.error;return e.article?Object(m.jsx)("main",{children:Object(m.jsx)("section",{className:"pt-20",children:Object(m.jsxs)("form",{className:"w-1/2 mx-auto p-8 border border-gray-400 rounded-md",onSubmit:this.handleSubmit,children:[Object(m.jsx)("legend",{className:"text-3xl text-center font-bold my-3",children:"Update Article"}),Object(m.jsxs)("fieldset",{className:"flex flex-col",children:[Object(m.jsx)("span",{className:"text-red-500 my-1",children:n}),Object(m.jsx)("input",{type:"text",value:t,placeholder:"Title",name:"title",onChange:this.handleChange,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(m.jsx)("input",{type:"text",value:r,name:"description",placeholder:"Description",onChange:this.handleChange,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(m.jsx)("textarea",{rows:"6",value:a,name:"body",placeholder:"Articles's Body",onChange:this.handleChange,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(m.jsx)("input",{type:"text",value:s,name:"tags",placeholder:"Tag List(comma seperated)",onChange:this.handleChange,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(m.jsx)("input",{type:"submit",value:"Update Article",className:"my-2 p-2 rounded-md outline-none bg-blue-500 hover:bg-blue-400 text-white "})]})]})})}):Object(m.jsx)(y,{})}}]),r}(s.a.Component),q=Object(i.f)(M);var Z=function(e){return Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"bg-green-500 py-12 text-white text-center",children:[Object(m.jsx)("h2",{className:"py-6 text-3xl sm:text-5xl font-bold",children:"Welcome to Blog App"}),Object(m.jsx)("h4",{className:"text-lg sm:text-xl mb-6",children:"Where good ideas find you..."}),Object(m.jsx)(l.b,{to:"/articles",children:Object(m.jsx)("button",{className:"bg-blue-500 text-white font-bold px-4 py-2 rounded-md",children:"Go to Articles Page"})})]})})};var H=function(e){return Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/articles",exact:!0,children:Object(m.jsx)(C,{})}),Object(m.jsx)(i.a,{path:"/",exact:!0,children:Object(m.jsx)(Z,{})}),Object(m.jsx)(i.a,{path:"/articles/edit/:slug",children:Object(m.jsx)(q,{})}),Object(m.jsx)(i.a,{path:"/articles/:slug",children:Object(m.jsx)(P,{})}),Object(m.jsx)(i.a,{path:"/addArticle",children:Object(m.jsx)(L,{})}),Object(m.jsx)(i.a,{path:"/settings",children:Object(m.jsx)(I,{})}),Object(m.jsx)(i.a,{path:"/profiles/:id",children:Object(m.jsx)(z,{user:e.user,isLoggedIn:e.isLoggedIn})}),Object(m.jsx)(i.a,{path:"*",children:Object(m.jsx)(A,{})})]})};var W=Object(i.f)((function(e){var t=Object(a.useState)(""),r=Object(o.a)(t,2),s=r[0],n=r[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),d=i[0],u=i[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),x=b[0],h=b[1],f=Object(a.useState)({username:"",email:"",passwd:""}),p=Object(o.a)(f,2),O=p[0],g=p[1],v=function(e){var t=e.target,r=t.name,a=t.value,s=O;console.log(s),D(s,r,a),"username"===r&&(n(a),g(s)),"email"===r&&(u(a),g(s)),"passwd"===r&&(h(a),g(s))};return Object(m.jsx)("main",{children:Object(m.jsx)("section",{className:"mt-20 px-8",children:Object(m.jsxs)("form",{className:"w-full md:w-1/3 mx-auto border border-gray-400 p-6 rounded-md",onSubmit:function(t){t.preventDefault(),s&&x&&d&&fetch("https://mighty-oasis-08080.herokuapp.com/api/users",{method:"POST",body:JSON.stringify({user:{username:s,password:x,email:d}}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){for(var t in e.errors)O[t]="".concat(t," ").concat(e.errors[t]);return Promise.reject(O)}))})).then((function(t){e.history.push("/login")})).catch((function(e){h(""),u(""),n(""),g(O)}))},children:[Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("legend",{className:"text-2xl font-bold",children:"Sign Up"}),Object(m.jsx)(l.b,{to:"/login",children:Object(m.jsx)("span",{className:"text-blue-700 text-lg text-center",children:"Have an account? "})})]}),Object(m.jsxs)("fieldset",{className:"my-3",children:[Object(m.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Username",value:s,name:"username",onChange:function(e){return v(e)}}),Object(m.jsx)("span",{className:"text-red-500",children:O.username}),Object(m.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Email",value:d,name:"email",onChange:function(e){return v(e)}}),Object(m.jsx)("span",{className:"text-red-500",children:O.email}),Object(m.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"password",placeholder:"Enter Password",value:x,name:"passwd",onChange:function(e){return v(e)}}),Object(m.jsx)("span",{className:"text-red-500",children:O.passwd}),Object(m.jsx)("input",{type:"submit",value:"Sign Up",className:"block w-full my-6 py-2 px-3 bg-blue-500 text-white font-bold cursor-pointer",disabled:O.username||O.email||O.passwd})]})]})})})}));var _=Object(i.f)((function(e){var t=Object(a.useContext)(j),r=Object(a.useState)(""),s=Object(o.a)(r,2),n=s[0],c=s[1],i=Object(a.useState)(""),d=Object(o.a)(i,2),u=d[0],b=d[1],x=Object(a.useState)(""),h=Object(o.a)(x,2),f=h[0],p=h[1],O=function(e){var t=e.target,r=t.name,a=t.value;"email"===r&&c(a),"passwd"===r&&b(a)};return Object(m.jsx)("main",{children:Object(m.jsx)("section",{className:"mt-20 px-8",children:Object(m.jsxs)("form",{className:"w-full md:w-1/3 mx-auto border border-gray-400 p-6 rounded-md",onSubmit:function(r){r.preventDefault(),u&&n&&fetch("https://mighty-oasis-08080.herokuapp.com/api/users/login",{method:"POST",body:JSON.stringify({user:{password:u,email:n}}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=Object.keys(e.errors);return f="".concat(t," ").concat(e.errors[t]," "),Promise.reject(f)}))})).then((function(r){t.handleUser(r.user),e.history.push("/articles")})).catch((function(e){b(""),c(""),p(e)}))},children:[Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("legend",{className:"text-2xl font-bold",children:"Sign In"}),Object(m.jsx)(l.b,{to:"/register",children:Object(m.jsx)("span",{className:"text-blue-700 text-lg text-center",children:"Need an account? "})})]}),Object(m.jsxs)("fieldset",{className:"my-3",children:[Object(m.jsx)("span",{className:"text-red-500",children:f}),Object(m.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Email",value:n,name:"email",onChange:function(e){return O(e)}}),Object(m.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"password",placeholder:"Enter Password",value:u,name:"passwd",onChange:function(e){return O(e)}}),Object(m.jsx)("input",{type:"submit",value:"Login In",className:"block w-full my-6 py-2 px-3 bg-blue-500 text-white font-bold cursor-pointer"})]})]})})})}));var Q=function(e){return Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",exact:!0,children:Object(m.jsx)(Z,{})}),Object(m.jsx)(i.a,{path:"/articles",exact:!0,children:Object(m.jsx)(C,{})}),Object(m.jsx)(i.a,{path:"/",exact:!0,children:Object(m.jsx)(Z,{})}),Object(m.jsx)(i.a,{path:"/articles/:slug",children:Object(m.jsx)(P,{})}),Object(m.jsx)(i.a,{path:"/register",children:Object(m.jsx)(W,{})}),Object(m.jsx)(i.a,{path:"/login",children:Object(m.jsx)(_,{})}),Object(m.jsx)(i.a,{path:"*",children:Object(m.jsx)(A,{})})]})},R=function(e){Object(G.a)(r,e);var t=Object(J.a)(r);function r(){var e;Object(F.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={hasError:!1},e.handleClick=function(){e.setState({hasError:!1}),e.props.history.push("/")},e}return Object(U.a)(r,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){var e=this.state,t=e.hasError,r=e.errorInfo;return console.log(r),t?Object(m.jsxs)("div",{className:"text-center pt-8",children:[Object(m.jsx)("h3",{className:"text-xl text-red-500 my-3",children:"something went wrong"}),Object(m.jsx)("span",{className:"bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer",onClick:this.handleClick,children:"Go back to Home Page"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){this.setState({hasError:!0})}}]),r}(s.a.Component),$=Object(i.f)(R);var K=function(e){var t=Object(a.useState)(!1),r=Object(o.a)(t,2),s=r[0],n=r[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),d=i[0],j=i[1],b=Object(a.useState)(!0),x=Object(o.a)(b,2),f=x[0],p=x[1];Object(a.useEffect)((function(){var e=localStorage.getItem("token");e?fetch(O,{method:"GET",headers:{Authorization:"Bearer "+e}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){g(e.user)})).catch((function(e){return console.log(e)})):p(!1)}),[]);var g=function(e){n(!0),j(e),p(!1),localStorage.setItem("token",e.token)};return f?Object(m.jsx)(v,{}):Object(m.jsx)(l.a,{children:Object(m.jsx)(u,{value:{data:{isLoggedIn:s,user:d},handleUser:g,handleLogout:function(){n(!1)}},children:Object(m.jsxs)($,{children:[Object(m.jsx)(h,{}),s?Object(m.jsx)(H,{}):Object(m.jsx)(Q,{})]})})})};r(35);c.a.render(Object(m.jsx)(K,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7dd94374.chunk.js.map