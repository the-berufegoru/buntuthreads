import{I as He}from"./chunk-QJ6SBVJ2-Ba5i7_qK.js";import{R as _t,C as vt,O as jt}from"./chunk-P3DRE4IY-SO1VLaCY.js";import{M as Fe}from"./chunk-LHJ6JQGA-BYkK2CbU.js";import{c as yt,d as It,e as Nt,u as St,f as Ct,g as Pt,h as Et,i as wt,j as qt,k as kt,l as At,m as Mt,n as Dt,o as Rt,p as Tt,q as Ot}from"./chunk-MVLAA7QJ-B_G1OBIs.js";import{g as Le}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{D as Ht}from"./chunk-AMJSV3NG-DPKI1Y1t.js";import{c as Ft,o as Lt}from"./chunk-HCTCEIT6-8r5buTLG.js";import{a as W}from"./chunk-FSMQADBD-DQ6u7KYm.js";import{a8 as O,R as zt,u as Bt,b as B,aN as Vt,aO as Ut,r as y,j as e,ab as Gt,ac as $t,b6 as Qt,z as ze,t as M,H as _e,B as ne,x as p,T as G,I as oe,ae as Jt,d8 as Xt,aZ as Be,y as ve,A as Ve,X as Pe,s as Ue,da as Zt}from"./index-Bq0Gzu_3.js";import{P as Ge,a as $e}from"./chunk-FTXJRXMD-BteamdRa.js";import{C as re}from"./chunk-BNH57GBH-Bw9lJ2z4.js";import{c as Ee}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{u as Qe}from"./chunk-VDODP7YI-IylAwzvW.js";import{u as Je,D as Xe}from"./chunk-OMP35ZTD-TafmhEGJ.js";import"./lodash-C7_NW7v3.js";import{u as Ze}from"./chunk-C76H5USB-B1mKOCrZ.js";import"./chunk-2XYHZG6S-C03r6v2Q.js";import"./chunk-E3YGDIJC-DwOUC-jK.js";import{K as Kt}from"./chunk-CEEYZHMN-CL6q0Lsw.js";import{R as X,u as Wt,a as Ke,S as V}from"./chunk-MDIOSTKB-CScRFmr1.js";import{P as we}from"./pencil-square-DJB9OGX8.js";import{D as Yt}from"./document-text-DzTdFdkV.js";import{X as We}from"./x-circle-BcEe3vqW.js";import{u as en}from"./use-prompt-DKUUp42P.js";import{A as Ye}from"./alert-DtdpqwtR.js";import{C as qe}from"./currency-input-BWz8Pva6.js";import{C as le}from"./checkbox-_V0gwTuy.js";import{c as et}from"./index-DSyUmAUn.js";import"./Trans-D-2atTey.js";import"./chunk-P3UUX2T6-DJzunWlg.js";import"./x-mark-mini-B2FnFGkK.js";import"./triangles-mini-CJVmoiLK.js";import"./plus-mini-D38qrUji.js";import"./chunk-YEDAFXMB-BLUM5VK_.js";import"./chunk-AOFGTNG6-C3IFjf4O.js";import"./chunk-WX2SMNCD-CUPtxgvy.js";import"./command-bar-DD70Q2dm.js";import"./index-C99Xhc7P.js";import"./chunk-QAF7PVQE-Cn23_qPf.js";import"./format-moz0PK7h.js";import"./date-picker-DLj21rEe.js";import"./popover-DVUhQEd-.js";import"./triangle-left-mini-C5FnHW24.js";import"./prompt-B670l_cz.js";import"./index.esm-C-qMPIPn.js";var te=et(),tn=i=>{const{t:l}=B();return y.useMemo(()=>[te.display({id:"select",header:({table:r})=>e.jsx(le,{checked:r.getIsSomePageRowsSelected()?"indeterminate":r.getIsAllPageRowsSelected(),onCheckedChange:d=>r.toggleAllPageRowsSelected(!!d)}),cell:({row:r})=>{const d=r.getCanSelect();return e.jsx(le,{disabled:!d,checked:r.getIsSelected(),onCheckedChange:n=>r.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),te.display({id:"product",header:()=>e.jsx(Ge,{}),cell:({row:r})=>e.jsx($e,{product:r.original.variant.product})}),te.accessor("variant.sku",{header:l("fields.sku"),cell:({getValue:r})=>r()||"-"}),te.accessor("variant.title",{header:l("fields.variant")}),te.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.quantity")})}),cell:({getValue:r,row:d})=>Le(d.original)}),te.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.price")})}),cell:({getValue:r})=>{const d=r()||0,n=W(d,i);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:n})})}})],[l,i])},nn=()=>{const{t:i}=B();return[{key:"returnable_quantity",label:i("orders.returns.returnableQuantityLabel"),type:"number"},{key:"refundable_amount",label:i("orders.returns.refundableAmountLabel"),type:"number"},{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},sn=({pageSize:i=50,prefix:l})=>{const r=Ze(["q","offset","order","created_at","updated_at","returnable_quantity","refundable_amount"],l),{offset:d,created_at:n,updated_at:f,refundable_amount:m,returnable_quantity:b,..._}=r;return{searchParams:{..._,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:f?JSON.parse(f):void 0,refundable_amount:m?JSON.parse(m):void 0,returnable_quantity:b?JSON.parse(b):void 0},raw:r}},pe=50,ke="rit",an=({onSelectionChange:i,selectedItems:l,items:r,currencyCode:d})=>{const{t:n}=B(),[f,m]=y.useState(l.reduce((h,w)=>(h[w]=!0,h),{})),b=h=>{const w=typeof h=="function"?h(f):h;m(w),i(Object.keys(w))},{searchParams:_,raw:v}=sn({pageSize:pe,prefix:ke}),E=y.useMemo(()=>{const{order:h,offset:w,limit:S,q:H,created_at:L,updated_at:z,refundable_amount:Z,returnable_quantity:$}=_;let A=r;if(H&&(A=A.filter(U=>{var Q;return U.variant.product.title.toLowerCase().includes(H.toLowerCase())||U.variant.title.toLowerCase().includes(H.toLowerCase())||((Q=U.variant.sku)==null?void 0:Q.toLowerCase().includes(H.toLowerCase()))})),h){const U=h[0]==="-"?"desc":"asc",Q=h.replace("-","");A=on(A,Q,U)}return L&&(A=Ae(A,L,"created_at")),z&&(A=Ae(A,z,"updated_at")),$&&(A=De(A,$,"returnable_quantity",d)),Z&&(A=De(A,Z,"refundable_amount",d)),A.slice(w,w+S)},[r,d,_]),q=tn(d),D=nn(),{table:P}=Je({data:E,columns:q,count:E.length,enablePagination:!0,getRowId:h=>h.id,pageSize:pe,enableRowSelection:h=>Le(h.original)>0,rowSelection:{state:f,updater:b}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Xe,{table:P,columns:q,pageSize:pe,count:E.length,filters:D,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:n("fields.product")},{key:"variant_title",label:n("fields.variant")},{key:"sku",label:n("fields.sku")},{key:"returnable_quantity",label:n("orders.fields.returnableQuantity")},{key:"refundable_amount",label:n("orders.fields.refundableAmount")}],prefix:ke,queryObject:v})})},on=(i,l,r)=>i.sort((d,n)=>{let f,m;return l==="product_title"?(f=d.variant.product.title,m=n.variant.product.title):l==="variant_title"?(f=d.variant.title,m=n.variant.title):l==="sku"?(f=d.variant.sku,m=n.variant.sku):l==="returnable_quantity"?(f=d.quantity-(d.returned_quantity||0),m=n.quantity-(n.returned_quantity||0)):l==="refundable_amount"&&(f=d.refundable||0,m=n.refundable||0),f<m?r==="asc"?-1:1:f>m?r==="asc"?1:-1:0}),Ae=(i,l,r)=>{const{gt:d,gte:n,lt:f,lte:m}=l;return i.filter(b=>{const _=new Date(b[r]);let v=!0;return d&&(v=v&&_>new Date(d)),n&&(v=v&&_>=new Date(n)),f&&(v=v&&_<new Date(f)),m&&(v=v&&_<=new Date(m)),v})},Me={eq:void 0,gt:void 0,gte:void 0,lt:void 0,lte:void 0},De=(i,l,r,d)=>{const{eq:n,gt:f,lt:m,gte:b,lte:_}=typeof l=="object"?{...Me,...l}:{...Me,eq:l};return i.filter(v=>{const E=v.quantity-(v.returned_quantity||0),q=W(v.refundable||0,d),D=r==="returnable_quantity"?E:q;if(n)return D===n;let P=!0;return f&&(P=P&&D>f),b&&(P=P&&D>=b),m&&(P=P&&D<m),_&&(P=P&&D<=_),P})};function rn({item:i,previewItem:l,currencyCode:r,form:d,onRemove:n,onUpdate:f,index:m}){var D,P,h;const{t:b}=B(),{return_reasons:_=[]}=Xt({fields:"+label"}),v=d.watch(`inbound_items.${m}`),E=typeof v.reason_id=="string",q=typeof v.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Be,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(G,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),((D=i.variant)==null?void 0:D.sku)&&e.jsxs("span",{children:["(",i.variant.sku,")"]})]}),e.jsx(G,{as:"div",className:"text-ui-fg-subtle txt-small",children:(h=(P=i.variant)==null?void 0:P.product)==null?void 0:h.title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.quantity`,render:({field:w})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ve,{...w,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:i.quantity,type:"number",onBlur:S=>{const H=S.target.value,L=H===""?null:Number(H);w.onChange(L),L&&f({quantity:L})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(G,{className:"txt-small text-ui-fg-subtle",children:b("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Fe,{currencyCode:r,amount:l.return_requested_total})}),e.jsx(Ve,{groups:[{actions:[!E&&{label:b("actions.addReason"),onClick:()=>d.setValue(`inbound_items.${m}.reason_id`,""),icon:e.jsx(vt,{})},!q&&{label:b("actions.addNote"),onClick:()=>d.setValue(`inbound_items.${m}.note`,""),icon:e.jsx(Yt,{})},{label:b("actions.remove"),onClick:n,icon:e.jsx(We,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[E&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:b("orders.returns.reason")}),e.jsx(p.Hint,{className:"!mt-1",children:b("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.reason_id`,render:({field:{ref:w,value:S,onChange:H,...L}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(re,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:S,onChange:z=>{f({reason_id:z}),H(z)},...L,options:_.map(z=>({label:z.label,value:z.id}))})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.reason_id`,null),f({reason_id:null})},children:e.jsx(Pe,{className:"text-ui-fg-muted"})})]})]}),q&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:b("orders.returns.note")}),e.jsx(p.Hint,{className:"!mt-1",children:b("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(p.Field,{control:d.control,name:`inbound_items.${m}.note`,render:({field:{ref:w,...S}})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ve,{...S,onBlur:()=>{S.onChange(S.value),f({internal_note:S.value})},className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx(oe,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{d.setValue(`inbound_items.${m}.note`,null),f({internal_note:null})},children:e.jsx(Pe,{className:"text-ui-fg-muted"})})]})]})]})]})}var ln=O.object({inbound_items:O.array(O.object({item_id:O.string(),quantity:O.number(),reason_id:O.string().nullish(),note:O.string().nullish()})),outbound_items:O.array(O.object({item_id:O.string(),quantity:O.number()})),location_id:O.string().optional(),inbound_option_id:O.string().nullish(),outbound_option_id:O.string().nullish(),send_notification:O.boolean().optional()}),ae=et(),dn=i=>{const{t:l}=B();return y.useMemo(()=>[ae.display({id:"select",header:({table:r})=>e.jsx(le,{checked:r.getIsSomePageRowsSelected()?"indeterminate":r.getIsAllPageRowsSelected(),onCheckedChange:d=>r.toggleAllPageRowsSelected(!!d)}),cell:({row:r})=>{const d=r.getCanSelect();return e.jsx(le,{disabled:!d,checked:r.getIsSelected(),onCheckedChange:n=>r.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),ae.display({id:"product",header:()=>e.jsx(Ge,{}),cell:({row:r})=>e.jsx($e,{product:r.original.product})}),ae.accessor("sku",{header:l("fields.sku"),cell:({getValue:r})=>r()||"-"}),ae.accessor("title",{header:l("fields.title")})],[l,i])},cn=()=>{const{t:i}=B();return[{key:"created_at",label:i("fields.createdAt"),type:"date"},{key:"updated_at",label:i("fields.updatedAt"),type:"date"}]},un=({pageSize:i=50,prefix:l})=>{const r=Ze(["q","offset","order","created_at","updated_at"],l),{offset:d,created_at:n,updated_at:f,...m}=r;return{searchParams:{...m,limit:i,offset:d?Number(d):0,created_at:n?JSON.parse(n):void 0,updated_at:f?JSON.parse(f):void 0},raw:r}},fe=50,Re="rit",mn=({onSelectionChange:i,selectedItems:l,currencyCode:r})=>{const{t:d}=B(),[n,f]=y.useState(l.reduce((h,w)=>(h[w]=!0,h),{})),m=h=>{const w=typeof h=="function"?h(n):h;f(w),i(Object.keys(w))},{searchParams:b,raw:_}=un({pageSize:fe,prefix:Re}),{variants:v=[],count:E}=Zt({...b,fields:"*inventory_items.inventory.location_levels,+inventory_quantity"}),q=dn(r),D=cn(),{table:P}=Je({data:v,columns:q,count:E,enablePagination:!0,getRowId:h=>h.id,pageSize:fe,enableRowSelection:h=>!0,rowSelection:{state:n,updater:m}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Xe,{table:P,columns:q,pageSize:fe,count:E,filters:D,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_id",label:d("fields.product")},{key:"title",label:d("fields.title")},{key:"sku",label:d("fields.sku")}],prefix:Re,queryObject:_})})};function pn({previewItem:i,currencyCode:l,form:r,onRemove:d,onUpdate:n,index:f}){const{t:m}=B();return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Be,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(G,{className:"txt-small",as:"span",weight:"plus",children:[i.title," "]}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(G,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(p.Field,{control:r.control,name:`outbound_items.${f}.quantity`,render:({field:b})=>e.jsxs(p.Item,{children:[e.jsx(p.Control,{children:e.jsx(ve,{...b,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,type:"number",onBlur:_=>{const v=_.target.value,E=v===""?null:Number(v);b.onChange(E),E&&n({quantity:E})}})}),e.jsx(p.ErrorMessage,{})]})}),e.jsx(G,{className:"txt-small text-ui-fg-subtle",children:m("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(Fe,{currencyCode:l,amount:i.total})}),e.jsx(Ve,{groups:[{actions:[{label:m("actions.remove"),onClick:d,icon:e.jsx(We,{})}].filter(Boolean)}]})]})]})})}var he=[],Te=[],fn=({order:i,preview:l,claim:r,form:d})=>{const{t:n}=B(),{setIsOpen:f}=Ke(),[m,b]=y.useState({}),{shipping_options:_=[]}=Qe({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),{mutateAsync:v}=Mt(r.id,i.id),{mutateAsync:E}=Dt(r.id,i.id),{mutateAsync:q}=Rt(r.id,i.id),{mutateAsync:D}=Tt(r.id,i.id),{mutateAsync:P}=Ot(r.id,i.id),h=y.useMemo(()=>{var j;return(j=l==null?void 0:l.items)==null?void 0:j.filter(g=>{var u;return!!((u=g.actions)!=null&&u.find(x=>x.claim_id===r.id&&x.action==="ITEM_ADD"))})},[l.items]),w=y.useMemo(()=>{var j;return new Map((j=i==null?void 0:i.items)==null?void 0:j.map(g=>[g.variant_id,g]))},[i.items]),{fields:S,append:H,remove:L,update:z}=ze({name:"outbound_items",control:d.control}),Z=y.useMemo(()=>new Map(h.map(j=>[j.variant_id,j])),[h,S]);y.useEffect(()=>{const j={};h.forEach(g=>{const u=S.findIndex(x=>x.item_id===g.id);j[g.id]=!0,u>-1?S[u].quantity!==g.detail.quantity&&z(u,{...S[u],quantity:g.detail.quantity}):H({item_id:g.id,quantity:g.detail.quantity,variant_id:g.variant_id},{shouldFocus:!1})}),S.forEach((g,u)=>{g.item_id in j||L(u)})},[h]);const $=d.watch("location_id"),A=!S.length,U=async()=>{var j,g;he.length&&await q({items:he.map(u=>({variant_id:u,quantity:1}))},{onError:u=>{M.error(u.message)}});for(const u of Te){const x=(g=(j=h.find(N=>N.variant_id===u))==null?void 0:j.actions)==null?void 0:g.find(N=>N.action==="ITEM_ADD");x!=null&&x.id&&await P(x==null?void 0:x.id,{onError:N=>{M.error(N.message)}})}f("outbound-items",!1)},Q=async j=>{const u=l.shipping_methods.filter(x=>{var T;const N=(T=x.actions)==null?void 0:T.find(k=>k.action==="SHIPPING_ADD"&&!k.return_id);return N&&!(N!=null&&N.return_id)}).filter(Boolean).map(x=>{var T;const N=(T=x.actions)==null?void 0:T.find(k=>k.action==="SHIPPING_ADD"&&!k.return_id);if(N)return E(N.id)});await Promise.all(u),await v({shipping_option_id:j},{onError:x=>{M.error(x.message)}})},de=y.useMemo(()=>$?!S.map(g=>{var x;const u=w.get(g.variant_id);return!(u!=null&&u.variant_id)||!(u!=null&&u.variant)||!u.variant.manage_inventory?!0:(x=m[u.variant_id])==null?void 0:x.find(N=>N.location_id===$)}).every(Boolean):!1,[S,m,$]);return y.useEffect(()=>{(async()=>{const g={};if(!S.length)return g;const u=S.map(N=>N==null?void 0:N.variant_id).filter(Boolean);return(await Ue.admin.productVariant.list({id:u},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(N=>{var T,k;g[N.id]=((k=(T=N.inventory)==null?void 0:T[0])==null?void 0:k.location_levels)||[]}),g})().then(g=>{b(g)})},[S]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(_e,{level:"h2",children:n("orders.returns.outbound")}),e.jsxs(V,{id:"outbound-items",children:[e.jsx(V.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(V.Content,{children:[e.jsx(V.Header,{}),e.jsx(mn,{selectedItems:S.map(j=>j.variant_id),currencyCode:i.currency_code,onSelectionChange:j=>{const g=S.map(u=>u.variant_id);he=j.filter(u=>!g.includes(u)),Te=g.filter(u=>!j.includes(u))}}),e.jsx(V.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await U(),children:n("actions.save")},"submit-button")]})})})]})]})]}),A&&e.jsx(He,{}),S.map((j,g)=>Z.get(j.variant_id)&&e.jsx(pn,{previewItem:Z.get(j.variant_id),currencyCode:i.currency_code,form:d,onRemove:()=>{var x,N,T;const u=(T=(N=(x=h.find(k=>k.id===j.item_id))==null?void 0:x.actions)==null?void 0:N.find(k=>k.action==="ITEM_ADD"))==null?void 0:T.id;u&&P(u,{onError:k=>{M.error(k.message)}})},onUpdate:u=>{var N,T,k;const x=(k=(T=(N=h.find(K=>K.id===j.item_id))==null?void 0:N.actions)==null?void 0:T.find(K=>K.action==="ITEM_ADD"))==null?void 0:k.id;x&&D({...u,actionId:x},{onError:K=>{M.error(K.message)}})},index:g},j.id)),!A&&e.jsx("div",{className:"mt-8 flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.claims.outboundShipping")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.claims.outboundShippingHint")})]}),e.jsx(p.Field,{control:d.control,name:"outbound_option_id",render:({field:{value:j,onChange:g,...u}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:j??void 0,onChange:x=>{g(x),x&&Q(x)},...u,options:_.map(x=>({label:x.name,value:x.id})),disabled:!_.length,noResultsPlaceholder:e.jsx(jt,{})})})})})]})}),de&&e.jsxs(Ye,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(G,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]})]})},xe=[],Oe=[],ge=!1,hn=({order:i,preview:l,claim:r,orderReturn:d})=>{var Ne;const{t:n}=B(),{handleSuccess:f}=Wt(),{setIsOpen:m}=Ke(),[b,_]=y.useState(!1),[v,E]=y.useState(!1),[q,D]=y.useState(0),[P,h]=y.useState(0),[w,S]=y.useState({}),{mutateAsync:H,isPending:L}=Nt(r.id,i.id),{mutateAsync:z,isPending:Z}=St(r.id,i.id),{mutateAsync:$,isPending:A}=Lt((Ne=l==null?void 0:l.order_change)==null?void 0:Ne.return_id,i.id),{mutateAsync:U,isPending:Q}=Ct(r.id,i.id),{mutateAsync:de,isPending:j}=Pt(r.id,i.id),{mutateAsync:g,isPending:u}=Et(r.id,i.id),{mutateAsync:x,isPending:N}=wt(r.id,i.id),{mutateAsync:T,isPending:k}=qt(r.id,i.id),{mutateAsync:K,isPending:tt}=kt(r.id,i.id),{mutateAsync:je,isPending:nt}=At(r.id,i.id),st=L||Z||Q||j||N||u||k||nt||tt||A,J=y.useMemo(()=>{var s;return(s=l==null?void 0:l.items)==null?void 0:s.filter(o=>{var t;return!!((t=o.actions)!=null&&t.find(a=>a.claim_id===r.id))})},[l.items]),se=J.filter(s=>{var o;return!!((o=s.actions)!=null&&o.find(t=>t.action==="RETURN_ITEM"))}),ce=J.filter(s=>{var o;return!!((o=s.actions)!=null&&o.find(t=>t.action==="ITEM_ADD"))}),ue=y.useMemo(()=>{var s;return new Map((s=i==null?void 0:i.items)==null?void 0:s.map(o=>[o.id,o]))},[i.items]),R=Gt({defaultValues:()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))}),o=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});return Promise.resolve({inbound_items:se.map(t=>{var c,I;const a=(c=t.actions)==null?void 0:c.find(C=>C.action==="RETURN_ITEM");return{item_id:t.id,variant_id:t.variant_id,quantity:t.detail.return_requested_quantity,note:a==null?void 0:a.internal_note,reason_id:(I=a==null?void 0:a.details)==null?void 0:I.reason_id}}),outbound_items:ce.map(t=>({item_id:t.id,variant_id:t.variant_id,quantity:t.detail.quantity})),inbound_option_id:s?s.shipping_option_id:"",outbound_option_id:o?o.shipping_option_id:"",location_id:d==null?void 0:d.location_id,send_notification:!1})},resolver:$t(ln)}),Y=R.watch("location_id"),{stock_locations:it=[]}=Qt({limit:999}),{shipping_options:at=[]}=Qe({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id",stock_location_id:Y},{enabled:!!Y}),ot=at.filter(s=>!!s.rules.find(o=>o.attribute==="is_return"&&o.value==="true")),me=l.shipping_methods.find(s=>{var o;return!!((o=s.actions)!=null&&o.find(t=>t.action==="SHIPPING_ADD"&&!!t.return_id))}),ee=l.shipping_methods.find(s=>{var o;return!!((o=s.actions)!=null&&o.find(t=>t.action==="SHIPPING_ADD"&&!t.return_id))});y.useEffect(()=>{me&&D(me.total)},[me]),y.useEffect(()=>{ee&&h(ee.total)},[ee]);const{fields:F,append:rt,remove:lt,update:dt}=ze({name:"inbound_items",control:R.control}),ye=y.useMemo(()=>new Map(J.map(s=>[s.id,s])),[J,F]);y.useEffect(()=>{const s={};se.forEach(o=>{var a,c;const t=F.findIndex(I=>I.item_id===o.id);if(s[o.id]=!0,t>-1){if(F[t].quantity!==o.detail.return_requested_quantity){const I=(a=o.actions)==null?void 0:a.find(C=>C.action==="RETURN_ITEM");dt(t,{...F[t],quantity:o.detail.return_requested_quantity,note:I==null?void 0:I.internal_note,reason_id:(c=I==null?void 0:I.details)==null?void 0:c.reason_id})}}else rt({item_id:o.id,quantity:o.detail.return_requested_quantity},{shouldFocus:!1})}),F.forEach((o,t)=>{o.item_id in s||lt(t)})},[J]),y.useEffect(()=>{const s=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))});s?R.setValue("inbound_option_id",s.shipping_option_id):R.setValue("inbound_option_id",null);const o=l.shipping_methods.find(t=>{var a;return!!((a=t.actions)!=null&&a.find(c=>c.action==="SHIPPING_ADD"&&!c.return_id))});o?R.setValue("outbound_option_id",o.shipping_option_id):R.setValue("outbound_option_id",null)},[l.shipping_methods]),y.useEffect(()=>{R.setValue("location_id",d==null?void 0:d.location_id)},[d]);const ie=!se.length,Ie=!ce.length,ct=R.watch("inbound_option_id"),ut=R.watch("outbound_option_id"),mt=en(),pt=R.handleSubmit(async s=>{await mt({title:n("general.areYouSure"),description:n("orders.claims.confirmText"),confirmText:n("actions.continue"),cancelText:n("actions.cancel"),variant:"confirmation"})&&await H({no_notification:!s.send_notification},{onSuccess:()=>{M.success(n("orders.claims.toast.confirmedSuccessfully")),f()},onError:t=>{M.error(t.message)}})}),ft=async()=>{var s,o,t;xe.length&&await T({items:xe.map(a=>({id:a,quantity:1}))},{onError:a=>{M.error(a.message)}});for(const a of Oe){const c=(t=(o=(s=J.find(I=>I.id===a))==null?void 0:s.actions)==null?void 0:o.find(I=>I.action==="RETURN_ITEM"))==null?void 0:t.id;c&&await je(c,{onError:I=>{M.error(I.message)}})}m("inbound-items",!1)},ht=async s=>{await $({location_id:s})},xt=async s=>{const t=l.shipping_methods.filter(a=>{var I;const c=(I=a.actions)==null?void 0:I.find(C=>C.action==="SHIPPING_ADD"&&!!C.return_id);return c&&!(c!=null&&c.return_id)}).filter(Boolean).map(a=>{var I;const c=(I=a.actions)==null?void 0:I.find(C=>C.action==="SHIPPING_ADD"&&!!C.return_id);if(c)return x(c.id)});await Promise.all(t),await U({shipping_option_id:s},{onError:a=>{M.error(a.message)}})};y.useEffect(()=>{var s;b&&((s=document.getElementById("js-shipping-inbound-input"))==null||s.focus())},[b]),y.useEffect(()=>{var s;v&&((s=document.getElementById("js-shipping-outbound-input"))==null||s.focus())},[v]);const gt=y.useMemo(()=>Y?!F.map(o=>{var a;const t=ue.get(o.item_id);return!(t!=null&&t.variant_id)||!(t!=null&&t.variant)||!t.variant.manage_inventory?!0:(a=w[t.variant_id])==null?void 0:a.find(c=>c.location_id===Y)}).every(Boolean):!1,[F,w,Y]);y.useEffect(()=>{(async()=>{const o={};if(!F.length)return o;const t=F.map(c=>c==null?void 0:c.variant_id).filter(Boolean);return(await Ue.admin.productVariant.list({id:t},{fields:"*inventory,*inventory.location_levels"})).variants.forEach(c=>{var I,C;o[c.id]=((C=(I=c.inventory)==null?void 0:I[0])==null?void 0:C.location_levels)||[]}),o})().then(o=>{S(o)})},[F]),y.useEffect(()=>()=>{ge&&(z(void 0,{onSuccess:()=>{M.success(n("orders.claims.actions.cancelClaim.successToast"))},onError:s=>{M.error(s.message)}}),ge=!1)},[]);const bt=y.useMemo(()=>{const s=l.shipping_methods.find(o=>{var t;return!!((t=o.actions)!=null&&t.find(a=>a.action==="SHIPPING_ADD"&&!!a.return_id))});return(s==null?void 0:s.total)||0},[l.shipping_methods]);return e.jsx(X.Form,{form:R,children:e.jsxs(Kt,{onSubmit:pt,className:"flex h-full flex-col",children:[e.jsx(X.Header,{}),e.jsx(X.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(_e,{level:"h1",children:n("orders.claims.create")}),e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(_e,{level:"h2",children:n("orders.returns.inbound")}),e.jsxs(V,{id:"inbound-items",children:[e.jsx(V.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:n("actions.addItems")})}),e.jsxs(V.Content,{children:[e.jsx(V.Header,{}),e.jsx(an,{items:i.items,selectedItems:F.map(s=>s.item_id),currencyCode:i.currency_code,onSelectionChange:s=>{const o=F.map(t=>t.item_id);xe=s.filter(t=>!o.includes(t)),Oe=o.filter(t=>!s.includes(t))}}),e.jsx(V.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(ne,{type:"button",variant:"secondary",size:"small",children:n("actions.cancel")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await ft(),children:n("actions.save")},"submit-button")]})})})]})]})]}),ie&&e.jsx(He,{}),F.map((s,o)=>ye.get(s.item_id)&&ue.get(s.item_id)&&e.jsx(rn,{item:ue.get(s.item_id),previewItem:ye.get(s.item_id),currencyCode:i.currency_code,form:R,onRemove:()=>{var a,c,I;const t=(I=(c=(a=J.find(C=>C.id===s.item_id))==null?void 0:a.actions)==null?void 0:c.find(C=>C.action==="RETURN_ITEM"))==null?void 0:I.id;t&&je(t,{onError:C=>{M.error(C.message)}})},onUpdate:t=>{var c,I;const a=(I=(c=J.find(C=>C.id===s.item_id))==null?void 0:c.actions)==null?void 0:I.find(C=>C.action==="RETURN_ITEM");a&&K({...t,actionId:a.id},{onError:C=>{var Se,Ce;(Se=a.details)!=null&&Se.quantity&&t.quantity&&R.setValue(`inbound_items.${o}.quantity`,(Ce=a.details)==null?void 0:Ce.quantity),M.error(C.message)}})},index:o},s.id)),!ie&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(p.Label,{children:n("orders.returns.location")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.locationHint")})]}),e.jsx(p.Field,{control:R.control,name:"location_id",render:({field:{value:s,onChange:o,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{...t,value:s??void 0,onChange:a=>{o(a),ht(a)},options:(it??[]).map(a=>({label:a.name,value:a.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(p.Label,{children:[n("orders.returns.inboundShipping"),e.jsxs(G,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",n("fields.optional"),")"]})]}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.inboundShippingHint")})]}),e.jsx(p.Field,{control:R.control,name:"inbound_option_id",render:({field:{value:s,onChange:o,...t}})=>e.jsx(p.Item,{children:e.jsx(p.Control,{children:e.jsx(re,{value:s??void 0,onChange:a=>{o(a),a&&xt(a)},...t,options:ot.map(a=>({label:a.name,value:a.id})),disabled:!Y,noResultsPlaceholder:e.jsx(_t,{})})})})})]})]}),gt&&e.jsxs(Ye,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:n("orders.returns.noInventoryLevel")}),e.jsx(G,{className:"text-ui-fg-subtle txt-small leading-normal",children:n("orders.returns.noInventoryLevelDesc")})]}),e.jsx(fn,{form:R,preview:l,order:i,claim:r}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:W(se.reduce((s,o)=>{var a;const t=(a=o.actions)==null?void 0:a.find(c=>c.action==="RETURN_ITEM");return s=s+((t==null?void 0:t.amount)||0),s},0)*-1,i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:W(ce.reduce((s,o)=>{var a;const t=(a=o.actions)==null?void 0:a.find(c=>c.action==="ITEM_ADD");return s=s+((t==null?void 0:t.amount)||0),s},0),i.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!b&&e.jsx(oe,{onClick:()=>_(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:ie||!ct,children:e.jsx(we,{})}),b?e.jsx(qe,{id:"js-shipping-inbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&a.return_id&&(s=a.id)});const o=q===""?null:parseFloat(q);s&&de({actionId:s,custom_amount:o},{onError:t=>{M.error(t.message)}}),_(!1)},symbol:Ee[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:D,value:q,disabled:ie}):W(bt,i.currency_code)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:n("orders.claims.outboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!v&&e.jsx(oe,{onClick:()=>E(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:Ie||!ut,children:e.jsx(we,{})}),v?e.jsx(qe,{id:"js-shipping-outbound-input",onBlur:()=>{let s;l.shipping_methods.forEach(t=>{if(t.actions)for(const a of t.actions)a.action==="SHIPPING_ADD"&&!a.return_id&&(s=a.id)});const o=P===""?null:parseFloat(P);s&&g({actionId:s,custom_amount:o},{onError:t=>{M.error(t.message)}}),E(!1)},symbol:Ee[i.currency_code.toUpperCase()].symbol_native,code:i.currency_code,onValueChange:h,value:P,disabled:Ie}):W((ee==null?void 0:ee.amount)??0,i.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:n("orders.claims.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:W(l.summary.pending_difference,i.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(p.Field,{control:R.control,name:"send_notification",render:({field:{onChange:s,value:o,...t}})=>e.jsxs(p.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(p.Control,{className:"mr-4 self-start",children:e.jsx(Jt,{className:"mt-[2px]",checked:!!o,onCheckedChange:s,...t})}),e.jsxs("div",{className:"block",children:[e.jsx(p.Label,{children:n("orders.returns.sendNotification")}),e.jsx(p.Hint,{className:"!mt-1",children:n("orders.returns.sendNotificationHint")})]})]}),e.jsx(p.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(X.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(ne,{type:"button",onClick:()=>ge=!0,variant:"secondary",size:"small",children:n("orders.claims.cancel.title")})}),e.jsx(ne,{type:"submit",variant:"primary",size:"small",isLoading:st,children:n("orders.claims.confirm")},"submit-button")]})})})]})})},be=!1,rs=()=>{const{id:i}=zt(),l=Bt(),{t:r}=B(),{order:d}=Vt(i,{fields:Ht}),{order:n}=Ut(i),[f,m]=y.useState(),{mutateAsync:b}=yt(d.id),{claim:_}=It(f,void 0,{enabled:!!f}),{return:v}=Ft(_==null?void 0:_.return_id,void 0,{enabled:!!(_!=null&&_.return_id)});return y.useEffect(()=>{async function E(){if(!(be||!n)){if(n.order_change){n.order_change.change_type==="claim"?m(n.order_change.claim_id):(l(`/orders/${n.id}`,{replace:!0}),M.error(r("orders.claims.activeChangeError")));return}be=!0;try{const{claim:q}=await b({order_id:n.id,type:"replace"});m(q.id)}catch(q){M.error(q.message),l(`/orders/${n.id}`,{replace:!0})}finally{be=!1}}}E()},[n]),e.jsx(X,{children:_&&n&&d&&e.jsx(hn,{order:d,claim:_,preview:n,orderReturn:v})})};export{rs as Component};