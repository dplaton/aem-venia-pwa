/*!
 * @version 1d74816-dev
 * 
 */
(window.webpackJsonpVenia=window.webpackJsonpVenia||[]).push([[17],{"+sGa":function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".myAccount-root-NhM {\n    display: grid;\n    grid-auto-flow: row;\n    row-gap: 1.5rem;\n}\n",""]),n.locals={root:"myAccount-root-NhM"}},"K+Bs":function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".authModal-root-1aT {\n    display: block;\n}\n",""]),n.locals={root:"authModal-root-1aT"}},LMJ6:function(e,n,t){var o=t("+sGa")
"string"==typeof o&&(o=[[e.i,o,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
t("aET+")(o,a)
o.locals&&(e.exports=o.locals)},"TM/D":function(e,n,t){var o=t("K+Bs")
"string"==typeof o&&(o=[[e.i,o,""]])
var a={hmr:!0,transform:void 0,insertInto:void 0}
t("aET+")(o,a)
o.locals&&(e.exports=o.locals)},"yu8+":function(e,n,t){"use strict"
t.r(n)
var o=t("MVZn"),a=t.n(o),s=t("q1tI"),c=t.n(s),r=t("17x9"),u=t("o0o1"),i=t.n(u),l=t("yXPU"),h=t.n(l),O=t("J4zp"),d=t.n(O),f=t("Ty5D"),w=t("VX74"),b=t("FITH"),g=t("cG95"),C=t("GpxZ"),p=["CREATE_ACCOUNT","FORGOT_PASSWORD","SIGN_IN"],A=t("+h8t"),M=t("jBXQ"),m=t("OlZo"),j=t("iBQN"),v=t("1Ek8"),S=t("LMJ6"),y=t.n(S),T=function MyAccount(e){var n=e.classes,t=e.onSignOut,o=e.onClose,a=Object(j.b)(y.a,n),r=function useMyAccount(e){var n=e.onSignOut,t=Object(m.b)(),o=d()(t,2)[1].closeDrawer,a=Object(f.h)(),c=Object(s.useRef)(!1),r=Object(s.useCallback)(function(){o(),n()},[o,n])
return Object(s.useEffect)(function(){c.current?o():c.current=!0},[o,a.key]),{handleSignOut:r}}({onSignOut:t,onClose:o}),u=r.handleSignOut,i=r.handleClose
return c.a.createElement("div",{className:a.root},c.a.createElement(v.a,{onSignOut:u,onClose:i}))},E=T
T.propTypes={classes:Object(r.shape)({actions:r.string,root:r.string,subtitle:r.string,title:r.string,user:r.string}),onSignOut:r.func.isRequired}
var k=t("i8h6"),R=t("ytWC"),N=t.n(R),I=t("TM/D"),_=t.n(I),x=function AuthModal(e){var n=function useAuthModal(e){var n=e.closeDrawer,t=e.showCreateAccount,o=e.showForgotPassword,a=e.showMainMenu,c=e.showMyAccount,r=e.showSignIn,u=e.signOutMutation,l=e.view,O=Object(w.useApolloClient)(),A=Object(s.useState)(!1),M=d()(A,2),m=M[0],j=M[1],v=Object(s.useState)(""),S=d()(v,2),y=S[0],T=S[1],E=Object(b.b)(),k=d()(E,2),R=k[0],N=R.currentUser,I=R.isSignedIn,_=k[1].signOut,x=Object(w.useMutation)(u),P=d()(x,1)[0],D=Object(f.g)()
Object(s.useEffect)(function(){N&&N.email&&p.includes(l)&&c()},[N,c,l]),Object(s.useEffect)(function(){I||"MY_ACCOUNT"!==l||m||a()},[I,m,a,l])
var U=Object(s.useCallback)(function(){a(),n()},[n,a])
return{handleCancel:Object(s.useCallback)(function(){r()},[r]),handleClose:U,handleCreateAccount:Object(s.useCallback)(function(){c()},[c]),handleSignOut:Object(s.useCallback)(h()(i.a.mark(function _callee(){return i.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,_({revokeToken:P})
case 3:return e.next=5,Object(g.a)(O)
case 5:return e.next=7,Object(C.a)(O)
case 7:D.go(0)
case 8:case"end":return e.stop()}},_callee)})),[O,D,P,_]),setUsername:T,showCreateAccount:t,showForgotPassword:o,showMyAccount:c,username:y}}(a()({},e,{signOutMutation:N.a})),t=n.handleCancel,o=n.handleCreateAccount,r=n.handleSignOut,u=n.setUsername,l=n.showCreateAccount,O=n.showForgotPassword,m=n.showMyAccount,v=n.username,S=null
switch(e.view){case"CREATE_ACCOUNT":S=c.a.createElement(A.a,{initialValues:{email:v},isCancelButtonHidden:!1,onSubmit:o,onCancel:t})
break
case"FORGOT_PASSWORD":S=c.a.createElement(M.a,{initialValues:{email:v},onCancel:t})
break
case"MY_ACCOUNT":S=c.a.createElement(E,{onSignOut:r})
break
case"SIGN_IN":default:S=c.a.createElement(k.a,{setDefaultUsername:u,showCreateAccount:l,showForgotPassword:O,showMyAccount:m})}var y=Object(j.b)(_.a,e.classes)
return c.a.createElement("div",{className:y.root},S)},P=x
x.propTypes={classes:Object(r.shape)({root:r.string}),closeDrawer:r.func.isRequired,showCreateAccount:r.func.isRequired,showForgotPassword:r.func.isRequired,showMyAccount:r.func.isRequired,showMainMenu:r.func.isRequired,showSignIn:r.func.isRequired,view:r.string},t.d(n,"default",function(){return P})}}])
