import { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, styles } from '../src/components/Card';
import { getDb } from '../src/storage/db';
export default function FieldLog(){const [count,setCount]=useState(0); useEffect(()=>{getDb().then(db=>db.getFirstAsync<{c:number}>('SELECT COUNT(*) as c FROM field_logs')).then(x=>setCount(x?.c??0)).catch(()=>{});},[]); return <ScrollView style={styles.page}><Text style={styles.title}>Saha Günlüğü</Text><Text style={styles.subtitle}>Fotoğraf, saha profili, GB doğrulaması, son ayarlar, VDI/Hodograph ve hedef sonucu burada tutulacak.</Text><Card><Text style={styles.cardTitle}>Kayıt sayısı</Text><Text style={styles.body}>{count}</Text></Card><Card><Text style={styles.cardTitle}>Sonraki adım</Text><Text style={styles.body}>Fotoğraf yolları + OCR sonucu + audio feature + target outcome alanları SQLite şemasına eklenecek.</Text></Card></ScrollView>}
