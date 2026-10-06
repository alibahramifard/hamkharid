import React from 'react';
import {I18nManager} from 'react-native';
import {Stack} from 'expo-router';
import {Provider} from '../data/store';
if(!I18nManager.isRTL){I18nManager.allowRTL(true);I18nManager.forceRTL(true)}
const o=(title:string)=>({title,headerTitleAlign:'center' as const});
export default function L(){return <Provider><Stack screenOptions={{headerTintColor:'#0d6b58'}}>
<Stack.Screen name="(tabs)" options={{headerShown:false}}/><Stack.Screen name="groups/[id]" options={o('جزئیات خرید')}/><Stack.Screen name="groups/join" options={o('مقدار موردنیاز شما')}/>
<Stack.Screen name="groups/confirmation" options={o('تأیید رزرو')}/><Stack.Screen name="groups/success" options={{...o('همخرید'),headerBackVisible:false}}/>
<Stack.Screen name="seller/index" options={o('پنل فروشنده')}/><Stack.Screen name="seller/create" options={o('ایجاد خرید گروهی')}/><Stack.Screen name="seller/preview" options={o('پیش‌نمایش خرید گروهی')}/>
<Stack.Screen name="how-it-works" options={o('چطور کار می‌کند؟')}/></Stack></Provider>}
