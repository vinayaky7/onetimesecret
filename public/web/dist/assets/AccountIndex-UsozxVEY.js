import{d as L,r,f as n,c as i,b as e,t as a,l as x,h as y,u as t,I as _,e as c,p as Q,m as R,q as W,s as X,x as S,g as b,w as f,y as D,z as Z,A as ee}from"./main-4i32alWm.js";const te=p=>(Q("data-v-ec424320"),p=p(),R(),p),se={key:0,class:"mb-4 p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 rounded-lg shadow-lg"},oe={class:"font-mono text-lg text-white"},ae={class:"bg-black bg-opacity-20 p-3 rounded flex items-center overflow-x-auto relative"},re={class:"break-all pr-10"},ne=te(()=>e("p",{class:"text-white text-sm mt-2 font-semibold"}," 🔐 Keep this token secure! It provides full access to your account. ",-1)),ie=L({__name:"APIKeyCard",props:{token:{default:""},onCopy:{type:Function,default:()=>{}}},setup(p){const h=p,m=r(!1),v=()=>{navigator.clipboard.writeText(h.token).then(()=>{m.value=!0,setTimeout(()=>{m.value=!1},2e3),h.onCopy()}).catch(l=>{console.error("Failed to copy text: ",l)})};return(l,k)=>l.token?(n(),i("div",se,[e("div",oe,[e("div",ae,[e("span",re,a(l.token),1),e("button",{onClick:x(v,["stop"]),type:"button",class:"absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200"},[y(t(_),{icon:m.value?"heroicons-outline:check":"heroicons-outline:clipboard-copy",class:"w-6 h-6"},null,8,["icon"])])])]),ne])):c("",!0)}}),le=W(ie,[["__scopeId","data-v-ec424320"]]),de={class:"max-w-2xl p-4 mx-auto"},ce=e("h1",{class:"dark:text-white mb-6 text-3xl font-bold"},"Your Account",-1),ue={class:"dark:text-gray-300 mb-4 text-lg"},pe={class:"dark:bg-gray-800 p-6 mb-6 bg-white rounded-lg shadow"},me=e("h2",{class:"dark:text-white flex items-center mb-4 text-xl font-semibold"},[e("i",{class:"fas fa-exclamation-triangle mr-2 text-red-500"}),e("span",{class:"flex-1"},"API Key")],-1),ye={class:"pl-3"},be=["value"],he={key:0,class:"mb-4 text-red-500"},ge={key:1,class:"mb-4 text-green-500"},we={type:"submit",class:"hover:bg-gray-600 flex items-center justify-center w-full px-4 py-2 text-white bg-gray-500 rounded"},fe=e("i",{class:"fas fa-trash-alt mr-2"},null,-1),xe=e("p",{class:"dark:text-gray-400 mt-2 text-sm text-gray-500"},null,-1),_e={class:"dark:bg-gray-800 p-6 mb-6 bg-white rounded-lg shadow"},ve=e("h2",{class:"dark:text-white flex items-center mb-4 text-xl font-semibold"},[e("i",{class:"fas fa-lock mr-2"}),b(" Update Password ")],-1),ke={class:"pl-3"},Pe=["value"],Ce=e("div",{class:"hidden"},[e("label",{for:"username"},"Username"),e("input",{type:"text",id:"username",autocomplete:"username"})],-1),Ae={class:"relative mb-4"},Se=e("label",{for:"currentPassword",id:"currentPasswordLabel",class:"dark:text-gray-300 block text-sm font-medium text-gray-700"},"Current Password",-1),De={class:"relative"},Ie=["type"],Ve={class:"relative mb-4"},Me=e("label",{for:"newPassword",id:"newPasswordLabel",class:"dark:text-gray-300 block text-sm font-medium text-gray-700"},"New Password",-1),Ke={class:"relative"},Ue=["type"],$e={class:"relative mb-4"},Ne=e("label",{for:"confirmPassword",id:"confirmPasswordlabel",class:"dark:text-gray-300 block text-sm font-medium text-gray-700"},"Confirm",-1),ze={class:"relative"},Fe=["type"],Te={key:0,class:"mb-4 text-red-500"},je={key:1,class:"mb-4 text-green-500"},Be={type:"submit",class:"hover:bg-gray-600 flex items-center justify-center w-full px-4 py-2 text-white bg-gray-500 rounded"},Le=e("i",{class:"fas fa-save mr-2"},null,-1),qe={class:"dark:bg-gray-800 p-6 bg-white rounded-lg shadow"},Ee=e("h2",{class:"dark:text-white flex items-center mb-4 text-xl font-semibold"},[e("i",{class:"fas fa-exclamation-triangle mr-2 text-red-500"}),e("span",{class:"flex-1"},"Delete Account")],-1),Ge={class:"pl-3"},He=ee('<p class="dark:text-gray-300 mb-4">Please be advised:</p><ul class="dark:text-gray-300 mb-4 list-disc list-inside"><li><span class="font-bold">Secrets will remain active until they expire.</span></li><li>Any secrets you wish to remove, <a href="#" class="underline">burn them before continuing</a>.</li><li>Deleting your account is <span class="italic">permanent and non-reversible.</span></li></ul>',2),Ye=e("i",{class:"fas fa-trash-alt mr-2"},null,-1),Je={class:"dark:text-gray-400 mt-2 text-sm text-gray-500"},Oe={class:"dark:text-gray-400 mt-6 text-sm text-gray-600"},Qe={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Re=["value"],We={class:"dark:bg-gray-800 p-6 bg-white rounded-lg shadow-lg"},Xe=e("h3",{class:"dark:text-white mb-4 text-xl font-bold text-gray-900"},"Confirm Account Deletion",-1),Ze=e("p",{class:"dark:text-gray-300 mb-4 text-gray-700"},"Are you sure you want to permanently delete your account? This action cannot be undone.",-1),et=e("input",{type:"hidden",name:"tabindex",value:"destroy"},null,-1),tt={class:"mb-4"},st={key:0,class:"mb-4 text-red-500"},ot={key:1,class:"mb-4 text-green-500"},at={class:"flex justify-end space-x-4"},rt=["disabled"],nt={key:0,class:"animate-spin w-5 h-5 mr-3 -ml-1 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},it=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),lt=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),dt=[it,lt],ct={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 mr-2",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},ut=e("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"},null,-1),pt=[ut],yt=L({__name:"AccountIndex",setup(p){const h=window.custid,m=window.cust,v=window.customer_since,l=r(window.shrimp),k=r(window.apitoken),q=r(m.plan.options.name),E=r(m.secrets_created),G=r(v),I=r(""),V=r(""),M=r(""),d=X({current:!1,new:!1,confirm:!1}),P=u=>{l.value=u},g=r(!1),w=r(""),{isSubmitting:C,error:K,success:U,submitForm:$}=S({url:"/api/v1/account/destroy",successMessage:"Account deleted successfully.",onSuccess:()=>{g.value=!1,window.location.href="/"},handleShrimp:P}),H=()=>{g.value=!0},Y=()=>{g.value=!1,w.value=""},{isSubmitting:J,error:N,success:z,submitForm:F}=S({url:"/api/v1/account/apikey",successMessage:"Key generated.",onSuccess:async u=>{var s;k.value=((s=u.record)==null?void 0:s.apikey)||""},handleShrimp:P}),{isSubmitting:O,error:T,success:j,submitForm:B}=S({url:"/api/v1/account/change-password",successMessage:"Password updated successfully.",handleShrimp:P}),A=u=>{d[u]=!d[u]};return(u,s)=>(n(),i("div",de,[ce,e("p",ue,"Account type: "+a(q.value),1),e("div",pe,[me,e("div",ye,[e("form",{onSubmit:s[0]||(s[0]=x((...o)=>t(F)&&t(F)(...o),["prevent"]))},[e("input",{type:"hidden",name:"shrimp",value:l.value},null,8,be),y(le,{token:k.value},null,8,["token"]),t(N)?(n(),i("div",he,a(t(N)),1)):c("",!0),t(z)?(n(),i("div",ge,a(t(z)),1)):c("",!0),e("button",we,[fe,b(" "+a(t(J)?"Generating...":"Generate Key"),1)]),xe],32)])]),e("div",_e,[ve,e("div",ke,[e("form",{onSubmit:s[7]||(s[7]=x((...o)=>t(B)&&t(B)(...o),["prevent"]))},[e("input",{type:"hidden",name:"shrimp",value:l.value},null,8,Pe),Ce,e("div",Ae,[Se,e("div",De,[f(e("input",{type:d.current?"text":"password",name:"currentp",id:"currentPassword","onUpdate:modelValue":s[1]||(s[1]=o=>I.value=o),required:"",tabindex:"1",autocomplete:"current-password","aria-label":"Current Password","aria-labelledby":"currentPasswordLabel",class:"dark:border-gray-600 focus:border-brand-500 focus:ring focus:ring-brand-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white block w-full pr-10 mt-1 border-gray-300 rounded-md shadow-sm"},null,8,Ie),[[D,I.value]]),e("button",{type:"button",onClick:s[2]||(s[2]=o=>A("current")),class:"absolute inset-y-0 right-0 flex items-center pr-3"},[y(t(_),{icon:d.current?"heroicons-solid:eye":"heroicons-outline:eye-off",class:"dark:text-gray-100 w-5 h-5 text-gray-400","aria-hidden":"true"},null,8,["icon"])])])]),e("div",Ve,[Me,e("div",Ke,[f(e("input",{type:d.new?"text":"password",name:"newp",id:"newPassword","onUpdate:modelValue":s[3]||(s[3]=o=>V.value=o),required:"",tabindex:"2",autocomplete:"new-password","aria-label":"New Password","aria-labelledby":"newPasswordLabel",class:"dark:border-gray-600 focus:border-brand-500 focus:ring focus:ring-brand-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white block w-full pr-10 mt-1 border-gray-300 rounded-md shadow-sm"},null,8,Ue),[[D,V.value]]),e("button",{type:"button",onClick:s[4]||(s[4]=o=>A("new")),class:"hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"},[y(t(_),{icon:d.new?"heroicons-solid:eye":"heroicons-outline:eye-off",class:"dark:text-gray-100 w-5 h-5 text-gray-400","aria-hidden":"true"},null,8,["icon"])])])]),e("div",$e,[Ne,e("div",ze,[f(e("input",{type:d.confirm?"text":"password",name:"newp2",id:"confirmPassword","onUpdate:modelValue":s[5]||(s[5]=o=>M.value=o),required:"",tabindex:"3",autocomplete:"confirm-password","aria-label":"New Password","aria-labelledby":"confirmPasswordlabel",class:"dark:border-gray-600 focus:border-brand-500 focus:ring focus:ring-brand-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white block w-full pr-10 mt-1 border-gray-300 rounded-md shadow-sm"},null,8,Fe),[[D,M.value]]),e("button",{type:"button",onClick:s[6]||(s[6]=o=>A("confirm")),class:"absolute inset-y-0 right-0 flex items-center pr-3"},[y(t(_),{icon:d.confirm?"heroicons-solid:eye":"heroicons-outline:eye-off",class:"dark:text-gray-100 w-5 h-5 text-gray-400","aria-hidden":"true"},null,8,["icon"])])])]),t(T)?(n(),i("div",Te,a(t(T)),1)):c("",!0),t(j)?(n(),i("div",je,a(t(j)),1)):c("",!0),e("button",Be,[Le,b(" "+a(t(O)?"Updating...":"Update Password"),1)])],32)])]),e("div",qe,[Ee,e("div",Ge,[He,e("button",{onClick:H,class:"hover:bg-red-700 flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-red-600 rounded"},[Ye,b(" Permanently Delete Account ")]),e("p",Je,"Deleting "+a(t(h)),1)])]),e("p",Oe," Created "+a(E.value)+" secrets since "+a(G.value)+". ",1),g.value?(n(),i("div",Qe,[e("form",{onSubmit:s[9]||(s[9]=x((...o)=>t($)&&t($)(...o),["prevent"])),class:"w-full max-w-md"},[e("input",{type:"hidden",name:"shrimp",value:l.value},null,8,Re),e("div",We,[Xe,Ze,et,e("div",tt,[f(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>w.value=o),name:"confirmation",type:"password",class:"focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-3 py-2 border border-gray-300 rounded-md",autocomplete:"confirmation",placeholder:"Confirm with your password"},null,512),[[Z,w.value]])]),t(K)?(n(),i("p",st,a(t(K)),1)):c("",!0),t(U)?(n(),i("p",ot,a(t(U)),1)):c("",!0),e("div",at,[e("button",{onClick:Y,type:"button",class:"hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 px-4 py-2 text-gray-800 bg-gray-200 rounded-md"}," Cancel "),e("button",{type:"submit",disabled:!w.value||t(C),class:"hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center px-4 py-2 text-white bg-red-600 rounded-md"},[t(C)?(n(),i("svg",nt,dt)):(n(),i("svg",ct,pt)),b(" "+a(t(C)?"Deleting...":"Delete Account"),1)],8,rt)])])],32)])):c("",!0)]))}});export{yt as default};
