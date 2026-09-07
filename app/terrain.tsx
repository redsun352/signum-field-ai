import { useState } from 'react';
import { ScrollView, Text, Pressable } from 'react-native';
import { Card, styles } from '../src/components/Card';

export default function Terrain(){
  const [photo,setPhoto]=useState(false);
  return <ScrollView style={styles.page}>
    <Text style={styles.title}>Arazi Analizi</Text>
    <Text style={styles.subtitle}>İlk adım: araziyi fotoğraflayarak görsel profil oluştur. Görsel analiz bir hipotezdir; gerçek Ground Balance ve cihaz davranışı doğrulama kaynağıdır.</Text>
    <Card>
      <Text style={styles.cardTitle}>Fotoğraf çekimi</Text>
      <Text style={styles.body}>V1 iskeletinde kamera akışı hazırlanmıştır. İlerleyen sürümde 3–5 fotoğraf alınacak: genel arazi, yakın toprak, kaya/çakıl, mümkünse kesit ve sinyal alanı.</Text>
      <Pressable onPress={()=>setPhoto(true)} style={{padding:14,borderRadius:12,backgroundColor:'#18a99e',marginTop:10}}><Text style={styles.buttonText}>{photo?'Fotoğraf seçildi':'Arazi fotoğrafı seç'}</Text></Pressable>
    </Card>
    <Card><Text style={styles.cardTitle}>Çıkarılacak görsel profil</Text><Text style={styles.body}>• Görsel toprak sınıfı tahmini{`\n`}• Kayalık/çakıllılık{`\n`}• Nem görünümü{`\n`}• Zemin homojenliği{`\n`}• Görülebilen tuz/tuğla/cüruf/bitki etkileri{`\n`}• Mineralizasyon riski için görsel tahmin{`\n`}• EMI: fotoğraftan güvenilir ölçülemez</Text></Card>
  </ScrollView>
}
