import{u as P}from"./chunk-BZKLQPWW-Bka3vByu.js";import{u as T}from"./chunk-VWNSX5WA-CTC_4jUd.js";import{q as c,R as b,d as j,eM as v,a as S,j as e,dB as w,eN as D,s as q,b as l,H as m,A as C,e as _}from"./index-Bq0Gzu_3.js";import{u as k,a as A}from"./chunk-B5GTMFNM-BU4EN_GG.js";import{S as E}from"./chunk-UR2E444G-BOK0EhlY.js";import"./chunk-3IW4HYUP-B8Byj9_3.js";import{u as N,D as Q}from"./chunk-OMP35ZTD-TafmhEGJ.js";import"./lodash-C7_NW7v3.js";import"./chunk-2XYHZG6S-C03r6v2Q.js";import"./chunk-E3YGDIJC-DwOUC-jK.js";import{P as M}from"./pencil-square-DJB9OGX8.js";import{T as z}from"./trash-WzBoCVyR.js";import{C as y}from"./container-Dy7007w-.js";import"./use-prompt-DKUUp42P.js";import"./prompt-B670l_cz.js";import"./chunk-FTXJRXMD-BteamdRa.js";import"./chunk-ADOCJB6L-lgk_ht_6.js";import"./chunk-P3UUX2T6-DJzunWlg.js";import"./index-DSyUmAUn.js";import"./chunk-C76H5USB-B1mKOCrZ.js";import"./Trans-D-2atTey.js";import"./x-mark-mini-B2FnFGkK.js";import"./chunk-YEDAFXMB-BLUM5VK_.js";import"./chunk-AOFGTNG6-C3IFjf4O.js";import"./chunk-WX2SMNCD-CUPtxgvy.js";import"./plus-mini-D38qrUji.js";import"./command-bar-DD70Q2dm.js";import"./index-C99Xhc7P.js";import"./chunk-QAF7PVQE-Cn23_qPf.js";import"./format-moz0PK7h.js";import"./date-picker-DLj21rEe.js";import"./popover-DVUhQEd-.js";import"./triangle-left-mini-C5FnHW24.js";var K=t=>({queryKey:D.detail(t),queryFn:async()=>q.admin.productType.retrieve(t)}),Pe=async({params:t})=>{const r=t.id,o=K(r);return c.getQueryData(o.queryKey)??await c.fetchQuery(o)},L=({productType:t})=>{const{t:r}=l(),o=P(t.id);return e.jsxs(y,{className:"flex items-center justify-between",children:[e.jsx(m,{children:t.value}),e.jsx(C,{groups:[{actions:[{label:r("actions.edit"),icon:e.jsx(M,{}),to:"edit"}]},{actions:[{label:r("actions.delete"),icon:e.jsx(z,{}),onClick:o}]}]})]})},p=10,O=({productType:t})=>{const{t:r}=l(),{searchParams:o,raw:i}=k({pageSize:p}),{products:a,count:n,isPending:s,isError:f,error:g}=_({...o,type_id:[t.id]}),h=A(["product_types"]),u=T(),{table:x}=N({columns:u,data:a,count:(a==null?void 0:a.length)||0,getRowId:d=>d.id,pageSize:p});if(f)throw g;return e.jsxs(y,{className:"divide-y p-0",children:[e.jsx("div",{className:"px-6 py-4",children:e.jsx(m,{level:"h2",children:r("products.domain")})}),e.jsx(Q,{table:x,filters:h,isLoading:s,columns:u,count:n,pageSize:p,navigateTo:({original:d})=>`/products/${d.id}`,orderBy:[{key:"title",label:r("fields.title")},{key:"created_at",label:r("fields.createdAt")},{key:"updated_at",label:r("fields.updatedAt")}],queryObject:i,search:!0,pagination:!0})]})},Te=()=>{const{id:t}=b(),r=j(),{product_type:o,isPending:i,isError:a,error:n}=v(t,void 0,{initialData:r}),{getWidgets:s}=S();if(i||!o)return e.jsx(w,{sections:2,showJSON:!0,showMetadata:!0});if(a)throw n;return e.jsxs(E,{widgets:{after:s("product_type.details.after"),before:s("product_type.details.before")},showJSON:!0,showMetadata:!0,data:o,children:[e.jsx(L,{productType:o}),e.jsx(O,{productType:o})]})};export{Te as Component,Pe as loader};