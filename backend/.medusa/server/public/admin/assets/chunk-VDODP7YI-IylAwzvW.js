import{cp as l,s as n,d3 as y,aB as u,q as s,d9 as o}from"./index-Bq0Gzu_3.js";var d="shipping_options",r=y(d),v=(e,i,a)=>{const{data:t,...p}=l({queryFn:()=>n.admin.shippingOption.retrieve(e,i),queryKey:r.detail(e),...a});return{...t,...p}},O=(e,i)=>{const{data:a,...t}=l({queryFn:()=>n.admin.shippingOption.list(e),queryKey:r.list(e),...i});return{...a,...t}},g=e=>u({mutationFn:i=>n.admin.shippingOption.create(i),onSuccess:(i,a,t)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...e}),h=(e,i)=>u({mutationFn:a=>n.admin.shippingOption.update(e,a),onSuccess:(a,t,p)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...i}),q=(e,i)=>u({mutationFn:()=>n.admin.shippingOption.delete(e),onSuccess:(a,t,p)=>{s.invalidateQueries({queryKey:o.all}),s.invalidateQueries({queryKey:r.all})},...i});export{q as a,g as b,h as c,v as d,r as s,O as u};