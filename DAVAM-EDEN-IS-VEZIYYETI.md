# USAQ-PSIXOLOGIYASI-KURSU — DAVAM EDƏN İŞ VƏZİYYƏTİ
*(Bu sənəd yeni söhbətin əvvəlində Claude-a yüklənməlidir ki, iş qaldığı yerdən davam etsin)*

---

## 1. REPO VƏ GİRİŞ

- **Repo:** `Samir210-az/usaq-psixologiyasi-kursu` (GitHub Pages)
- **Canlı sayt:** https://samir210-az.github.io/usaq-psixologiyasi-kursu/
- **Token:** Samir hər dəfə yeni token verməlidir.
- **GitHub əməliyyatları:** PowerShell `Invoke-RestMethod` ilə. Hər PUT-dan əvvəl SHA çək. Bütün fayllar bitəndən sonra BİR DƏFƏ `POST /repos/{repo}/pages/builds`.
- **Struktur:** AZ = repo kökü, RU = `/ru/`, TR = `/tr/`, EN = `/en/`. **Tərcümə olunmuş modul üçün index.html-in JS massivindəki "href" sahəsi yerli fayla işarə etməlidir (məs. `14-mutizm.html`), tərcümə hələ yoxdursa `../NN-....html` (AZ-a fallback) qalır.**

## 2. STANDARTLAR (dəyişməyib)
Hər fazada dialoq say tələbi: giriş≥14, əsas≥20, bağlanış≥10 array-entry (yəni 7/10/5 "cüt"), HƏR FAZADA CÜT SAYDA ENTRY (parity). Min 1200 söz (hero-quote arasında). Terapevtik Qiymətləndirmə Forması, 5 mütəxəssis perspektivi, risk/böhran protokolu, biblioqrafiya bölmələri hər modulda olmalıdır.

## 3. HAZIRKI VƏZİYYƏT (bütün fayllar tək-tək canlı repo-dan yoxlanılıb, 2026-07-16)

### ✅ AZ (kök qovluq): BÜTÜN 15 MODUL TAM DƏRİNLƏŞDİRİLİB VƏ TƏSDİQLƏNİB.
### ✅ EN (`/en/`): BÜTÜN MODULLAR TAM DƏRİNLƏŞDİRİLİB.
### 🟢 RU (`/ru/`) və TR (`/tr/`): Modul 1-14 İNDİ MÖVCUDDUR VƏ TƏSDİQLƏNİB (validasiya + node --check PASS). Yalnız 15 (Boşanma) qalıb.

**QALAN İŞ — DƏQİQ SİYAHI:**
| Modul | Ad | Seans sayı | RU | TR |
|---|---|---|---|---|
| 8 | Davranış Pozuntusu | 18 | ✅ | ✅ |
| 9 | Tualet vərdişi | 8 | ✅ | ✅ |
| 10 | Enurez/Enkoprez | 10 | ✅ | ✅ |
| 11 | Exolaliya | 12 | ✅ | ✅ |
| 12 | Disleksiya | 10 | ✅ | ✅ |
| 13 | Tik | 18 | ✅ | ✅ |
| 14 | Mutizm | 12 | ✅ | ✅ |
| 15 | Boşanma | 12 | ❌ | ❌ |

Qalan: yalnız 1 modul × 2 dil = 2 tam fayl tərcüməsi (Modul 15, Boşanma, 12 seans). Bu bitəndə layihə 4 dildə TAM tamamlanmış olacaq. İstifadəçi açıq şəkildə tapşırıb ki, sual vermədən, ardıcıllıqla bütün 15 modulu bitirim — sonrakı söhbətlərdə bu tapşırığa əsasən dayanmadan davam edilməlidir.

## 4. TÖVSİYƏ OLUNAN DAVAM STRATEGİYASI
Son qalan modulu bitir:
- Modul 15 (Boşanma, 12 seans) RU+TR

Hər modul üçün iş metodologiyası:
1. AZ faylını GitHub-dan endir (mənbə mətn olaraq).
2. Bütün bölmələri (elmi tərif, təsnifat, 5 mütəxəssis, yaş qrupları, əsas model, klinik hadisə, worksheet-lər, SESSIONS massivi, risk protokolu, biblioqrafiya, xülasə) tərcümə et — dialoqları söz-be-söz deyil, təbii klinik dillə.
3. Uşaq adını AZ mənbədəki adla eyni saxla.
4. Cüt sayını yoxla: giriş≥14, əsas≥20, bağlanış≥10 entry, HƏR FAZADA CÜT SAY (parity) — bax `validate-phase.js` məntiqi (script bloku çıxar, SESSIONS array-i bracket-balance ilə çıxar, `eval()` et, `dialog.length` yoxla).
5. Script blokunu ayırıb `node --check` ilə JS sintaksisini yoxla.
6. GitHub-a **yeni fayl kimi** yüklə (bu modul RU/TR-də hələ yoxdur, SHA lazım deyil).
7. Həmin dilin `index.html`-in JS massivində bu modulun "href" sahəsini `../NN-...html`-dən `NN-...html`-ə dəyişdir (SHA ilə PUT).
8. Bütün fayllar bitəndə BİR DƏFƏ `POST /repos/{repo}/pages/builds`, "built" statusunu təsdiqlə. (Qeyd: build statusu bəzən ilk sorğuda "errored" göstərə bilər, sadəcə hələ bitməyib deməkdir — bir neçə saniyə sonra `/pages/builds/latest` yoxlayanda "built" görünəcək.)
9. Layihə tam bitəndə istifadəçiyə GitHub token-i silməyi/ləğv etməyi xatırlat.

## 5. SAMİRİN ƏSAS TƏLİMATLARI
- Mehriban, sadə, Azərbaycan dilində danış, "dostum"/"Müdir" xitabı.
- Hər dəyişiklikdən sonra canlı link ver.
- Token istifadəsindən sonra silinməsini xatırlat (layihə TAM bitəndə).
- Footer-də "By @s_akhundoff" + Instagram (@s_akhundoff) linki qorunmalı (bütün modullarda mövcuddur, yoxlanılıb).
- 20 illik təcrübəli mütəxəssis kimi, insan yazısı kimi (AI izi olmadan) yaz.