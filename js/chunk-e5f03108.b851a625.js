(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5f03108"],{"1b25":function(t,a,e){},"1d9d":function(t,a,e){"use strict";e("1b25")},"77be":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"account-wrap d-flex flex-column"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-7"},[s("h3",{staticClass:"title py-3 border bg-white text-center mb-4"},[t._v("修改個人資料")]),t._m(0),s("div",{staticClass:"tab-content rounded-card card"},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"edit-name","aria-labelledby":"edit-name-tab"}},[s("div",{staticClass:"card-body p-4 d-flex flex-column align-items-center"},[s("img",{staticClass:"headshot d-block mb-3",attrs:{src:e("b4db")}}),s("button",{staticClass:"btn bg-black text-white rounded-0 shadow-none px-4 py-2",attrs:{type:"button"}},[t._v(" 上傳大頭照 ")]),s("form",{staticClass:"mt-3"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("暱稱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nameInfo.name,expression:"nameInfo.name"}],staticClass:"form-control rounded-0",attrs:{type:"text",id:"name",placeholder:"請輸入暱稱"},domProps:{value:t.nameInfo.name},on:{input:function(a){a.target.composing||t.$set(t.nameInfo,"name",a.target.value)}}})]),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"gender"}},[t._v("性別")]),s("div",[s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.nameInfo.gender,expression:"nameInfo.gender"}],staticClass:"form-check-input",attrs:{type:"radio",id:"female",value:"female"},domProps:{checked:t._q(t.nameInfo.gender,"female")},on:{change:function(a){return t.$set(t.nameInfo,"gender","female")}}}),s("label",{staticClass:"form-check-label",attrs:{for:"female"}},[t._v("女性")])]),s("div",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.nameInfo.gender,expression:"nameInfo.gender"}],staticClass:"form-check-input",attrs:{type:"radio",id:"male",value:"male"},domProps:{checked:t._q(t.nameInfo.gender,"male")},on:{change:function(a){return t.$set(t.nameInfo,"gender","male")}}}),s("label",{staticClass:"form-check-label",attrs:{for:"male"}},[t._v("男性")])])])]),t.errorMessage?s("div",{staticClass:"text-danger text-center d-block mt-3"},t._l(t.errorMessage,(function(a,e){return s("small",{key:"error_"+e,staticClass:"d-block"},[t._v(" "+t._s(a)+" ")])})),0):t._e(),s("button",{staticClass:"btn btn-secondary w-100 mt-3",attrs:{type:"button"}},[t._v("送出更新")])])])]),s("div",{staticClass:"tab-pane fade",attrs:{id:"edit-password","aria-labelledby":"edit-password-tab"}},[s("div",{staticClass:"card-body p-4 d-flex flex-column align-items-center"},[s("form",[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"password"}},[t._v("輸入新密碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordInfo.password,expression:"passwordInfo.password"}],staticClass:"form-control rounded-0",attrs:{type:"text",id:"password",placeholder:"請輸入新密碼"},domProps:{value:t.passwordInfo.password},on:{input:function(a){a.target.composing||t.$set(t.passwordInfo,"password",a.target.value)}}})]),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"confirm_password"}},[t._v("再次輸入")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordInfo.confirm_password,expression:"passwordInfo.confirm_password"}],staticClass:"form-control rounded-0",attrs:{type:"text",id:"confirm_password",placeholder:"再次輸入輸入新密碼"},domProps:{value:t.passwordInfo.confirm_password},on:{input:function(a){a.target.composing||t.$set(t.passwordInfo,"confirm_password",a.target.value)}}})]),s("button",{staticClass:"btn btn-secondary w-100 mt-3",attrs:{type:"button",disabled:!t.formIsFinished}},[t._v("重設密碼")])])])])])]),s("div",{staticClass:"col-12 col-md-5 d-none d-md-block"},[s("Sidebar")],1),s("div",{staticClass:"d-md-none"},[s("SidebarSm")],1)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"ms-2 nav nav-tabs border-0",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("button",{staticClass:"nav-link border px-4 active",attrs:{id:"edit-name-tab","data-bs-toggle":"tab","data-bs-target":"#edit-name",type:"button","aria-controls":"edit-name","aria-selected":"true"}},[t._v("暱稱修改")])]),e("li",{staticClass:"nav-item"},[e("button",{staticClass:"nav-link border px-4",attrs:{id:"edit-password-tab","data-bs-toggle":"tab","data-bs-target":"#edit-password",type:"button","aria-controls":"edit-password","aria-selected":"false"}},[t._v("重設密碼")])])])}],o=(e("d3b7"),e("3ca3"),e("ddb0"),{name:"Following",components:{Sidebar:function(){return e.e("chunk-25c02a94").then(e.bind(null,"5ea5"))},SidebarSm:function(){return e.e("chunk-70b44a3f").then(e.bind(null,"7441"))}},data:function(){return{nameInfo:{name:"邊緣小杰",gender:"female"},errorMessage:["1.圖片寬高比必需為 1:1，請重新輸入","2.解析度寬度至少 300像素以上，請重新輸入"],passwordInfo:{password:"",confirm_password:""}}},computed:{formIsFinished:function(){return this.passwordInfo.password&&this.passwordInfo.confirm_password}},methods:{getPictureUrl:function(t){return e("bb6e")("./".concat(t))}}}),r=o,i=(e("1d9d"),e("2877")),d=Object(i["a"])(r,s,n,!1,null,"62cf2347",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-e5f03108.b851a625.js.map