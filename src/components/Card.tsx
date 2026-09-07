import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Card({children,onPress}:{children:ReactNode;onPress?:()=>void}){
  const body=<View style={styles.card}>{children}</View>;
  return onPress ? <Pressable onPress={onPress} style={({pressed}) => ({opacity: pressed ? 0.75 : 1})}>{body}</Pressable> : body;
}
export const styles = StyleSheet.create({
  page:{flex:1,backgroundColor:'#071214',padding:16},
  title:{color:'#e9ffff',fontSize:28,fontWeight:'800',marginBottom:6},
  subtitle:{color:'#9db8ba',fontSize:14,lineHeight:20,marginBottom:16},
  card:{backgroundColor:'#0e2325',borderColor:'#214648',borderWidth:1,borderRadius:16,padding:16,marginBottom:12},
  cardTitle:{color:'#7ff5e8',fontSize:17,fontWeight:'800',marginBottom:6},
  body:{color:'#d8eeee',fontSize:14,lineHeight:21},
  pill:{alignSelf:'flex-start',paddingHorizontal:10,paddingVertical:5,borderRadius:20,backgroundColor:'#123a3b',color:'#8ff7ec',fontWeight:'700',marginBottom:8},
  button:{backgroundColor:'#18a99e',padding:14,borderRadius:12,alignItems:'center',marginTop:8},
  buttonText:{color:'#001313',fontWeight:'900'},
});
