(function(e){function t(t){for(var a,r,o=t[0],d=t[1],c=t[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var d=n[o];0!==s[d]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/deadlines/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22be":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-light fixed-top"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e._v("Deadlines")])],1)]),n("main",{attrs:{id:"main"}},[n("transition",{attrs:{name:e.transitionName,mode:"out-in"}},[n("router-view")],1)],1)])},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("28a5"),n("bd86")),o=n("2f62");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"app",data:function(){return{transitionName:"slide-left"}},methods:c({},Object(o["b"])(["restoreDeadlines"])),watch:{$route:function(e,t){var n=e.path.split("/").length,a=t.path.split("/").length;this.transitionName=n<a?"slide-right":"slide-left"}},mounted:function(){this.restoreDeadlines()}},u=l,f=(n("5c0b"),n("2877")),b=Object(f["a"])(u,s,i,!1,null,null,null),p=b.exports,j=(n("55dd"),n("20d6"),{state:{deadlines:[]},mutations:{pushDeadline:function(e,t){e.deadlines.push(t)},spliceDeadline:function(e,t){e.deadlines.splice(e.deadlines.findIndex((function(e){return t.id===e.id})),1,t)}},actions:{addOrUpdate:function(e,t){var n=e.commit;t.date.setHours(t.time.substring(0,2),t.time.substring(3,5));var a={id:t.id?t.id:Math.floor(1e5*Math.random()+1),title:t.title,date:t.date};t.id?n("spliceDeadline",a):n("pushDeadline",a)},saveDeadlines:function(e){var t=e.state;t.deadlines.forEach((function(e){return localStorage.setItem("deadline-"+e.id,JSON.stringify(e))}))},restoreDeadlines:function(e){var t=e.commit;Object.keys(localStorage).filter((function(e){return"deadline"==e.substr(0,8)})).map((function(e){return JSON.parse(localStorage.getItem(e))})).map((function(e){return e.hasOwnProperty("date")?e.date=new Date(e.date):e.hasOwnProperty("timestamp")&&(e.date=new Date(e.timestamp)),e})).forEach((function(e){return t("pushDeadline",e)}))},deleteDeadline:function(e,t){var n=e.state;n.deadlines=n.deadlines.filter((function(e){return e.id!==t.id}))}},getters:{deadlines:function(e){return e.deadlines},sorted:function(e){return e.deadlines.sort((function(e,t){return e.date.getTime()-t.date.getTime()}))},future:function(e,t){return t.sorted.filter((function(e){return e.date.getTime()>=Date.now()}))},past:function(e,t){return t.sorted.filter((function(e){return e.date.getTime()<Date.now()})).sort((function(e,t){return e.date.getTime()<t.date.getTime()}))}}});a["a"].use(o["a"]);var m=new o["a"].Store({modules:{Deadline:j}}),h=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("deadline-list",{attrs:{deadlines:e.future}})],1)]),n("div",{staticClass:"row mb-3"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-dark btn-block",on:{click:function(t){e.showPastDeadlines=!e.showPastDeadlines}}},[e._v("vergangene Deadlines anzeigen")])])]),e.showPastDeadlines?n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("deadline-list",{attrs:{deadlines:e.past}})],1)]):e._e(),n("router-link",{staticClass:"btn btn-fab",attrs:{to:{name:"deadline.create"},id:"add"}},[n("i",{staticClass:"fa fa-plus"})])],1)},g=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-unstyled"},[e._l(e.deadlines,(function(e){return n("Deadline",{key:e.id,attrs:{deadline:e}})})),0==e.deadlines.length?n("li",{staticClass:"text-center"},[e._v("Noch keine Deadlines vorhanden")]):e._e()],2)},O=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("div",{staticClass:"form-group"},[n("router-link",{staticClass:"btn btn-primary btn-block btn-deadline",attrs:{to:{name:"deadline.edit",params:{deadlineToEdit:e.deadline}}}},[n("div",{staticClass:"text-left"},[n("b",[e._v(e._s(e.deadline.title)+":")])]),e.deadline.date>Date.now()?n("div",{staticClass:"text-center"},[e.days>0?n("span",[n("span",{staticClass:"font-digital"},[e._v(e._s(e.days))]),e._v(" Tage ")]):e._e(),n("span",{staticClass:"font-digital"},[e._v(e._s(e.pad(e.hours)))]),e._v("H "),n("span",{staticClass:"font-digital"},[e._v(e._s(e.pad(e.minutes)))]),e._v("M "),n("span",{staticClass:"font-digital"},[e._v(e._s(e.pad(e.seconds)))]),e._v("S ")]):e._e(),e.deadline.date<=Date.now()?n("div",{staticClass:"text-center"},[n("span",{staticClass:"font-digital"},[n("small",[e._v(e._s(e.deadline.date.toLocaleString()))])])]):e._e()])],1)])},k=[],D=n("c1df"),_=n.n(D),C={props:{deadline:{type:Object,required:!0}},data:function(){return{now:new Date}},mounted:function(){var e=this;window.setInterval((function(){e.now=new Date}),1e3)},methods:{pad:function(e){return String("00"+e).slice(-2)}},computed:{remaining:function(){return _.a.duration(_()(this.deadline.date).diff(this.now))},days:function(){return this.remaining.days()},hours:function(){return this.remaining.hours()},minutes:function(){return this.remaining.minutes()},seconds:function(){return this.remaining.seconds()}}},P=C,z=(n("c6a8"),Object(f["a"])(P,w,k,!1,null,"25fd46f8",null)),E=z.exports,x={components:{Deadline:E},props:{deadlines:{type:Array,required:!0}}},S=x,T=Object(f["a"])(S,y,O,!1,null,null,null),N=T.exports;function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={components:{DeadlineList:N},data:function(){return{showPastDeadlines:!1}},computed:$({},Object(o["c"])(["future","past"]))},U=q,A=Object(f["a"])(U,v,g,!1,null,null,null),H=A.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h3",[e._v(" Deadline "),e.deadlineToEdit?n("span",[e._v("bearbeiten")]):e._e(),e.deadlineToEdit?e._e():n("span",[e._v("erstellen")]),n("router-link",{staticClass:"btn btn-close float-right",attrs:{to:{name:"home"}}},[n("i",{staticClass:"fa fa-times"})])],1),n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("div",{staticClass:"form-group"}),n("div",{staticClass:"form-group form-row"},[n("div",{staticClass:"col-12"},[n("label",[e._v("Titel")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.deadline.title,expression:"deadline.title"}],staticClass:"form-control",attrs:{type:"text",required:"",autofocus:""},domProps:{value:e.deadline.title},on:{input:function(t){t.target.composing||e.$set(e.deadline,"title",t.target.value)}}})])]),n("div",{staticClass:"form-group form-row"},[n("div",{staticClass:"col-12"},[n("label",[e._v("Datum")]),n("datepicker",{attrs:{"bootstrap-styling":!0,format:"dd.MM.yyyy","monday-first":!0,inline:!0,required:!0},model:{value:e.deadline.date,callback:function(t){e.$set(e.deadline,"date",t)},expression:"deadline.date"}})],1)]),n("div",{staticClass:"form-group form-row"},[n("div",{staticClass:"col-12"},[n("label",[e._v("Uhrzeit")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.deadline.time,expression:"deadline.time"}],staticClass:"form-control",attrs:{type:"time",required:""},domProps:{value:e.deadline.time},on:{input:function(t){t.target.composing||e.$set(e.deadline,"time",t.target.value)}}})])]),n("div",{staticClass:"form-group text-right"},[this.deadlineToEdit?n("button",{staticClass:"btn btn-primary btn-danger float-left",attrs:{type:"button"},on:{click:e.remove}},[e._v("Löschen")]):e._e(),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Speichern")])])])])])])},J=[],L=n("fa33");function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G={components:{Datepicker:L["a"]},data:function(){return{deadline:{id:null,title:"",time:this.pad((new Date).getHours())+":"+this.pad((new Date).getMinutes()+5),date:new Date}}},props:{deadlineToEdit:{type:Object,required:!1}},methods:B({},Object(o["b"])(["addOrUpdate","saveDeadlines","deleteDeadline"]),{submit:function(){this.addOrUpdate(this.deadline),this.saveDeadlines(),this.$router.push({name:"home"})},remove:function(){this.deleteDeadline(this.deadline),this.$router.push({name:"home"})},pad:function(e){return String("00"+e).slice(-2)}}),mounted:function(){if(this.deadlineToEdit){var e=this.deadlineToEdit.date,t=this.pad(e.getHours())+":"+this.pad(e.getMinutes());this.deadline={id:this.deadlineToEdit.id,title:this.deadlineToEdit.title,date:e,time:t}}}},K=G,Q=Object(f["a"])(K,I,J,!1,null,null,null),R=Q.exports;a["a"].use(h["a"]);var V=new h["a"]({routes:[{name:"home",path:"/",component:H,meta:{transition:"slide-right"}},{name:"deadline.create",path:"/deadline/create",component:R,meta:{transition:"slide-left"}},{name:"deadline.edit",path:"/deadline/:deadlineToEdit.id/edit/",component:R,props:!0,meta:{transition:"slide-left"}}]}),W=n("9483");Object(W["a"])("".concat("/deadlines/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(p)},store:m,router:V}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"9c0c":function(e,t,n){},c6a8:function(e,t,n){"use strict";var a=n("22be"),s=n.n(a);s.a}});
//# sourceMappingURL=app.e680bd39.js.map