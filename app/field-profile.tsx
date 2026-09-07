import { useState } from 'react';
import { ScrollView, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Card, styles } from '../src/components/Card';
import { recommend, FieldAnswers } from '../src/engine/recommend';

const Choice=({label,selected,onPress}:{label:string;selected:boolean;onPress:()=>void})=><Pressable onPress={onPress} style={{padding:12,borderRadius:10,borderWidth:1,borderColor:selected?'#18a99e':'#294446',backgroundColor:selected?'#123a3b':'#0b1c1e',marginBottom:7}}><Text style={styles.body}>{label}</Text></Pressable>;
export default function FieldProfile(){
 const router=useRouter(); const [a,setA]=useState<FieldAnswers>({goal:'general',wet:false,powerLines:false,mineralization:'unknown'});
 const run=()=>{const r=recommend(a); router.push({pathname:'/recommendation',params:{data:JSON.stringify(r)}})};
 return <ScrollView style={styles.page}><Text style={styles.title}>Saha Profili</Text><Text style={styles.subtitle}>Kamera tek başına gerçek mineralizasyon/EMI ölçmez. Bu sorular cihaz geri bildirimiyle birleşecek.</Text>
 <Card><Text style={styles.cardTitle}>Hedef</Text><Choice label="Genel arama" selected={a.goal==='general'} onPress={()=>setA({...a,goal:'general'})}/><Choice label="Derin / büyük hedef" selected={a.goal==='deep'} onPress={()=>setA({...a,goal:'deep'})}/><Choice label="Çöplü / yoğun demir" selected={a.goal==='litter'} onPress={()=>setA({...a,goal:'litter'})}/><Choice label="Küçük hedef / sikke" selected={a.goal==='small'} onPress={()=>setA({...a,goal:'small'})}/><Choice label="Islak / plaj" selected={a.goal==='beach'} onPress={()=>setA({...a,goal:'beach'})}/></Card>
 <Card><Text style={styles.cardTitle}>Zemin</Text><Choice label="Islak / tuzlu görünüyor" selected={a.wet} onPress={()=>setA({...a,wet:!a.wet})}/><Choice label="Enerji hattı / güçlü EMI kaynağı yakın" selected={a.powerLines} onPress={()=>setA({...a,powerLines:!a.powerLines})}/><Choice label="Düşük mineralizasyon tahmini" selected={a.mineralization==='low'} onPress={()=>setA({...a,mineralization:'low'})}/><Choice label="Orta" selected={a.mineralization==='medium'} onPress={()=>setA({...a,mineralization:'medium'})}/><Choice label="Yüksek" selected={a.mineralization==='high'} onPress={()=>setA({...a,mineralization:'high'})}/><Choice label="Bilinmiyor" selected={a.mineralization==='unknown'} onPress={()=>setA({...a,mineralization:'unknown'})}/></Card>
 <Text onPress={run} style={styles.button}>Ayar Reçetesi Oluştur</Text></ScrollView>
}
