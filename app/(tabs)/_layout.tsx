import React from 'react';
import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
const T=(name:string,title:string,icon:any)=><Tabs.Screen key={name} name={name} options={{title,tabBarIcon:({color,size}:any)=><Ionicons name={icon} color={color} size={size}/>}}/>;
export default function L(){return <Tabs screenOptions={{headerTitleAlign:'center',tabBarActiveTintColor:'#0d6b58',tabBarLabelStyle:{fontSize:10}}}>
{[T('index','خانه','home'),T('groups','خرید گروهی','people'),T('orders','سفارش‌های من','receipt'),T('messages','پیام‌ها','chatbubbles'),T('profile','حساب کاربری','person')]}</Tabs>}
