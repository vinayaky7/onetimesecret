import{r as v,i as m,d as P,z as q,M as O,j as B,N as ue,O as W,F as N,A as ce,y as pe,c as g,a as y,u as R,l as F,T as me,o as h,I as V,b as t,f as fe,n as k,p as he,h as Y,G as Z,P as ge,B as G,t as S,e as I,L as ve,D as be,E as xe,k as ye,Q as _e,R as we}from"./main-zVJREaYH.js";import{A as U,I as X,O as ke,i as Se,o as j,E as $e,T as Ce,a as E,d as H,P as K,b as M,e as J}from"./keyboard-Ce2vuEN7.js";function Te(e,a,o){let l=v(o==null?void 0:o.value),s=m(()=>e.value!==void 0);return[m(()=>s.value?e.value:l.value),function(i){return s.value||(l.value=i),a==null?void 0:a(i)}]}var ee=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ee||{});let Ae=P({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:a,attrs:o}){return()=>{var l;let{features:s,...i}=e,d={"aria-hidden":(s&2)===2?!0:(l=i["aria-hidden"])!=null?l:void 0,hidden:(s&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(s&4)===4&&(s&2)!==2&&{display:"none"}}};return U({ourProps:d,theirProps:i,slot:{},attrs:o,slots:a,name:"Hidden"})}}});function te(e={},a=null,o=[]){for(let[l,s]of Object.entries(e))oe(o,ae(a,l),s);return o}function ae(e,a){return e?e+"["+a+"]":a}function oe(e,a,o){if(Array.isArray(o))for(let[l,s]of o.entries())oe(e,ae(a,l.toString()),s);else o instanceof Date?e.push([a,o.toISOString()]):typeof o=="boolean"?e.push([a,o?"1":"0"]):typeof o=="string"?e.push([a,o]):typeof o=="number"?e.push([a,`${o}`]):o==null?e.push([a,""]):te(o,a,e)}function Oe(e){var a,o;let l=(a=e==null?void 0:e.form)!=null?a:e.closest("form");if(l){for(let s of l.elements)if(s!==e&&(s.tagName==="INPUT"&&s.type==="submit"||s.tagName==="BUTTON"&&s.type==="submit"||s.nodeName==="INPUT"&&s.type==="image")){s.click();return}(o=l.requestSubmit)==null||o.call(l)}}let Pe=Symbol("DescriptionContext");function le({slot:e=v({}),name:a="Description",props:o={}}={}){let l=v([]);function s(i){return l.value.push(i),()=>{let d=l.value.indexOf(i);d!==-1&&l.value.splice(d,1)}}return q(Pe,{register:s,slot:e,name:a,props:o}),m(()=>l.value.length>0?l.value.join(" "):void 0)}let Re=Symbol("LabelContext");function ne({slot:e={},name:a="Label",props:o={}}={}){let l=v([]);function s(i){return l.value.push(i),()=>{let d=l.value.indexOf(i);d!==-1&&l.value.splice(d,1)}}return q(Re,{register:s,slot:e,name:a,props:o}),m(()=>l.value.length>0?l.value.join(" "):void 0)}function Ie(e,a){return e===a}let se=Symbol("RadioGroupContext");function re(e){let a=pe(se,null);if(a===null){let o=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,re),o}return a}let Ee=P({name:"RadioGroup",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Ie},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{emit:a,attrs:o,slots:l,expose:s}){var i;let d=(i=e.id)!=null?i:`headlessui-radiogroup-${X()}`,c=v(null),r=v([]),x=ne({name:"RadioGroupLabel"}),C=le({name:"RadioGroupDescription"});s({el:c,$el:c});let[$,L]=Te(m(()=>e.modelValue),n=>a("update:modelValue",n),m(()=>e.defaultValue)),w={options:r,value:$,disabled:m(()=>e.disabled),firstOption:m(()=>r.value.find(n=>!n.propsRef.disabled)),containsCheckedOption:m(()=>r.value.some(n=>w.compare(O(n.propsRef.value),O(e.modelValue)))),compare(n,p){if(typeof e.by=="string"){let u=e.by;return(n==null?void 0:n[u])===(p==null?void 0:p[u])}return e.by(n,p)},change(n){var p;if(e.disabled||w.compare(O($.value),O(n)))return!1;let u=(p=r.value.find(b=>w.compare(O(b.propsRef.value),O(n))))==null?void 0:p.propsRef;return u!=null&&u.disabled?!1:(L(n),!0)},registerOption(n){r.value.push(n),r.value=ke(r.value,p=>p.element)},unregisterOption(n){let p=r.value.findIndex(u=>u.id===n);p!==-1&&r.value.splice(p,1)}};q(se,w),Se({container:m(()=>j(c)),accept(n){return n.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});function T(n){if(!c.value||!c.value.contains(n.target))return;let p=r.value.filter(u=>u.propsRef.disabled===!1).map(u=>u.element);switch(n.key){case E.Enter:Oe(n.currentTarget);break;case E.ArrowLeft:case E.ArrowUp:if(n.preventDefault(),n.stopPropagation(),K(p,M.Previous|M.WrapAround)===J.Success){let u=r.value.find(b=>{var f;return b.element===((f=H(c))==null?void 0:f.activeElement)});u&&w.change(u.propsRef.value)}break;case E.ArrowRight:case E.ArrowDown:if(n.preventDefault(),n.stopPropagation(),K(p,M.Next|M.WrapAround)===J.Success){let u=r.value.find(b=>{var f;return b.element===((f=H(b.element))==null?void 0:f.activeElement)});u&&w.change(u.propsRef.value)}break;case E.Space:{n.preventDefault(),n.stopPropagation();let u=r.value.find(b=>{var f;return b.element===((f=H(b.element))==null?void 0:f.activeElement)});u&&w.change(u.propsRef.value)}break}}let A=m(()=>{var n;return(n=j(c))==null?void 0:n.closest("form")});return B(()=>{ue([A],()=>{if(!A.value||e.defaultValue===void 0)return;function n(){w.change(e.defaultValue)}return A.value.addEventListener("reset",n),()=>{var p;(p=A.value)==null||p.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{disabled:n,name:p,form:u,...b}=e,f={ref:c,id:d,role:"radiogroup","aria-labelledby":x.value,"aria-describedby":C.value,onKeydown:T};return W(N,[...p!=null&&$.value!=null?te({[p]:$.value}).map(([D,z])=>W(Ae,$e({features:ee.Hidden,key:D,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:u,disabled:n,name:D,value:z}))):[],U({ourProps:f,theirProps:{...o,...Ce(b,["modelValue","defaultValue","by"])},slot:{},attrs:o,slots:l,name:"RadioGroup"})])}}});var Ne=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(Ne||{});let Ge=P({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{attrs:a,slots:o,expose:l}){var s;let i=(s=e.id)!=null?s:`headlessui-radiogroup-option-${X()}`,d=re("RadioGroupOption"),c=ne({name:"RadioGroupLabel"}),r=le({name:"RadioGroupDescription"}),x=v(null),C=m(()=>({value:e.value,disabled:e.disabled})),$=v(1);l({el:x,$el:x});let L=m(()=>j(x));B(()=>d.registerOption({id:i,element:L,propsRef:C})),ce(()=>d.unregisterOption(i));let w=m(()=>{var f;return((f=d.firstOption.value)==null?void 0:f.id)===i}),T=m(()=>d.disabled.value||e.disabled),A=m(()=>d.compare(O(d.value.value),O(e.value))),n=m(()=>T.value?-1:A.value||!d.containsCheckedOption.value&&w.value?0:-1);function p(){var f;d.change(e.value)&&($.value|=2,(f=j(x))==null||f.focus())}function u(){$.value|=2}function b(){$.value&=-3}return()=>{let{value:f,disabled:D,...z}=e,ie={checked:A.value,disabled:T.value,active:!!($.value&2)},de={id:i,ref:x,role:"radio","aria-checked":A.value?"true":"false","aria-labelledby":c.value,"aria-describedby":r.value,"aria-disabled":T.value?!0:void 0,tabIndex:n.value,onClick:T.value?void 0:p,onFocus:T.value?void 0:u,onBlur:T.value?void 0:b};return U({ourProps:de,theirProps:z,slot:ie,attrs:a,slots:o,name:"RadioGroupOption"})}}});const Me={class:"relative inline-block mx-1"},Fe=P({__name:"InfoTooltip",props:{color:{type:String,default:"bg-white text-gray-800"}},setup(e){const a=e,o=v(!1),l=()=>{o.value=!o.value},s=()=>{o.value=!1},i=m(()=>`${a.color} border-2 border-dashed`);return(d,c)=>(h(),g("div",Me,[y(R(V),{icon:"heroicons:information-circle",class:"inline align-baseline cursor-pointer text-base",onClick:l}),y(me,{name:"fade"},{default:F(()=>[o.value?(h(),g("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",onClick:s},[t("div",{class:k(["relative max-w-md p-6 rounded-lg shadow-lg",i.value]),onClick:c[0]||(c[0]=he(()=>{},["stop"]))},[t("button",{onClick:s,class:"absolute top-2 right-2 text-gray-500 hover:text-gray-700"},[y(R(V),{icon:"heroicons:x-mark-20-solid"})]),fe(d.$slots,"default",{},void 0,!0)],2)])):Y("",!0)]),_:3})]))}}),Ve=Z(Fe,[["__scopeId","data-v-78233a39"]]),je={class:"absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl","aria-hidden":"true"},Q=P({__name:"MovingGlobules",props:{fromColour:{default:"#655b5f"},toColour:{default:"#23b5dd"},speed:{default:"6s"},interval:{default:2e3},scale:{default:1}},setup(e){const a=v("polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)");function o(){const s=[];for(let i=0;i<10;i++){const d=Math.random()*100,c=Math.random()*100;s.push(`${d.toFixed(1)}% ${c.toFixed(1)}%`)}a.value=`polygon(${s.join(", ")})`}B(()=>{setTimeout(()=>{o(),setInterval(o,l.interval)},0)});const l=e;return(s,i)=>(h(),g("div",je,[t("div",{class:k(["mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"]),style:ge({clipPath:a.value,transition:`clip-path ${l.speed} ease`,background:`linear-gradient(to top right, ${l.fromColour}, ${l.toColour})`,transform:`scale(${l.scale})`})},null,4)]))}}),Be={class:"flex items-center"},Le=t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1),De=[Le],ze={key:0,class:"w-5 h-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",width:"20",height:"20"},He=t("defs",null,[t("linearGradient",{id:"half"},[t("stop",{offset:"50%","stop-color":"currentColor"}),t("stop",{offset:"50%","stop-color":"white","stop-opacity":"1"})])],-1),qe=t("path",{fill:"url(#half)",d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1),Ue=[He,qe],We=t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1),Ke=[We],Je=P({__name:"StarsRating",props:{stars:{default:2.5}},setup(e){const a=e,o=Math.floor(a.stars),l=a.stars%1!==0,s=5-Math.ceil(a.stars);return(i,d)=>(h(),g("div",Be,[(h(!0),g(N,null,G(R(o),c=>(h(),g("svg",{key:"full-"+c,class:"w-5 h-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",width:"20",height:"20"},De))),128)),l?(h(),g("svg",ze,Ue)):Y("",!0),(h(),g(N,null,G(s,c=>t("svg",{key:"empty-"+c,class:"w-5 h-5 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20",width:"20",height:"20"},Ke)),64))]))}}),Qe={class:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12"},Ye=t("h2",{class:"text-3xl font-bold text-left text-gray-900 dark:text-white mb-8"},[t("span",{class:"text-xl font-semibold text-gray-700 dark:text-gray-300"},"AI-Generated Testimonials"),t("br"),t("span",null,"What leading AI says about us:")],-1),Ze={class:"bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"},Xe={class:"p-6 sm:p-8"},et=t("svg",{class:"w-5 h-5 text-brand-500 mb-4",fill:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20"},[t("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"})],-1),tt={class:"text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6 italic"},at={class:"flex items-center justify-between"},ot={class:"font-semibold text-gray-900 dark:text-white"},lt={class:"text-sm text-gray-600 dark:text-gray-400"},nt={class:"flex items-center"},st=t("div",{class:"bg-gray-100 dark:bg-gray-700 px-6 py-4"},[t("p",{class:"text-sm text-gray-600 dark:text-gray-400 italic"},[I(" Note: "),t("span",{class:""},[I("This quote was generated by "),t("a",{href:"https://www.anthropic.com/news/claude-3-5-sonnet",class:"underline",rel:"noopener noreferrer",target:"_blank"},"Claude 3.5")]),I(". It was based on the content of the page and does not represent an actual person or company. ")])],-1),rt=P({__name:"QuoteSection",props:{testimonial:{}},setup(e){const a=e;return(o,l)=>(h(),g("div",Qe,[Ye,t("div",Ze,[t("div",Xe,[et,t("p",tt,' "'+S(a.testimonial.quote)+'" ',1),t("div",at,[t("div",null,[t("p",ot,S(a.testimonial.name),1),t("p",lt,S(a.testimonial.company),1)]),t("div",nt,[y(Je,{stars:a.testimonial.stars},null,8,["stars"])])])]),st])]))}}),it=[{value:"monthly",label:"Monthly",priceSuffix:"/month"},{value:"annually",label:"Yearly",priceSuffix:"/year"}],dt=[{id:"tier-identity",name:"Identity Plus",href:"/plans/identity",cta:"Choose this plan",price:{monthly:"$35",annually:"$365"},description:"Secure sharing that elevates your brand and simplifies communication.",features:["Branded custom domain","Unlimited sharing capacity","Enhanced privacy features","Full API access"],featured:!1},{id:"tier-dedication",name:"Global Elite",href:"/plans/dedication",cta:"Coming Soon",price:{monthly:"$111",annually:"$000"},description:"Dedicated infrastructure with data-compliance controls and unlimited scalability.",features:["Private cloud environment","Unlimited usage and scaling","Advanced identity management","Multiple data location choices (EU, US)","Full regulatory compliance (including GDPR, CCPA, HIPAA)"],featured:!0}],ut=[{quote:"Onetime Secret helps us share sensitive information securely while maintaining our professional facade.",name:"Aisha",company:"SameDay Financial",uri:"",stars:4.5},{quote:"The custom domain feature has significantly elevated our company's reputation among biological, human clients.",name:"Hiro",company:"Growth Dynamics",uri:"",stars:4},{quote:"Their SafeTek® Security Architecture gives us peace of mind when sharing confidential data with our carbon-based business partners.",name:"Priya",company:"Agile Innovations",uri:"",stars:5},{quote:"As a real freelancer, the unlimited sharing capacity allows me to collaborate securely with my several hundred thousand clients.",name:"Carlos",company:"Creative Freelance Warehouse",uri:"",stars:4.5},{quote:"The advanced compliance options ensure we meet all regulatory requirements in our heavily regulated industry.",name:"Fatima",company:'"AAA" Body Supplements',uri:"",stars:4},{quote:"The private cloud environment has been crucial in building trust with our high-profile clients.",name:"Unit ZW-731",company:"Scaling Solutions",uri:"",stars:5},{quote:"The flexible data residency options keep us in good standing with our regional CPU conservation society.",name:"Liam-3000",company:"Community Impact Foundation",uri:"",stars:4.5}],_=e=>(be("data-v-311acc1b"),e=e(),xe(),e),ct={class:"relative isolate bg-white dark:bg-gray-900 px-6 py-18 sm:py-12 lg:px-8"},pt=_(()=>t("div",{class:"pb-6 flex justify-center text-sm"},null,-1)),mt=ve('<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-v-311acc1b><div class="mx-auto text-center max-w-2xl lg:max-w-4xl" data-v-311acc1b><h2 class="text-base font-semibold leading-7 text-brand-600 dark:text-brand-400 sm:text-lg md:text-xl" data-v-311acc1b>Pricing </h2><p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl" data-v-311acc1b> Secure Links, Stronger Connections </p><p class="mx-auto mt-6 max-w-md lg:max-w-xl text-center text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 dark:text-gray-300" data-v-311acc1b> Share confidential information with confidence, elevate your brand, and build trust </p></div></div>',1),ft={class:"mt-16 flex justify-center"},ht={"aria-label":"Payment frequency"},gt={class:"mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"},vt=["id"],bt={class:"mt-4 flex items-baseline gap-x-2"},xt=["action"],yt=["aria-describedby"],_t={class:"relative"},wt={class:"py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},kt={class:"rounded-lg bg-white dark:bg-gray-800 shadow-lg overflow-hidden"},St={class:"px-6 py-8 sm:p-10 lg:flex lg:items-center lg:justify-between"},$t={class:"flex-1 space-y-6"},Ct=_(()=>t("h3",{class:"inline-flex items-center rounded-full bg-brandcomp-100 dark:bg-brandcomp-900 px-4 py-1 text-sm font-semibold text-brandcomp-700 dark:text-brandcomp-300"},[t("svg",{class:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 8l-2.293-2.293a1 1 0 011.414-1.414l3 3z","clip-rule":"evenodd"})]),I(" An Unlimited-Time Offer ")],-1)),Tt={class:"space-y-4 text-base text-gray-600 dark:text-gray-300"},At=_(()=>t("li",{class:"flex items-center"},[t("svg",{class:"w-6 h-6 text-brandcomp-500 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),t("span",null,[t("strong",{class:"font-medium"},"Start Free:"),I(" Unlock most features at $0/month")])],-1)),Ot={class:"flex items-center"},Pt=_(()=>t("svg",{class:"w-6 h-6 text-brandcomp-500 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1)),Rt=_(()=>t("span",null,[t("strong",{class:"font-medium"},"Self-Host:"),I(" Get our SimpleStack℠ guarantee included")],-1)),It={class:"float-left mr-4 mb-2 shape-icon"},Et=_(()=>t("h3",{class:"font-bold mb-2 text-gray-900 dark:text-white"},"Our SimpleStack℠ Guarantee",-1)),Nt=_(()=>t("p",{class:"prose dark:prose-invert"},"Our SimpleStack guarantee ensures effortless deployment and management of our software. You can have the entire system up and running in minutes, from a single docker container. ",-1)),Gt=_(()=>t("p",{class:"prose dark:prose-invert"},"Whether you're a seasoned DevOps pro or new to self-hosting, our SimpleStack design ensures you can focus on using the product, not wrestling with infrastructure. That's the SimpleStack advantage!",-1)),Mt=_(()=>t("p",{class:"prose mt-4 font-semibold dark:prose-invert"}," While others are stacking up complications, we've got your back with a stack so simple, it just works. ",-1)),Ft=_(()=>t("p",{class:"text-base text-gray-600 dark:text-gray-300"}," Why wait? Join thousands of happy users today! ",-1)),Vt={class:"mt-8 lg:mt-0 lg:ml-10 flex flex-col space-y-4"},jt=_(()=>t("a",{href:"/signup/basic",class:"font-brand inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandcomp-500 hover:bg-brandcomp-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandcomp-500 transition-colors duration-200"}," Get Started for Free ",-1)),Bt={href:"https://github.com/onetimesecret/onetimesecret",ref:"noopener noreferrer",class:"font-brand inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandcomp-500 transition-colors duration-200"},Lt=P({__name:"PricingDual",setup(e){const a=v(ut),o=v(a.value[0]),l=v(dt),s=v(it),i=v(s.value[0]);return B(()=>{const d=Math.floor(Math.random()*a.value.length);o.value=a.value[d]}),(d,c)=>(h(),g("div",ct,[pt,y(Q,{"from-colour":"#23b5dd","to-colour":"#dc4a22",speed:"10s",interval:3e3,scale:1}),mt,t("div",ft,[t("fieldset",ht,[y(R(Ee),{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=r=>i.value=r),class:"grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"},{default:F(()=>[(h(!0),g(N,null,G(s.value,r=>(h(),ye(R(Ge),{as:"template",key:r.value,value:r},{default:F(({checked:x})=>[t("div",{class:k([x?"bg-brand-600 dark:bg-brand-500":"bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 opacity-55","cursor-pointer rounded-full px-2.5 py-1"])},S(r.label),3)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])]),t("div",gt,[(h(!0),g(N,null,G(l.value,(r,x)=>(h(),g("div",{key:r.id,class:k([r.featured?"relative bg-slate-800 dark:bg-slate-700 shadow-2xl":"bg-white/60 dark:bg-gray-800/60 sm:mx-8 lg:mx-0",r.featured?"":x===0?"rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none":"sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl","rounded-3xl p-8 ring-1 ring-gray-900/10 dark:ring-gray-100/10 sm:p-10"])},[t("h3",{id:r.id,class:k([(r.featured,"text-brand-500"),"text-xl font-semibold leading-7"])},S(r.name),11,vt),t("p",bt,[t("span",{class:k([r.featured?"text-white blur-lg":"text-gray-900 dark:text-white","text-5xl font-bold tracking-tight"])},S(r.price[i.value.value]),3),t("span",{class:k([r.featured?"text-gray-400":"text-gray-500 dark:text-gray-400","text-base"])},S(i.value.priceSuffix),3)]),t("p",{class:k([r.featured?"text-gray-300":"text-gray-600 dark:text-gray-300","mt-6 text-base leading-7"])},S(r.description),3),t("ul",{role:"list",class:k([r.featured?"text-gray-300 pb-10":"text-gray-600 dark:text-gray-300","mt-8 space-y-3 text-base leading-6 sm:mt-10"])},[(h(!0),g(N,null,G(r.features,C=>(h(),g("li",{key:C,class:"flex gap-x-3"},[y(R(V),{icon:"heroicons-solid:check",class:k([r.featured?"text-brand-400":"text-brand-600 dark:text-brand-400","h-6 w-5 flex-none"]),"aria-hidden":"true"},null,8,["class"]),I(" "+S(C),1)]))),128))],2),t("form",{action:`${r.href}${i.value.priceSuffix}`,method:"GET"},[t("button",_e({type:"submit","aria-describedby":r.id},we(r.featured?{click:C=>C.preventDefault()}:{},!0),{class:[r.featured?"block text-brand-400 dark:text-brand-400 ring-2 ring-inset bg-gray-800 dark:ring-slate-800 hover:ring-gray-300 dark:hover:ring-gray-800 focus-visible:outline-gray-600":"block bg-brand-500 text-white shadow-sm hover:bg-brand-600 focus-visible:outline-brand-500","mt-8 block rounded-md px-3.5 py-2.5 text-center text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"]}),S(r.cta),17,yt)],8,xt)],2))),128))]),t("div",_t,[y(rt,{class:"relative z-10 bg-opacity-80 dark:bg-opacity-80",testimonial:o.value},null,8,["testimonial"]),y(Q,{class:"absolute inset-0 z-0","from-colour":"#23b5dd","to-colour":"#dc4a22",speed:"10s",interval:1e3,scale:2})]),t("div",wt,[t("div",kt,[t("div",St,[t("div",$t,[Ct,t("ul",Tt,[At,t("li",Ot,[Pt,Rt,y(Ve,{color:"bg-brandcomp-100 dark:bg-brandcomp-900"},{default:F(()=>[t("div",It,[y(R(V),{icon:"fa6-solid:handshake-simple",class:"w-24 h-24 text-brandcomp-600 dark:text-brandcomp-400"})]),Et,Nt,Gt,Mt]),_:1})])]),Ft]),t("div",Vt,[jt,t("a",Bt," Learn About Self-Hosting ",512)])])])])]))}}),Ht=Z(Lt,[["__scopeId","data-v-311acc1b"]]);export{Ht as default};