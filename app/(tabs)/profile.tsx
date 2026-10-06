import React from 'react';
import {Text,View,Alert} from 'react-native';
import {useRouter} from 'expo-router';
import {useApp,fa} from '../../data/store';
import {Screen,Card,H,Btn,C} from '../../components/ui';
export default function Profile(){const r=useRouter(),{reset}=useApp();
const St=({a,b}:any)=><Card style={{width:'48%',alignItems:'center'}}><Text style={{color:C.mu,fontSize:12}}>{a}</Text><Text style={{fontSize:18,fontWeight:'800'}}>{b}</Text></Card>;
const M=({t,f}:any)=><Card onPress={f||(()=>Alert.alert('در نسخه دمو فعال نیست'))}><Text>{t}</Text></Card>;
return <Screen><Card style={{alignItems:'center'}}><Text style={{fontSize:40}}>👤</Text><Text style={{fontWeight:'800'}}>علی احمدی</Text><Text style={{color:C.pr}}>نوع حساب: خریدار</Text></Card>
<View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}><St a="امتیاز خریدار" b={`${fa(4.9)} ★`}/><St a="معاملات موفق" b={fa(14)}/><St a="پرداخت به‌موقع" b={`${fa(100)}٪`}/><St a="لغو سفارش" b={`${fa(2)}٪`}/></View>
<H t="حساب"/><M t="اطلاعات حساب"/><M t="آدرس‌های تحویل"/><M t="سوابق خرید" f={()=>r.navigate('/(tabs)/orders')}/><M t="اعتبار و امتیاز"/><M t="تنظیمات"/><M t="پشتیبانی" f={()=>r.navigate('/(tabs)/messages')}/>
<Btn t="تغییر به پنل فروشنده" onPress={()=>r.push('/seller')}/><Btn g t="چرا خرید گروهی؟" onPress={()=>r.push('/how-it-works')}/><Btn g t="بازنشانی دمو" onPress={()=>{reset();Alert.alert('دمو بازنشانی شد')}}/></Screen>}
