import{u as x,a as g,b}from"./chunk-VELNOPU6-Cyz4CmB6.js";import{a as C,j as a,b as u,K as j,H as S,T,L as v,B as y,r as P,k as D,el as k,A as w,t as p}from"./index-Bq0Gzu_3.js";import{S as A}from"./chunk-UR2E444G-BOK0EhlY.js";import"./chunk-3IW4HYUP-B8Byj9_3.js";import{u as E,D as _}from"./chunk-OMP35ZTD-TafmhEGJ.js";import"./lodash-C7_NW7v3.js";import"./chunk-2XYHZG6S-C03r6v2Q.js";import"./chunk-E3YGDIJC-DwOUC-jK.js";import{P as z}from"./pencil-square-DJB9OGX8.js";import{T as L}from"./trash-WzBoCVyR.js";import{u as H}from"./use-prompt-DKUUp42P.js";import{C as B}from"./container-Dy7007w-.js";import{c as I}from"./index-DSyUmAUn.js";import"./chunk-GA34GXNI-B6DfXUem.js";import"./chunk-P3UUX2T6-DJzunWlg.js";import"./chunk-OI7BBNYW-BC_X2yeR.js";import"./chunk-ADOCJB6L-lgk_ht_6.js";import"./chunk-C76H5USB-B1mKOCrZ.js";import"./Trans-D-2atTey.js";import"./x-mark-mini-B2FnFGkK.js";import"./chunk-YEDAFXMB-BLUM5VK_.js";import"./chunk-AOFGTNG6-C3IFjf4O.js";import"./chunk-WX2SMNCD-CUPtxgvy.js";import"./plus-mini-D38qrUji.js";import"./command-bar-DD70Q2dm.js";import"./index-C99Xhc7P.js";import"./chunk-QAF7PVQE-Cn23_qPf.js";import"./format-moz0PK7h.js";import"./date-picker-DLj21rEe.js";import"./popover-DVUhQEd-.js";import"./triangle-left-mini-C5FnHW24.js";import"./prompt-B670l_cz.js";var l=20,N=()=>{const{t:e}=u(),{raw:s,searchParams:r}=x({pageSize:l}),{sales_channels:n,count:t,isPending:c,isError:i,error:d}=j(r,{placeholderData:D}),m=O(),h=g(),{table:f}=E({data:n??[],columns:m,count:t,enablePagination:!0,getRowId:o=>o.id,pageSize:l});if(i)throw d;return a.jsxs(B,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(S,{children:e("salesChannels.domain")}),a.jsx(T,{className:"text-ui-fg-subtle",size:"small",children:e("salesChannels.subtitle")})]}),a.jsx(v,{to:"/settings/sales-channels/create",children:a.jsx(y,{size:"small",variant:"secondary",children:e("actions.create")})})]}),a.jsx(_,{table:f,columns:m,count:t,pageSize:l,filters:h,pagination:!0,search:!0,navigateTo:o=>o.id,isLoading:c,queryObject:s,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]})]})},q=({salesChannel:e})=>{const{t:s}=u(),r=H(),{mutateAsync:n}=k(e.id),t=async()=>{await r({title:s("general.areYouSure"),description:s("salesChannels.deleteSalesChannelWarning",{name:e.name}),verificationInstruction:s("general.typeToConfirm"),verificationText:e.name,confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await n(void 0,{onSuccess:()=>{p.success(s("salesChannels.toast.delete"))},onError:i=>{p.error(i.message)}})};return a.jsx(w,{groups:[{actions:[{icon:a.jsx(z,{}),label:s("actions.edit"),to:`/settings/sales-channels/${e.id}/edit`}]},{actions:[{icon:a.jsx(L,{}),label:s("actions.delete"),onClick:t}]}]})},M=I(),O=()=>{const e=b();return P.useMemo(()=>[...e,M.display({id:"actions",cell:({row:s})=>a.jsx(q,{salesChannel:s.original})})],[e])},Ce=()=>{const{getWidgets:e}=C();return a.jsx(A,{widgets:{before:e("sales_channel.list.before"),after:e("sales_channel.list.after")},hasOutlet:!0,children:a.jsx(N,{})})};export{Ce as Component};