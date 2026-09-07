import * as SQLite from 'expo-sqlite';

let dbPromise: Promise<SQLite.SQLiteDatabase> | undefined;
export function getDb(){
  if(!dbPromise) dbPromise = SQLite.openDatabaseAsync('signum_field_ai.db');
  return dbPromise;
}
export async function initDb(){
  const db=await getDb();
  await db.execAsync(`PRAGMA journal_mode = WAL; CREATE TABLE IF NOT EXISTS field_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT NOT NULL, title TEXT NOT NULL, profile_json TEXT NOT NULL);`);
}
export async function saveLog(title:string, profile:unknown){
  const db=await getDb();
  await db.runAsync('INSERT INTO field_logs (created_at,title,profile_json) VALUES (?,?,?)', new Date().toISOString(), title, JSON.stringify(profile));
}
