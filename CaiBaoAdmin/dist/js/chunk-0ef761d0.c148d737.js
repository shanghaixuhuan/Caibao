(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ef761d0"],{"1a33":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs6:""}},[s("el-form",{attrs:{"label-position":"right"}},[s("el-form-item",{attrs:{label:"启事类型"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sNoticeType,callback:function(e){t.sNoticeType=e},expression:"sNoticeType"}},t._l(t.noticeType,function(t){return s("el-option",{key:t.index,attrs:{label:t.name,value:t.index}})}),1)],1)],1)],1),s("v-flex",{attrs:{xs6:""}},[s("el-form",{attrs:{"label-position":"right"}},[s("el-form-item",{attrs:{label:"物品类型"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.sArticleNo,callback:function(e){t.sArticleNo=e},expression:"sArticleNo"}},t._l(t.articleNo,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1),s("v-flex",{attrs:{xs6:""}},[s("el-form",{attrs:{"label-position":"right"}},[s("el-form-item",{attrs:{label:"搜关键词"}},[s("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"搜索关键字"},model:{value:t.sText,callback:function(e){t.sText=e},expression:"sText"}})],1)],1)],1),s("v-flex",{attrs:{xs6:""}},[s("el-button",{staticStyle:{},attrs:{size:"medium",type:"warning"},on:{click:function(e){return t.search(t.sNoticeType,t.sArticleNo,t.sText)}}},[t._v("搜索")])],1),s("v-flex",{attrs:{md12:""}},[s("material-card",{attrs:{color:"green",title:"拾到信息列表",text:""}},[s("v-data-table",{attrs:{headers:t.pHeaders,items:t.pickPageList,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.item;return"2"==a.noticeType?[s("td",[t._v(t._s(a.noticeID))]),s("td",[t._v(t._s(a.userNo))]),s("td",[t._v(t._s(t.articleNo[a.articleNo].label))]),s("td",[t._v(t._s(a.place))]),s("td",[t._v(t._s(t._f("moment")(a.time,"YYYY-MM-DD")))]),s("td",[t._v(t._s(a.depositPlace))]),s("td",[t._v(t._s(a.phone))]),s("td",[t._v(t._s(a.loseNo))]),s("td",[t._v(t._s(t._f("moment")(a.noticeTime,"YYYY-MM-DD")))]),s("td",{staticClass:"text-xs-center"},[s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return["0"==a.noticeStatus?s("v-btn",t._g({attrs:{color:"green",dark:""}},o),[t._v("发布中")]):s("v-btn",t._g({attrs:{color:"blue-grey",dark:""}},o),[t._v("已关闭")])]}}],null,!0)},[s("v-list",t._l(t.statusList,function(e,o){return s("v-list-tile",{key:o},["0"==e.value?s("v-btn",{attrs:{color:"green"},on:{click:function(e){return t.changeNoticeStatus(a.noticeID,"0")}}},[t._v(t._s(e.status))]):s("v-btn",{attrs:{color:"blue-grey"},on:{click:function(e){return t.changeNoticeStatus(a.noticeID,"1")}}},[t._v(t._s(e.status))])],1)}),1)],1)],1),s("td",{staticClass:"text-xs-right"},[s("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[s("p",[t._v(t._s(a.note))]),s("v-img",{attrs:{src:a.uploadImg}}),s("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("详情")])],1)],1)]:void 0}}],null,!0)},[[s("span",{staticClass:"subheading font-weight-light text-success text--darken-3"})]],2)],1),s("div",{staticClass:"text-xs-center",on:{click:function(e){return t.pickPage(t.page.pick)}}},[s("v-pagination",{attrs:{length:t.maxPage.pick,"total-visible":7},model:{value:t.page.pick,callback:function(e){t.$set(t.page,"pick",e)},expression:"page.pick"}})],1)],1),s("v-flex",{attrs:{md12:""}},[s("material-card",{attrs:{color:"green",title:"丢失信息列表",text:""}},[s("v-data-table",{attrs:{headers:t.lHeaders,items:t.losePageList,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.item;return"1"==a.noticeType?[s("td",[t._v(t._s(a.noticeID))]),s("td",[t._v(t._s(a.userNo))]),s("td",[t._v(t._s(t.articleNo[a.articleNo].label))]),s("td",[t._v(t._s(a.place))]),s("td",[t._v(t._s(t._f("moment")(a.time,"YYYY-MM-DD")))]),s("td",[t._v(t._s(a.phone))]),s("td",[t._v(t._s(a.loseNo))]),s("td",[t._v(t._s(t._f("moment")(a.noticeTime,"YYYY-MM-DD")))]),s("td",{staticClass:"text-xs-center"},[s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return["0"==a.noticeStatus?s("v-btn",t._g({attrs:{color:"green",dark:""}},o),[t._v("发布中")]):s("v-btn",t._g({attrs:{color:"blue-grey",dark:""}},o),[t._v("已关闭")])]}}],null,!0)},[s("v-list",t._l(t.statusList,function(e,o){return s("v-list-tile",{key:o},["0"==e.value?s("v-btn",{attrs:{color:"green"},on:{click:function(e){return t.changeNoticeStatus(a.noticeID,"0")}}},[t._v(t._s(e.status))]):s("v-btn",{attrs:{color:"blue-grey"},on:{click:function(e){return t.changeNoticeStatus(a.noticeID,"1")}}},[t._v(t._s(e.status))])],1)}),1)],1)],1),s("td",{staticClass:"text-xs-right"},[s("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[s("p",[t._v(t._s(a.note))]),s("v-img",{attrs:{src:a.uploadImg}}),s("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("详情")])],1)],1)]:void 0}}],null,!0)},[[s("span",{staticClass:"subheading font-weight-light text-success text--darken-3"})]],2)],1),s("div",{staticClass:"text-xs-center",on:{click:function(e){return t.losePage(t.page.lose)}}},[s("v-pagination",{attrs:{length:t.maxPage.lose,"total-visible":7},model:{value:t.page.lose,callback:function(e){t.$set(t.page,"lose",e)},expression:"page.lose"}})],1)],1)],1)],1)],1)},o=[],l=(s("386d"),s("cebc")),i=(s("cadf"),s("551c"),s("f751"),s("097d"),s("2f62")),n={data:function(){return{sNoticeType:"0",sArticleNo:"0",sText:"",list:"",pickList:[],loseList:[],pickPageList:[],losePageList:[],page:{pick:"",lose:""},maxPage:{pick:"",lose:""},noticeType:[{name:"全部",index:"0",showTemporary:!1},{name:"丢失",index:"1",showTemporary:!1},{name:"拾到",index:"2",showTemporary:!0}],statusList:[{value:"0",status:"发布中",color:"info"},{value:"1",status:"已关闭",color:""}],articleNo:[{value:"0",label:"全部",loseNoShow:!0},{value:"1",label:"校园卡",loseNoShow:!0},{value:"2",label:"雨伞",loseNoShow:!1},{value:"3",label:"U盘",loseNoShow:!1},{value:"4",label:"水杯",loseNoShow:!1},{value:"5",label:"耳机",loseNoShow:!1},{value:"6",label:"钥匙",loseNoShow:!1},{value:"7",label:"眼镜",loseNoShow:!1},{value:"8",label:"其他",loseNoShow:!1}],pHeaders:[{sortable:!1,text:"ID",value:"noticeID"},{sortable:!1,text:"发布者",value:"userNo"},{sortable:!1,text:"物品类型",value:"articleNo"},{sortable:!1,text:"地点",value:"place"},{sortable:!1,text:"时间",value:"time"},{sortable:!1,text:"寄存点",value:"depositPlace"},{sortable:!1,text:"电话",value:"phone"},{sortable:!1,text:"失者学号",value:"loseNo"},{sortable:!1,text:"发布时间",value:"noticeTime"},{sortable:!1,text:"状态",value:"noticeStatus"},{sortable:!1,text:"备注",value:"note",align:"right"}],lHeaders:[{sortable:!1,text:"ID",value:"noticeID"},{sortable:!1,text:"发布者",value:"userNo"},{sortable:!1,text:"物品类型",value:"articleNo"},{sortable:!1,text:"地点",value:"place"},{sortable:!1,text:"时间",value:"time"},{sortable:!1,text:"电话",value:"phone"},{sortable:!1,text:"失者学号",value:"loseNo"},{sortable:!1,text:"发布时间",value:"noticeTime"},{sortable:!1,text:"状态",value:"noticeStatus"},{sortable:!1,text:"备注",value:"note",align:"right"}]}},methods:Object(l["a"])({pickPage:function(t){this.pickPageList=[];for(var e=10*t-10,s=e+10,a=e;a<s;a++){if(void 0==this.pickList[a])break;this.pickPageList.push(this.pickList[a])}},losePage:function(t){this.losePageList=[];for(var e=10*t-10,s=e+10,a=e;a<s;a++){if(void 0==this.loseList[a])break;this.losePageList.push(this.loseList[a])}}},Object(i["b"])({getArticleList:"GET_ARTICLELIST"}),{test:function(){console.log(this.articleList)},search:function(t,e,s){console.log(t,e,s);var a=this,o=0;a.axios.post("/api/getSearchList",{sNoticeType:t,sArticleNo:e,sText:s,sType:o}).then(function(t){a.loseList=[],a.pickList=[],a.losePageList=[],a.pickPageList=[];for(var e=0;e<t.data.length;e++)1==t.data[e].noticeType?a.loseList.push(t.data[e]):a.pickList.push(t.data[e]);a.maxPage.pick=Math.ceil(a.loseList.length/10),a.maxPage.lose=Math.ceil(a.pickList.length/10),a.list=t.data,a.pickPage(1),a.losePage(1)}).catch(function(t){console.log(t)})},changeNoticeStatus:function(t,e){console.log(t,e);var s=this;s.axios.post("/api/changeNoticeStatus",{noticeID:t,noticeStatus:e}).then(function(t){"0000"===t.data&&s.$router.push("/l-refresh")}).catch(function(t){console.log(t)})}}),computed:Object(l["a"])({},Object(i["d"])({login:function(t){return t.login},testList:function(t){return t.articleList}})),created:function(){var t=this;t.axios.post("/api/getArticleList").then(function(e){e.data&&(t.$store.state.articleList=e.data)}).catch(function(t){console.log(t)}),t.login?t.search(t.sNoticeType,t.sArticleNo,t.sText):t.$router.push("/admin")}},r=n,c=(s("abcb"),s("2877")),u=Object(c["a"])(r,a,o,!1,null,null,null);e["default"]=u.exports},"345e":function(t,e,s){},"386d":function(t,e,s){"use strict";var a=s("cb7c"),o=s("83a1"),l=s("5f1b");s("214f")("search",1,function(t,e,s,i){return[function(s){var a=t(this),o=void 0==s?void 0:s[e];return void 0!==o?o.call(s,a):new RegExp(s)[e](String(a))},function(t){var e=i(s,t,this);if(e.done)return e.value;var n=a(t),r=String(this),c=n.lastIndex;o(c,0)||(n.lastIndex=0);var u=l(n,r);return o(n.lastIndex,c)||(n.lastIndex=c),null===u?-1:u.index}]})},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},abcb:function(t,e,s){"use strict";var a=s("345e"),o=s.n(a);o.a}}]);
//# sourceMappingURL=chunk-0ef761d0.c148d737.js.map