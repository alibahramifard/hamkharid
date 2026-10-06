import React from 'react';
import {Text,TextInput,View} from 'react-native';
import {useRouter} from 'expo-router';
import {useApp,cur,pct} from '../../data/store';
import {Screen,GCard,H,Chip,Card,Btn,s,C} from '../../components/ui';
export default function Home(){const r=useRouter(),{groups}=useApp();
const near=groups.filter((g:any)=>cur(g)<g.t&&pct(g)>=60).sort((a:any,b:any)=>pct(b)-pct(a)).slice(0,4);
return <Screen><Text style={{fontSize:22,fontWeight:'800'}}>سلام، علی</Text><Text style={{color:C.mu}}>امروز چه چیزی می‌خواهید عمده بخرید؟</Text>
<TextInput style={s.in} placeholder="جستجوی کالا، دسته‌بندی یا خرید گروهی" returnKeyType="search" onSubmitEditing={e=>r.navigate({pathname:'/groups',params:{q:e.nativeEvent.text,f:'همه'}})}/>
<View style={{backgroundColor:C.pr,borderRadius:16,padding:16,marginVertical:8}}><Text style={{color:'#fff',fontSize:18,fontWeight:'800'}}>با هم عمده بخرید</Text><Text style={{color:'#fff',marginVertical:4}}>با قدرت خرید عمده، حتی با سفارش کمتر. مقدار موردنیاز شما کمتر از حداقل فروش است؟ با خریداران دیگر همراه شوید و قیمت عمده بگیرید.</Text>
<Btn g t="مشاهده خریدهای گروهی" onPress={()=>r.navigate({pathname:'/groups',params:{q:'',f:'همه'}})}/></View>
<H t="خریدهای گروهی نزدیک به تکمیل"/>{near.map((g:any)=><GCard key={g.id} g={g}/>)}
<H t="دسته‌بندی‌ها"/><View style={{flexDirection:'row',flexWrap:'wrap'}}>{['حبوبات','ادویه','خشکبار','گیاهان دارویی','مواد غذایی','محصولات کشاورزی'].map(c=><Chip key={c} t={c} onPress={()=>r.navigate({pathname:'/groups',params:{q:'',f:c}})}/>)}</View>
<H t="چطور کار می‌کند؟"/><Card><Text>۱. مقدار موردنیاز خود را انتخاب کنید{'\n'}۲. به یک خرید گروهی بپیوندید{'\n'}۳. با تکمیل حجم، قیمت عمده فعال می‌شود</Text></Card>
<Btn g t="مشاهده توضیح تصویری برای ارائه" onPress={()=>r.push('/how-it-works')}/></Screen>}
