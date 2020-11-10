/*!
 * @version 1d74816-dev
 * 
 */
(window.webpackJsonpVenia=window.webpackJsonpVenia||[]).push([[16],{M53w:function(n,t,e){var o=e("rce9")
"string"==typeof o&&(o=[[n.i,o,""]])
var r={hmr:!0,transform:void 0,insertInto:void 0}
e("aET+")(o,r)
o.locals&&(n.exports=o.locals)},UNp6:function(n,t,e){"use strict"
e.r(t)
var o=e("RIqP"),r=e.n(o),i=e("q1tI"),a=e.n(i),s=e("17x9"),c=e("pwkN"),p=e.n(c),l=e("M53w"),g=e.n(l),u=e("UpPT"),d=e.n(u),m=e("iBQN"),b=e("wiT2"),f=function getLocationFormattedAsHtml(n){var t=n.name?"<h3>".concat(d()(n.name),"</h3>"):"",e=n.comment?'<p class="map-comment">'.concat(d()(n.comment).replace(/(?:\r\n|\r|\n)/g,"<br>"),"</p>"):"",o=n.phone?"Phone: ".concat(d()(n.phone),"<br>"):"",r=n.address?"".concat(d()(n.address),"<br>"):"",i=n.city?d()(n.city):"",a=n.country?d()(n.country):"",s=n.state?d()(n.state)+" ":"",c=n.zipcode?d()(n.zipcode):"",p=i.length&&(s.length||c.length)?", ":"",l=i.length||c.length?"<br>":""
return'\n    <div class="map-popup">\n        '.concat(t,"\n        ").concat(e,"\n        <p><span>").concat(o).concat(r).concat(i).concat(p).concat(s).concat(c).concat(l).concat(a,"</span></p>\n    </div>\n")},h=function GoogleMap(n){var t=Object(i.useRef)(null),e=Object(m.b)(g.a,n.classes),o=n.apiKey,s=n.locations,c=n.height,l=n.mapOptions,u=n.textAlign,d=n.border,h=n.borderColor,y=n.borderWidth,j=n.borderRadius,w=n.marginTop,O=n.marginRight,v=n.marginBottom,x=n.marginLeft,T=n.paddingTop,L=n.paddingRight,M=n.paddingBottom,R=n.paddingLeft,k=n.cssClasses,C=void 0===k?[]:k,E={height:c,textAlign:u,border:d,borderColor:h,borderWidth:y,borderRadius:j,marginTop:w,marginRight:O,marginBottom:v,marginLeft:x,paddingTop:T,paddingRight:L,paddingBottom:M,paddingLeft:R}
return Object(i.useEffect)(function(){if(s.length){var n,e=[],r={key:o,v:"3"}
return p()(r).then(function(o){n=o.event
var r,i=new o.Map(t.current,l),a=[]
if(s.forEach(function(n){var t=new o.LatLng(n.position.latitude,n.position.longitude)
a.push(t)
var s=new o.Marker({map:i,position:t,title:n.name}),c=new o.InfoWindow({content:f(n),maxWidth:350})
s.addListener("click",function(){r&&r.close(),c.open(i,s),r=c}),e.push(s),e.push(c)}),a.length>1){var c=new o.LatLngBounds
a.forEach(function(n){c.extend(n)}),i.fitBounds(c)}1===a.length&&(i.setCenter(a[0]),i.setZoom(b.b.mapOptions.zoom))}).catch(function(n){}),function(){n&&e.forEach(function(t){n.clearInstanceListeners(t)})}}},[o,s,l]),s.length?a.a.createElement("div",{ref:t,style:E,className:[e.root].concat(r()(C)).join(" ")}):null}
h.propTypes={classes:Object(s.shape)({root:s.string}),apiKey:s.string,height:s.string,mapOptions:Object(s.shape)({zoom:s.number,center:Object(s.shape)({lat:s.number,lng:s.number}),scrollwheel:s.bool,disableDoubleClickZoom:s.bool,disableDefaultUI:s.bool,mapTypeControl:s.bool,mapTypeControlStyle:Object(s.shape)({style:s.number})}),locations:Object(s.arrayOf)(Object(s.shape)({position:Object(s.shape)({latitude:s.number.isRequired,longitude:s.number.isRequired}),name:s.string,phone:s.string,address:s.string,city:s.string,state:s.string,zipcode:s.string,country:s.string,comment:s.string,styles:Object(s.arrayOf)(Object(s.shape)({featureType:s.string,elementType:s.string,stylers:Object(s.arrayOf)(s.object)}))})).isRequired,textAlign:s.string,border:s.string,borderColor:s.string,borderWidth:s.string,borderRadius:s.string,marginTop:s.string,marginRight:s.string,marginBottom:s.string,marginLeft:s.string,paddingTop:s.string,paddingRight:s.string,paddingBottom:s.string,cssClasses:Object(s.arrayOf)(s.string)},h.defaultProps=b.b
var y=h
e.d(t,"default",function(){return y})},UpPT:function(n,t,e){(function(t){var e=1/0,o="[object Symbol]",r=/[&<>"'`]/g,i=RegExp(r.source),a="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,c=a||s||Function("return this")()
var p=function basePropertyOf(n){return function(t){return null==n?void 0:n[t]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"}),l=Object.prototype.toString,g=c.Symbol,u=g?g.prototype:void 0,d=u?u.toString:void 0
function baseToString(n){if("string"==typeof n)return n
if(function isSymbol(n){return"symbol"==typeof n||function isObjectLike(n){return!!n&&"object"==typeof n}(n)&&l.call(n)==o}(n))return d?d.call(n):""
var t=n+""
return"0"==t&&1/n==-e?"-0":t}n.exports=function escape(n){return(n=function toString(n){return null==n?"":baseToString(n)}(n))&&i.test(n)?n.replace(r,p):n}}).call(this,e("yLpj"))},pwkN:function(n,t){const e="__googleMapsApiOnLoadCallback",o=["channel","client","key","language","region","v"]
let r=null
n.exports=function(n={}){return r=r||new Promise(function(t,r){const i=setTimeout(function(){window[e]=function(){},r(new Error("Could not load the Google Maps API"))},n.timeout||1e4)
window[e]=function(){null!==i&&clearTimeout(i),t(window.google.maps),delete window[e]}
const a=document.createElement("script"),s=[`callback=${e}`]
o.forEach(function(t){n[t]&&s.push(`${t}=${n[t]}`)}),n.libraries&&n.libraries.length&&s.push(`libraries=${n.libraries.join(",")}`),a.src=`${n.apiUrl||"https://maps.googleapis.com/maps/api/js"}?${s.join("&")}`,document.body.appendChild(a)})}},rce9:function(n,t,e){(t=n.exports=e("JPst")(!1)).push([n.i,".map-root-1Mj {\n    height: 300px;\n}\n.map-root-1Mj .gm-style .gm-style-iw-c {\n    padding: 18px;\n}\n.map-root-1Mj .map-popup {\n    min-width: 200px;\n}\n.map-root-1Mj .map-popup h3 {\n    margin: 0 0 18px 0;\n    font-weight: 300;\n}\n.map-root-1Mj .map-popup p {\n    font-size: 16px;\n}\n.map-root-1Mj .map-popup p.map-comment {\n    font-size: 14px;\n}\n.map-root-1Mj .gm-style img {\n    max-width: none;\n    max-height: none;\n    margin: 0;\n}\n",""]),t.locals={root:"map-root-1Mj"}}}])
