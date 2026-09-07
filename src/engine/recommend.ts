import { FACTORY_PROGRAMS, Program } from '../data/manual';

export type FieldAnswers = {goal:'general'|'deep'|'litter'|'beach'|'small'; wet:boolean; powerLines:boolean; mineralization:'low'|'medium'|'high'|'unknown'};

export function recommend(a: FieldAnswers): {program:Program; changes:string[]; warnings:string[]} {
  let program = FACTORY_PROGRAMS[2];
  const changes:string[]=[]; const warnings:string[]=[];
  if(a.goal==='litter'){ program=FACTORY_PROGRAMS[1]; changes.push('P2 + MM Speed yaklaşımı: daha kontrollü ayırma için başlangıç profili.'); }
  if(a.goal==='deep'){ program=FACTORY_PROGRAMS[3]; changes.push('Deep Program (DP) açılması önerilir; Filter T/A ayrı değerlendirilir.'); }
  if(a.goal==='small'){ program=FACTORY_PROGRAMS[0]; changes.push('P1 başlangıç profili; küçük hedeflerde yüksek frekanslı coil seçimi ayrıca değerlendirilmeli.'); }
  if(a.goal==='beach'){ program=FACTORY_PROGRAMS[0]; changes.push('Economy ve yeniden Ground Balance önerisi; tuzlu/ıslak zeminde GS ayarları kontrollü denenmeli.'); }
  if(a.powerLines) { changes.push('EMI/Frequency Shift kontrolü yapılmalı; görüntüden EMI kesin ölçülemez.'); warnings.push('EMI değeri kameradan güvenilir biçimde çıkarılamaz; cihazdaki davranışla doğrula.'); }
  if(a.wet || a.mineralization==='high') { changes.push('Ground Balance sonrası GS Filter/GS Zone yalnızca rahat çalışmayı sağlayacak minimum seviyeye getirilmeli.'); warnings.push('Aşırı GS filtreleme yüksek iletkenlikli büyük demir dışı hedeflerin kaybına yol açabilir.'); }
  if(a.goal==='deep') { changes.push('DP için Filter T hedef boyutuna göre; Filter A düşürüldükçe hassasiyet artar ancak zemin etkisi ve yavaş tarama ihtiyacı artar.'); }
  return {program,changes,warnings};
}
