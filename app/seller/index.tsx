import React from 'react';
import {Text,View} from 'react-native';
import {useRouter} from 'expo-router';
import {useApp,cur,fa,pct} from '../../data/store';
import {Screen,Card,H,Btn,PB,Tag,C} from '../../components/ui';
export default function Seller(){const r=useRouter(),{groups}=useApp();const me=groups.filter((g:any)=>g.s==='بازرگانی نمونه'),act=me.filter((g:any)=>cur(g)<g.t).length;
const St=({a,b}:any)=><Card style={{width:'48%',alignItems:'center'}}><Text style={{color:C.mu,fontSize:12}}>{a}</Text><Text style={{fontSize:18,fontWeight:'800'}}>{b}</Text></Card>;
return <Screen><View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}><St a="فروش فعال" b={fa(act)}/><St a="فروش این ماه" b={`${fa(24.7)} تن`}/><St a="معاملات موفق" b={fa(37)}/><St a="امتیاز" b={`${fa(4.8)} ★`}/></View>
<Btn t="+ ایجاد خرید گروهی" onPress={()=>r.push('/seller/create')}/><H t="خریدهای گروهی فعال"/>
{me.map((g:any)=><Card key={g.id}><View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{fontWeight:'800'}}>{g.e} {g.n}</Text><Tag ok={cur(g)>=g.t} t={cur(g)>=g.t?'تکمیل شد':'در حال تکمیل'}/></View><Text style={{fontSize:12,marginVertical:6}}>هدف {fa(g.t)} کیلو · تکمیل {fa(cur(g))} · {fa(g.b.length)} خریدار</Text><PB v={pct(g)}/></Card>)}</Screen>}
