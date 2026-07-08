# USAQ-PSIXOLOGIYASI-KURSU — DAVAM EDƏN İŞ VƏZİYYƏTİ
*(Bu sənəd yeni söhbətin əvvəlində Claude-a yüklənməlidir ki, iş qaldığı yerdən davam etsin)*

---

## 1. REPO VƏ GİRİŞ

- **Repo:** `Samir210-az/usaq-psixologiyasi-kursu` (GitHub Pages)
- **Canlı sayt:** https://samir210-az.github.io/usaq-psixologiyasi-kursu/
- **Token:** Samir hər dəfə yeni token verməlidir.
- **GitHub əməliyyatları:** Python `urllib.request` ilə. Hər PUT-dan əvvəl SHA çək. Bütün fayllar bitəndən sonra BİR DƏFƏ `POST /repos/{repo}/pages/builds`.

## 2. STANDARTLAR (dəyişməyib — 1200 söz, 7/10/5 dialoq cütü, Terapevtik Qiymətləndirmə Forması, s.)

## 3. HAZIRKI VƏZİYYƏT

### TAM DƏRİNLƏŞDİRİLMİŞ (7/10/5+ real texnika ilə):
✅ Modul 1 (İlkin diaqnostika) — TAM BİTDİ (bu sessiyada dərinləşdirildi)
✅ Modul 2 (Dəyərləndirmə vəsaitləri) — TAM BİTDİ (bu sessiyada dərinləşdirildi)
✅ Modul 3 (Autizm/ABA) — TAM BİTDİ (bu sessiyada dərinləşdirildi)
✅ Modul 4 (DEHB) — əvvəlki sessiyada bitib
✅ Modul 8 (Davranış Pozuntusu) — əvvəlki sessiyada bitib
✅ Modul 11, 12, 13, 14, 15 — əvvəlki sessiyada bitib (etalon səviyyə)

### QALAN İŞ — HƏLƏ DƏRİN DEYİL:
❌ **Modul 5** (Yuxu-yemək, 12 seans) — pair sayı: giriş 3, əsas 5, bağlanış 2 (bəzi seanslarda bağlanış 3-4)
❌ **Modul 6** (Həyəcan-qorxu, 13 seans) — eyni vəziyyət
❌ **Modul 7** (Ünsiyyət çətinlikləri, 8 seans) — eyni vəziyyət
❌ **Modul 9** (Tualet vərdişi, 8 seans) — eyni vəziyyət
❌ **Modul 10** (Enurez/Enkoprez, 10 seans) — eyni vəziyyət

**VACIB DÜZƏLİŞ:** Əvvəlki sənəddə bu 5 modulun "texniki cəhətdən 7/10/5 sayını ödədiyi" yazılmışdı — bu YANLIŞ məlumat idi. Real yoxlamada bu modulların pair sayı cəmi 3/5/2 səviyyəsindədir (tələbin təxminən yarısı). Bu, təxminən 51 seans deməkdir (12+13+8+8+10), hər biri ~12 əlavə dialoq cütü tələb edir. Bu, TƏK BİR SÖHBƏTDƏ bitirilə bilməyəcək qədər böyük həcmdədir.

## 4. TÖVSİYƏ OLUNAN DAVAM STRATEGİYASI

Hər növbəti söhbətdə 1 modul tam bitirilməli:
- Söhbət 1: Modul 7 və ya Modul 9 (8 seans, nisbətən kiçik)
- Söhbət 2: Modul 9 və ya Modul 10
- Söhbət 3: Modul 10
- Söhbət 4: Modul 5 (12 seans, böyük)
- Söhbət 5: Modul 6 (13 seans, ən böyük)

Hər modul üçün iş metodologiyası:
1. Faylı GitHub-dan endir, SESSIONS-u json5 ilə çıxar.
2. Hər seansın 3 fazasına (Giriş/Əsas/Bağlanış) əlavə real dialoq cütləri yaz — mövcud "about" sahəsindəki texnika adına uyğun, real klinik məzmunla (niyə izahı, addım-addım metodologiya).
3. Cüt sayını yoxla: giriş≥7, əsas≥10, bağlanış≥5, HƏR FAZADA CÜT SAYDA ENTRY (parity yoxla!).
4. node --check ilə JS sintaksisini yoxla.
5. Söz sayını yoxla (hero-quote arası, min 1200).
6. section/div balansını yoxla.
7. GitHub-a yüklə (SHA ilə).
8. Bütün fayllar bitəndə BİR DƏFƏ pages build tetiklə.

## 5. SAMİRİN ƏSAS TƏLİMATLARI
- Mehriban, sadə, Azərbaycan dilində danış, "dostum"/"Müdir" xitabı.
- Hər dəyişiklikdən sonra canlı link ver.
- Token istifadəsindən sonra silinməsini xatırlat (layihə TAM bitəndə).
- Footer-də "By s_akhundoff" + Instagram (@s_akhundoff) linki qorunmalı (bütün modullarda mövcuddur, yoxlanılıb).
- 20 illik təcrübəli mütəxəssis kimi, insan yazısı kimi (AI izi olmadan) yaz.
