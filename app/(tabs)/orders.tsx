import React,{useState} from 'react';
import {Text,View,Alert} from 'react-native';
import {useApp,cur,fa} from '../../data/store';
import {Screen,Card,Chip,PB,Tag,Btn,Timeline,s,C} from '../../components/ui';
const ST=['در انتظار تکمیل گروه','گروه تکمیل شد','پرداخت انجام شد','در حال ارسال','تحویل شد'];
export default function Orders(){const {orders,groups,adv}=useApp();const [tab,setTab]=useState('فعال'),[ex,setEx]=useState(-1);
const l=orders.map((o:any,i:number)=>[o,i]).filter(([o]:any)=>tab==='فعال'?o.st<4:tab==='تکمیل‌شده'?o.st===4:false);
return <Screen><View style={{flexDirection:'row'}}>{['فعال','تکمیل‌شده','لغوشده'].map(t=><Chip key={t} t={t} on={tab===t} onPress={()=>setTab(t)}/>)}</View>
{l.map(([o,i]:any)=>{const g=groups.find((x:any)=>x.id===o.gid);return <Card key={i} onPress={()=>setEx(ex===i?-1:i)}>
<View style={s.row}><Text style={{fontWeight:'800'}}>{g.e} {g.n} · {fa(o.q)} کیلو</Text><Tag t={ST[o.st]}/></View>
{o.st===0&&<><Text style={{fontSize:12,marginVertical:6}}>{fa(cur(g))} / {fa(g.t)} کیلو · {fa(g.t-cur(g))} کیلو باقی‌مانده</Text><PB v={cur(g)/g.t*100}/></>}
{ex===i?<><Timeline st={o.st}/>{o.st<4&&<Btn g t="پیشبرد مرحله (دمو)" onPress={()=>o.st===0&&cur(g)<g.t?Alert.alert('ابتدا باید ظرفیت گروه تکمیل شود'):adv(i)}/>}</>:<Text style={{color:C.mu,fontSize:11,marginTop:6}}>برای دیدن مراحل، روی سفارش بزنید</Text>}</Card>})}
{!l.length&&<Card><Text>در این بخش سفارشی وجود ندارد.</Text></Card>}</Screen>}
