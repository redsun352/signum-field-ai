import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return <>
    <StatusBar style="light" />
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#071a1b' }, headerTintColor: '#e9ffff', contentStyle: { backgroundColor: '#071214' } }} />
  </>;
}
