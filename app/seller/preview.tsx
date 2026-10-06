import React from 'react';
import {Text,Alert} from 'react-native';
import {useRouter} from 'expo-router';
import {useApp,fa} from '../../data/store';
import {Screen,Card,GCard,Btn} from '../../components/ui';
export default function Preview(){const r=useRouter(),{draft:d,publish}=useApp();
return <Screen><GCard ro g={{id:0,n:d.n,c:d.c,e:'📦',s:'بازرگانی نمونه',t:+d.t||1,b:[],p:+d.p,sp:+d.sp,h:168}}/>
<Card><Text>محل تحویل: {d.dl}{'\n'}زمان آماده‌سازی: {d.pr}{'\n'}حداقل خرید هر خریدار: {fa(+d.m)} کیلو</Text></Card>
<Btn t="انتشار خرید گروهی" onPress={()=>{publish();Alert.alert('خرید گروهی منتشر شد','در لیست خریدهای گروهی نمایش داده می‌شود.');r.dismiss(2)}}/></Screen>}
