import{V as y}from"./chunk-F6ZOHZVB-Zp4t4ivL.js";import{u as M,a as D,b as F}from"./chunk-VELNOPU6-Cyz4CmB6.js";import{a4 as E,af as z,a6 as B,R as H,eV as I,j as e,b as C,ab as V,ac as N,r as j,eZ as L,K as G,t as S,G as O,B as x,W as Z,k as q}from"./index-Bq0Gzu_3.js";import{u as Q,D as W}from"./chunk-OMP35ZTD-TafmhEGJ.js";import"./lodash-C7_NW7v3.js";import"./chunk-2XYHZG6S-C03r6v2Q.js";import"./chunk-E3YGDIJC-DwOUC-jK.js";import{K as $}from"./chunk-CEEYZHMN-CL6q0Lsw.js";import{R as r,u as J}from"./chunk-MDIOSTKB-CScRFmr1.js";import{C as f}from"./checkbox-_V0gwTuy.js";import{c as U}from"./index-DSyUmAUn.js";import"./chunk-GA34GXNI-B6DfXUem.js";import"./chunk-P3UUX2T6-DJzunWlg.js";import"./chunk-OI7BBNYW-BC_X2yeR.js";import"./chunk-ADOCJB6L-lgk_ht_6.js";import"./chunk-C76H5USB-B1mKOCrZ.js";import"./chunk-YEDAFXMB-BLUM5VK_.js";import"./chunk-AOFGTNG6-C3IFjf4O.js";import"./chunk-WX2SMNCD-CUPtxgvy.js";import"./plus-mini-D38qrUji.js";import"./command-bar-DD70Q2dm.js";import"./index-C99Xhc7P.js";import"./chunk-QAF7PVQE-Cn23_qPf.js";import"./format-moz0PK7h.js";import"./date-picker-DLj21rEe.js";import"./popover-DVUhQEd-.js";import"./x-mark-mini-B2FnFGkK.js";import"./triangle-left-mini-C5FnHW24.js";import"./prompt-B670l_cz.js";var X=E({sales_channel_ids:z(B())}),p=50,Y=({apiKey:i,preSelected:t=[]})=>{const{t:s}=C(),{handleSuccess:n}=J(),o=V({defaultValues:{sales_channel_ids:[]},resolver:N(X)}),{setValue:c}=o,[l,d]=j.useState({}),{mutateAsync:u,isPending:b}=L(i),{raw:_,searchParams:T}=M({pageSize:p}),h=se(),A=D(),{sales_channels:K,count:g,isLoading:v}=G({...T},{placeholderData:q}),R=a=>{const m=typeof a=="function"?a(l):a,w=Object.keys(m);c("sales_channel_ids",w,{shouldDirty:!0,shouldTouch:!0}),d(m)},{table:k}=Q({data:K??[],columns:h,count:g,enablePagination:!0,enableRowSelection:a=>!t.includes(a.original.id),getRowId:a=>a.id,pageSize:p,rowSelection:{state:l,updater:R}}),P=o.handleSubmit(async a=>{await u(a.sales_channel_ids,{onSuccess:()=>{S.success(s("apiKeyManagement.salesChannels.successToast",{count:a.sales_channel_ids.length})),n()},onError:m=>{S.error(m.message)}})});return e.jsx(r.Form,{form:o,children:e.jsxs($,{onSubmit:P,className:"flex h-full flex-col",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{asChild:!0,children:e.jsx(y,{children:s("apiKeyManagement.salesChannels.title")})}),e.jsx(r.Description,{asChild:!0,children:e.jsx(y,{children:s("apiKeyManagement.salesChannels.description")})}),e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:o.formState.errors.sales_channel_ids&&e.jsx(O,{variant:"error",children:o.formState.errors.sales_channel_ids.message})})]}),e.jsx(r.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsx(W,{table:k,columns:h,count:g,pageSize:p,filters:A,pagination:!0,search:"autofocus",isLoading:v,queryObject:_,orderBy:[{key:"name",label:s("fields.name")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],layout:"fill",noRecords:{message:s("apiKeyManagement.addSalesChannels.list.noRecordsMessage")}})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:b,children:s("actions.save")})]})})]})})},ee=U(),se=()=>{const{t:i}=C(),t=F();return j.useMemo(()=>[ee.display({id:"select",header:({table:s})=>e.jsx(f,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n)}),cell:({row:s})=>{const n=!s.getCanSelect(),o=s.getIsSelected()||n,c=e.jsx(f,{checked:o,disabled:n,onCheckedChange:l=>s.toggleSelected(!!l),onClick:l=>{l.stopPropagation()}});return n?e.jsx(Z,{content:i("apiKeyManagement.salesChannels.alreadyAddedTooltip"),side:"right",children:c}):c}}),...t],[i,t])},we=()=>{var d;const{id:i}=H(),{api_key:t,isLoading:s,isError:n,error:o}=I(i),c=(d=t==null?void 0:t.sales_channels)==null?void 0:d.map(u=>u.id),l=!s&&t;if(n)throw o;return e.jsx(r,{children:l&&e.jsx(Y,{apiKey:i,preSelected:c})})};export{we as Component};