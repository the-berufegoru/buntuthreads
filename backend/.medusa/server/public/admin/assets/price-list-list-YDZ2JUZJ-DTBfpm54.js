import{u as g}from"./chunk-WJFTCO66-CPIJKs6x.js";import{g as b}from"./chunk-G2J2T2QU-DnPAgsrk.js";import{T as h,a as j}from"./chunk-OI7BBNYW-BC_X2yeR.js";import{a as P,j as t,b as n,dF as T,H as L,T as v,B as y,L as C,r as S,k as D,A as k}from"./index-Bq0Gzu_3.js";import{S as A}from"./chunk-ADOCJB6L-lgk_ht_6.js";import{u as w}from"./chunk-W7625H47-CPykB_Kh.js";import{S as E}from"./chunk-UR2E444G-BOK0EhlY.js";import"./chunk-3IW4HYUP-B8Byj9_3.js";import{u as _,D as q}from"./chunk-OMP35ZTD-TafmhEGJ.js";import"./lodash-C7_NW7v3.js";import{u as z}from"./chunk-C76H5USB-B1mKOCrZ.js";import"./chunk-2XYHZG6S-C03r6v2Q.js";import"./chunk-E3YGDIJC-DwOUC-jK.js";import{P as F}from"./pencil-square-DJB9OGX8.js";import{T as H}from"./trash-WzBoCVyR.js";import{C as N}from"./container-Dy7007w-.js";import{c as B}from"./index-DSyUmAUn.js";import"./use-prompt-DKUUp42P.js";import"./prompt-B670l_cz.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./chunk-P3UUX2T6-DJzunWlg.js";import"./Trans-D-2atTey.js";import"./x-mark-mini-B2FnFGkK.js";import"./chunk-YEDAFXMB-BLUM5VK_.js";import"./chunk-AOFGTNG6-C3IFjf4O.js";import"./chunk-WX2SMNCD-CUPtxgvy.js";import"./plus-mini-D38qrUji.js";import"./command-bar-DD70Q2dm.js";import"./index-C99Xhc7P.js";import"./chunk-QAF7PVQE-Cn23_qPf.js";import"./format-moz0PK7h.js";import"./date-picker-DLj21rEe.js";import"./popover-DVUhQEd-.js";import"./triangle-left-mini-C5FnHW24.js";var I=({priceList:e})=>{const{t:r}=n(),s=g({priceList:e});return t.jsx(k,{groups:[{actions:[{label:r("actions.edit"),to:`${e.id}/edit`,icon:t.jsx(F,{})}]},{actions:[{label:r("actions.delete"),onClick:s,icon:t.jsx(H,{})}]}]})},o=B(),M=()=>{const{t:e}=n();return S.useMemo(()=>[o.accessor("title",{header:()=>t.jsx(h,{text:e("fields.title")}),cell:r=>r.getValue()}),o.accessor("status",{header:e("priceLists.fields.status.label"),cell:({row:r})=>{const{color:s,text:a}=b(e,r.original);return t.jsx(A,{color:s,children:a})}}),o.accessor("prices",{header:e("priceLists.fields.priceOverrides.header"),cell:r=>{var s;return t.jsx(j,{text:`${((s=r.getValue())==null?void 0:s.length)||"-"}`})}}),o.display({id:"actions",cell:({row:r})=>t.jsx(I,{priceList:r.original})})],[e])},O=()=>w(),Q=({pageSize:e=20,prefix:r})=>{var i;const s=z(["offset","q","order","status"],r);return{searchParams:{limit:e,offset:s.offset?Number(s.offset):0,order:s.order,status:(i=s.status)==null?void 0:i.split(","),q:s.q},raw:s}},c=20,R=()=>{const{t:e}=n(),{searchParams:r,raw:s}=Q({pageSize:c}),{price_lists:a,count:i,isLoading:p,isError:d,error:u}=T(r,{placeholderData:D}),f=O(),m=M(),{table:x}=_({data:a||[],columns:m,count:i,enablePagination:!0,getRowId:l=>l.id,pageSize:c});if(d)throw u;return t.jsxs(N,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(L,{children:e("priceLists.domain")}),t.jsx(v,{className:"text-ui-fg-subtle",size:"small",children:e("priceLists.subtitle")})]}),t.jsx(y,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(C,{to:"create",children:e("actions.create")})})]}),t.jsx(q,{table:x,columns:m,count:i,filters:f,orderBy:[{key:"title",label:e("fields.title")},{key:"status",label:e("fields.status")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:s,pageSize:c,navigateTo:l=>l.original.id,isLoading:p,pagination:!0,search:!0})]})},ye=()=>{const{getWidgets:e}=P();return t.jsx(E,{widgets:{after:e("price_list.list.after"),before:e("price_list.list.before")},children:t.jsx(R,{})})};export{ye as Component};