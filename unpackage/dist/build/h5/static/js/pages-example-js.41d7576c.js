(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-example-js"],{"0e0e":function(t,e,n){"use strict";var i=n("8a70"),a=n.n(i);a.a},"19a7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{groupName:"网络",groupName_en:"Network",list:[{path:"http",icon:"http",title:"Http 请求",title_en:"Http"}]},{groupName:"全局变量",groupName_en:"Global variable",list:[{path:"globalVariable",icon:"globalVariable",title:"GlobalVariable 全局变量",title_en:"GlobalVariable"}]},{groupName:"工具库",groupName_en:"Tool library",list:[{path:"debounce",icon:"debounce",title:"Throttle | Debounce 节流防抖",title_en:"Throttle | Debounce"},{path:"deepMerge",icon:"deepMerge",title:"DeepMerge 对象深度合并",title_en:"DeepMerge"},{path:"deepClone",icon:"deepClone",title:"DeepClone 对象深度克隆",title_en:"DeepClone"},{path:"timeFormat",icon:"timeFormat",title:"TimeFormat 时间格式化",title_en:"TimeFormat"},{path:"timeFrom",icon:"timeFrom",title:"TimeFrom 多久之前",title_en:"TimeFrom"},{path:"guid",icon:"guid",title:"Guid 全局唯一id",title_en:"Guid"},{path:"route",icon:"route",title:"Route 路由跳转",title_en:"Route"},{path:"randomArray",icon:"randomArray",title:"RandomArray 数组乱序",title_en:"RandomArray"},{path:"colorSwitch",icon:"colorSwitch",title:"ColorSwitch 颜色转换",title_en:"ColorSwitch"},{path:"color",icon:"color",title:"Color 颜色值",title_en:"Color"},{path:"queryParams",icon:"queryParams",title:"QueryParams 对象转URL参数",title_en:"QueryParams"},{path:"test",icon:"test",title:"Test 规则校验",title_en:"Test"},{path:"md5",icon:"md5",title:"Md5 md5加密",title_en:"Md5"},{path:"random",icon:"random",title:"Random 随机数值",title_en:"Random"},{path:"trim",icon:"trim",title:"Trim 去除空格",title_en:"Trim"},{path:"getRect",icon:"getRect",title:"GetRect 节点信息",title_en:"GetRect"},{path:"mpShare",icon:"mpShare",title:"MpShare 小程序分享",title_en:"MpShare"}]}];e.default=i},"2a30":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* page {\n\tbackground-color: rgb(240, 242, 244);\n} */",""]),t.exports=e},"59ee":function(t,e,n){"use strict";var i=n("dda4"),a=n.n(i);a.a},"662b":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("19a7")),o={data:function(){return{list:a.default}},computed:{getIcon:function(){return function(t){return"https://cdn.uviewui.com/uview/example/"+t+".png"}},desc:function(){return this.$t("js.desc")}},onShow:function(){uni.setNavigationBarTitle({title:this.$t("nav.js")})},methods:{openPage:function(t){this.$u.route({url:"/pages/library/"+t+"/index"})},getGroupTitle:function(t){return"zh"==this.$i18n.locale?t.groupName:t.groupName_en},getFieldTitle:function(t){return"zh"==this.$i18n.locale?t.title:t.title_en}}};e.default=o},"821d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-cell-icon[data-v-42cd07fe]{width:%?36?%;height:%?36?%;margin-right:%?8?%}',""]),t.exports=e},"8a70":function(t,e,n){var i=n("2a30");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0aa29d8a",i,!0,{sourceMap:!1,shadowMode:!1})},b06d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={pageNav:n("da95").default,uCellGroup:n("13c0").default,uGap:n("d946").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("page-nav",{attrs:{desc:t.desc,title:"nav.js"}}),n("v-uni-view",{staticClass:"list-wrap"},t._l(t.list,(function(e,i){return n("u-cell-group",{key:i,attrs:{"title-bg-color":"rgb(243, 244, 246)",title:t.getGroupTitle(e)}},t._l(e.list,(function(e,i){return n("u-cell-item",{key:i,attrs:{titleStyle:{fontWeight:500},title:t.getFieldTitle(e)},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openPage(e.path)}}},[n("v-uni-image",{staticClass:"u-cell-icon",attrs:{slot:"icon",src:t.getIcon(e.icon),mode:"widthFix"},slot:"icon"})],1)})),1)})),1),n("u-gap",{attrs:{height:"70"}})],1)},o=[]},dda4:function(t,e,n){var i=n("821d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3c1e7654",i,!0,{sourceMap:!1,shadowMode:!1})},e4c1:function(t,e,n){"use strict";n.r(e);var i=n("662b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},ece4:function(t,e,n){"use strict";n.r(e);var i=n("b06d"),a=n("e4c1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0e0e"),n("59ee");var r,l=n("f0c5"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"42cd07fe",null,!1,i["a"],r);e["default"]=u.exports}}]);