import React from 'react';
import {View,Text,Pressable,ScrollView,StyleSheet} from 'react-native';
import {useRouter} from 'expo-router';
import {Group,fa,T,cur,pct,SELLERS,tm} from '../data/store';
export const C={pr:'#0d6b58',pl:'#e0f0eb',bg:'#f2f5f3',cd:'#fff',tx:'#13221e',mu:'#62736d',ln:'#dfe6e3',ok:'#1b8a57'};
export const Screen=({children}:any)=><ScrollView style={{backgroundColor:C.bg}} contentContainerStyle={{padding:16,paddingBottom:40}} keyboardShouldPersistTaps="handled">{children}</ScrollView>;
export const Card=({children,onPress,style}:any)=>{const B:any=onPress?Pressable:View;return <B onPress={onPress} style={[s.card,style]}>{children}</B>};
export const Btn=({t,onPress,g}:any)=><Pressable onPress={onPress} style={[s.btn,g&&{backgroundColor:C.pl}]}><Text style={[s.bt,g&&{color:C.pr}]}>{t}</Text></Pressable>;
export const H=({t}:any)=><Text style={s.h}>{t}</Text>;
export const Row=({a,b}:any)=><View style={s.row}><Text style={{color:C.mu}}>{a}</Text><Text style={{fontWeight:'700',color:C.tx}}>{b}</Text></View>;
export const Chip=({t,on,onPress}:any)=><Pressable onPress={onPress} style={[s.chip,on&&{backgroundColor:C.pr,borderColor:C.pr}]}><Text style={{color:on?'#fff':C.tx,fontSize:12}}>{t}</Text></Pressable>;
export const PB=({v}:{v:number})=><View style={s.pb}><View style={{width:`${v}%`,height:8,borderRadius:8,backgroundColor:C.pr}}/></View>;
export const Tag=({t,ok}:any)=><Text style={[s.tag,ok&&{backgroundColor:C.ok,color:'#fff'}]}>{t}</Text>;
export function GCard({g,ro}:{g:Group;ro?:boolean}){const r=useRouter(),done=cur(g)>=g.t;
return <Card onPress={ro?undefined:()=>r.push(`/groups/${g.id}`)}>
<View style={s.row}><View style={s.im}><Text style={{fontSize:24}}>{g.e}</Text></View><View style={{flex:1,marginHorizontal:10}}><Text style={{fontWeight:'800',fontSize:15}}>{g.n}</Text><Text style={{color:C.mu,fontSize:12}}>{g.s} · {fa(SELLERS[g.s][0])} ★</Text></View><Tag ok={done} t={done?'تکمیل شد':tm(g.h)}/></View>
<View style={[s.row,{marginTop:8}]}><Text>قیمت عمده: {T(g.p)}/کیلو</Text><Text>{fa(g.b.length)} خریدار</Text></View><PB v={pct(g)}/>
<View style={[s.row,{marginTop:6}]}><Text style={{fontSize:12}}>{fa(cur(g))} / {fa(g.t)} کیلو</Text><Text style={{fontSize:12}}>{done?'':fa(g.t-cur(g))+' کیلو تا تکمیل'}</Text></View>
<View style={[s.row,{marginTop:6}]}><Text style={{color:C.mu,fontSize:12}}>قیمت در خرید ۲۵۰ کیلو: {T(g.sp)}</Text><Tag t={`صرفه‌جویی ${T(g.sp-g.p)}/کیلو`}/></View>
{!ro&&<Btn t={done?'مشاهده':'پیوستن به خرید'} onPress={()=>r.push(`/groups/${g.id}`)}/>}</Card>}
export const Timeline=({st}:{st:number})=><View style={[s.row,{marginTop:12}]}>{['رزرو','تکمیل گروه','پرداخت','ارسال','تحویل'].map((l,k)=><View key={k} style={{flex:1,alignItems:'center'}}>
<View style={[s.dot,k<=st&&{backgroundColor:C.ok},k===st+1&&{borderWidth:2,borderColor:C.pr}]}><Text style={{color:k<=st?'#fff':C.mu,fontSize:11}}>{k<=st?'✓':fa(k+1)}</Text></View><Text style={{fontSize:10,color:C.mu}}>{l}</Text></View>)}</View>;
export const s=StyleSheet.create({card:{backgroundColor:C.cd,borderWidth:1,borderColor:C.ln,borderRadius:14,padding:12,marginBottom:10},
btn:{backgroundColor:C.pr,borderRadius:12,padding:12,alignItems:'center',marginTop:8},bt:{color:'#fff',fontWeight:'800'},h:{fontSize:15,fontWeight:'800',marginTop:14,marginBottom:8,color:C.tx},
row:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},chip:{borderWidth:1,borderColor:C.ln,backgroundColor:C.cd,borderRadius:20,paddingHorizontal:12,paddingVertical:5,marginEnd:8,marginBottom:8},
pb:{height:8,borderRadius:8,backgroundColor:C.ln,overflow:'hidden'},tag:{fontSize:11,backgroundColor:C.pl,color:C.pr,borderRadius:20,paddingHorizontal:8,paddingVertical:2,overflow:'hidden'},
im:{width:44,height:44,borderRadius:12,backgroundColor:C.pl,alignItems:'center',justifyContent:'center'},dot:{width:24,height:24,borderRadius:12,backgroundColor:C.ln,alignItems:'center',justifyContent:'center',marginBottom:2},
in:{borderWidth:1,borderColor:C.ln,borderRadius:12,backgroundColor:'#fff',padding:11,marginVertical:6}});
