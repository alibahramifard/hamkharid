import React from 'react';
import {Text,TextInput,View,KeyboardAvoidingView,Platform} from 'react-native';
import {useRouter} from 'expo-router';
import {useApp} from '../../data/store';
import {Screen,Chip,Btn,s,C} from '../../components/ui';
export default function Create(){const r=useRouter(),{draft:d,setDraft}=useApp();
const F=(l:string,k:string,num?:boolean)=><View key={k}><Text style={{color:C.mu,fontSize:12,marginTop:6}}>{l}</Text><TextInput style={s.in} value={(d as any)[k]} keyboardType={num?'numeric':'default'} onChangeText={v=>setDraft({[k]:v})}/></View>;
return <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'?'padding':undefined}><Screen>{F('نام کالا','n')}<Text style={{color:C.mu,fontSize:12,marginTop:6}}>دسته‌بندی</Text>
<View style={{flexDirection:'row',flexWrap:'wrap',marginTop:6}}>{['حبوبات','ادویه','خشکبار','گیاهان دارویی'].map(c=><Chip key={c} t={c} on={d.c===c} onPress={()=>setDraft({c})}/>)}</View>
{F('حجم کل (کیلو)','t',true)}{F('حداقل حجم خرید (کیلو)','m',true)}{F('قیمت خرید گروهی (تومان/کیلو)','p',true)}{F('قیمت در حجم کمتر (تومان/کیلو)','sp',true)}{F('محل تحویل','dl')}{F('زمان آماده‌سازی','pr')}
<Btn t="پیش‌نمایش خرید گروهی" onPress={()=>r.push('/seller/preview')}/></Screen></KeyboardAvoidingView>}
