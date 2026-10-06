import React,{useEffect,useRef,useState} from 'react';
import {Animated,Text,View} from 'react-native';
import {useRouter} from 'expo-router';
import {Screen,Card,Btn,C} from '../components/ui';
const A=({d,children}:any)=>{const o=useRef(new Animated.Value(0)).current;useEffect(()=>{Animated.timing(o,{toValue:1,duration:500,delay:d*700,useNativeDriver:true}).start()},[]);return <Animated.View style={{opacity:o,alignItems:'center',width:'100%'}}>{children}</Animated.View>};
const Ar=({d}:any)=><A d={d}><Text style={{fontSize:22,color:C.pr}}>↓</Text></A>;
export default function How(){const r=useRouter();const [k,setK]=useState(0);
return <Screen key={k}><Card><Text style={{fontWeight:'800'}}>خرید عادی: برای گرفتن قیمت عمده باید ۱ تن بخرید.</Text><Text>خرید گروهی: شما فقط سهم خودتان را می‌خرید؛ پلتفرم سفارش چند خریدار را تجمیع می‌کند.</Text></Card>
<A d={0}><View style={{borderWidth:1.5,borderColor:C.pr,borderRadius:12,padding:10,width:'100%',alignItems:'center'}}><Text>فروشنده</Text><Text style={{fontWeight:'800'}}>۱ تن لوبیا چیتی</Text></View></A><Ar d={1}/>
<A d={1.5}><View style={{backgroundColor:C.pr,borderRadius:12,padding:10,width:'100%',alignItems:'center'}}><Text style={{color:'#fff'}}>پلتفرم: تجمیع سفارش‌ها و مدیریت معامله</Text></View></A><Ar d={2}/>
{['الف','ب','ج','د'].map((x,i)=><A key={x} d={2.6+i*.5}><View style={{backgroundColor:C.pl,borderRadius:10,padding:8,width:'100%',marginBottom:6,alignItems:'center'}}><Text>خریدار {x} — ۲۵۰ کیلو</Text></View></A>)}<Ar d={5}/>
<A d={5.5}><View style={{backgroundColor:C.ok,borderRadius:12,padding:12,width:'100%',alignItems:'center'}}><Text style={{color:'#fff',fontWeight:'800'}}>۱,۰۰۰ کیلو</Text><Text style={{color:'#fff'}}>قیمت عمده فعال شد ✓</Text></View></A>
<Card style={{marginTop:12}}><Text>✓ هویت و سابقه فروشنده{'\n'}✓ ثبت شرایط معامله و پرداخت امن{'\n'}✓ پیگیری تحویل و حل اختلاف</Text><Text style={{color:C.mu,fontSize:12}}>پلتفرم فقط معرفی نمی‌کند؛ معامله را مدیریت می‌کند و از کارمزد خدمات هر معامله درآمد دارد. (مفهوم دمو)</Text></Card>
<Btn g t="پخش دوباره" onPress={()=>setK(k+1)}/><Btn t="مشاهده خریدهای گروهی" onPress={()=>r.navigate('/(tabs)/groups')}/></Screen>}
