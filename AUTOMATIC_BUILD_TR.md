# Signum Field AI — GitHub ile otomatik APK

Bu repo `main` branch'ine her push olduğunda GitHub Actions üzerinden EAS ile Android APK buildini başlatır.

## Gerekli bir kereye mahsus ayar
GitHub Repository > Settings > Secrets and variables > Actions bölümünde `EXPO_TOKEN` adlı repository secret oluştur.

Token Expo hesabından alınır. Token değeri hiçbir kaynak dosyasına yazılmamalıdır.

## Otomatik akış

`git push` → GitHub Actions → npm install → EAS authentication → `preview` profili → Android APK build.

Workflow: `.github/workflows/build-apk.yml`

## Manuel çalıştırma
GitHub > Actions > Build Signum Field AI APK > Run workflow.

## APK
`eas.json` içindeki preview profili `distribution: internal` ve `android.buildType: apk` kullanır. Build tamamlandıktan sonra EAS build sayfasındaki APK bağlantısı kullanılabilir.
