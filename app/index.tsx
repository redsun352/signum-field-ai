import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { Card, styles } from '../src/components/Card';
import { initDb } from '../src/storage/db';
import { useEffect } from 'react';

export default function Home(){
  useEffect(()=>{initDb().catch(()=>{});},[]);
  return <ScrollView style={styles.page}>
    <Text style={styles.title}>Signum Field AI</Text>
    <Text style={styles.subtitle}>AKA Signum MFD 7272M v2.06 için saha asistanı — kamera → zemin profili → Ground Balance → ayar reçetesi → hedef analizi.</Text>
    <Card><Text style={styles.pill}>V1 CORE</Text><Text style={styles.cardTitle}>Önce araziyi fotoğraflayalım</Text><Text style={styles.body}>Kamera analizi yalnızca görsel bir ön tahmindir. Gerçek Ground Balance ve cihaz davranışı her zaman doğrulama adımıdır.</Text><Link href="/terrain" asChild><Text style={styles.button}>Arazi Analizine Başla</Text></Link></Card>
    <Card><Text style={styles.cardTitle}>Hızlı Modüller</Text><Link href="/programs" asChild><Text style={styles.body}>• P1–P4 Factory Programs</Text></Link><Link href="/ground-balance" asChild><Text style={styles.body}>• Ground Balance</Text></Link><Link href="/screen-scan" asChild><Text style={styles.body}>• Cihaz ekranı fotoğrafı</Text></Link><Link href="/audio" asChild><Text style={styles.body}>• Ses analizi altyapısı</Text></Link><Link href="/field-log" asChild><Text style={styles.body}>• Saha Günlüğü</Text></Link></Card>
    <Card><Text style={styles.cardTitle}>Kaynak disiplini</Text><Text style={styles.body}>Manual v2.06 içindeki terimler korunur. Belgede olmayan bir değer uygulama tarafından “kesin fabrika ayarı” olarak gösterilmez.</Text></Card>
  </ScrollView>
}
