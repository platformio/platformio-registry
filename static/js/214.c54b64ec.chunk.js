"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[214],{4214:function(e,a,s){s.r(a),s.d(a,{default:function(){return Z}});var t=s(9466),l=s(2472),r=s(1278),n=s(5993),d=s(596),c=s(7313),i=s(4468),o=s(6417);function p(e){(0,c.useEffect)((()=>{(0,d.fP)()}));const{data:a,isLoading:s,isError:t}=(0,i.VM)({type:e.package.type,ownername:e.package.owner.username,name:e.package.name,extra:"dlstats"});if(s||t)return(0,o.jsx)(n.Z,{});const p=a.versions||[];let m=0;return p.forEach((e=>Object.values(e.daily).forEach((e=>m+=e)))),(0,o.jsx)("div",{className:"card shadow h-100",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("h6",{className:"card-title text-muted fw-normal",children:["Monthly Downloads",(0,o.jsx)("sup",{className:"ps-2","data-bs-toggle":"tooltip",title:"Unique downloads for the last 30 days",children:(0,o.jsx)(r.Z,{name:"info-circle",size:"14"})})]}),(0,o.jsxs)("div",{className:"hstack",children:[(0,o.jsx)("div",{className:"fs-1 flex-fill",children:(0,o.jsx)(l.Z,{type:"counter",value:m})}),(0,o.jsx)("div",{className:"text-secondary",children:(0,o.jsx)(r.Z,{name:"download",size:"34"})})]}),(0,o.jsx)("span",{className:"badge bg-".concat(e.package.downloads_trend>0?"success":e.package.downloads_trend<0?"danger":"secondary"),children:(0,o.jsxs)("div",{className:"hstack gap-1",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r.Z,{name:e.package.downloads_trend<0?"caret-down-fill":"caret-up-fill",size:"12"})}),(0,o.jsxs)("div",{children:[e.package.downloads_trend>0?"+":e.package.downloads_trend<0?"-":"",(0,o.jsx)(l.Z,{type:"counter",value:Math.abs(e.package.downloads_trend)})]})]})}),(0,o.jsx)("small",{className:"text-muted ps-2",children:"since last month"})]})})}function m(e){const{result:a,isLoading:s,isError:t}=(0,i.rG)({filters:{type:[e.package.type]}});return s||t?(0,o.jsx)(n.Z,{}):(0,o.jsx)("div",{className:"card shadow h-100",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h6",{className:"card-title text-muted fw-normal",children:"Popularity"}),(0,o.jsxs)("div",{className:"hstack",children:[(0,o.jsx)("div",{className:"fs-1",children:(0,o.jsx)(l.Z,{type:"counter",value:e.package.popularity_rank})}),(0,o.jsx)("div",{className:"text-muted align-self-end pb-1 ps-2 small",children:(0,o.jsxs)("sup",{children:["among ",(0,o.jsx)(l.Z,{type:"counter",value:a.total})]})}),(0,o.jsx)("div",{className:"text-secondary flex-fill",children:(0,o.jsx)("div",{className:"float-end",children:(0,o.jsx)(r.Z,{name:"heart",size:"34"})})})]}),(0,o.jsx)("span",{className:"badge bg-".concat(e.package.popularity_trend>0?"success":"danger"),children:(0,o.jsxs)("div",{className:"hstack gap-1",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r.Z,{name:e.package.popularity_trend<0?"caret-down-fill":"caret-up-fill",size:"12"})}),(0,o.jsxs)("div",{children:[e.package.popularity_trend>0?"+":e.package.popularity_trend<0?"-":"",(0,o.jsx)(l.Z,{type:"counter",value:Math.abs(e.package.popularity_trend)})]})]})}),(0,o.jsx)("small",{className:"text-muted ps-2",children:1===Math.abs(e.package.popularity_trend)?"position":"positions"})]})})}var u=s(3888),h=s(658),x=s.n(h),j=s(274),f=s.n(j);function g(e){const a="Total",s=c.useMemo((()=>{const a=[];let s=e.startDate;for(;s<=e.stopDate;)a.push(s.format("YYYY-MM-DD")),s=s.add(1,"day");return a}),[e.startDate,e.stopDate]),t=c.useMemo((()=>{const a={};e.versions.forEach((e=>Object.entries(e.daily).forEach((e=>{let[s,t]=e;a[s]||(a[s]=0),a[s]+=t}))));const s={};return Object.keys(a).sort().forEach((e=>s[e]=a[e])),s}),[e.versions]),l={type:"line",data:{labels:s,datasets:[{label:a,data:t,order:1}]},options:{responsive:!0,parsing:!1,normalized:!0,spanGaps:!0,pointRadius:6,hoverRadius:6,borderWidth:2,hoverBorderWidth:2,borderColor:"#0969da",backgroundColor:"#e6f0fb",scales:{x:{grid:{display:!1},ticks:{color:"#6c757d",callback:(e,a)=>x()(s[a]).format("MMM D")}},y:{grid:{borderDash:[5,5]},ticks:{color:"#6c757d"}}},plugins:{legend:{labels:{usePointStyle:!0,boxWidth:8}}}}},r=(0,c.useRef)(null);return(0,c.useEffect)((()=>{if(!r.current)return;let s=r.current.chart;if(!s){s=new u.kL(r.current,l),r.current.chart=s;var t=r.current.getContext("2d").createLinearGradient(0,0,0,400);t.addColorStop(0,"rgba(230, 240, 251, 1)"),t.addColorStop(1,"rgba(255, 255, 255, 0.5)"),s.data.datasets[0].fill="start",s.data.datasets[0].backgroundColor=t}for(;;){const t=s.data.datasets.findIndex((s=>s.label!==a&&!e.selectedVersions.includes(s.label)));if(-1===t)break;s.data.datasets.splice(t,1)}if(e.selectedVersions.length){s.setDatasetVisibility(0,!1),s.options.plugins.legend.display=!0;const a=s.data.datasets.map((e=>e.label));e.selectedVersions.forEach((t=>{const l=f()({luminosity:"dark"});a.includes(t)||s.data.datasets.push({label:t,data:e.versions.find((e=>e.name===t)).daily,borderColor:l,backgroundColor:f()({hue:l,luminosity:"light"})})}))}else s.setDatasetVisibility(0,!0),s.options.plugins.legend.display=!1;s.update()})),(0,o.jsx)("canvas",{ref:r})}function b(e){const a=Math.random();return(0,o.jsxs)("ul",{className:"list-inline m-0 border rounded px-3 py-1 bg-white",children:[(0,o.jsx)("li",{className:"list-inline-item me-1",children:"Time range:"}),(0,o.jsx)("li",{className:"list-inline-item",children:(0,o.jsxs)("div",{className:"dropdown",children:[(0,o.jsxs)("button",{type:"button",className:"btn btn-sm btn-link p-0 link-dark fw-bold",id:"timeRangeSelect".concat(a),"data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-expanded":"false",style:{verticalAlign:"inherit"},children:["".concat(e.startDate.format("MMM D, YYYY")," - ").concat(e.stopDate.format("MMM D, YYYY")),(0,o.jsx)(r.Z,{name:"caret-down-fill",size:"12",className:"ms-1"})]}),(0,o.jsx)("div",{className:"dropdown-menu p-0","aria-labelledby":"timeRangeSelect".concat(a),children:(0,o.jsxs)("div",{className:"alert alert-warning m-0 small",role:"alert",children:["Custom time range available only for"," ",(0,o.jsx)(t.rU,{to:"/pricing",children:"Pro, Team, and Enterprise"})," package owners."]})})]})})]})}u.kL.register(u.uw,u.Gu,u.De,u.ST,u.jn,u.f$,u.od,u.u);var v=s(153),y=s.n(v);function k(e){const a=x()(),s=a.subtract(30,"day");(0,c.useEffect)((()=>{(0,d.fP)()}));const[t,l]=(0,c.useState)([]),{data:p,isLoading:m,isError:u}=(0,i.VM)({type:e.package.type,ownername:e.package.owner.username,name:e.package.name,extra:"dlstats"});if(m||u)return(0,o.jsx)(n.Z,{});const h=p.versions||[];return(0,o.jsxs)("div",{className:"card shadow mt-4",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsxs)("div",{className:"hstack flex-wrap gap-4",children:[(0,o.jsxs)("div",{className:"flex-fill fw-bold",children:["Total downloads",(0,o.jsx)("sup",{className:"ps-2","data-bs-toggle":"tooltip",title:"Unique downloads are calculated daily and are not de-duplicated over multiple days",children:(0,o.jsx)(r.Z,{name:"info-circle",size:"14"})})]}),(0,o.jsx)("div",{className:"small",children:(0,o.jsx)(b,{startDate:s,stopDate:a})}),(0,o.jsx)("div",{className:"small",children:(0,o.jsx)(w,{names:h.map((e=>e.name)),onSelect:e=>l(e)})})]})}),(0,o.jsx)("div",{className:"card-body",children:h.length?(0,o.jsx)(g,{startDate:s,stopDate:a,versions:h,selectedVersions:t}):(0,o.jsx)("div",{className:"h5 text-center py-2",children:"No Downloads for the specified time range"})})]})}function w(e){const[a,s]=(0,c.useState)([]),t=c.useMemo((()=>e.names.sort(((e,a)=>{if(e===a)return 0;try{return y().gt(y().coerce(e),y().coerce(a))?1:-1}catch(s){return console.warn(s),0}}))),[e.names]);if(!e.names.length)return null;return(0,o.jsxs)("ul",{className:"list-inline m-0 border rounded px-3 py-1 bg-white",children:[(0,o.jsx)("li",{className:"list-inline-item me-1",children:"Versions:"}),(0,o.jsx)("li",{className:"list-inline-item",children:(0,o.jsxs)("div",{className:"dropdown",children:[(0,o.jsxs)("button",{type:"button",className:"btn btn-sm btn-link p-0  link-dark fw-bold",id:"dlVersionsMenu","data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-expanded":"false",style:{verticalAlign:"inherit"},children:[a.length?"Custom":"All",(0,o.jsx)(r.Z,{name:"caret-down-fill",size:"12",className:"ms-1"})]}),(0,o.jsx)("ul",{className:"dropdown-menu dropdown-menu-end overflow-auto",style:{maxHeight:"300px"},"aria-labelledby":"dlVersionsMenu",children:t.map((t=>(0,o.jsx)("li",{className:"dropdown-item",children:(0,o.jsxs)("div",{className:"form-check",children:[(0,o.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"versionCheck".concat(t),onChange:l=>((t,l)=>{const r=l?[...a,t]:a.filter((e=>e!==t));s(r),e.onSelect(r)})(t,l.target.checked)}),(0,o.jsx)("label",{className:"form-check-label",htmlFor:"versionCheck".concat(t),children:t})]})},t)))})]})})]})}function N(e){const a=x()(),s=a.subtract(30,"day");(0,c.useEffect)((()=>{(0,d.fP)()}));const{data:t,isLoading:l,isError:p}=(0,i.VM)({type:e.package.type,ownername:e.package.owner.username,name:e.package.name,extra:"dlstats"});if(l||p)return(0,o.jsx)(n.Z,{});const m=t.versions||[],u=m.map((e=>({name:e.name,total:Object.values(e.daily).reduce(((e,a)=>e+a),0)})));return(0,o.jsxs)("div",{className:"card shadow mt-4",children:[(0,o.jsx)("div",{className:"card-header",children:(0,o.jsxs)("div",{className:"hstack flex-wrap gap-4",children:[(0,o.jsxs)("div",{className:"flex-fill fw-bold",children:["Version downloads",(0,o.jsx)("sup",{className:"ps-2","data-bs-toggle":"tooltip",title:"Unique downloads are calculated daily and are not de-duplicated over multiple days",children:(0,o.jsx)(r.Z,{name:"info-circle",size:"14"})})]}),(0,o.jsx)("div",{className:"small",children:(0,o.jsx)(b,{startDate:s,stopDate:a})})]})}),(0,o.jsx)("div",{className:"card-body",children:m.length?(0,o.jsx)(M,{downloads:u}):(0,o.jsx)("div",{className:"h5 text-center py-2",children:"No Downloads for the specified time range"})})]})}function M(e){const a=e.downloads.map((e=>e.total)).reduce(((e,a)=>e+a),0);return(0,o.jsx)("div",{className:"table-responsive",children:(0,o.jsxs)("table",{className:"table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:"Version"}),(0,o.jsx)("th",{scope:"col",children:"Downloads"}),(0,o.jsx)("th",{scope:"col",children:"% of Downloads"})]})}),(0,o.jsx)("tbody",{children:e.downloads.sort(((e,a)=>a.total-e.total)).map((e=>(e.percent=Math.round(e.total/a*100),e))).map((e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"row",children:e.name}),(0,o.jsx)("td",{children:(0,o.jsx)(l.Z,{type:"counter",value:e.total})}),(0,o.jsx)("td",{valign:"middle",children:(0,o.jsx)("div",{className:"progress",children:(0,o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(e.percent,"%")},"aria-valuenow":e.percent,"aria-valuemin":"0","aria-valuemax":"100",children:(0,o.jsxs)("small",{children:[e.percent,"%"]})})})})]},e.name)))})]})})}function D(e){(0,c.useEffect)((()=>{(0,d.fP)()}));const{data:a,isLoading:s,isError:t}=(0,i.VM)({type:e.package.type,ownername:e.package.owner.username,name:e.package.name,extra:"dlstats"});if(s||t)return(0,o.jsx)(n.Z,{});const l=a.versions||[],p={};l.forEach((e=>Object.entries(e.daily).forEach((e=>{let[a,s]=e;p[a]||(p[a]=0),p[a]+=s}))));const m=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];return(0,o.jsx)("div",{className:"card shadow h-100",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("h6",{className:"card-title text-muted fw-normal",children:["Weekly Downloads",(0,o.jsx)("sup",{className:"ps-2","data-bs-toggle":"tooltip",title:"Weekly unique downloads",children:(0,o.jsx)(r.Z,{name:"info-circle",size:"14"})})]}),(0,o.jsx)(Y,{weekdaysShort:m,current:m.map(((e,a)=>p[x()().weekday(a).format("YYYY-MM-DD")])),previous:m.map(((e,a)=>p[x()().weekday(a-7).format("YYYY-MM-DD")]))})]})})}function Y(e){const a=(0,c.useRef)(null),s={type:"bar",data:{labels:e.weekdaysShort,datasets:[{label:"Current",data:e.current,backgroundColor:"#0969da"},{label:"Previous",data:e.previous,backgroundColor:"#e6f0fb"}]},options:{responsive:!0,normalized:!0,borderWidth:0,borderRadius:10,borderSkipped:!1,scales:{x:{display:!1},y:{display:!1}},plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>{if(!e.dataset.label)return"";const a=x()().weekday(0===e.datasetIndex?e.dataIndex:e.dataIndex-7);return"".concat(e.dataset.label," (").concat(a.format("MMM, D, YYYY"),"): ").concat(e.parsed.y)}}}}}};return(0,c.useEffect)((()=>{a.current&&(a.current.chart||(a.current.chart=new u.kL(a.current,s)))})),(0,o.jsx)("canvas",{ref:a,height:"110"})}function Z(e){return"library"!==e.package.type?(0,o.jsx)("div",{className:"card text-center",children:(0,o.jsx)("div",{className:"py-4",children:(0,o.jsxs)("h5",{className:"m-0",children:["Available only for"," ",(0,o.jsx)(t.rU,{to:"/pricing",children:"Pro, Team, and Enterprise"})," package owners."]})})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:[(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(m,{package:e.package})}),(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(p,{package:e.package})}),(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(D,{package:e.package})})]}),(0,o.jsx)(k,{package:e.package}),(0,o.jsx)(N,{package:e.package})]})}u.kL.register(u.vn,u.ZL,u.u)}}]);