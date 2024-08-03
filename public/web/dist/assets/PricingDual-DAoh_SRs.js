import{r as v,B as m,d as A,C as U,D as H,E as J,F as $,O as le,G as se,H as G,i as D,J as ie,K as W,L as de,T as ue,M as N,N as ce,P as pe,Q as R,R as q,S as z,U as P,V as K,f as C,c as O,n as h,W as me,h as _,u as I,I as j,X as V,b as s,l as fe,Y as ge,e as ve,Z as be,q as he,$ as B,t as k,g as E}from"./main-4i32alWm.js";function ye(e,r,t){let n=v(t==null?void 0:t.value),o=m(()=>e.value!==void 0);return[m(()=>o.value?e.value:n.value),function(i){return o.value||(n.value=i),r==null?void 0:r(i)}]}var Y=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Y||{});let xe=A({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:r,attrs:t}){return()=>{var n;let{features:o,...i}=e,d={"aria-hidden":(o&2)===2?!0:(n=i["aria-hidden"])!=null?n:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return U({ourProps:d,theirProps:i,slot:{},attrs:t,slots:r,name:"Hidden"})}}});function Q(e={},r=null,t=[]){for(let[n,o]of Object.entries(e))Z(t,X(r,n),o);return t}function X(e,r){return e?e+"["+r+"]":r}function Z(e,r,t){if(Array.isArray(t))for(let[n,o]of t.entries())Z(e,X(r,n.toString()),o);else t instanceof Date?e.push([r,t.toISOString()]):typeof t=="boolean"?e.push([r,t?"1":"0"]):typeof t=="string"?e.push([r,t]):typeof t=="number"?e.push([r,`${t}`]):t==null?e.push([r,""]):Q(t,r,e)}function ke(e){var r,t;let n=(r=e==null?void 0:e.form)!=null?r:e.closest("form");if(n){for(let o of n.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(t=n.requestSubmit)==null||t.call(n)}}let _e=Symbol("DescriptionContext");function ee({slot:e=v({}),name:r="Description",props:t={}}={}){let n=v([]);function o(i){return n.value.push(i),()=>{let d=n.value.indexOf(i);d!==-1&&n.value.splice(d,1)}}return H(_e,{register:o,slot:e,name:r,props:t}),m(()=>n.value.length>0?n.value.join(" "):void 0)}let we=Symbol("LabelContext");function te({slot:e={},name:r="Label",props:t={}}={}){let n=v([]);function o(i){return n.value.push(i),()=>{let d=n.value.indexOf(i);d!==-1&&n.value.splice(d,1)}}return H(we,{register:o,slot:e,name:r,props:t}),m(()=>n.value.length>0?n.value.join(" "):void 0)}function Se(e,r){return e===r}let ae=Symbol("RadioGroupContext");function re(e){let r=pe(ae,null);if(r===null){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,re),t}return r}let $e=A({name:"RadioGroup",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Se},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{emit:r,attrs:t,slots:n,expose:o}){var i;let d=(i=e.id)!=null?i:`headlessui-radiogroup-${J()}`,p=v(null),l=v([]),b=te({name:"RadioGroupLabel"}),T=ee({name:"RadioGroupDescription"});o({el:p,$el:p});let[x,F]=ye(m(()=>e.modelValue),a=>r("update:modelValue",a),m(()=>e.defaultValue)),y={options:l,value:x,disabled:m(()=>e.disabled),firstOption:m(()=>l.value.find(a=>!a.propsRef.disabled)),containsCheckedOption:m(()=>l.value.some(a=>y.compare($(a.propsRef.value),$(e.modelValue)))),compare(a,c){if(typeof e.by=="string"){let u=e.by;return(a==null?void 0:a[u])===(c==null?void 0:c[u])}return e.by(a,c)},change(a){var c;if(e.disabled||y.compare($(x.value),$(a)))return!1;let u=(c=l.value.find(g=>y.compare($(g.propsRef.value),$(a))))==null?void 0:c.propsRef;return u!=null&&u.disabled?!1:(F(a),!0)},registerOption(a){l.value.push(a),l.value=le(l.value,c=>c.element)},unregisterOption(a){let c=l.value.findIndex(u=>u.id===a);c!==-1&&l.value.splice(c,1)}};H(ae,y),se({container:m(()=>G(p)),accept(a){return a.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function w(a){if(!p.value||!p.value.contains(a.target))return;let c=l.value.filter(u=>u.propsRef.disabled===!1).map(u=>u.element);switch(a.key){case R.Enter:ke(a.currentTarget);break;case R.ArrowLeft:case R.ArrowUp:if(a.preventDefault(),a.stopPropagation(),z(c,P.Previous|P.WrapAround)===K.Success){let u=l.value.find(g=>{var f;return g.element===((f=q(p))==null?void 0:f.activeElement)});u&&y.change(u.propsRef.value)}break;case R.ArrowRight:case R.ArrowDown:if(a.preventDefault(),a.stopPropagation(),z(c,P.Next|P.WrapAround)===K.Success){let u=l.value.find(g=>{var f;return g.element===((f=q(g.element))==null?void 0:f.activeElement)});u&&y.change(u.propsRef.value)}break;case R.Space:{a.preventDefault(),a.stopPropagation();let u=l.value.find(g=>{var f;return g.element===((f=q(g.element))==null?void 0:f.activeElement)});u&&y.change(u.propsRef.value)}break}}let S=m(()=>{var a;return(a=G(p))==null?void 0:a.closest("form")});return D(()=>{ie([S],()=>{if(!S.value||e.defaultValue===void 0)return;function a(){y.change(e.defaultValue)}return S.value.addEventListener("reset",a),()=>{var c;(c=S.value)==null||c.removeEventListener("reset",a)}},{immediate:!0})}),()=>{let{disabled:a,name:c,form:u,...g}=e,f={ref:p,id:d,role:"radiogroup","aria-labelledby":b.value,"aria-describedby":T.value,onKeydown:w};return W(N,[...c!=null&&x.value!=null?Q({[c]:x.value}).map(([L,M])=>W(xe,de({features:Y.Hidden,key:L,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:u,disabled:a,name:L,value:M}))):[],U({ourProps:f,theirProps:{...t,...ue(g,["modelValue","defaultValue","by"])},slot:{},attrs:t,slots:n,name:"RadioGroup"})])}}});var Ce=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(Ce||{});let Oe=A({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{attrs:r,slots:t,expose:n}){var o;let i=(o=e.id)!=null?o:`headlessui-radiogroup-option-${J()}`,d=re("RadioGroupOption"),p=te({name:"RadioGroupLabel"}),l=ee({name:"RadioGroupDescription"}),b=v(null),T=m(()=>({value:e.value,disabled:e.disabled})),x=v(1);n({el:b,$el:b});let F=m(()=>G(b));D(()=>d.registerOption({id:i,element:F,propsRef:T})),ce(()=>d.unregisterOption(i));let y=m(()=>{var f;return((f=d.firstOption.value)==null?void 0:f.id)===i}),w=m(()=>d.disabled.value||e.disabled),S=m(()=>d.compare($(d.value.value),$(e.value))),a=m(()=>w.value?-1:S.value||!d.containsCheckedOption.value&&y.value?0:-1);function c(){var f;d.change(e.value)&&(x.value|=2,(f=G(b))==null||f.focus())}function u(){x.value|=2}function g(){x.value&=-3}return()=>{let{value:f,disabled:L,...M}=e,oe={checked:S.value,disabled:w.value,active:!!(x.value&2)},ne={id:i,ref:b,role:"radio","aria-checked":S.value?"true":"false","aria-labelledby":p.value,"aria-describedby":l.value,"aria-disabled":w.value?!0:void 0,tabIndex:a.value,onClick:w.value?void 0:c,onFocus:w.value?void 0:u,onBlur:w.value?void 0:g};return U({ourProps:ne,theirProps:M,slot:oe,attrs:r,slots:t,name:"RadioGroupOption"})}}});const Te=A({__name:"MovingGlobules",props:{fromColour:{default:"#655b5f"},toColour:{default:"#23b5dd"},interval:{default:2e3},speed:{default:"6s"}},setup(e){const r=v("polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)");function t(){const o=[];for(let i=0;i<10;i++){const d=Math.random()*100,p=Math.random()*100;o.push(`${d.toFixed(1)}% ${p.toFixed(1)}%`)}r.value=`polygon(${o.join(", ")})`}D(()=>{setInterval(t,n.interval)});const n=e;return(o,i)=>(C(),O("div",{class:h(["mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"]),style:me({clipPath:r.value,transition:`clip-path ${n.speed} ease`,background:`linear-gradient(to top right, ${n.fromColour}, ${n.toColour})`})},null,4))}}),Re={class:"relative inline-block"},Ie=A({__name:"InfoTooltip",props:{color:{type:String,default:"bg-white text-gray-800"}},setup(e){const r=e,t=v(!1),n=()=>{t.value=!t.value},o=()=>{t.value=!1},i=m(()=>`${r.color} border-2 border-dashed`);return(d,p)=>(C(),O("div",Re,[_(I(j),{icon:"heroicons:information-circle-20-solid",class:"inline align-baseline cursor-pointer",onClick:n}),_(be,{name:"fade"},{default:V(()=>[t.value?(C(),O("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50",onClick:o},[s("div",{class:h(["relative max-w-md p-6 rounded-lg shadow-lg",i.value]),onClick:p[0]||(p[0]=fe(()=>{},["stop"]))},[s("button",{onClick:o,class:"absolute top-2 right-2 text-gray-500 hover:text-gray-700"},[_(I(j),{icon:"heroicons:x-mark-20-solid"})]),ge(d.$slots,"default",{},void 0,!0)],2)])):ve("",!0)]),_:3})]))}}),Ae=he(Ie,[["__scopeId","data-v-6f243574"]]),Ee={class:"relative isolate bg-white dark:bg-gray-900 px-6 py-18 sm:py-12 lg:px-8"},Pe=s("div",{class:"pb-12 flex justify-center text-sm"},null,-1),Ne={class:"absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl","aria-hidden":"true"},Ve=s("div",{class:"mx-auto max-w-2xl text-center lg:max-w-4xl"},[s("h2",{class:"text-2xl font-semibold leading-7 text-brand-600 dark:text-brand-400"},"Pricing"),s("p",{class:"mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"}," Secure Links, Stronger Connections ")],-1),Ge=s("p",{class:"mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-600 dark:text-gray-300"}," Share confidential information with confidence, elevate your brand, and build trust ",-1),je={class:"mt-16 flex justify-center"},De={"aria-label":"Payment frequency"},Fe={class:"mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"},Le=["id"],Me={class:"mt-4 flex items-baseline gap-x-2"},qe=["href","aria-describedby"],Be={class:"pt-8 mx-auto mt-12 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300"},Ue={class:"font-brand"},He={class:"italic"},We={class:"py-8 mx-auto mt-4 grid max-w-4xl justify-center grid-cols-1"},ze={class:"relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:mt-5 lg:px-8"},Ke={class:"mx-auto max-w-md lg:max-w-5xl"},Je={class:"rounded-lg bg-brandcompdim-50 dark:bg-gray-800 px-6 py-8 sm:p-10 lg:flex lg:items-center border-2 border-dotted hover:border-brandcompdim-300 dark:hover:border-brandcompdim-600"},Ye={class:"flex-1"},Qe=s("div",null,[s("h3",{class:"inline-flex rounded-full bg-brandcompdim-200 dark:bg-brandcompdim-700 px-4 py-1 text-base font-semibold text-gray-800 dark:text-gray-200"}," Self-Hosted ")],-1),Xe={class:"mt-4 text-lg text-gray-600 dark:text-gray-300"},Ze=s("span",{class:"italic font-semibold text-gray-900 dark:text-gray-100"},"$0 dollars",-1),et={class:"float-left mr-4 mb-2 shape-icon"},tt=s("h3",{class:"font-bold mb-2"},"Our SimpleStack℠ Guarantee",-1),at=s("p",{class:"prose dark:prose-invert"},"Our SimpleStack guarantee ensures effortless deployment and management of our software. You can have the entire system up and running in minutes, from a single docker container. ",-1),rt=s("p",{class:"prose dark:prose-invert"},"Whether you're a seasoned DevOps pro or new to self-hosting, our SimpleStack design ensures you can focus on using the product, not wrestling with infrastructure. That's the SimpleStack advantage!",-1),ot=s("p",{class:"prose mt-4 font-semibold dark:prose-invert"}," While others are stacking up complications, we've got your back with a stack so simple, it just works. ",-1),nt=s("div",{class:"mt-6 rounded-md shadow lg:ml-10 lg:mt-0 lg:flex-shrink-0"},[s("a",{href:"https://github.com/onetimesecret/onetimesecret",class:"block items-center justify-center rounded-md border border-transparent bg-brandcompdim-300 dark:bg-brandcompdim-700 px-5 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-brandcompdim-200 dark:hover:bg-brandcompdim-600"}," Get Started ")],-1),st=A({__name:"PricingDual",setup(e){const r=[{value:"monthly",label:"Monthly",priceSuffix:"/month"},{value:"annually",label:"Annually",priceSuffix:"/year"}],t=v(r[0]),n=[{name:"Identity Plus",id:"tier-identity",href:"#",price:{monthly:"$25",annually:"$365"},description:"Secure sharing that elevates your brand and simplifies communication.",features:["Custom domain and branding","Unlimited secrets","AuthentiCore℗ Technology"],featured:!1},{name:"Global Elite",id:"tier-integrity",href:"#",price:{monthly:"$185",annually:"$1995"},description:"Dedicated infrastructure for your company.",features:["Dedicated, private cloud infrastructure","Identity Plus","Unlimited usage","Data residency options (EU, US)","SafeTek® Architecture"],featured:!0}],o=[{quote:"Powerful tools, flexible plans. Choose the package that fits your ambitions.",name:"Claude",company:"Anthropic AI",uri:""},{quote:"The AI-powered recommendations were spot-on. I'm now on a plan that perfectly fits my business needs.",name:"Alex",company:"TechStart Solutions",uri:""},{quote:"I love how my plan evolves with my business. It's like having a pricing partner that grows with you.",name:"Emma",company:"Growth Dynamics",uri:""},{quote:"The flexibility to adjust features and see real-time price changes is a game-changer. No more overpaying!",name:"Marcus",company:"Agile Innovations",uri:""},{quote:"As a freelancer, my needs change constantly. This dynamic pricing model is perfect for my fluctuating workload.",name:"Sophia",company:"Creative Freelance Hub",uri:""},{quote:"The transparency in pricing is refreshing. I know exactly what I'm paying for and why.",name:"Daniel",company:"Clear Vision Analytics",uri:""},{quote:"We scaled from a small team to a mid-sized company, and our pricing plan seamlessly adapted. Brilliant!",name:"Laura",company:"ScaleUp Enterprises",uri:""},{quote:"The customization options allowed me to create a plan that aligns perfectly with my nonprofit's budget and goals.",name:"Michael",company:"Community Impact Foundation",uri:""}],i=v(o[0]);return D(()=>{const d=Math.floor(Math.random()*o.length);i.value=o[d]}),(d,p)=>(C(),O("div",Ee,[Pe,s("div",Ne,[_(Te,{"from-colour":"#23b5dd","to-colour":"#dc4a22",speed:"6s"})]),Ve,Ge,s("div",je,[s("fieldset",De,[_(I($e),{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=l=>t.value=l),class:"grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"},{default:V(()=>[(C(),O(N,null,B(r,l=>_(I(Oe),{as:"template",key:l.value,value:l},{default:V(({checked:b})=>[s("div",{class:h([b?"bg-brand-600 dark:bg-brand-500":"bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 opacity-55","cursor-pointer rounded-full px-2.5 py-1"])},k(l.label),3)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])])]),s("div",Fe,[(C(),O(N,null,B(n,(l,b)=>s("div",{key:l.id,class:h([l.featured?"relative bg-slate-800 dark:bg-slate-700 shadow-2xl":"bg-white/60 dark:bg-gray-800/60 sm:mx-8 lg:mx-0",l.featured?"":b===0?"rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none":"sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl","rounded-3xl p-8 ring-1 ring-gray-900/10 dark:ring-gray-100/10 sm:p-10"])},[s("h3",{id:l.id,class:h([(l.featured,"text-brand-500"),"text-xl font-semibold leading-7"])},k(l.name),11,Le),s("p",Me,[s("span",{class:h([l.featured?"text-white":"text-gray-900 dark:text-white","text-5xl font-bold tracking-tight"])},k(l.price[t.value.value]),3),s("span",{class:h([l.featured?"text-gray-400":"text-gray-500 dark:text-gray-400","text-base"])},k(t.value.priceSuffix),3)]),s("p",{class:h([l.featured?"text-gray-300":"text-gray-600 dark:text-gray-300","mt-6 text-base leading-7"])},k(l.description),3),s("ul",{role:"list",class:h([l.featured?"text-gray-300":"text-gray-600 dark:text-gray-300","mt-8 space-y-3 text-base leading-6 sm:mt-10"])},[(C(!0),O(N,null,B(l.features,T=>(C(),O("li",{key:T,class:"flex gap-x-3"},[_(I(j),{icon:"heroicons-solid:check",class:h([l.featured?"text-brand-400":"text-brand-600 dark:text-brand-400","h-6 w-5 flex-none"]),"aria-hidden":"true"},null,8,["class"]),E(" "+k(T),1)]))),128))],2),s("a",{href:l.href,"aria-describedby":l.id,class:h([l.featured?"bg-brand-500 text-white shadow-sm hover:bg-brand-400 focus-visible:outline-brand-500":"text-brand-600 dark:text-brand-400 ring-1 ring-inset ring-brand-200 dark:ring-brand-700 hover:ring-brand-300 dark:hover:ring-brand-600 focus-visible:outline-brand-600","mt-8 block rounded-md px-3.5 py-2.5 text-center text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"])}," Buy this plan ",10,qe)],2)),64))]),s("p",Be,[E(' "'+k(i.value.quote)+'" — ',1),s("span",Ue,[E(k(i.value.name)+", ",1),s("span",He,k(i.value.company),1)])]),s("div",We,[s("div",ze,[s("div",Ke,[s("div",Je,[s("div",Ye,[Qe,s("div",Xe,[E(" Get full access to all features when self-hosting for the honest and wholesome price of "),Ze,E(". We even include our SimpleStack℠ guarantee at no extra charge. "),_(Ae,{color:"bg-brandcomp-100 dark:bg-brandcomp-800"},{default:V(()=>[s("div",et,[_(I(j),{icon:"fa6-solid:handshake-simple",class:"w-24 h-24 text-brandcomp-600 dark:text-brandcomp-400"})]),tt,at,rt,ot]),_:1})])]),nt])])])])]))}});export{st as default};
