import{u as k,a as T,b as E}from"./chunk-NOAFLTPV-CaUMoRXW.js";import{a4 as A,af as I,a6 as F,R as z,eb as B,j as o,b as D,r as g,ab as H,ac as M,c_ as N,ed as K,t as x,B as b}from"./index-Bq0Gzu_3.js";import{u as L,D as O}from"./chunk-OMP35ZTD-TafmhEGJ.js";import"./lodash-C7_NW7v3.js";import"./chunk-2XYHZG6S-C03r6v2Q.js";import"./chunk-E3YGDIJC-DwOUC-jK.js";import{K as V}from"./chunk-CEEYZHMN-CL6q0Lsw.js";import{R as n,u as q}from"./chunk-MDIOSTKB-CScRFmr1.js";import{C as S}from"./checkbox-_V0gwTuy.js";import{c as G}from"./index-DSyUmAUn.js";import"./chunk-C76H5USB-B1mKOCrZ.js";import"./chunk-YEDAFXMB-BLUM5VK_.js";import"./chunk-AOFGTNG6-C3IFjf4O.js";import"./chunk-WX2SMNCD-CUPtxgvy.js";import"./plus-mini-D38qrUji.js";import"./command-bar-DD70Q2dm.js";import"./index-C99Xhc7P.js";import"./chunk-QAF7PVQE-Cn23_qPf.js";import"./format-moz0PK7h.js";import"./date-picker-DLj21rEe.js";import"./popover-DVUhQEd-.js";import"./x-mark-mini-B2FnFGkK.js";import"./triangle-left-mini-C5FnHW24.js";import"./prompt-B670l_cz.js";var Q=A({countries:I(F()).min(1)}),m=50,p="ac",U=({region:r})=>{const{t:e}=D(),{handleSuccess:a}=q(),[t,l]=g.useState({}),u=H({defaultValues:{countries:[]},resolver:M(Q)}),{setValue:h}=u;g.useEffect(()=>{const s=Object.keys(t).filter(i=>t[i]);h("countries",s,{shouldDirty:!0,shouldTouch:!0})},[t,h]);const{searchParams:C,raw:j}=k({pageSize:m,prefix:p}),{countries:_,count:f}=T({countries:N.map((s,i)=>({display_name:s.display_name,name:s.name,id:i,iso_2:s.iso_2,iso_3:s.iso_3,num_code:s.num_code,region_id:null,region:{}})),...C}),y=Z(),{table:R}=L({data:_||[],columns:y,count:f,enablePagination:!0,enableRowSelection:s=>{var i;return((i=r.countries)==null?void 0:i.findIndex(c=>c.iso_2===s.original.iso_2))===-1},getRowId:s=>s.iso_2,pageSize:m,rowSelection:{state:t,updater:l},prefix:p}),{mutateAsync:v,isPending:P}=K(r.id),w=u.handleSubmit(async s=>{var c;const i=[...((c=r.countries)==null?void 0:c.map(d=>d.iso_2))??[],...s.countries];await v({countries:i},{onSuccess:()=>{x.success(e("regions.toast.countries")),a()},onError:d=>{x.error(d.message)}})});return o.jsx(n.Form,{form:u,children:o.jsxs(V,{onSubmit:w,className:"flex h-full flex-col overflow-hidden",children:[o.jsx(n.Header,{children:o.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[o.jsx(n.Close,{asChild:!0,children:o.jsx(b,{size:"small",variant:"secondary",children:e("actions.cancel")})}),o.jsx(b,{size:"small",isLoading:P,type:"submit",children:e("actions.add")})]})}),o.jsx(n.Body,{className:"overflow-hidden",children:o.jsx(O,{table:R,columns:y,pageSize:m,count:f,search:"autofocus",pagination:!0,layout:"fill",orderBy:[{key:"display_name",label:e("fields.name")},{key:"iso_2",label:e("fields.code")}],queryObject:j,prefix:p})})]})})},X=G(),Z=()=>{const r=E();return g.useMemo(()=>[X.display({id:"select",header:({table:e})=>o.jsx(S,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect();return o.jsx(S,{checked:e.getIsSelected()||a,disabled:a,onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}}),...r],[r])},Se=()=>{const{id:r}=z(),{region:e,isPending:a,isError:t,error:l}=B(r,{fields:"*payment_providers"});if(t)throw l;return o.jsx(n,{children:!a&&e&&o.jsx(U,{region:e})})};export{Se as Component};