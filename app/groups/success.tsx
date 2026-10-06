import React from 'react';
import {Text} from 'react-native';
import {useLocalSearchParams,useRouter} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {useApp,cur,fa} from '../../data/store';
import {Screen,Card,Btn,C} from '../../components/ui';
export default function Success(){const {id,q}:any=useLocalSearchParams(),r=useRouter(),{groups}=useApp();const g=groups.find((x:any)=>x.id===+id),rem=g.t-cur(g);
return <Screen><Ionicons name="checkmark-circle" size={90} color={C.ok} style={{alignSelf:'center',marginTop:20}}/><Text style={{fontSize:20,fontWeight:'800',textAlign:'center'}}>شما به خرید گروهی پیوستید</Text>
<Card style={{marginTop:14}}><Text style={{textAlign:'center',fontWeight:'800'}}>{fa(+q)} کیلو {g.n}</Text><Text style={{textAlign:'center'}}>وضعیت: {rem?'در انتظار تکمیل گروه':'گروه تکمیل شد؛ قیمت عمده فعال است'}</Text></Card>
<Text style={{textAlign:'center',color:C.mu}}>{rem?`${fa(rem)} کیلو دیگر برای تکمیل این خرید نیاز است.`:'مرحله بعد: پرداخت و ارسال'}</Text><Btn t="مشاهده سفارش من" onPress={()=>r.replace('/(tabs)/orders')}/></Screen>}
