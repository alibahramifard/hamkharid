import React,{useState} from 'react';
import {Text,View,Pressable} from 'react-native';
import {useLocalSearchParams,useRouter} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {useApp,cur,fa,T} from '../../data/store';
import {Screen,Card,Row,Chip,Btn,C} from '../../components/ui';
export default function Join(){const {id}:any=useLocalSearchParams(),r=useRouter(),{groups}=useApp();const g=groups.find((x:any)=>x.id===+id),rem=g.t-cur(g);
const [q,setQ]=useState(Math.min(250,rem));const set=(v:number)=>setQ(Math.max(Math.min(100,rem),Math.min(rem,v)));
const B=({n,d}:any)=><Pressable onPress={()=>set(q+d)} style={{width:40,height:40,borderRadius:10,backgroundColor:C.pl,alignItems:'center',justifyContent:'center'}}><Ionicons name={n} size={22} color={C.pr}/></Pressable>;
return <Screen><Card><Text style={{textAlign:'center',fontWeight:'800'}}>{g.n}</Text><View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:24,marginVertical:14}}><B n="remove" d={-50}/><Text style={{fontSize:26,fontWeight:'800'}}>{fa(q)} کیلو</Text><B n="add" d={50}/></View>
<View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>{[100,150,200,250,300].filter(x=>x<=rem).map(x=><Chip key={x} t={`${fa(x)} کیلو`} on={q===x} onPress={()=>set(x)}/>)}</View></Card>
<Card><Row a="مقدار شما" b={fa(q)+' کیلو'}/><Row a="قیمت" b={T(g.p)+' / کیلو'}/><Row a="مبلغ تقریبی" b={T(q*g.p)}/></Card>
<Text style={{color:C.mu}}>این خرید زمانی نهایی می‌شود که حجم کل سفارش به {fa(g.t)} کیلو برسد.</Text><Btn t={`رزرو ${fa(q)} کیلو`} onPress={()=>r.push({pathname:'/groups/confirmation',params:{id,q}})}/></Screen>}
