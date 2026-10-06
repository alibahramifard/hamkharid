import React,{createContext,useContext,useState} from 'react';
export type Group={id:number;n:string;c:string;e:string;s:string;t:number;b:number[];p:number;sp:number;h:number};
export type Order={gid:number;q:number;st:number};
export type Draft={n:string;c:string;t:string;m:string;p:string;sp:string;dl:string;pr:string};
export const SELLERS:Record<string,[number,number,number]>={'بازرگانی نمونه':[4.8,37,98],'تأمین کالای ایرانی':[4.6,52,96],'تجارت سبز':[4.7,29,97],'بازارگان شرق':[4.5,41,95]};
export const fa=(n:number)=>String(Math.round(n*10)/10).replace(/\B(?=(\d{3})+(?!\d))/g,',').replace(/\./g,'٫').replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[+d]);
export const T=(n:number)=>fa(n)+' تومان';
export const cur=(g:Group)=>g.b.reduce((a,b)=>a+b,0);
export const pct=(g:Group)=>Math.min(100,cur(g)/g.t*100);
export const tm=(h:number)=>fa(Math.floor(h/24))+' روز و '+fa(h%24)+' ساعت';
const rows:any[]=[[1,'لوبیا چیتی ایرانی','حبوبات','🫘','بازرگانی نمونه',1000,[250,300,200],280000,310000,56],
[2,'نخود کرمانشاه','حبوبات','🌱','بازرگانی نمونه',1000,[320,300],245000,270000,80],
[3,'دارچین سیلان','ادویه','🪵','تجارت سبز',500,[150,100,100],480000,525000,30],
[4,'زردچوبه','ادویه','🟡','بازرگانی نمونه',500,[120,80],190000,214000,120],
[5,'عدس ایرانی','حبوبات','🟤','تأمین کالای ایرانی',1000,[300,280,300],210000,232000,20],
[6,'کشمش پلویی','خشکبار','🍇','بازارگان شرق',500,[150],320000,356000,150]];
const seed=()=>({groups:rows.map(r=>({id:r[0],n:r[1],c:r[2],e:r[3],s:r[4],t:r[5],b:r[6],p:r[7],sp:r[8],h:r[9]} as Group)),
orders:[{gid:3,q:100,st:1},{gid:5,q:200,st:4}] as Order[],my:{} as Record<number,number>,
draft:{n:'لوبیا چیتی ایرانی',c:'حبوبات',t:'1000',m:'100',p:'280000',sp:'310000',dl:'تهران',pr:'۳ روز کاری'} as Draft});
const Ctx=createContext<any>(null);export const useApp=()=>useContext(Ctx);
export function Provider({children}:any){const [s,set]=useState(seed);
const join=(id:number,q:number)=>set(x=>{const g=x.groups.find(g=>g.id===id)!;const done=cur(g)+q>=g.t;
const orders=[{gid:id,q,st:done?1:0},...x.orders].map(o=>done&&o.gid===id&&o.st<1?{...o,st:1}:o);
return {...x,groups:x.groups.map(g=>g.id===id?{...g,b:[...g.b,q]}:g),my:{...x.my,[id]:g.b.length},orders}});
const adv=(i:number)=>set(x=>({...x,orders:x.orders.map((o,k)=>k===i&&o.st<4?{...o,st:o.st+1}:o)}));
const setDraft=(p:Partial<Draft>)=>set(x=>({...x,draft:{...x.draft,...p}}));
const publish=()=>set(x=>{const d=x.draft;const e=({'حبوبات':'🫘','ادویه':'🌶️','خشکبار':'🥜'} as any)[d.c]||'📦';
return {...x,groups:[...x.groups,{id:Date.now()%100000,n:d.n,c:d.c,e,s:'بازرگانی نمونه',t:+d.t,b:[],p:+d.p,sp:+d.sp,h:168}]}});
return <Ctx.Provider value={{...s,join,adv,setDraft,publish,reset:()=>set(seed())}}>{children}</Ctx.Provider>}
