import React from 'react';
import {Text,View} from 'react-native';
import {useLocalSearchParams,useRouter} from 'expo-router';
import {useApp,cur,pct,fa,T,SELLERS} from '../../data/store';
import {Screen,Card,H,Row,PB,Tag,Btn,C} from '../../components/ui';
export default function Detail(){const {id}:any=useLocalSearchParams(),r=useRouter(),{groups,my}=useApp();
const g=groups.find((x:any)=>x.id===+id);if(!g)return null;const rem=g.t-cur(g),sl=SELLERS[g.s];
return <Screen><Text style={{fontSize:40}}>{g.e}</Text><Text style={{fontSize:20,fontWeight:'800'}}>{g.n}</Text><Tag t={`خرید گروهی ${fa(g.t)} کیلویی`}/>
<H t="قیمت‌ها"/><Card><Row a="قیمت خرید گروهی" b={T(g.p)+' / کیلو'}/><Row a="قیمت خرید ۲۵۰ کیلو" b={T(g.sp)+' / کیلو'}/><Tag t={`${T(g.sp-g.p)} کمتر در هر کیلو`}/></Card>
<H t="وضعیت خرید"/><Card><Text style={{fontSize:28,fontWeight:'800',textAlign:'center'}}>{fa(cur(g))} / {fa(g.t)}</Text><PB v={pct(g)}/><Row a={rem?fa(rem)+' کیلو باقی‌مانده':'ظرفیت تکمیل شد'} b={fa(g.b.length)+' نفر در این خرید'}/></Card>
<H t="اعضای خرید"/>{g.b.map((q:number,i:number)=><View key={i} style={{flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:10,marginBottom:6,backgroundColor:my[g.id]===i?C.pl:'#e9eeec'}}><Text style={{fontWeight:my[g.id]===i?'800':'400'}}>خریدار {fa(i+1)}{my[g.id]===i?' (شما)':''}</Text><Text>{fa(q)} کیلو</Text></View>)}
<H t="مشخصات کالا"/><Card><Row a="مبدأ" b="ایران"/><Row a="درجه" b="یک"/><Row a="بسته‌بندی" b="کیسه ۲۵ کیلویی"/><Row a="کنترل کیفیت" b="تأیید شده"/></Card>
<H t="اطلاعات فروشنده"/><Card><Text style={{fontWeight:'800'}}>{g.s}</Text><Tag t="احراز هویت شده"/><Row a={`${fa(sl[0])} ★`} b={`${fa(sl[1])} معامله موفق · ${fa(sl[2])}٪ تحویل موفق`}/><Text style={{color:C.mu,fontSize:12}}>ارتباط و هماهنگی از طریق پلتفرم</Text></Card>
<H t="خدمات پلتفرم"/><Card><Text>✓ پرداخت امن{'\n'}✓ ثبت و پیگیری سفارش{'\n'}✓ ثبت مشخصات معامله{'\n'}✓ سازوکار حل اختلاف</Text><Text style={{color:C.mu,fontSize:11}}>مفاهیم دمو؛ تضمین حقوقی نیستند.</Text></Card>
{rem>0?<Btn t="پیوستن به این خرید" onPress={()=>r.push({pathname:'/groups/join',params:{id:g.id}})}/>:<Btn g t="ظرفیت این خرید تکمیل شده است"/>}</Screen>}
