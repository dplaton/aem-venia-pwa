/*!
 * @version 1d74816-dev
 * 
 */
(window.webpackJsonpVenia=window.webpackJsonpVenia||[]).push([[8],{IYh2:function(e,n,t){(n=e.exports=t("JPst")(!1)).i(t("ysJs"),""),n.push([e.i,".searchPage-root-pgQ {\n    padding: 1rem;\n}\n\n.searchPage-categoryTop-2EO {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 0 1rem 0;\n    color: rgb(var(--venia-global-color-text-alt));\n    justify-content: center;\n    align-items: center;\n}\n\n.searchPage-noResult-Zxz {\n    display: flex;\n}\n\n.searchPage-headerButtons-v21 {\n    display: flex;\n    justify-content: center;\n    flex-basis: 100%;\n    padding-top: 0.5rem;\n}\n\n.searchPage-filterButton-1D5 {\n    min-width: 6.25rem;\n}\n\n.searchPage-sortContainer-jkh {\n    font-size: 0.875rem;\n    padding: 1rem 0;\n}\n\n.searchPage-sortText-3Ha {\n    font-weight: 600;\n}\n",""]),n.locals={root:"searchPage-root-pgQ",categoryTop:"searchPage-categoryTop-2EO",noResult:"searchPage-noResult-Zxz",headerButtons:"searchPage-headerButtons-v21",filterButton:"searchPage-filterButton-1D5 "+t("ysJs").locals.root_lowPriority,sortContainer:"searchPage-sortContainer-jkh",sortText:"searchPage-sortText-3Ha"}},N6ZK:function(e,n,t){"use strict"
t.r(n)
var a=t("J4zp"),i=t.n(a),r=t("q1tI"),o=t.n(r),l=t("17x9"),s=t("lSNA"),c=t.n(s),d=t("VX74"),u=t("Ty5D"),m=t("OlZo"),f=t("Unmo"),v=t("Cszt"),g=t("IOPv"),k=t("+wQL"),p=t("iBQN"),h=t("vh/y"),S=t("M+E3"),b=t("DUu4"),N=t("C0us"),y=t("k+LG"),P=t.n(y),F=t("ybRa"),E=t.n(F),O=t("NSco"),w=t.n(O),T=t("V0gZ"),x=t.n(T),D=t("tuiD"),V=t("ACyH"),j=function SearchPage(e){var n,t=Object(p.b)(P.a,e.classes),a=function useSearchPage(e){var n=e.queries,t=n.filterIntrospection,a=n.getProductFiltersBySearch,o=n.productSearch,l=Object(f.a)(),s=i()(l,1)[0],p=s.sortAttribute,h=s.sortDirection,S=Object(r.useRef)(s),b=Object(v.a)(),N=i()(b,2),y=N[0],P=N[1],F=y.currentPage,E=y.totalPages,O=P.setCurrentPage,w=P.setTotalPages,T=Object(m.b)(),x=i()(T,2),D=x[0],V=x[1],j=D.searchOpen,R=V.toggleDrawer,_=V.toggleSearch,I=Object(u.h)(),z=I.search,A=Object(g.a)("query",I),B=Object(r.useRef)(z),C=Object(r.useCallback)(function(){R("filter")},[R])
Object(r.useEffect)(function(){_&&!j&&A&&_()},[])
var $=Object(d.useQuery)(t),Q=$.called,q=$.data,L=$.loading,J=Object(r.useMemo)(function(){var e=new Map
return q&&q.__type.inputFields.forEach(function(n){var t=n.name,a=n.type
e.set(t,a.name)}),e},[q]),Z={currentPage:F,setPage:O,totalPages:E},G=Object(d.useLazyQuery)(o),U=i()(G,2),H=U[0],M=U[1],Y=M.called,K=M.loading,X=M.error,W=M.data
Object(r.useEffect)(function(){if(J.size){var e=Object(k.c)(z),n={}
e.forEach(function(e,t){n[t]=Object(k.b)(e,J.get(t))}),H({variables:{currentPage:Number(F),filters:n,inputText:A,pageSize:Number(6),sort:c()({},p,h)}}),window.scrollTo({left:0,top:0,behavior:"smooth"})}},[F,J,A,H,z,h,p]),Object(r.useEffect)(function(){var e=W?W.products.page_info.total_pages:null
return w(e),function(){w(null)}},[W,w]),Object(r.useEffect)(function(){var e=new URLSearchParams(B.current),n=new URLSearchParams(z)
e.delete("page"),n.delete("page"),e.toString()===n.toString()&&S.current.sortAttribute.toString()===s.sortAttribute.toString()&&S.current.sortDirection.toString()===s.sortDirection.toString()||(O(1),B.current=z,S.current=s)},[s,z,O])
var ee=Object(d.useLazyQuery)(a),ne=i()(ee,2),te=ne[0],ae=ne[1].data
Object(r.useEffect)(function(){A&&te({variables:{search:A}})},[te,A,z])
var ie=ae?ae.products.aggregations:null
return{data:W,error:X,filters:ie,loading:Q&&!Y||K||L,openDrawer:C,pageControl:Z,sortProps:l}}({queries:{filterIntrospection:w.a,getProductFiltersBySearch:x.a,productSearch:E.a}}),l=a.data,s=a.error,y=a.filters,F=a.loading,O=a.openDrawer,T=a.pageControl,j=a.sortProps,R=i()(j,1)[0]
if(F)return b.a
if(s)return o.a.createElement("div",{className:t.noResult},"No results found. The search term may be missing or invalid.")
n=l&&0!==l.products.items.length?o.a.createElement(r.Fragment,null,o.a.createElement("section",{className:t.gallery},o.a.createElement(h.a,{items:l.products.items})),o.a.createElement("section",{className:t.pagination},o.a.createElement(N.a,{pageControl:T}))):o.a.createElement("div",{className:t.noResult},"No results found!")
var _=l?l.products.total_count:0,I=y&&y.length?o.a.createElement(V.a,{priority:"low",classes:{root_lowPriority:t.filterButton},onClick:O,type:"button"},"Filter"):null,z=y&&y.length?o.a.createElement(S.a,{filters:y}):null,A=_?o.a.createElement(D.a,{sortProps:j}):null,B=_?o.a.createElement("div",{className:t.sortContainer},"Items sorted by ",o.a.createElement("span",{className:t.sortText},R.sortText)):null
return o.a.createElement("article",{className:t.root},o.a.createElement("div",{className:t.categoryTop},o.a.createElement("div",{className:t.totalPages},"".concat(_," items")),o.a.createElement("div",{className:t.headerButtons},I,A),B),n,o.a.createElement(r.Suspense,{fallback:null},z))},R=j
j.propTypes={classes:Object(l.shape)({noResult:l.string,root:l.string,totalPages:l.string})},t.d(n,"default",function(){return R})},V0gZ:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getProductFiltersBySearch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"search"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"search"},value:{kind:"Variable",name:{kind:"Name",value:"search"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:268}}
t.loc.source={body:"query getProductFiltersBySearch($search: String!) {\n    products(search: $search) {\n        aggregations {\n            label\n            count\n            attribute_code\n            options {\n                label\n                value\n            }\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}
var a={}
function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t]
if(a.name&&a.name.value==n)return a}}!function extractReferences(){t.definitions.forEach(function(e){if(e.name){var n=new Set
!function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value)
else if("VariableDefinition"===e.kind){var t=e.type
"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){collectFragmentReferences(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){collectFragmentReferences(e,n)}),e.definitions&&e.definitions.forEach(function(e){collectFragmentReferences(e,n)})}(e,n),a[e.name.value]=n}})}(),e.exports=t,e.exports.getProductFiltersBySearch=function oneQuery(e,n){var t={kind:e.kind,definitions:[findOperation(e,n)]}
e.hasOwnProperty("loc")&&(t.loc=e.loc)
var i=a[n]||new Set,r=new Set,o=new Set
for(i.forEach(function(e){o.add(e)});o.size>0;){var l=o
o=new Set,l.forEach(function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var a=findOperation(e,n)
a&&t.definitions.push(a)}),t}(t,"getProductFiltersBySearch")},"k+LG":function(e,n,t){var a=t("IYh2")
"string"==typeof a&&(a=[[e.i,a,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
t("aET+")(a,i)
a.locals&&(e.exports=a.locals)},ybRa:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"productSearch"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currentPage"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"1"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"inputText"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pageSize"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"6"},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filters"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ProductAttributeFilterInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"ProductAttributeSortInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"currentPage"},value:{kind:"Variable",name:{kind:"Name",value:"currentPage"}}},{kind:"Argument",name:{kind:"Name",value:"pageSize"},value:{kind:"Variable",name:{kind:"Name",value:"pageSize"}}},{kind:"Argument",name:{kind:"Name",value:"search"},value:{kind:"Variable",name:{kind:"Name",value:"inputText"}}},{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filters"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"small_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"url_key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url_suffix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"regularPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"page_info"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total_pages"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"total_count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:774}}
t.loc.source={body:"query productSearch(\n    $currentPage: Int = 1\n    $inputText: String!\n    $pageSize: Int = 6\n    $filters: ProductAttributeFilterInput!\n    $sort: ProductAttributeSortInput\n) {\n    products(\n        currentPage: $currentPage\n        pageSize: $pageSize\n        search: $inputText\n        filter: $filters\n        sort: $sort\n    ) {\n        items {\n            id\n            name\n            small_image {\n                url\n            }\n            url_key\n            url_suffix\n            price {\n                regularPrice {\n                    amount {\n                        value\n                        currency\n                    }\n                }\n            }\n        }\n        page_info {\n            total_pages\n        }\n        total_count\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}
var a={}
function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t]
if(a.name&&a.name.value==n)return a}}!function extractReferences(){t.definitions.forEach(function(e){if(e.name){var n=new Set
!function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value)
else if("VariableDefinition"===e.kind){var t=e.type
"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){collectFragmentReferences(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){collectFragmentReferences(e,n)}),e.definitions&&e.definitions.forEach(function(e){collectFragmentReferences(e,n)})}(e,n),a[e.name.value]=n}})}(),e.exports=t,e.exports.productSearch=function oneQuery(e,n){var t={kind:e.kind,definitions:[findOperation(e,n)]}
e.hasOwnProperty("loc")&&(t.loc=e.loc)
var i=a[n]||new Set,r=new Set,o=new Set
for(i.forEach(function(e){o.add(e)});o.size>0;){var l=o
o=new Set,l.forEach(function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var a=findOperation(e,n)
a&&t.definitions.push(a)}),t}(t,"productSearch")}}])