import React, {useMemo, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {FACTORY_PROGRAMS} from './data/manual';

const Card = ({children}: {children: React.ReactNode}) => <View style={styles.card}>{children}</View>;

export default function App() {
  const [program, setProgram] = useState('P1');
  const selected = useMemo(() => FACTORY_PROGRAMS.find(p => p.id === program) ?? FACTORY_PROGRAMS[0], [program]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#050B10" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>SIGNUM FIELD AI</Text>
        <Text style={styles.subtitle}>AKA Signum MFD 7272M • Field Assistant</Text>

        <Card>
          <Text style={styles.title}>Program</Text>
          <View style={styles.row}>
            {FACTORY_PROGRAMS.map(p => (
              <Pressable key={p.id} onPress={() => setProgram(p.id)} style={[styles.pill, p.id === program && styles.pillActive]}>
                <Text style={styles.pillText}>{p.id}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.programName}>{selected.name}</Text>
          <Text style={styles.note}>Factory values are starting points; ground conditions and EMI require field adjustment.</Text>
        </Card>

        <Card>
          <Text style={styles.title}>Recommended starting settings</Text>
          <Setting label="Sensitivity ST" value={selected.sensitivityST} />
          <Setting label="Sensitivity RT" value={selected.sensitivityRT} />
          <Setting label="Sensor / Excitation" value={selected.sensorMode} />
          <Setting label="Sound" value={selected.soundMode} />
          <Setting label="AT Speed" value={selected.speedAT} />
          <Setting label="Gain" value={selected.gain} />
          <Setting label="MM Speed" value={selected.mmSpeed} />
          <Setting label="EMI" value={selected.emiMM} />
          <Setting label="Filter T / A" value={`${selected.filterT} / ${selected.filterA}`} />
          <Setting label="GS Zone" value={selected.gsZone} />
        </Card>

        <Card>
          <Text style={styles.title}>Field workflow</Text>
          <Text style={styles.step}>1. Ground Balance → clean patch → vertical bobbing</Text>
          <Text style={styles.step}>2. Check EMI → use Frequency Shift when needed</Text>
          <Text style={styles.step}>3. Sweep in RT-ST → compare target response from multiple directions</Text>
          <Text style={styles.step}>4. Use VDI + Hodograph + sound together; never identify by VDI alone</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function Setting({label, value}: {label: string; value: React.ReactNode}) {
  return <View style={styles.setting}><Text style={styles.label}>{label}</Text><Text style={styles.value}>{String(value)}</Text></View>;
}

const styles = StyleSheet.create({
  safe: {flex: 1, backgroundColor: '#050B10'},
  content: {padding: 18, gap: 14},
  brand: {fontSize: 26, fontWeight: '800', color: '#00D1C7', letterSpacing: 1.2},
  subtitle: {fontSize: 13, color: '#9AA7B3', marginTop: -8},
  card: {backgroundColor: '#0D161D', borderRadius: 18, padding: 16, borderWidth: 1, borderColor: '#1C2B35'},
  title: {fontSize: 18, fontWeight: '800', color: '#F4F7F9', marginBottom: 12},
  row: {flexDirection: 'row', gap: 8, marginBottom: 12},
  pill: {paddingVertical: 9, paddingHorizontal: 14, borderRadius: 999, backgroundColor: '#15212A'},
  pillActive: {backgroundColor: '#00D1C7'},
  pillText: {fontWeight: '800', color: '#EAF3F5'},
  programName: {fontSize: 16, fontWeight: '700', color: '#DCE7EB', marginBottom: 6},
  note: {fontSize: 12, lineHeight: 18, color: '#97A8B2'},
  setting: {flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#17242C'},
  label: {color: '#9AA7B3', fontSize: 13},
  value: {color: '#F4F7F9', fontWeight: '700'},
  step: {color: '#D6E0E4', lineHeight: 20, marginBottom: 8},
});
