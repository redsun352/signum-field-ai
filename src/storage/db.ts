import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@signum_field_ai/logs';

type FieldLog = {id: string; created_at: string; title: string; profile_json: string};

export async function initDb(): Promise<void> {
  const existing = await AsyncStorage.getItem(KEY);
  if (existing === null) await AsyncStorage.setItem(KEY, '[]');
}

export async function saveLog(title: string, profile: unknown): Promise<void> {
  const raw = await AsyncStorage.getItem(KEY);
  const logs: FieldLog[] = raw ? JSON.parse(raw) : [];
  logs.push({id: String(Date.now()), created_at: new Date().toISOString(), title, profile_json: JSON.stringify(profile)});
  await AsyncStorage.setItem(KEY, JSON.stringify(logs));
}

export async function getLogs(): Promise<FieldLog[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}
