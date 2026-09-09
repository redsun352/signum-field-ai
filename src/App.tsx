import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#071016" />
      <View style={styles.container}>
        <Text style={styles.logo}>SIGNUM</Text>
        <Text style={styles.title}>Field AI</Text>
        <Text style={styles.subtitle}>AKA Signum MFD 7272M saha yardımcısı</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Yeni proje başlangıcı</Text>
          <Text style={styles.cardText}>Temiz React Native + Gradle altyapısı hazır. Özellikler bu temel üzerine modüler olarak eklenecek.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: '#071016'},
  container: {flex: 1, padding: 24, justifyContent: 'center'},
  logo: {fontSize: 34, fontWeight: '800', color: '#00D1C7', letterSpacing: 3},
  title: {fontSize: 42, fontWeight: '800', color: '#FFFFFF', marginTop: 2},
  subtitle: {fontSize: 16, color: '#AAB8C2', marginTop: 10},
  card: {marginTop: 28, padding: 20, borderRadius: 18, backgroundColor: '#101C24', borderWidth: 1, borderColor: '#20313B'},
  cardTitle: {fontSize: 20, fontWeight: '700', color: '#FFFFFF'},
  cardText: {fontSize: 15, lineHeight: 23, color: '#AAB8C2', marginTop: 8},
});
