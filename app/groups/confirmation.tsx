import React from 'react';
import {Text} from 'react-native';
import {useLocalSearchParams,useRouter} from 'expo-router';
import {useApp,cur,fa} from '../../data/store';
import {Screen,Card,Row,Btn,C} from '../../components/ui';
export default function Conf(){const {id,q}:any=useLocalSearchParams(),r=useRouter(),{groups,join}=useApp();const g=groups.find((x:any)=>x.id===+id);
return <Screen><Text style={{fontSize:20,fontWeight:'800',textAlign:'center',marginVertical:12}}>رزرو شما ثبت می‌شود</Text>
<Card><Row a="کالا" b={g.n}/><Row a="مقدار" b={fa(+q)+' کیلو'}/><Row a="وضعیت گروه" b={`${fa(cur(g))} از ${fa(g.t)} کیلو`}/></Card>
<Text style={{color:C.mu}}>رزرو شما تا تکمیل خرید گروهی معتبر است. برای نهایی شدن معامله، پس از تکمیل ظرفیت، پرداخت انجام می‌شود. (در دمو پرداختی انجام نمی‌شود.)</Text>
<Btn t="متوجه شدم" onPress={()=>{join(g.id,+q);r.replace({pathname:'/groups/success',params:{id,q}})}}/></Screen>}
