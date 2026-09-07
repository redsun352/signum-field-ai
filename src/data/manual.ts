export type Program = {
  id: string; name: string; sensitivityST: number; sensitivityRT: number; sensorMode: string;
  soundMode: string; dhr: string; speedAT: number; gain: number; accumulation: number;
  tones: number; borderLT: number; volWS: number; volumeLT: number; shiftFreq: string;
  stLength: number; volumeRT: number; mmSpeed: number; emiMM: number; filterT: number;
  filterA: number; gsZone: string; notes: string;
};

// Values transcribed from the factory-program table on page 46 of the supplied v2.06 manual.
// The manual explicitly says factory values are starting points, not absolute settings.
export const FACTORY_PROGRAMS: Program[] = [
  {id:'P1',name:'Program 1 — General',sensitivityST:10,sensitivityRT:7,sensorMode:'Economy',soundMode:'RT-ST',dhr:'Off',speedAT:2,gain:7,accumulation:1,tones:5,borderLT:-14,volWS:6,volumeLT:9,shiftFreq:'Center',stLength:5,volumeRT:3,mmSpeed:3,emiMM:6,filterT:15,filterA:2,gsZone:'20',notes:'Factory starting point; marked * fields are documented as not used in this program.'},
  {id:'P2',name:'Program 2 — Litter / Separation',sensitivityST:7,sensitivityRT:5,sensorMode:'Economy',soundMode:'RT-ST',dhr:'Off',speedAT:2,gain:4,accumulation:3,tones:5,borderLT:-30,volWS:6,volumeLT:9,shiftFreq:'Center',stLength:3,volumeRT:3,mmSpeed:2,emiMM:6,filterT:15,filterA:2,gsZone:'Off',notes:'Factory program with lower Gain and shorter ST duration.'},
  {id:'P3',name:'Program 3 — High Sensitivity',sensitivityST:11,sensitivityRT:8,sensorMode:'Normal',soundMode:'RT-ST',dhr:'Off',speedAT:2,gain:7,accumulation:3,tones:5,borderLT:-24,volWS:6,volumeLT:9,shiftFreq:'Center',stLength:5,volumeRT:4,mmSpeed:3,emiMM:6,filterT:15,filterA:2,gsZone:'Off',notes:'Balanced high-sensitivity factory starting point.'},
  {id:'P4',name:'Program 4 — Fast / High Sensitivity',sensitivityST:12,sensitivityRT:9,sensorMode:'Normal',soundMode:'RT-ST',dhr:'Off',speedAT:2,gain:7,accumulation:3,tones:5,borderLT:-24,volWS:8,volumeLT:9,shiftFreq:'Center',stLength:7,volumeRT:5,mmSpeed:5,emiMM:6,filterT:15,filterA:2,gsZone:'Off',notes:'Factory program with highest listed RT/ST sensitivity and MM speed.'}
];

export const TERMS = [
 ['Ground Balance','Toprak Dengesi / Toprak Ayarı'],['Real Time (RT)','Gerçek Zamanlı Algılama'],['Short Tone (ST)','Kısa Ton / Hedef Tanımlama'],
 ['Gain','Kazanç / Hassasiyet seviyesi'],['Frequency Shift','Frekans Kaydırma'],['S Algorithm','S Algoritması'],['GS Filter','GS Filtresi'],['GS Zone','GS Bölgesi'],
 ['MM Speed','MM Hızı'],['EMI','Elektromanyetik Parazit'],['Filter T','T Filtresi'],['Filter A','A Filtresi'],['Deep Program (DP)','Derin Arama Programı'],
 ['VDI','Hedef ID / iletkenlik göstergesi'],['Hodograph','Hodograf'],['Discrimination','Ayrım'],['All Metal','Tüm Metaller'],['Economy','Ekonomi'],['Turbo','Turbo']
] as const;
