(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);a(57);var s=a(2),c=a(4),n=a(1),r=a.n(n),l=a(5),i=a(0);var o=function(e){let t="",a=0;switch(e.size){case"small":a=16;break;case"medium":a=32;break;case"large":a=64;break;default:a=24}switch(e.name){case"book":case"package-library":return Object(i.jsx)(l.a,{size:e.size});case"download":return Object(i.jsx)(l.f,{size:e.size});case"code":return Object(i.jsx)(l.d,{size:e.size});case"check":return Object(i.jsx)(l.c,{size:e.size});case"check-circle":return Object(i.jsx)(l.b,{size:e.size});case"graph":return Object(i.jsx)(l.l,{size:e.size});case"tag":return Object(i.jsx)(l.t,{size:e.size});case"shield-check":return Object(i.jsx)(l.q,{size:e.size});case"flame":return Object(i.jsx)(l.j,{size:e.size});case"repo-forked":return Object(i.jsx)(l.p,{size:e.size});case"triangle-up":return Object(i.jsx)(l.v,{size:e.size});case"triangle-down":return Object(i.jsx)(l.u,{size:e.size});case"link":return Object(i.jsx)(l.n,{size:e.size});case"link-external":return Object(i.jsx)(l.m,{size:e.size});case"star-fill":return Object(i.jsx)(l.s,{size:e.size});case"copy":return Object(i.jsx)(l.e,{size:e.size});case"mark-github":return Object(i.jsx)(l.o,{size:e.size});case"file-directory-fill":return Object(i.jsx)(l.g,{size:e.size});case"file":return Object(i.jsx)(l.h,{size:e.size});case"file-zip":return Object(i.jsx)(l.i,{size:e.size});case"package-platform":return Object(i.jsx)(l.r,{size:e.size});case"package-tool":return Object(i.jsx)(l.k,{size:e.size});case"chart-up":t=Object(i.jsx)("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.6 0-5-1.3-6.4-3.3l2.8-3.4 1.3 1.5c.4.4 1 .4 1.3 0l2.9-3.2 1.3 1.4c.3.3.8.1.8-.3V8.5c0-.3-.2-.5-.5-.5h-4c-.4 0-.6.5-.3.8l1.3 1.4-2.2 2.5L9 11.3c-.4-.4-1-.4-1.3 0L4.6 15c-.4-.9-.6-1.9-.6-3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"});break;case"chart-down":t=Object(i.jsx)("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1-3.9L8.4 12c.4.4 1 .4 1.4 0l1.4-1.5 2.4 2.6-1.4 1.4c-.3.3-.1.9.4.9h4.3c.3 0 .5-.2.5-.5v-4.3c0-.4-.5-.7-.9-.3L15 11.6l-3.1-3.3c-.4-.4-1-.4-1.4 0L9.2 9.8 6.3 6.4C7.7 4.9 9.7 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8z"});break;default:return"Unknown icon"}return Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",className:"pricon",children:t})};function d(){const[e]=Object(c.c)(),[t,a]=Object(n.useState)(!1),[s,l]=Object(n.useState)(e.get("query")),d=r.a.createRef(),j=(e=>{191===e.keyCode&&d.current&&(d.current.focus(),a(!0),e.preventDefault(),m()),27===e.keyCode&&d.current.blur()}).bind(this),m=()=>{document.removeEventListener("keydown",j)};return Object(n.useEffect)((()=>(document.addEventListener("keydown",j),function(){m()}))),Object(i.jsx)("nav",{className:"navbar navbar-dark navbar-expand-lg bg-dark shadow",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("a",{className:"navbar-brand",href:"/",children:[Object(i.jsx)("img",{src:"/favicon.png",alt:"",className:"d-inline-block"}),Object(i.jsx)("small",{className:"ms-2",children:"Registry"})]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarToggler",children:[Object(i.jsxs)("form",{role:"search",action:"/search",method:"get",className:"pe-2",children:[Object(i.jsx)("div",{className:"float-end position-relative ".concat(t?"invisible":"visible"),children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"20","aria-hidden":"true",className:"position-absolute",style:{right:"0.2rem",top:"0.3rem"},children:[Object(i.jsx)("path",{fill:"none",stroke:"#979A9C",opacity:".4",d:"M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"}),Object(i.jsx)("path",{fill:"#979A9C",d:"M11.8 6L8 15.1h-.9L10.8 6h1z"})]})}),Object(i.jsx)("input",{className:"form-control form-control-sm border-secondary ".concat(t?"":"bg-dark text-white"),type:"search",ref:d,name:"query",placeholder:"Search...","aria-label":"Search",value:s,onChange:e=>l(e.target.value),onFocus:()=>a(!0),onBlur:()=>{a(!1)}})]}),Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:"Explore"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:"Pricing"})})]}),Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item external-item",children:Object(i.jsx)("a",{className:"nav-link",href:"https://docs.platformio.org",children:Object(i.jsxs)("small",{children:["Documentation ",Object(i.jsx)(o,{name:"link-external"})]})})}),Object(i.jsx)("li",{className:"nav-item external-item pe-2",children:Object(i.jsx)("a",{className:"nav-link",href:"https://platformio.org",children:Object(i.jsxs)("small",{children:["PlatformIO.Org ",Object(i.jsx)(o,{name:"link-external"})]})})}),Object(i.jsx)("li",{className:"nav-item technology-item",children:Object(i.jsx)("a",{className:"nav-link",href:"https://piolabs.com",children:"TECHNOLOGY"})})]})]})]})})}var j=a(49);var m=function(e){return Object(i.jsxs)(j.a,{titleTemplate:"%s \u2013 PlatformIO",children:[Object(i.jsx)("title",{children:e.title}),Object(i.jsx)("meta",{name:"description",content:e.description}),e.noindex?Object(i.jsx)("meta",{name:"robots",content:"noindex"}):""]})},b=a(17),h=a.n(b),p=a(52),u=a.n(p),x=a(36),O=a.n(x),g=a(9),f=a.n(g),v=a(56),y=a(27),N=a(53),k=a.n(N);O.a.extend(a(66)),f.a.registerLanguage("plaintext",a(67)),f.a.registerLanguage("c",a(68)),f.a.registerLanguage("cpp",a(69)),f.a.registerLanguage("json",a(70)),f.a.registerLanguage("ini",a(71)),f.a.registerLanguage("python",a(72)),f.a.registerLanguage("shell",a(73)),y.marked.setOptions({renderer:new y.marked.Renderer,highlight:function(e,t){const a=f.a.getLanguage(t)?t:"plaintext";return f.a.highlight(e,{language:a}).value},langPrefix:"hljs language-"});var w=function(e){if("time"===e.type){const t=O()(e.value);return Object(i.jsx)("time",{dateTime:e.value,title:t.toString(),children:e.format?t.format(e.format):t.from()})}if("url"===e.type)return Object(v.a)(e.value);if("size"===e.type)return k()(e.value);if("counter"===e.type)try{return new Intl.NumberFormat("en-US").format(e.value)}catch(t){return e.value}if("markdown"===e.type)return Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:u.a.sanitize(y.marked.parse(e.value))}});if("original-version"===e.type){const t=e.value.split(".");if(3!==t.length)return e.value;const a=t[1];if(parseInt(a)<=99)return e.value;const s=parseInt(a)<=9999?"".concat(parseInt(a.slice(0,-2)),".").concat(parseInt(a.slice(-2))):"".concat(a.slice(0,-4),".").concat(parseInt(a.slice(-4,-2)),".").concat(parseInt(a.slice(-2)));return"".concat(e.value," (").concat(s,")")}throw new Error("Unknown humanize type -> "+e.type)};function _(e){let{code:t,lang:a}=e;const[s,c]=Object(n.useState)(!1),[r,l]=Object(n.useState)(!1),o=f.a.getLanguage(a)?a:"plaintext";return Object(i.jsxs)("div",{className:"file-contents",onMouseOver:e=>c(!0),onMouseOut:e=>c(!1),children:[Object(i.jsx)("div",{className:"position-relative float-end ".concat(s?"visible":"invisible"),children:Object(i.jsx)(h.a,{text:t,onCopy:()=>{l(!0),setTimeout((()=>l(!1)),2e3)},children:Object(i.jsx)("button",{type:"button",className:"btn-copy-code btn btn-sm btn-outline-".concat(r?"success":"primary"),"data-bs-toggle":"tooltip",title:"Click to Copy Code",children:r?"Copied!":"Copy"})})}),Object(i.jsx)("pre",{className:"p-0 m-0",children:Object(i.jsx)("code",{className:"m-0 hljs language-".concat(o),dangerouslySetInnerHTML:{__html:f.a.highlight(t,{language:o}).value}})})]})}var z=function(e){return Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("div",{className:"spinner-border spinner-border-sm",role:"status",children:Object(i.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})};var S=a(37),P=a.n(S),C=a(15);function L(e){return"libraries"===e&&(e="library"),e.endsWith("s")&&(e=e.slice(0,-1)),e}var I=function(e){const{contents:t}=function(e){const{data:t,error:a}=Object(C.b)(e,(async e=>(await P.a.get(e,{transformResponse:[]})).data),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1});return{contents:t,isLoading:!a&&!t,isError:a}}(e.url);if(!t)return Object(i.jsx)(z,{});const a=e.url.substring(e.url.lastIndexOf("/")+1).toLowerCase(),s=a.substring(a.lastIndexOf(".")+1).toLowerCase();return"md"===s?Object(i.jsx)("div",{className:"readme-contents",children:Object(i.jsx)(w,{type:"markdown",value:t})}):function(e,t){["h","hpp","ino","pde"].includes(t)&&(t="cpp");return Object(i.jsx)(_,{code:e,lang:t})}(t,s)};function T(e){if(!e)return;const t=new URL(e);if(!["github.com","gitlab.com"].includes(t.hostname))return;const a=t.pathname.split("/");if(a.length<3)return;let[,s,c]=a;return c.endsWith(".git")&&(c=c.slice(0,-4)),{provider:t.hostname.split(".")[0],username:s,reponame:c}}var E=a(14),U=a.n(E);function F(e,t){const a=(t="examples".concat(t?"/".concat(t):"")).split("/");return Object(i.jsx)("nav",{"aria-label":"breadcrumb",children:Object(i.jsx)("ol",{className:"breadcrumb",children:a.map(((t,s)=>s===a.length-1?Object(i.jsx)("li",{className:"breadcrumb-item active",children:0===s?"Examples":t},s):Object(i.jsx)("li",{className:"breadcrumb-item",children:Object(i.jsx)(c.b,{to:e.makeSelfUrl({extraPath:a.slice(0,s+1).join("/")}),children:0===s?"Examples":t})},s)))})})}function R(e,t,a){const s=function(e,t){const a=(t=t||"")?t.split("/").length:0,s=e.sort(M).find((e=>t.startsWith(e.name))),c=s?s.files.map((e=>"".concat(s.name,"/").concat(e.path))):e.map((e=>e.name)),n=a=>{const c=t?[t,a].join("/"):a;if(!s){const t=e.find((e=>e.name===c));if(t&&1===t.files.length&&!t.files[0].path.includes("/"))return[c,t.files[0].path].join("/")}return c},r=[],l=[];for(const i of c){if(!i.startsWith(t))continue;const e=i.split("/")[a];l.includes(e)||(l.push(e),r.push({isFile:i===[t,e].join("/")&&s,name:e,path:n(e)}))}return r.sort(q)}(t,a),n=s.find((e=>["readme","readme.md","readme.rst","readme.txt"].includes(e.name.toLowerCase())));let r;return n&&t.forEach((e=>{e.files.forEach((t=>[e.name,t.path].join("/")===n.path?r=t.url:""))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"list-group example-explorer",children:s.map((t=>Object(i.jsxs)(c.b,{to:e.makeSelfUrl({extraPath:"examples/".concat(t.path)}),className:"list-group-item list-group-item-action",children:[Object(i.jsx)(o,{name:t.isFile?"file":"file-directory-fill",size:"18"}),Object(i.jsx)("span",{className:"ms-2",children:t.name})]},t.path)))}),r?Object(i.jsx)("div",{className:"mt-3",children:Object(i.jsx)(I,{url:r})}):""]})}function M(e,t){return e.name.length<t.name.length?1:e.name.length>t.name.length?-1:0}function q(e,t){return e.isFile&&!t.isFile?1:!e.isFile&&t.isFile?-1:e.name>t.name?1:e.name<t.name?-1:0}function A(e){const t=e.data.repository_url||e.data.homepage,a=T(e.data.repository_url);if(!a)return t;const s=e.makeSelfUrl({resolve:!0}),c="[FR] Project Examples for PlatformIO Registry",n="\nHi,\n\nCurrently, the [".concat(e.data.type," page](").concat(s,") in the PlatformIO Registry doesn't contain any quick start projects for developers. Such examples serve both to highlight widespread use cases and to help newcomers to get up and running much more quickly.\n\nPlease consider adding a few comprehensive project examples to the PlatformIO Registry.\n\nUseful links:\n- ").concat(s,"\n- https://docs.platformio.org/en/latest/librarymanager/config.html#examples\n").trim();switch(a.provider){case"github":return"https://github.com/".concat(a.username,"/").concat(a.reponame,"/issues/new?").concat(U.a.stringify({title:c,body:n}));case"gitlab":return"https://gitlab.com/".concat(a.username,"/").concat(a.reponame,"/-/issues/new/?").concat(U.a.stringify({"issue[title]":c,"issue[description]":n}));default:return t}}var H=function(e){const t=Object(s.g)()["*"]||void 0,[a]=Object(c.c)(),n=a.get("version"),{items:r,isLoading:l}=function(e){let{type:t,ownername:a,name:s,version:c}=e;t=L(t);const{data:n,error:r}=Object(C.b)("/v3/packages/".concat(a,"/").concat(t,"/").concat(s,"/examples").concat(c?"?version=".concat(c):""),{revalidateIfStale:!1,revalidateOnFocus:!c,revalidateOnReconnect:!c});return{items:n,isLoading:!r&&!n,isError:r}}({type:e.data.type,ownername:e.data.owner.username,name:e.data.name,version:n});if(l)return Object(i.jsx)(z,{});if(!r||!r.length)return Object(i.jsx)("div",{className:"card text-center",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{className:"card-title",children:"No examples"}),Object(i.jsxs)("p",{className:"card-text",children:["The ",Object(i.jsx)("b",{children:e.data.name})," package does not provide any examples but you can request them."]}),Object(i.jsx)("a",{href:A(e),className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",children:"Request examples"})]})});let d,j;return r.forEach((e=>{(t+"/").startsWith(e.name+"/")&&(j=e),e.files.forEach((a=>[e.name,a.path].join("/")===t?d=a.url:""))})),Object(i.jsxs)("div",{className:"examples",children:[Object(i.jsxs)("div",{className:"d-flex flex-row my-2",children:[Object(i.jsx)("div",{className:"flex-fill",children:F(e,t)}),j?Object(i.jsx)("div",{children:Object(i.jsxs)("a",{className:"btn btn-sm btn-success text-nowrap",href:"".concat("https://dl.registry.platformio.org","/download/").concat(e.data.owner.username,"/").concat(e.data.type,"/").concat(e.data.name,"/").concat(e.data.version.name,"/example/").concat(j.name,".zip"),role:"button","data-bs-toggle":"tooltip",title:'Download "'.concat(j.name.split("/").slice(-1),'" example'),children:[Object(i.jsx)(o,{name:"file-zip"})," Download"]})}):""]}),d?Object(i.jsx)(I,{url:d}):R(e,r,t)]})},W=a(3),Y=a.n(W),D=a(54),B=a.n(D);function V(e){const[t,a]=Object(n.useState)(!1);if(!e.value||e.value.length<=e.max)return e.value;const s=Object(i.jsx)("button",{type:"button",className:"btn btn-link btn-sm btn-truncate",onClick:()=>a(!t),children:t?e.lessTitle:e.moreTitle});return Object(i.jsxs)(i.Fragment,{children:[t?e.value:e.value instanceof Array?e.value.slice(0,e.max):J(e.value,e.max),s]})}function J(e,t){if(e.length<t)return e;for(e=B()(e,t,{ellipse:""});[".",",",";"].includes(e[e.length-1]);)e=e.substring(0,e.length-1);return e+"..."}V.defaultProps={lessTitle:"Show less",moreTitle:"Show more"},V.propTypes={value:Y.a.oneOfType([Y.a.string,Y.a.array]).isRequired,max:Y.a.number.isRequired,lessTitle:Y.a.string,moreTitle:Y.a.string};var $=V;function G(e,t){let a,s;switch(e){case"library":a="lib_deps",s="https://docs.platformio.org/en/latest/projectconf/section_env_library.html#lib-deps";break;case"platform":a="platform",s="https://docs.platformio.org/en/latest/projectconf/section_env_platform.html";break;case"tool":a="platform_packages",s="https://docs.platformio.org/en/latest/projectconf/section_env_platform.html#platform-packages";break;default:return}return Object(i.jsxs)(i.Fragment,{children:["tool"===e?Object(i.jsxs)("div",{className:"alert alert-warning",role:"alert",children:["You do not need to install tools manually, they are part of"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/platforms/index.html",children:"Development Platforms"}),". If you want to override a platform-dependent tool with another version, see the instruction below."]}):"",Object(i.jsx)("h2",{children:"Quick Start"}),Object(i.jsxs)("ol",{className:"mb-4",children:[Object(i.jsxs)("li",{className:"pb-1",children:["Open"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/projectconf/index.html",children:"platformio.ini"}),", a project configuration file located in the root of PlatformIO project."]}),Object(i.jsxs)("li",{children:["Add the following ",Object(i.jsx)("a",{href:s,children:a})," option to your"," ",Object(i.jsx)("code",{children:"[env:]"})," section:",Object(i.jsx)("div",{className:"py-1 user-select-all",children:Object(i.jsx)(_,{code:"".concat(a," = ").concat(t),lang:"cpp"})})]}),Object(i.jsx)("li",{children:"Build a project, PlatformIO will automatically install dependencies."})]})]})}function Q(e,t){const a=t({extraPath:"examples"});let s;var n;return"library"===e.type&&(e.headers||[]).length?s=function(e,t,a){if(1===t.length)return Object(i.jsxs)("ol",{children:[Object(i.jsxs)("li",{className:"pb-1",children:["Add the following line to your source code:",Object(i.jsx)("div",{className:"my-1 user-select-all",children:Object(i.jsx)(_,{code:"#include <".concat(t[0],">"),lang:"cpp"})})]}),Object(i.jsxs)("li",{children:["Check ",Object(i.jsx)(c.b,{to:a,children:"Examples"})," on how to use the"," ",Object(i.jsx)("b",{children:e})," library."]})]});return Object(i.jsxs)(i.Fragment,{children:["The ",Object(i.jsx)("b",{children:e})," library provides the next header files that can be included in your project:",Object(i.jsx)("ul",{className:"list-inline headers-list",children:Object(i.jsx)($,{value:t.map((e=>Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsx)("code",{className:"user-select-all",children:e})}))),max:5,moreTitle:"+ ".concat(t.length-5," headers")})}),Object(i.jsx)("div",{className:"my-1 user-select-all",children:Object(i.jsx)(_,{code:"#include <".concat(t[0],">"),lang:"cpp"})})]})}(e.name,e.headers,a):"tool"===e.type&&(n=e.name,s=Object(i.jsxs)(i.Fragment,{children:["The ",Object(i.jsx)("b",{children:n})," will be installed to the"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/projectconf/section_platformio.html#packages-dir",children:"package storage"})," ","on your machine. You can later refer to the ",Object(i.jsx)("b",{children:n})," folder in the"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/projectconf/index.html",children:"platformio.ini"})," ","file using the"," ",Object(i.jsx)("code",{children:"${platformio.package_dir}"})," ","interpolation. ",Object(i.jsx)("br",{}),"See examples with"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/projectconf/section_env_upload.html#upload-command",children:"upload_command"})," ","and"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/projectconf/section_env_debug.html#debug-server",children:"debug_server"}),"."]})),Object(i.jsxs)("div",{className:"mb-4",children:[Object(i.jsx)("h2",{children:"Usage"}),s||Object(i.jsxs)(i.Fragment,{children:["Please check ",Object(i.jsx)(c.b,{to:a,children:"Examples"})," on how to use this package."]})]})}function K(e,t){let a,s;switch(e){case"library":a="pio lib install",s="https://docs.platformio.org/en/latest/core/userguide/lib/cmd_install.html";break;case"platform":a="pio platform install",s="https://docs.platformio.org/en/latest/core/userguide/platforms/cmd_install.html";break;default:return}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Command Line Interface"}),Object(i.jsxs)("ol",{className:"mb-4",children:[Object(i.jsxs)("li",{className:"pb-1",children:["Open"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/core/index.html",children:"PlatformIO Core CLI"}),"."]}),"library"===e?Object(i.jsxs)("li",{className:"pb-1",children:["Change directory (",Object(i.jsx)("code",{children:"cd"}),") to the PlatformIO project where"," ",Object(i.jsx)("a",{href:"https://docs.platformio.org/en/latest/projectconf/index.html",children:"platformio.ini"})," ","is located."]}):"",Object(i.jsxs)("li",{children:["Copy the following ",Object(i.jsx)("a",{href:s,children:a})," command and paste into the CLI shell, press ",Object(i.jsx)("kbd",{children:"Enter"}),":",Object(i.jsx)("div",{className:"my-1 user-select-all",children:Object(i.jsx)(_,{code:"".concat(a,' "').concat(t,'"'),lang:"cpp"})})]})]})]})}var X=function(e){let t;e.data.version.is_latest?/^[\d.]+$/.test(e.data.version.name)&&(t="^"+e.data.version.name):t=e.data.version.name;const a="".concat(e.data.owner.username,"/").concat(e.data.name).concat(t?"@".concat(t):"");return Object(i.jsxs)("div",{className:"installation readme-contents",children:[G(e.data.type,a),Q(e.data,e.makeSelfUrl),K(e.data.type,a)]})};function Z(e){const t="https://img.shields.io/badge/PlatformIO-".concat(e.message,"-blue?logo=bmw");return e.withCode?Object(i.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(i.jsx)("div",{className:"pe-2",children:Object(i.jsx)("img",{src:t,alt:e.title})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("div",{children:Object(i.jsx)(b.CopyToClipboard,{text:'<a href="'.concat(e.href,'"><img src="').concat(t,'" alt="').concat(e.title,'" /></a>'),children:Object(i.jsx)("button",{type:"button",className:"btn btn-link btn-sm p-0","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Copy HTML code",children:"HTML"})})}),Object(i.jsx)("div",{className:"px-1",children:"\u2022"}),Object(i.jsx)("div",{children:Object(i.jsx)(b.CopyToClipboard,{text:"[![".concat(e.title,"](").concat(t,")](").concat(e.href,")"),children:Object(i.jsx)("button",{type:"button",className:"btn btn-link btn-sm p-0","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Copy Markdown code",children:"Markdown"})})})]})})]}):Object(i.jsx)("img",{src:t,alt:e.title})}Z.defaultProps={withCode:!0};var ee=Z;var te=function(e){const t=e.makeSelfUrl({extraPath:"versions"}),a=e.makeSelfUrl({extraPath:"insights/authors"});return Object(i.jsx)("aside",{className:"package-sidebar",children:Object(i.jsxs)("ul",{className:"list-group list-group-flush",children:[e.data.homepage?Object(i.jsxs)("li",{className:"list-group-item",children:[Object(i.jsx)("h3",{children:"Homepage"}),Object(i.jsx)(o,{name:"link"}),Object(i.jsx)("a",{href:e.data.homepage,className:"text-small ms-2",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)(w,{type:"url",value:e.data.homepage})})]}):"",e.data.repository_url?Object(i.jsxs)("li",{className:"list-group-item",children:[Object(i.jsx)("h3",{children:"Repository"}),Object(i.jsx)(o,{name:e.data.repository_url.includes("https://github.com")?"mark-github":"repo-forked"}),Object(i.jsx)("a",{href:e.data.repository_url,className:"text-small ms-2",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)(w,{type:"url",value:e.data.repository_url})})]}):"",Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("h3",{children:"Popularity"}),Object(i.jsxs)("div",{className:"hstack align-items-start gap-2 fs-6",children:[Object(i.jsx)("div",{className:e.data.popularity_trend<0?"text-danger":"text-success",children:Object(i.jsx)(o,{name:e.data.popularity_trend<0?"chart-down":"chart-up"})}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)(w,{type:"counter",value:e.data.popularity_rank})})}),Object(i.jsx)("div",{className:"text-muted popularity",children:Object(i.jsxs)("small",{children:[Object(i.jsx)(o,{name:e.data.popularity_trend<0?"triangle-down":"triangle-up"}),Math.abs(e.data.popularity_trend)]})})]})]}),Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("h3",{children:"License"}),e.data.license?Object(i.jsx)("a",{href:"https://spdx.org/licenses/".concat(e.data.license,".html"),target:"_blank",rel:"noopener noreferrer",children:e.data.license}):"Unknown"]})]})}),e.data.stars_count>0||e.data.open_issues_count>0?Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("h3",{children:"Stars"}),Object(i.jsx)(o,{name:"star-fill"}),Object(i.jsx)("span",{className:"ms-2",children:Object(i.jsx)(w,{type:"counter",value:e.data.stars_count})})]}),Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("h3",{children:"Issues"}),Object(i.jsx)(w,{type:"counter",value:e.data.open_issues_count})]})]})}):"",Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("h3",{children:"Last Modified"}),Object(i.jsx)(w,{type:"time",value:e.data.modified_at})]}),Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("h3",{children:"Unpacked Size"}),Object(i.jsx)(w,{type:"size",value:e.data.version.unpacked_size})]})]})}),Object(i.jsxs)("li",{className:"list-group-item py-3",children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)(c.b,{to:t,className:"link-secondary",children:"Versions"})," ",Object(i.jsx)("span",{className:"badge rounded-pill bg-gray-200 text-dark",children:e.data.versions.length})]}),Object(i.jsxs)("div",{className:"hstack align-items-start gap-2",children:[Object(i.jsx)("div",{className:e.data.version.is_latest?"text-success":"text-danger",children:Object(i.jsx)(o,{name:"tag"})}),Object(i.jsx)("div",{children:Object(i.jsx)(c.b,{to:t,children:e.data.version.name})}),e.data.version.is_latest?Object(i.jsx)("div",{children:Object(i.jsx)("span",{className:"badge rounded-pill border border-success text-success",children:"Latest"})}):Object(i.jsx)("div",{children:Object(i.jsx)("span",{className:"badge rounded-pill border border-danger text-danger",children:"Newer version available"})})]}),Object(i.jsx)("div",{className:"text-muted ms-4",children:Object(i.jsx)("small",{children:Object(i.jsx)(w,{type:"time",value:e.data.version.released_at})})}),e.data.versions.length>1?Object(i.jsx)("div",{className:"mt-2",children:Object(i.jsx)(c.b,{to:t,className:"text-small",children:"+ ".concat(e.data.versions.length-1," versions")})}):""]}),Object(i.jsxs)("li",{className:"list-group-item py-3",children:[Object(i.jsxs)("h3",{className:"mb-0",children:[Object(i.jsx)(c.b,{to:a,className:"link-secondary",children:"Authors"})," ",Object(i.jsx)("span",{className:"badge rounded-pill bg-gray-200 text-dark",children:e.data.authors.length})]}),Object(i.jsx)("ul",{className:"list-inline authors-list",children:Object(i.jsx)($,{value:e.data.authors.map((e=>Object(i.jsx)("li",{className:"list-inline-item author-item mt-2",children:Object(i.jsx)(c.b,{to:a,children:Object(i.jsx)("div",{className:"rounded-circle pt-1","data-bs-toggle":"tooltip",title:e.name,style:{height:"35px",width:"35px"},children:Object(i.jsx)("small",{children:e.name.split(" ").slice(0,2).map((e=>e[0].toUpperCase())).join("")})})})}))),max:5,moreTitle:"+ ".concat(e.data.authors.length-5," authors")})})]}),Object(i.jsxs)("li",{className:"list-group-item py-3",children:[Object(i.jsx)("h3",{children:"Badge"}),Object(i.jsx)(ee,{title:"PlatformIO Package Registry",message:"v".concat(e.data.version.name),href:e.makeSelfUrl({resolve:!0})})]})]})})},ae=a(28),se=a.n(ae);function ce(e,t){const a=T(e);if(!a)return e;switch(a.provider){case"github":return"https://github.com/".concat(a.username,"/").concat(a.reponame,"/releases/tag/v").concat(t);case"gitlab":return"https://gitlab.com/".concat(a.username,"/").concat(a.reponame,"/-/tags/v").concat(t);default:return e}}var ne=function(e){const t={},a={};for(const s of e.data.versions){const e=se.a.coerce(s.name),c=se.a.major(e);t[s.name]=c,a[c]&&!se.a.gt(e,a[c])||(a[c]=s.name)}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"alert alert-info text-center",role:"alert",children:["All"," ",Object(i.jsx)("span",{className:"badge bg-secondary rounded-pill",children:e.data.versions.length})," ","versions of ",Object(i.jsx)("b",{children:e.data.name})," since"," ",Object(i.jsx)(w,{type:"time",value:e.data.added_at,format:"MMMM D, YYYY"}),"."]}),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"Major"}),Object(i.jsx)("th",{scope:"col",children:"Version"}),Object(i.jsx)("th",{scope:"col",children:"Size"}),Object(i.jsx)("th",{scope:"col",children:"Published"}),Object(i.jsx)("th",{scope:"col"})]})}),Object(i.jsx)("tbody",{children:e.data.versions.map((s=>Object(i.jsxs)("tr",{className:e.data.version.name===s.name?"table-secondary":"",children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"badge rounded-pill py-2 px-3 ".concat(a[t[s.name]]===s.name?s.is_latest?"bg-success":"bg-secondary":"text-dark bg-gray-200"," ").concat(s.is_latest?"fw-bold":""),children:"".concat(t[s.name],".x")})}),Object(i.jsx)("td",{children:Object(i.jsxs)(c.b,{to:e.makeSelfUrl({customVersion:s.is_latest?null:s.name}),className:s.is_latest?"link-success fw-bold":"",children:[s.name,s.is_latest?Object(i.jsx)("span",{className:"badge rounded-pill border border-success text-success ms-3",children:"Latest"}):""]})}),Object(i.jsx)("td",{className:"text-muted",children:Object(i.jsx)(w,{type:"size",value:s.unpacked_size})}),Object(i.jsx)("td",{className:"text-muted",children:Object(i.jsx)(w,{type:"time",value:s.released_at})}),Object(i.jsx)("td",{children:e.data.repository_url?Object(i.jsx)("small",{children:Object(i.jsx)("a",{href:ce(e.data.repository_url,s.name),className:"link-secondary",target:"_blank",rel:"noopener noreferrer",children:"Release Notes"})}):""})]},s.name)))})]})]})};function re(e){const t=[{name:"readme",icon:"book",active:"readme"===e.leftoverPath},{name:"installation",icon:"download",active:"installation"===e.leftoverPath},{name:"examples",icon:"code",counter:e.data.examples_count||0,active:e.leftoverPath.startsWith("examples"),disabled:"tool"===e.data.type},{name:"compatibility",icon:"check-circle",active:"compatibility"===e.leftoverPath},{name:"insights",icon:"graph"}];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("nav",{children:Object(i.jsx)("ul",{className:"package-tabs nav nav-pills nav-fill flex-column flex-lg-row",children:t.filter((e=>!e.disabled)).map((t=>Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(c.b,{className:"nav-link ".concat(t.active?"active":""),"aria-controls":t.name,"aria-selected":t.active?"true":"false",to:de({type:e.data.type,ownername:e.data.owner.username,name:e.data.name,extraPath:"readme"!==t.name?t.name:void 0,version:e.data.version.is_latest?void 0:e.data.version.name}),children:[Object(i.jsx)(o,{name:t.icon}),t.name[0].toUpperCase()+t.name.slice(1),t.counter?Object(i.jsx)("span",{className:"badge rounded-pill bg-gray-200 text-dark ms-2",children:t.counter}):""]})},t.name)))})}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row py-3",children:[Object(i.jsx)("div",{className:"col-12 col-lg-8 col-xxl-9",children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{path:"/installation",element:Object(i.jsx)(X,{data:e.data,makeSelfUrl:e.makeSelfUrl})}),Object(i.jsx)(s.a,{path:"/examples/*",element:Object(i.jsx)(H,{data:e.data,makeSelfUrl:e.makeSelfUrl})}),Object(i.jsx)(s.a,{path:"/versions",element:Object(i.jsx)(ne,{data:e.data,makeSelfUrl:e.makeSelfUrl})}),Object(i.jsx)(s.a,{path:"*",element:e.data.readme_url?Object(i.jsx)(I,{url:e.data.readme_url}):e.data.description})]})}),Object(i.jsx)("div",{className:"col-12 col-lg-4 col-xxl-3 mt-4 mt-lg-0",children:Object(i.jsx)(te,{data:e.data,makeSelfUrl:e.makeSelfUrl})})]})})]})}re.defaultProps={leftoverPath:"readme"};var le=re,ie=a(26);function oe(){Object(n.useEffect)((()=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach((e=>new ie.b(e))),window.scrollTo(0,0)}));const e=Object(s.g)(),[t]=Object(c.c)(),a=t.get("version"),{data:r,isLoading:l}=function(e){let{type:t,ownername:a,name:s,version:c}=e;t=L(t);const{data:n,error:r}=Object(C.b)("/v3/packages/".concat(a,"/").concat(t,"/").concat(s).concat(c?"?version=".concat(c):""),{revalidateIfStale:!1,revalidateOnFocus:!c,revalidateOnReconnect:!c});return{data:n,isLoading:!r&&!n,isError:r}}({...e,version:a});if(l)return Object(i.jsx)(z,{});const d=function(e){let t=e.firstname||"";e.lastname&&(t+=(t?" ":"")+e.lastname);return t||e.username}(r.owner);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{title:r.name+" by "+d,description:r.description,noindex:!!a}),Object(i.jsxs)("div",{className:"hstack flex-wrap gap-2",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("h1",{className:"h2",children:[r.owner.username,"/",r.name]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("small",{className:"h5 me-2",children:[Object(i.jsx)("span",{className:"text-muted me-1",children:"by"}),Object(i.jsx)(c.b,{to:"/search?".concat(U.a.stringify({query:'owner:"'.concat(r.owner.username,'"')})),children:d})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("sup",{className:"h5",children:[Object(i.jsx)("span",{className:"badge bg-secondary text-uppercase me-2",children:Object(i.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(i.jsx)("div",{children:Object(i.jsx)(o,{name:"package-".concat(r.type)})}),Object(i.jsx)("div",{className:"ps-2",children:r.type})]})}),r.popularity_rank<=100?Object(i.jsx)("span",{className:"badge bg-warning me-2",children:Object(i.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(i.jsx)("div",{children:Object(i.jsx)(o,{name:"flame"})}),Object(i.jsx)("div",{className:"ps-2",children:"TOP 100"})]})}):""]})})]}),Object(i.jsxs)("ul",{className:"list-inline text-muted",children:[Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsx)(w,{type:"original-version",value:r.version.name})}),Object(i.jsx)("li",{className:"list-inline-item",children:"\u2022"}),Object(i.jsx)("li",{className:"list-inline-item text-success",children:"Public"}),Object(i.jsx)("li",{className:"list-inline-item",children:"\u2022"}),Object(i.jsxs)("li",{className:"list-inline-item",children:["Published ",Object(i.jsx)(w,{type:"time",value:r.version.released_at})]}),r.keywords?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("li",{className:"list-inline-item",children:"\u2022"}),Object(i.jsx)("li",{className:"list-inline-item",children:Object(i.jsx)($,{value:r.keywords.map((e=>Object(i.jsx)(c.b,{to:"/search?".concat(U.a.stringify({query:'keyword:"'.concat(e,'"')})),className:"me-2",children:Object(i.jsx)("span",{className:"badge rounded-pill border border-primary text-primary",children:e})},e))),max:5,moreTitle:"+ ".concat(r.keywords.length-5," categories")})})]}):""]}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)($,{value:r.description,max:255,moreTitle:"Read more \u2192"})}),Object(i.jsx)(le,{data:r,leftoverPath:e["*"]||void 0,makeSelfUrl:function(){let{extraPath:e,customVersion:t,resolve:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return de({type:r.type,ownername:r.owner.username,name:r.name,extraPath:e,resolve:a,version:t||null===t?t:r.version.is_latest?void 0:r.version.name})}.bind()})]})}function de(e){let{type:t,ownername:a,name:s,extraPath:c,version:n,resolve:r}=e;const l=r?["https://registry.platformio.org"]:[""];switch(l.push("packages"),t){case"library":l.push("libraries");break;case"platform":l.push("platform");break;case"tool":l.push("tools");break;default:l.push(t)}return l.push(a,s),c&&l.push(c),n?"".concat(l.join("/"),"?version=").concat(n):l.join("/")}const je={fetcher:async function(e){return e.startsWith("http")||(e="https://api.registry.platformio.org"+e),(await P.a.get(e)).data},onErrorRetry:(e,t,a,s,c)=>{let{retryCount:n}=c;e&&e.response&&404===e.response.status||(n>=5?a.appNotifyError(e):setTimeout((()=>s({retryCount:n})),a.errorRetryInterval))}};function me(){Object(n.useEffect)((()=>{[].slice.call(document.querySelectorAll(".toast")).forEach((e=>new ie.a(e).show()))}));const[e,t]=Object(n.useState)(null),a=Object(i.jsx)(s.c,{children:Object(i.jsx)(s.a,{path:"/packages/:type/:ownername/:name/*",element:Object(i.jsx)(oe,{})})});return Object(i.jsxs)(C.a,{value:{...je,appNotifyError:t},children:[Object(i.jsxs)(c.a,{children:[Object(i.jsx)(d,{}),Object(i.jsx)("main",{className:"container py-4",children:a})]}),e?(r=e,Object(i.jsx)("div",{className:"toast position-fixed top-0 end-0 align-items-center text-white bg-danger border-0 m-2",style:{zIndex:50},role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-autohide":"false",children:Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("div",{className:"toast-body",children:r.toString()}),Object(i.jsx)("button",{type:"button",className:"btn-close btn-close-white me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"})]})})):""]});var r}var be=a(55);a.n(be).a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(me,{})}),document.getElementById("app"))},57:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.aed14d88.chunk.js.map