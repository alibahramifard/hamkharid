import React from 'react';
import {Text,View} from 'react-native';
import {useApp,cur,pct,fa} from '../../data/store';
import {Screen,Card,H,C} from '../../components/ui';
export default function Msgs(){const {groups}=useApp();const g=groups[0],r=g.t-cur(g),p=fa(Math.round(pct(g)));
const Bub=({t}:any)=><View style={{backgroundColor:C.pl,borderRadius:12,padding:10,marginBottom:8,maxWidth:'85%',alignSelf:'flex-start'}}><Text>{t}</Text></View>;
return <Screen><Card><Text style={{fontWeight:'800'}}>پشتیبانی خرید #{fa(1842)}</Text><Text style={{color:C.mu,fontSize:12,marginBottom:8}}>ارتباط از طریق پلتفرم</Text>
<Bub t={`پشتیبانی پلتفرم: خرید گروهی شما ${p}٪ تکمیل شده است.`}/><Bub t={r?`${fa(r)} کیلو دیگر برای تکمیل سفارش باقی مانده.`:'ظرفیت تکمیل شد و سفارش به مرحله پرداخت می‌رود.'}/></Card>
<H t="اعلان‌ها"/><Card><Text>🔔 خرید لوبیا چیتی به {p}٪ رسید.{'\n'}🔔 {r?`${fa(r)} کیلو دیگر تا فعال شدن قیمت عمده.`:'قیمت عمده فعال شد.'}{'\n'}🔔 گروه خرید دارچین سیلان تکمیل شد.{'\n'}🔔 فروشنده سفارش را تأیید کرد.</Text></Card></Screen>}
