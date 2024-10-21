"use strict";(self["webpackChunkcork_vue3"]=self["webpackChunkcork_vue3"]||[]).push([[8944],{37750:function(a,e,i){i.r(e),i.d(e,{default:function(){return h}});var t=i(66252),o=i(3577),r=i(2262),n=i(56296);const s={class:"layout-px-spacing"},l=(0,t._)("ul",{class:"navbar-nav flex-row"},[(0,t._)("li",null,[(0,t._)("div",{class:"page-header"},[(0,t._)("nav",{class:"breadcrumb-one","aria-label":"breadcrumb"},[(0,t._)("ol",{class:"breadcrumb"},[(0,t._)("li",{class:"breadcrumb-item"},[(0,t._)("a",{href:"javascript:;"},"DataTables")]),(0,t._)("li",{class:"breadcrumb-item active","aria-current":"page"},[(0,t._)("span",null,"Basic")])])])])])],-1),c={class:"row layout-top-spacing"},d={class:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},f={class:"panel br-6 p-0"},g={class:"custom-table"},p={class:"actions text-center"},u=["onClick"],y=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-circle table-cancel"},[(0,t._)("circle",{cx:"12",cy:"12",r:"10"}),(0,t._)("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),(0,t._)("line",{x1:"9",y1:"9",x2:"15",y2:"15"})],-1),m=[y];var _={setup(a){(0,n.j)({title:"Basic Table"});const e=(0,r.iH)(["name","position","office","age","start_date","salary","actions"]),i=(0,r.iH)([]),y=(0,r.iH)({perPage:10,perPageValues:[5,10,20,50],skin:"table table-hover",columnsClasses:{actions:"actions text-center"},sortable:[],pagination:{nav:"scroll",chunk:5},texts:{count:"Showing {from} to {to} of {count}",filter:"",filterPlaceholder:"Search...",limit:"Results:"},resizableColumns:!1});(0,t.bv)((()=>{_()}));const _=()=>{i.value=[{id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:61,start_date:"2011/04/25",salary:"320,800"},{id:2,name:"Garrett Winters",position:"Accountant",office:"Tokyo",age:63,start_date:"2011/07/25",salary:"170,750"},{id:3,name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",age:66,start_date:"2009/01/12",salary:"86,000"},{id:4,name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",age:22,start_date:"2012/03/29",salary:"433,060"},{id:5,name:"Airi Satou",position:"Accountant",office:"Tokyo",age:33,start_date:"2008/11/28",salary:"162,700"},{id:6,name:"Brielle Williamson",position:"Integration Specialist",office:"New York",age:61,start_date:"2012/12/02",salary:"372,000"},{id:7,name:"Herrod Chandler",position:"Sales Assistant",office:"San Francisco",age:59,start_date:"2012/08/06",salary:"137,500"},{id:8,name:"Rhona Davidson",position:"Integration Specialist",office:"Tokyo",age:55,start_date:"2010/10/14",salary:"327,900"},{id:9,name:"Colleen Hurst",position:"Javascript Developer",office:"San Francisco",age:39,start_date:"2009/09/15",salary:"205,500"},{id:10,name:"Sonya Frost",position:"Software Engineer",office:"Edinburgh",age:23,start_date:"2008/12/13",salary:"103,600"},{id:11,name:"Jena Gaines",position:"Office Manager",office:"London",age:30,start_date:"2008/12/19",salary:"90,560"},{id:12,name:"Quinn Flynn",position:"Support Lead",office:"Edinburgh",age:22,start_date:"2013/03/03",salary:"342,000"},{id:13,name:"Charde Marshall",position:"Regional Director",office:"San Francisco",age:36,start_date:"2008/10/16",salary:"470,600"},{id:14,name:"Haley Kennedy",position:"Senior Marketing Designer",office:"London",age:43,start_date:"2012/12/18",salary:"313,500"},{id:15,name:"Tatyana Fitzpatrick",position:"Regional Director",office:"London",age:19,start_date:"2010/03/17",salary:"385,750"},{id:16,name:"Michael Silva",position:"Marketing Designer",office:"London",age:66,start_date:"2012/11/27",salary:"198,500"},{id:17,name:"Paul Byrd",position:"Chief Financial Officer (CFO)",office:"New York",age:64,start_date:"2010/06/09",salary:"725,000"},{id:18,name:"Gloria Little",position:"Systems Administrator",office:"New York",age:59,start_date:"2009/04/10",salary:"237,500"},{id:19,name:"Bradley Greer",position:"Software Engineer",office:"London",age:41,start_date:"2012/10/13",salary:"132,000"},{id:20,name:"Dai Rios",position:"Personnel Lead",office:"Edinburgh",age:35,start_date:"2012/09/26",salary:"217,500"},{id:21,name:"Jenette Caldwell",position:"Development Lead",office:"New York",age:61,start_date:"2011/09/03",salary:"345,000"},{id:22,name:"Yuri Berry",position:"Chief Marketing Officer (CMO)",office:"New York",age:40,start_date:"2009/06/25",salary:"675,000"},{id:23,name:"Caesar Vance",position:"Pre-Sales Support",office:"New York",age:21,start_date:"2011/12/12",salary:"106,450"},{id:24,name:"Doris Wilder",position:"Sales Assistant",office:"Sidney",age:23,start_date:"2010/09/20",salary:"85,600"},{id:25,name:"Angelica Ramos",position:"Chief Executive Officer (CEO)",office:"London",age:47,start_date:"2009/10/09",salary:"1,200,000"},{id:26,name:"Gavin Joyce",position:"Developer",office:"Edinburgh",age:42,start_date:"2010/12/22",salary:"92,575"},{id:27,name:"Jennifer Chang",position:"Regional Director",office:"Singapore",age:28,start_date:"2010/11/14",salary:"57,650"}]},v=a=>{confirm("Are you sure want to delete selected row ?")&&(i.value=i.value.filter((e=>e.id!=a.id)))};return(a,r)=>{const n=(0,t.up)("v-client-table");return(0,t.wg)(),(0,t.iD)("div",s,[((0,t.wg)(),(0,t.j4)(t.lR,{to:"#breadcrumb"},[l])),(0,t._)("div",c,[(0,t._)("div",d,[(0,t._)("div",f,[(0,t._)("div",g,[(0,t.Wm)(n,{data:i.value,columns:e.value,options:y.value},{actions:(0,t.w5)((a=>[(0,t._)("div",p,[(0,t._)("a",{href:"javascript:;",class:"cancel",onClick:e=>v(a.row)},m,8,u)])])),salary:(0,t.w5)((a=>[(0,t.Uk)(" $"+(0,o.zw)(a.row.salary),1)])),_:1},8,["data","columns","options"])])])])])])}}};const v=_;var h=v}}]);
//# sourceMappingURL=tables-basic.dff32791.js.map