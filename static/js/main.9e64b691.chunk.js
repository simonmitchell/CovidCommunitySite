(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,r,n){"use strict";n.r(r);var a=n(0),o=n.n(a),t=(n(71),n(72),n(18)),i=n.n(t),s=n(19),c=n(20),l=n(27),d=n(21),y=n(28),u=(n(77),n(12)),m=n(65),h=n(52),g=n(9),b=n(62),p=n(66),f=n(34),C=n(36),w=n(35),v=n(51),k=n(37),A=n(39),S=n(31),T=n(47);var L=n(26),B={cardHeader:{backgroundColor:"rgba(0,0,0,0.03",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",borderBottom:"1px solid rgba(0,0,0,0.13)"}},E=function(e){function r(e){var n;return Object(s.a)(this,r),(n=Object(l.a)(this,Object(d.a)(r).call(this,e))).callNumber=function(e){window.open("tel:".concat(e))},n.openLink=function(e){window.open(e,"_blank")},n}return Object(y.a)(r,e),Object(c.a)(r,[{key:"render",value:function(){var e=this,r=this.props,n=r.t,a=r.resource,t=function(e,r){if(!e)return null;var n=[e.name,e.street,e.city,e.postcode];return(n=n.map(function(e){return"string"===typeof e?e:e?e[r||"en"]:void 0})).filter(Boolean).join(", ")}(a.address,this.props.locale);return o.a.createElement(T.a,{style:this.props.style},o.a.createElement("div",{className:"d-flex flex-row align-items-center justify-content-between",style:B.cardHeader},o.a.createElement("h5",{style:{marginBottom:0,lineHeight:void 0}},"string"===typeof a.name?a.name:a.name[this.props.locale]),a.number&&o.a.createElement(S.a,{onClick:this.callNumber.bind(this,a.number),style:{alignSelf:"flex-end",marginLeft:12}},a.number)),o.a.createElement(T.a.Body,null,o.a.createElement("p",null,o.a.createElement(k.a,{style:{marginRight:10},icon:A.a}),"string"===typeof a.city?a.city:a.city[this.props.locale],t&&" - ".concat(t)),o.a.createElement("hr",null),o.a.createElement(T.a.Title,{style:{textTransform:"capitalize"}},n("subCategory.".concat(a.subCategory))),a.description&&o.a.createElement("p",null,a.description[this.props.locale||"en"]),a.organisers&&a.organisers.length>0&&a.organisers.map(function(r,n){return o.a.createElement("p",{key:n,style:{marginBottom:0}},r.name,r.role&&" - ".concat(r.role[e.props.locale||"en"]),r.number&&o.a.createElement("span",{style:{fontWeight:"700"}},": ","    "+r.number))}),o.a.createElement("div",{style:{marginTop:12}},a.links&&a.links.length>0&&a.links.map(function(r,n){return o.a.createElement(S.a,{key:n,onClick:e.openLink.bind(e,r.url),variant:"secondary"},r.title[e.props.locale||"en"])}))))}}]),r}(o.a.Component);E.defaultProps={};var D=Object(L.b)()(E),I=n(44),P=n(46),F=n.n(P),M=n(94),O=n(95),G=n(96),R=["food","foodbank","groceries","healthcare","laundry","services"],H={container:{backgroundColor:"white",border:"2px solid #ececec",borderRadius:4,marginTop:20,paddingBottom:12,paddingTop:12}},x=function(e){function r(e){var n;Object(s.a)(this,r);var a=null,o=O.find(function(r){return e.location.hash==="#".concat(r.id)});return o&&(a=o.id),(n=Object(l.a)(this,Object(d.a)(r).call(this,e))).onCategorySelected=function(e){n.setState({category:"_all_"==e?null:e})},n.onLocaleSelected=function(e){I.a.changeLanguage(e,function(r,a){r||n.setState({locale:e})})},n.onRegionSelected=function(e){n.setState({regionId:"_all_"==e?null:e})},n.handleSearchTermChanged=function(e){n.setState({searchTerm:e.target.value})},n.filterResources=function(e){var r=n.props.t,a=Object(m.a)(e),o=n.state.searchTerm.toUpperCase();return a=a.filter(function(e){if(n.state.regionId&&n.state.regionId!=e.regionId)return!1;if(n.state.category&&n.state.category!=e.category)return!1;if(!o||""===o)return!0;var a="string"===typeof e.name?e.name:e.name[n.state.locale],t="string"===typeof e.city?e.city:e.city[n.state.locale],i=r("category.".concat(e.category)),s=r("subCategory.".concat(e.subCategory)),c=e.description?e.description[n.state.locale]:null;return a.toUpperCase().indexOf(o)>-1||c&&c.toUpperCase().indexOf(o)>-1||t&&t.toUpperCase().indexOf(o)>-1||i&&i.toUpperCase().indexOf(o)>-1||s&&s.toUpperCase().indexOf(o)>-1})},n.state={category:null,locale:M[0].id,regionId:a,searchTerm:""},n}return Object(y.a)(r,e),Object(c.a)(r,[{key:"componentDidUpdate",value:function(e){var r=this;if(e.location.hash!==this.props.location.hash)if(""===this.props.location.hash)this.setState({regionId:null});else{var n=O.find(function(e){return r.props.location.hash==="#".concat(e.id)});n&&this.setState({regionId:n.id})}}},{key:"render",value:function(){var e=this,r=this.props.t,n=this.filterResources(Array.isArray(G)?G:G.data),a=M.find(function(r){return r.id===e.state.locale});return o.a.createElement("div",{className:"App"},o.a.createElement(w.a,{bg:"primary",variant:"dark",expand:"lg"},o.a.createElement(w.a.Brand,{href:"/"},r("home.title")),o.a.createElement(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(w.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(C.a,{activeKey:this.state.regionId,className:"mr-auto",onSelect:this.onRegionSelected},o.a.createElement(C.a.Link,{active:!this.state.regionId,eventKey:"_all_"},r("regions.all")),O.map(function(r,n){return o.a.createElement(C.a.Link,{key:n,eventKey:r.id,href:"#".concat(r.id)},"string"===typeof r.name?r.name:r.name[e.state.locale])})),M.length>1&&o.a.createElement(C.a,{onSelect:this.onLocaleSelected},o.a.createElement(v.a,{active:!0,title:a.name,id:"collasible-nav-dropdown"},M.map(function(e,r){return o.a.createElement(v.a.Item,{eventKey:e.id,key:r},e.name)}))))),G.updated&&o.a.createElement("p",{style:{textAlign:"center",marginTop:16,color:"#6C757D"}},r("home.updated",{time_ago:F.a.duration(F()(G.updated).diff(F()())).humanize(!0)})),o.a.createElement(h.a,{style:H.container,fluid:"md"},o.a.createElement(f.a,null,o.a.createElement(f.a.Prepend,null,o.a.createElement(f.a.Text,null,o.a.createElement(k.a,{icon:A.b}))),o.a.createElement(p.a,{value:this.state.searchTerm,onChange:this.handleSearchTermChanged,size:"lg",type:"text",placeholder:"Search by name, town, or category"}),o.a.createElement(b.a,{as:f.a.Append,onSelect:this.onCategorySelected,title:this.state.category?r("category.".concat(this.state.category)):r("category.all"),variant:"secondary"},o.a.createElement(g.a.Item,{eventKey:"_all_"},r("category.all")),R.map(function(e,n){return o.a.createElement(g.a.Item,{key:n,eventKey:e},r("category.".concat(e)))})))),o.a.createElement(h.a,{fluid:"md",style:{marginTop:22}},n.map(function(r,n){return o.a.createElement(D,{key:n,locale:e.state.locale,resource:r,style:{marginBottom:24}})})))}}]),r}(o.a.Component),j=Object(L.b)()(Object(u.e)(x)),z=function(e){function r(){return Object(s.a)(this,r),Object(l.a)(this,Object(d.a)(r).apply(this,arguments))}return Object(y.a)(r,e),Object(c.a)(r,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(j,{routerProps:e})}}))}}]),r}(a.Component),_=n(49);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));I.a.use(L.a).init({resources:{cy:{translation:{category:{all:"Bob",services:"Gwasanaethau",food:"Bwyd",groceries:"Bwydydd",healthcare:"Gofal Iechyd",foodbank:"Banc Bwyd",laundry:"Golchdy"},regions:{all:"Bob"},subCategory:{meals_on_wheels:"Pryd ar Glud",restaurant:"Bwyty",cafe:"Caffi",bakery:"Pobydd",butchers:"Cigyddion",fishmonger:"Pysgod",laundry:"Golchdy",shop:"Siop",foodbank:"Banc Bwyd",hotel:"Gwesty",tv:"Teledu",milkman:"Dyn Llaeth",pharmacist:"Fferyllydd"},home:{searchPlaceholder:"Search by name, town, or category",title:"Adnoddau Ceredigion",updated:"Last updated: {{time_ago}}"}}},en:{translation:{category:{all:"All",services:"Services",food:"Food",groceries:"Groceries",healthcare:"",foodbank:"Foodbank",laundry:"Laundry"},regions:{all:"All"},subCategory:{meals_on_wheels:"Meals on Wheels",restaurant:"Restaurant",bakery:"Bakery",cafe:"Caf\xe9",butchers:"Butchers",fishmonger:"Fishmonger",laundry:"Laundy",shop:"Shop",foodbank:"Foodbank",hotel:"Hotel",tv:"TV",milkman:"Milkman",pharmacist:"Pharmacist"},home:{searchPlaceholder:"Search by name, town, or category",title:"Ceredigion Resources",updated:"Last updated: {{time_ago}}"}}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}}),i.a.render(o.a.createElement(_.a,{basename:""},o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,r,n){e.exports=n(102)},72:function(e,r,n){},77:function(e,r,n){},94:function(e){e.exports=[{id:"en",name:"English"},{id:"cy",name:"Cymraeg"}]},95:function(e){e.exports=[{name:{cy:"Gogledd",en:"North"},id:"north"},{name:{cy:"Gogledd Canol",en:"North-Mid"},id:"north-mid"},{name:{cy:"Canol De",en:"Mid-South"},id:"south-mid"},{name:{cy:"De",en:"South"},id:"south"}]},96:function(e){e.exports={updated:"2020-03-21T11:33:00+0000",data:[{address:{name:"Cwtch Coffi",street:"Bridge Street",city:"Aberaeron",postcode:"SA46 0AP"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref",en:"Meal Delivery In Town"},name:"Cwtch Coffi",organisers:[{name:"Diana",number:"01545 570310"},{name:"Teresa",number:"01545 570310"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570310"},{address:{name:"Zuko's",street:"Market Street",city:"Aberaeron",postcode:"SA46 0AT"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref",en:"Meal Delivery In Town"},name:"Zuko's",organisers:[{name:"Julian Bransden",number:"01545 571150"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 571150"},{address:{name:"The New Celtic Restaurant",street:"8 Market Street",city:"Aberaeron",postcode:"SA46 0AS"},category:"food",subCategory:"restaurant",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref",en:"Meal Delivery In Town"},name:"The New Celtic Restaurant",organisers:[{name:"Rhodri, Neris, Gary, Iestyn",number:"01545 570369"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570369"},{address:{name:"Ambassadors Caf\xe9",street:"3 Alban Square",city:"Aberaeron",postcode:"SA46 0AD"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref ac yn fodlon cludo bwyd i 6+ person o fewn dwy filltir",en:"Meal Delivery In town. Will deliver 6 plus meals within 2 mile radius"},name:"Ambassadors Caf\xe9",organisers:[{name:"Louise Clemas",number:"01545 574737"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 574737"},{address:{name:"McCowans",street:"35 Alban Square",city:"Aberaeron",postcode:"SA46 0AJ"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Bwyd",en:"Meal Delivery"},name:"McCowans",organisers:[{name:"Clare McCowans",number:"07779 600731"}],regionId:"south-mid",city:"Aberaeron, Ciliau Aeron, Creuddyn Bridge, Cribyn, Cwrtnewydd, Felinfach, Temple Bar, Llanwnen",links:[],number:"07779 600731"},{address:{name:"Llond Plat",street:"7 Sgwar Alban",city:"Aberaeron",postcode:"SA46 0AD"},category:"food",subCategory:"restaurant",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Bwyd. Delivery commences at 12:00pm each day. Minimum order outside Aberaeron \xa310. Card payment taken over the phone or cash on delivery",en:"Meal Delivery. Delivery commences at 12:00pm each day. Minimum order outside Aberaeron \xa310. Card payment taken over the phone or cash on delivery"},name:"Llond Plat",organisers:[{name:"Sharys",number:"01545 570848"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570848"},{address:{name:"Harbourmaster",street:"1 Quay Parade",city:"Aberaeron",postcode:"SA46 0AD"},category:"food",subCategory:"restaurant",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Bwyd. Baking 20 loaves of bread this Saturday for locals to come and buy. Take away meals to those living in Aberaeron \u2013 Lunch and Dinner. Also DVD players and DVDS offered to those in isolation",en:"Meal Delivery. Baking 20 loaves of bread this Saturday for locals to come and buy. Take away meals to those living in Aberaeron \u2013 Lunch and Dinner. Also DVD players and DVDS offered to those in isolation"},name:"Harbourmaster",organisers:[],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570755"},{address:{name:"Golwyg-y-Mor",street:"3 Bridge Street",city:"Aberaeron",postcode:"SA46 0AP"},category:"food",subCategory:"butchers",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Cig",en:"Meat Delivery"},name:"Golwyg-y-Mor",organisers:[{name:"Maria",number:"01545 570242"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570242"},{address:{name:"Pengarreg Laundry",street:"Clos Pengarreg",city:"Aberaeron",postcode:"SA46 0DX"},category:"laundry",subCategory:"laundry",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Laundry Service. Will collect from property",en:"Laundry Service. Will collect from property"},name:"Pengarreg Laundry",organisers:[{name:"Meinir",number:"01545 574847, 07581413086"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 574847"},{address:{name:"Dryslwyn Stores & Filling Station",street:"Llwyncelyn",city:"Aberaeron",postcode:"SA46 0HF"},category:"groceries",subCategory:"shop",council:{cy:"Cyngor Cymuned Henfynyw",en:"Henfynyw Community Council"},councillors:["Marc Davies"],description:{cy:"Yn barod i helpu a dosbarthu dros gyfnod y Coronafeirws",en:"Will assist & deliver during COVID-19"},name:"Dryslwyn Stores & Filling Station",organisers:[{name:"Nance Jones",number:"01545 580381"}],regionId:"south-mid",city:"Derwen Gam Oakford, Ffosyffin, Llwyncelyn",links:[],number:"01545 580381"},{address:{name:"Costcutter Ystrad Garage",street:"Felinfach",city:"Lampeter",postcode:"SA48 8AE"},category:"groceries",subCategory:"shop",council:{cy:"Cyngor Cymuned Llanfihangel Ystrad",en:"Llanfihangel Ystrad Community Council"},councillors:["Lynford Thomas"],description:{cy:"Arechebu cyn 10 o\u2019r gloch y bore, dosbarthu o Dydd Llun \u2013 Dydd Gwener Derbyn arian parod neu siec neu talu gyda carden dros y ff\xf4n",en:"Order before 10a.m. for same day delivery, will deliver Monday \u2013 Friday Cash or cheque on delivery or can pay by card over the telephone"},name:"Costcutter Ystrad Garage",organisers:[{name:"Audrey, Lyn, Emma",number:"01570 471168"}],regionId:"south-mid",city:"Felinfach",links:[],number:"01570 471168"},{address:{name:{en:"Lampeter Foodbank",cy:"Banc Bwyd Lanbed"},street:"78 Bridge Street",city:"Lampeter",postcode:"SA48 7AB"},category:"foodbank",subCategory:"foodbank",description:{cy:"Llun/Mercher/Gwener. 9:00am-5:00pm",en:"Mon/Wed/Friday. 9:00am-5:00pm"},name:{en:"Lampeter Foodbank",cy:"Banc Bwyd Lanbed"},regionId:"south-mid",city:{cy:"Llanbedr Pont Steffan",en:"Lampeter"},links:[],number:"07582905743"},{address:{name:"Black Lion Hotel",street:"High Street Lampeter",city:"Lampeter"},category:"food",subCategory:"hotel",council:{cy:"Cyngor Tref Llanbedr Pont Steffan",en:"Lampeter Town Council"},councillors:["Hag Harris","Ivor Williamns"],description:{cy:"Dosbarthu Prydiau Bwyd",en:"Meal delivery"},name:"Black Lion Hotel",organisers:[{name:"Nick Wright",number:"01570 422 172"}],regionId:"south-mid",city:{en:"Lampeter",cy:"Llanbedr Pont Steffan"},links:[],number:"01570 422 172"},{address:{name:"Yr Hedyn Mwstard",street:"17 College Street",city:"Lampeter"},category:"food",subCategory:"hotel",council:{cy:"Cyngor Tref Llanbedr Pont Steffan",en:"Lampeter Town Council"},councillors:["Hag Harris","Ivor Williamns"],description:{cy:"Dosbarthu Prydiau Bwyd",en:"Meal delivery"},name:"Yr Hedyn Mwstard",organisers:[{name:"Liz Jones",number:"01570 423344, 07805 896013"}],regionId:"south-mid",city:{en:"Lampeter",cy:"Llanbedr Pont Steffan"},links:[],number:"01570 423344"},{address:{name:"Llanfair Clydogau Shop/Post Office",street:"Llanfair Clydogau",city:"Lampeter",postcode:"SA48 8LA"},category:"groceries",subCategory:"shop",council:{cy:"Cyngor Cymuned Llanfair Clydogau",en:"Llanfair Clydogau Community Council"},councillors:["Odwyn Davies"],description:{cy:"Dosbarthu siopa i\u2019r henoed dros gynod y Coronafeirws",en:"Grocery Deliveries for the Elderly will assist during the COVID19"},name:"Llanfair Clydogau Shop/Post Office",organisers:[{name:"Jean Entwistle",number:"01570 493203"}],regionId:"south-mid",city:"Llanfair Clydogau",links:[],number:"01570 493203"},{address:{name:"The Moody Cow",street:"Llwyncelyn",city:"Aberaeron",postcode:"SA46 OHL"},category:"food",subCategory:"restaurant",description:{cy:"Dosbarthu Bwyd",en:"Food Delivieries"},name:"The Moody Cow",organisers:[{name:"Geraint Thomas",number:"07989590997"}],regionId:"south-mid",city:"Llwyncelyn",links:[],number:"07989590997"},{address:{name:"Slaters Bakery",city:"Abersytwyth"},category:"food",subCategory:"bakery",description:{cy:"Dosbarthu bara/cacennau. Gogledd Ceredigion",en:"Bread and cake delivery. North Ceredigion"},name:"Slaters Bakery",organisers:[{name:"",number:"01970 611 522, 01970 612658"}],regionId:"north",city:"Aberystwyth",links:[],number:"01970 611 522"},{address:{name:"Robert Rattrays",city:"Abersytwyth"},category:"food",subCategory:"butchers",description:{cy:"Cigydd. Dosbarthy Gogledd Ceredigion",en:"Butcher. Deliver to North Ceredigion"},name:"Robert Rattrays",regionId:"north",city:"Aberystwyth, Borth, Bow Street, Penrhyncoch",links:[],number:"01970 615353"},{address:{name:"Treehouse",city:"Abersytwyth, Borth"},category:"food",subCategory:"shop",description:{cy:"Bwyd sych, organig ffrrwythau, llysiau, cig a.y.b",en:"Dry foods, organic wholefoods, fruit, veg, meat etc"},name:"Treehouse",regionId:"north",city:"Aberystwyth, Borth, Bow Street, Penrhyncoch",links:[],number:"01970 615791"},{address:{name:"Express Caf\xe9",city:"Abersytwyth"},category:"food",subCategory:"cafe",description:{cy:"Pryd ar Glud",en:"Meals on Wheels"},name:"Express Caf\xe9",regionId:"north",city:"Aberystwyth, Capel Bangor, Llandre",links:[],number:"01970 832113"},{address:{name:"Jonah's Fresh & Frozen Fish",city:"Abersytwyth"},category:"food",subCategory:"fishmonger",description:{cy:"Dosbarthu Pysgod",en:"Fresh & Frozen Fish Delivery"},name:"Jonah's Fresh & Frozen Fish",regionId:"north",city:"Aberystwyth, Borth, Bow Street, Penrhyncoch",links:[],number:"01970 615492"},{address:{name:"Food Bank",city:"Aberystwyth"},category:"foodbank",subCategory:"foodbank",description:{cy:"Food bank",en:"Food bank"},name:"Food Bank",regionId:"north",city:"Aberystwyth",links:[],number:"08002425844"},{address:{name:"Aberystwyth Food Distribution Hub",city:"Aberystwyth"},category:"foodbank",subCategory:"foodbank",description:{cy:"Food supply and contactless delivery for elderly vulnerable and financially vulnerable in Aberystwyth Town centre and reasonable walking distance. Limited supply but what we have is for the community.",en:"Food supply and contactless delivery for elderly vulnerable and financially vulnerable in Aberystwyth Town centre and reasonable walking distance. Limited supply but what we have is for the community."},name:"Aberystwyth Food Distribution Hub",regionId:"north",city:"Aberystwyth",links:[],number:"07411 038302"},{address:{name:"Penrhyncoch FC Roosters Carvery",city:"Penrhyncoch"},category:"food",subCategory:"meals_on_wheels",description:{cy:"Dydd Iau, Gwener, Sadwrn, Sul pryd o fwyd a pwdin \xa36.50. Yn fodlon dosbarthu yn Borth os fydd 10 neu fwy o ymholidau wedi dod i law.",en:"Thurs, Fri, Sat, Sunday one meal and pudding \xa36.50. Will deliver to Borth if more than 10 enquiries are received."},name:"Penrhyncoch FC Roosters Carvery",regionId:"north",city:"Borth, Bow Street, Capel Dewi, Llandre",links:[],number:"07813 714799"},{address:{name:"Premier Shop Family Stores",city:"Borth"},category:"groceries",subCategory:"shop",description:{cy:"Can take orders over the phone for corner shop items and pack up ready for delivery or provide contactless delivery on certain days",en:"Can take orders over the phone for corner shop items and pack up ready for delivery or provide contactless delivery on certain days"},name:"Premier Shop Family Stores",regionId:"north",city:"Borth",links:[],number:"01970 871543"},{address:{name:"SPAR",city:"Bow Street"},category:"groceries",subCategory:"shop",description:{cy:"SPAR corner shop delivery",en:"SPAR corner shop delivery"},name:"SPAR - Bow Street",regionId:"north",city:"Bow Street",organisers:[{name:"SPAR",number:"01970 867888, 07970820291"}],links:[],number:"01970 867888"},{address:{name:"MJ Ariels"},category:"services",subCategory:"tv",description:{cy:"Help gyda Teledu",en:"To have good TV signal and get TV sets up and running"},name:"MJ Ariels",regionId:"north",city:"Ceredigion",links:[],number:"07539333393"},{address:{name:"Clettwr Community Caf\xe9 & Shop",city:"Llancynfelyn"},category:"food",subCategory:"shop",description:{cy:"Dosbarthu Bwyd a Siopa",en:"Meal Deliveries and Groceries"},name:"Clettwr Community Caf\xe9 & Shop",regionId:"north",city:"Llancynfelyn, Taliesin, Tre'r Ddol",links:[],number:"01970 832113"},{address:{name:"Sean Fitzpatrick",city:"Penrhyncoch"},category:"groceries",subCategory:"milkman",name:"Sean Fitzpatrick",regionId:"north",city:"Penrhyncoch",links:[],number:"01970 820287"},{address:{name:"Glanarthen Stores",city:"Cross inn, Llanon"},category:"groceries",subCategory:"shop",description:{cy:"Grocery delivieries",en:"Grocery delivieries"},name:"Glanarthen Stores",regionId:"north-mid",city:"Cross Inn, Llanon",organisers:[{name:"Robby John Sweet",number:"01974 272505"}],links:[],number:"01974 272505"},{address:{name:{en:"Rhos Yr Hafod Pub",cy:"Tafarn Rhos Yr Hafod"},city:"Cross inn, Llanon"},category:"foodbank",subCategory:"foodbank",name:{en:"Rhos Yr Hafod Pub",cy:"Tafarn Rhos Yr Hafod"},regionId:"north-mid",city:"Cross Inn, Llanon",organisers:[{name:"Bridget Evans"}],links:[]},{address:{name:{en:"Carwyn's Caf\xe9",cy:"Cegin Carwyn"},city:"Penparcau"},category:"food",subCategory:"cafe",name:{en:"Carwyn's Cafe",cy:"Cegin Carwyn"},regionId:"north-mid",city:"Penparcau",organisers:[{name:"Carwyn",number:"01974 821201"}],number:"01974 821201",links:[]},{address:{name:"Huw Evans Pharmacist Tregaron",city:"Tregaron"},category:"healthcare",description:{cy:"Dosbarthu Meddyginiaeth",en:"Medication Deliveries"},subCategory:"pharmacist",name:"Huw Evans Pharmacist Tregaron",regionId:"north-mid",city:"Tregaron",organisers:[{name:"Huw Evans",number:"01974 298265"}],number:"01974 298265",links:[]},{address:{name:"SPAR",street:"Chapel Street",city:"Tregaron"},category:"healthcare",description:{cy:"Grocery Deliveries. Tregaron Town Only",en:"Grocery Deliveries. Tregaron Town Only"},subCategory:"pharmacist",name:"SPAR - Tregaron",regionId:"north-mid",city:"Tregaron",number:"01974 298281",links:[]}]}}},[[68,1,2]]]);
//# sourceMappingURL=main.9e64b691.chunk.js.map