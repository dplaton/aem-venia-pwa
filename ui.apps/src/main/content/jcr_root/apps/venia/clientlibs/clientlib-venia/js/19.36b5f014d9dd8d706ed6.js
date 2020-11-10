/*!
 * @version 1d74816-dev
 * 
 */
(window.webpackJsonpVenia=window.webpackJsonpVenia||[]).push([[19],{"8Ab+":function(t,n,r){(n=t.exports=r("JPst")(!1)).push([t.i,".buttons-root-3lJ {\n    max-width: 100%;\n}\n.buttons-root-3lJ > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-3lJ button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n}\n.buttons-stacked-1pN {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-3IH > div {\n    margin-inline-end: 0.5rem;\n}\n",""]),n.locals={root:"buttons-root-3lJ",stacked:"buttons-stacked-1pN",inline:"buttons-inline-3IH"}},fwGW:function(t,n,r){"use strict"
r.r(n)
var e=r("RIqP"),o=r.n(e),i=r("MVZn"),a=r.n(i),s=r("J4zp"),d=r.n(s),l=r("q1tI"),u=r.n(l),c=r("vBo1"),f=r.n(c),g=r("17x9"),p=r("iBQN")
function _createForOfIteratorHelper(t,r){var o
if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function _unsupportedIterableToArray(t,n){if(!t)return
if("string"==typeof t)return _arrayLikeToArray(t,n)
var r=Object.prototype.toString.call(t).slice(8,-1)
"Object"===r&&t.constructor&&(r=t.constructor.name)
if("Map"===r||"Set"===r)return Array.from(t)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,n)}(t))||r&&t&&"number"==typeof t.length){o&&(t=o)
var i=0,a=function F(){}
return{s:a,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,l=!0,u=!1
return{s:function s(){o=t[Symbol.iterator]()},n:function n(){var t=o.next()
return l=t.done,t},e:function e(t){u=!0,d=t},f:function f(){try{l||null==o.return||o.return()}finally{if(u)throw d}}}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length)
for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r]
return e}var b=function Buttons(t){var n=Object(p.b)(f.a,t.classes),r=t.appearance,e=t.isSameWidth,i=t.textAlign,s=t.border,c=t.borderColor,g=t.borderWidth,b=t.borderRadius,m=t.marginTop,y=t.marginRight,h=t.marginBottom,v=t.marginLeft,w=t.paddingTop,x=t.paddingRight,A=t.paddingBottom,T=t.paddingLeft,j=t.children,O=t.cssClasses,k=void 0===O?[]:O,I=n["".concat(r)],R=Object(l.useRef)(null),B=u.a.useState(0),L=d()(B,2),S=L[0],W=L[1],C={"--buttonMinWidth":S?S+"px":null},J=a()({border:s,borderColor:c,borderWidth:g,borderRadius:b,marginTop:m,marginRight:y,marginBottom:h,marginLeft:v,paddingTop:w,paddingRight:x,paddingBottom:A,paddingLeft:T},C)
Object(l.useLayoutEffect)(function(){if(e){var t,n=0,r=_createForOfIteratorHelper(R.current.querySelectorAll("button"))
try{for(r.s();!(t=r.n()).done;){var o=t.value.offsetWidth
o>n&&(n=o)}}catch(t){r.e(t)}finally{r.f()}W(n)}},[e])
return J.justifyContent="flex-start",i&&(J.justifyContent={left:"flex-start",center:"center",right:"flex-end"}[i]||"flex-start",J.textAlign=i),u.a.createElement("div",{ref:R,style:J,className:[n.root,I].concat(o()(k)).join(" ")},j)}
b.propTypes={appearance:Object(g.oneOf)(["inline","stacked"]),classes:Object(g.shape)({root:g.string,stacked:g.string,inline:g.string}),isSameWidth:g.bool,textAlign:g.string,border:g.string,borderColor:g.string,borderWidth:g.string,borderRadius:g.string,marginTop:g.string,marginRight:g.string,marginBottom:g.string,marginLeft:g.string,paddingTop:g.string,paddingRight:g.string,paddingBottom:g.string,paddingLeft:g.string,cssClasses:Object(g.arrayOf)(g.string)}
var m=b
r.d(n,"default",function(){return m})},vBo1:function(t,n,r){var e=r("8Ab+")
"string"==typeof e&&(e=[[t.i,e,""]])
var o={hmr:!0,transform:void 0,insertInto:void 0}
r("aET+")(e,o)
e.locals&&(t.exports=e.locals)}}])
