import React,{useEffect,useState} from 'react';
import {Text,TextInput,View} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import {useApp,cur,pct} from '../../data/store';
import {Screen,GCard,Chip,Card,s} from '../../components/ui';
export default function Groups(){const p:any=useLocalSearchParams(),{groups}=useApp();const [q,setQ]=useState(''),[f,setF]=useState('همه');
useEffect(()=>{if(p.q!==undefined)setQ(p.q);if(p.f)setF(p.f)},[p.q,p.f]);
const l=groups.filter((g:any)=>(!q.trim()||(g.n+g.c+g.s).includes(q.trim()))&&(f==='همه'||(f==='نزدیک به تکمیل'?pct(g)>=70&&cur(g)<g.t:g.c===f)));
return <Screen><TextInput style={s.in} value={q} onChangeText={setQ} placeholder="جستجوی کالا، دسته‌بندی یا فروشنده"/>
<View style={{flexDirection:'row',flexWrap:'wrap'}}>{['همه','نزدیک به تکمیل','حبوبات','ادویه','خشکبار','گیاهان دارویی'].map(c=><Chip key={c} t={c} on={f===c} onPress={()=>setF(c)}/>)}</View>
{l.map((g:any)=><GCard key={g.id} g={g}/>)}{!l.length&&<Card><Text>موردی پیدا نشد. فیلتر یا عبارت جستجو را تغییر دهید.</Text></Card>}</Screen>}
