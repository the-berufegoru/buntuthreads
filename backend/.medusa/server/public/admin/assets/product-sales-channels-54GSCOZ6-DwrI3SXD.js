import{u as F,a as z,b as I}from"./chunk-VELNOPU6-Cyz4CmB6.js";import{a4 as B,af as M,a6 as H,R as L,S as N,j as s,b as V,ab as O,ac as q,r as d,K as G,V as K,B as f,k as Q}from"./index-Bq0Gzu_3.js";import{u as U,D as Z}from"./chunk-OMP35ZTD-TafmhEGJ.js";import"./lodash-C7_NW7v3.js";import"./chunk-2XYHZG6S-C03r6v2Q.js";import"./chunk-E3YGDIJC-DwOUC-jK.js";import{R as r,u as $}from"./chunk-MDIOSTKB-CScRFmr1.js";import{C as g}from"./checkbox-_V0gwTuy.js";import{c as J}from"./index-DSyUmAUn.js";import"./chunk-GA34GXNI-B6DfXUem.js";import"./chunk-P3UUX2T6-DJzunWlg.js";import"./chunk-OI7BBNYW-BC_X2yeR.js";import"./chunk-ADOCJB6L-lgk_ht_6.js";import"./chunk-C76H5USB-B1mKOCrZ.js";import"./chunk-YEDAFXMB-BLUM5VK_.js";import"./chunk-AOFGTNG6-C3IFjf4O.js";import"./chunk-WX2SMNCD-CUPtxgvy.js";import"./plus-mini-D38qrUji.js";import"./command-bar-DD70Q2dm.js";import"./index-C99Xhc7P.js";import"./chunk-QAF7PVQE-Cn23_qPf.js";import"./format-moz0PK7h.js";import"./date-picker-DLj21rEe.js";import"./popover-DVUhQEd-.js";import"./x-mark-mini-B2FnFGkK.js";import"./triangle-left-mini-C5FnHW24.js";import"./prompt-B670l_cz.js";var W=B({sales_channels:M(H()).optional()}),c=50,X=({product:o})=>{var p,h;const{t:e}=V(),{handleSuccess:t}=$(),l=O({defaultValues:{sales_channels:((p=o.sales_channels)==null?void 0:p.map(a=>a.id))??[]},resolver:q(W)}),{setValue:n}=l,x=((h=o.sales_channels)==null?void 0:h.reduce((a,S)=>(a[S.id]=!0,a),{}))??{},[i,C]=d.useState(x);d.useEffect(()=>{const a=Object.keys(i);n("sales_channels",a,{shouldDirty:!0,shouldTouch:!0})},[i,n]);const{searchParams:j,raw:y}=F({pageSize:c}),{sales_channels:b,count:u,isLoading:v,isError:k,error:w}=G({...j},{placeholderData:Q}),P=z(),m=ee(),{table:_}=U({data:b??[],columns:m,count:u,enablePagination:!0,enableRowSelection:!0,rowSelection:{state:i,updater:C},getRowId:a=>a.id,pageSize:c}),{mutateAsync:R,isPending:T}=K(o.id),E=l.handleSubmit(async a=>{const A=(a.sales_channels??[]).map(D=>({id:D}));await R({sales_channels:A},{onSuccess:()=>{t()}})});if(k)throw w;return s.jsx(r.Form,{form:l,children:s.jsxs("div",{className:"flex h-full flex-col overflow-hidden",children:[s.jsx(r.Header,{}),s.jsx(r.Body,{className:"flex-1 overflow-hidden",children:s.jsx(Z,{table:_,columns:m,pageSize:c,isLoading:v,count:u,filters:P,search:"autofocus",pagination:!0,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:y,layout:"fill"})}),s.jsx(r.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(r.Close,{asChild:!0,children:s.jsx(f,{size:"small",variant:"secondary",children:e("actions.cancel")})}),s.jsx(f,{size:"small",isLoading:T,onClick:E,children:e("actions.save")})]})})]})})},Y=J(),ee=()=>{const o=I();return d.useMemo(()=>[Y.display({id:"select",header:({table:e})=>s.jsx(g,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t)}),cell:({row:e})=>s.jsx(g,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}),...o],[o])},Re=()=>{const{id:o}=L(),{product:e,isLoading:t,isError:l,error:n}=N(o);if(l)throw n;return s.jsx(r,{children:!t&&e&&s.jsx(X,{product:e})})};export{Re as Component};