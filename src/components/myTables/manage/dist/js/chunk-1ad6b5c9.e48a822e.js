(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ad6b5c9"],{"031a":function(t,e,a){"use strict";var o=a("9cc9"),n=a.n(o);n.a},1905:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}]},[a("div",{staticStyle:{height:"46px","line-height":"46px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticStyle:{"padding-left":"16px"}},[a("i",{staticClass:"el-icon-s-unfold"}),a("span",{staticStyle:{"padding-left":"9px"}},[t._v(t._s(t.$store.state.AdminData.active_title))])])]),a("el-col",{attrs:{span:18}},[a("div",{staticStyle:{"text-align":"right"}},[a("el-link",{staticClass:"menu",on:{click:function(e){return t.onSubMenu("onRefresh",!0)}}},[t._v("刷新")]),a("el-link",{staticClass:"menu",on:{click:function(e){return t.onSubMenu("onSearch",!0)}}},[t._v("搜索")]),t._l(t.$store.state.AdminData.right_menus,(function(e,o){return a("el-link",{key:o,staticClass:"menu",on:{click:function(a){return t.onSubMenu(e)}}},[t._v(" "+t._s(e.name)+" ")])}))],2)])],1)],1),a("div",{staticStyle:{"border-top":"solid 1px #f2f1f4"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rows,"highlight-current-row":!0,size:"mini"},on:{"current-change":t.onSelectCurrRow}},[a("el-table-column",{attrs:{type:"index",label:"#"}}),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"contact_name",label:"联系人"}}),a("el-table-column",{attrs:{prop:"contact_tel",label:"联系电话"}}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.stateFormat(e.row.state))+" ")]}}])}),a("el-table-column",{attrs:{prop:"add_time",label:"注册时间"}})],1)],1),a("el-dialog",{attrs:{title:"创建商户超管",visible:t.sup_show,width:"400px"},on:{"update:visible":function(e){t.sup_show=e}}},[a("el-form",{attrs:{model:t.SupFormData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"登录手机:"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.SupFormData.mobile,callback:function(e){t.$set(t.SupFormData,"mobile",e)},expression:"SupFormData.mobile"}})],1),a("el-form-item",{attrs:{label:"登录密码:"}},[a("el-input",{attrs:{"show-password":"",autocomplete:"off"},model:{value:t.SupFormData.pwd,callback:function(e){t.$set(t.SupFormData,"pwd",e)},expression:"SupFormData.pwd"}})],1),a("el-form-item",{attrs:{label:"超管姓名:"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.SupFormData.name,callback:function(e){t.$set(t.SupFormData,"name",e)},expression:"SupFormData.name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.sup_show=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.onAddSupSubmit}},[t._v("确 定")])],1)],1)],1)},n=[],i=(a("b0c0"),a("2b0e")),r=a("4360"),s=a("d568"),l=a("e0eb");r["a"].state.ShopData||i["default"].set(r["a"].state,"ShopData",{rows:[],total:0,loading:!1,curr_row:null,SearchFormData:{name:"",page_num:1,page_len:10,order_field:"add_time",order_sort:"desc"},search_show:!1,add_show:!1,AddFormData:{},edit_show:!1,EditFormData:{},sup_show:!1,SupFormData:{mobile:"",pwd:"",name:""}});var u={data:function(){return r["a"].state.ShopData},created:function(){this.init()},methods:{onSubMenu:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l["a"].submenu(t,this,s["a"].cookie_get("login_token"),e)},init:function(){var t=this;s["a"].req("ManageShopList",{login_token:s["a"].cookie_get("login_token"),name:this.SearchFormData.name,page_num:this.SearchFormData.page_num,page_len:this.SearchFormData.page_len,order_field:this.SearchFormData.order_field,order_sort:this.SearchFormData.order_sort}).then((function(e){t.rows=e.data.rows,t.total=e.data.total}))},stateFormat:function(t){return 0==t?"待审":1==t?"已审":"作废"},onRefresh:function(){this.init()},onSearch:function(){this.search_show=!0},onSelectCurrRow:function(t){this.curr_row=t},handleAdd:function(){},onAddSubmit:function(){},handleEdit:function(){if(l["a"].empty(this.curr_row))return this.$message.error("请选择一条数据"),!1;this.edit_show=!0},onEditSubmit:function(){var t=this;s["a"].req("ManageShopEdit",{login_token:s["a"].cookie_get("login_token"),uuid:this.curr_row.uuid,name:this.EditFormData.name}).then((function(e){t.edit_show=!1,t.init()})).catch((function(e){t.$message.error(e.msg)}))},handleExamine:function(t){var e=this;if(l["a"].empty(this.curr_row))return this.$message.error("请选择数据"),!1;s["a"].req("ManageShopCheck",{login_token:s["a"].cookie_get("login_token"),uuid:this.curr_row.uuid}).then((function(t){e.$message.success("操作成功"),e.init()})).catch((function(t){e.$message.error(t.msg)}))},handleAddSup:function(t){if(l["a"].empty(this.curr_row))return this.$message.error("请选择数据"),!1;this.sup_show=!0},onAddSupSubmit:function(){var t=this;s["a"].req("ManageCreateShopAdmin",{login_token:s["a"].cookie_get("login_token"),shop_uuid:this.curr_row.uuid,mobile:this.SupFormData.mobile,pwd:this.SupFormData.pwd,name:this.SupFormData.name}).then((function(e){t.$message.success("设置超管成功"),t.curr_row=null,t.sup_show=!1})).catch((function(e){t.$message.error(e.msg)}))}}},c=u,m=(a("031a"),a("2877")),d=Object(m["a"])(c,o,n,!1,null,"538f72e1",null);e["default"]=d.exports},"9cc9":function(t,e,a){}}]);
//# sourceMappingURL=chunk-1ad6b5c9.e48a822e.js.map