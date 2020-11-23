/*!
 * @version 1d74816-dev
 * 
 */
(window.webpackJsonpVenia=window.webpackJsonpVenia||[]).push([[22],{LYVK:function(t,i,n){"use strict"
n.r(i)
var r=n("q1tI"),o=n.n(r),a=n("Tils"),e=n("KQw/"),g=n("iBQN"),d=n("NFr/"),s=n.n(d),c=n("17x9"),m=function TabItem(t){var i=Object(g.b)(s.a,t.classes),n=t.minHeight,r=t.verticalAlignment,d=t.backgroundColor,c=t.desktopImage,m=t.mobileImage,b=t.backgroundSize,p=t.backgroundPosition,l=t.backgroundAttachment,u=t.backgroundRepeat,h=t.textAlign,f=t.border,k=t.borderColor,v=t.borderWidth,w=t.borderRadius,R=t.marginTop,j=t.marginRight,y=t.marginBottom,x=t.marginLeft,I=t.paddingTop,T=t.paddingRight,A=t.paddingBottom,C=t.paddingLeft,L=t.children,O=t.cssClasses,B=void 0===O?[]:O,H=c
m&&"function"==typeof window.matchMedia&&window.matchMedia("(max-width: 768px)").matches&&(H=m)
var N={minHeight:n,verticalAlignment:r,backgroundColor:d,textAlign:h,border:f,borderColor:k,borderWidth:v,borderRadius:w,marginTop:R,marginRight:j,marginBottom:y,marginLeft:x,paddingTop:I,paddingRight:T,paddingBottom:A,paddingLeft:C}
if(H){var P=Object(e.a)(H,{type:"image-wysiwyg",quality:85})
N.backgroundImage="url(".concat(P,")"),N.backgroundSize=b,N.backgroundPosition=p,N.backgroundAttachment=l,N.backgroundRepeat=u?"repeat":"no-repeat"}return r&&(N.display="flex",N.justifyContent=Object(a.j)(r),N.flexDirection="column"),o.a.createElement("div",{style:N,className:[B,i.root].join(" ")},L)}
m.propTypes={classes:Object(c.shape)({root:c.string}),tabName:c.string,verticalAlignment:Object(c.oneOf)(["top","middle","bottom"]),minHeight:c.string,backgroundColor:c.string,desktopImage:c.string,mobileImage:c.string,backgroundSize:c.string,backgroundPosition:c.string,backgroundAttachment:c.string,backgroundRepeat:c.bool,textAlign:c.string,border:c.string,borderColor:c.string,borderWidth:c.string,borderRadius:c.string,marginTop:c.string,marginRight:c.string,marginBottom:c.string,marginLeft:c.string,paddingTop:c.string,paddingRight:c.string,paddingBottom:c.string,paddingLeft:c.string,cssClasses:Object(c.arrayOf)(c.string)}
var b=m
n.d(i,"default",function(){return b})},"NFr/":function(t,i,n){var r=n("djLQ")
"string"==typeof r&&(r=[[t.i,r,""]])
var o={hmr:!0,transform:void 0,insertInto:void 0}
n("aET+")(r,o)
r.locals&&(t.exports=r.locals)},djLQ:function(t,i,n){(i=t.exports=n("JPst")(!1)).push([t.i,".tabItem-root-UHZ {\n    min-height: inherit;\n}\n",""]),i.locals={root:"tabItem-root-UHZ"}}}])
