# USAQ-PSIXOLOGIYASI-KURSU вЂ” DAVAM EDЖЏN Д°Ећ VЖЏZД°YYЖЏTД°
*(Bu sЙ™nЙ™d yeni sГ¶hbЙ™tin Й™vvЙ™lindЙ™ Claude-a yГјklЙ™nmЙ™lidir ki, iЕџ qaldД±ДџД± yerdЙ™n davam etsin)*

---

## 1. REPO VЖЏ GД°RД°Ећ

- **Repo:** `Samir210-az/usaq-psixologiyasi-kursu` (GitHub Pages)
- **CanlД± sayt:** https://samir210-az.github.io/usaq-psixologiyasi-kursu/
- **Token:** Samir hЙ™r dЙ™fЙ™ yeni token vermЙ™lidir.
- **GitHub Й™mЙ™liyyatlarД±:** Python `urllib.request` vЙ™ ya PowerShell `Invoke-RestMethod` ilЙ™. HЙ™r PUT-dan Й™vvЙ™l SHA Г§Й™k. BГјtГјn fayllar bitЙ™ndЙ™n sonra BД°R DЖЏFЖЏ `POST /repos/{repo}/pages/builds`.
- **Struktur:** AZ = repo kГ¶kГј, RU = `/ru/`, TR = `/tr/`, EN = `/en/`. **TЙ™rcГјmЙ™ olunmuЕџ modul ГјГ§Гјn index.html-dЙ™ href yerli fayla iЕџarЙ™ etmЙ™lidir (mЙ™s. `07-....html`), tЙ™rcГјmЙ™ hЙ™lЙ™ yoxdursa `../NN-....html` (AZ-Й™ fallback) qalД±r.**

## 2. STANDARTLAR (dЙ™yiЕџmЙ™yib)
HЙ™r fazada dialoq say tЙ™lЙ™bi: giriЕџв‰Ґ14, Й™sasв‰Ґ20, baДџlanД±Еџв‰Ґ10 array-entry (yЙ™ni 7/10/5 "cГјt"), HЖЏR FAZADA CГњT SAYDA ENTRY (parity). Min 1200 sГ¶z (hero-quote arasД±). Terapevtik QiymЙ™tlЙ™ndirmЙ™ FormasД±, 5 mГјtЙ™xЙ™ssis perspektivi, risk/bГ¶hran protokolu, biblioqrafiya bГ¶lmЙ™lЙ™ri hЙ™r modulda olmalД±dД±r.

## 3. HAZIRKI VЖЏZД°YYЖЏT (bГјtГјn fayllar tЙ™k-tЙ™k canlД± repo-dan yoxlanД±lД±b, 2026-07-16)

### вњ… AZ (kГ¶k qovluq): BГњTГњN 15 MODUL TAM DЖЏRД°NLЖЏЕћDД°RД°LД°B VЖЏ TЖЏSDД°QLЖЏNД°B.
### вњ… EN (`/en/`): BГњTГњN MODULLAR (Й™n azД± 1-10 birbaЕџa yoxlanД±lД±b, 11-15 Й™vvЙ™lki sЙ™nЙ™dЙ™ gГ¶rЙ™ "etalon sЙ™viyyЙ™") TAM DЖЏRД°NLЖЏЕћDД°RД°LД°B.
### рџџЎ RU (`/ru/`) vЙ™ TR (`/tr/`): Modul 1-7 VЖЏ Д°NDД° Modul 9 DA MГ–VCUDDUR VЖЏ TЖЏSDД°QLЖЏNД°B. Modul 8, 10-15 heГ§ bunlarda YOXDUR (fayl tamamilЙ™ yoxdur, tЙ™rcГјmЙ™ edilib yaradД±lmalД±dД±r).

**QALAN Д°Ећ вЂ” DЖЏQIQ SД°YAHI (yalnД±z RU+TR tЙ™rcГјmЙ™si, AZ mЙ™zmunu hazД±rdД±r, tЙ™rcГјmЙ™ edib strukturu qorumaq kifayЙ™tdir):**
| Modul | Ad | Seans sayД± | RU | TR |
|---|---|---|---|---|
| 8 | DavranД±Еџ Pozuntusu | 18 | вќЊ | вќЊ |
| 9 | Tualet vЙ™rdiЕџi | 8 | вњ… | вњ… |
| 10 | Enurez/Enkoprez | 10 | вќЊ | вќЊ |
| 11 | Exolaliya | 12 | вќЊ | вќЊ |
| 12 | Disleksiya | 10 | вќЊ | вќЊ |
| 13 | Tik | 18 | вќЊ | вќЊ |
| 14 | Mutizm | 12 | вќЊ | вќЊ |
| 15 | BoЕџanma | 12 | вќЊ | вќЊ |

Qalan: 7 modul Г— 2 dil = 14 tam fayl tЙ™rcГјmЙ™si (cЙ™mi ~92 seans/dil). Modul 7 vЙ™ Modul 9-un RU+TR tЙ™rcГјmЙ™si hЙ™r biri bir sГ¶hbЙ™tdЙ™ normal templЙ™ bitdi вЂ” bu sГјrЙ™tЙ™ gГ¶rЙ™ modul 8 vЙ™ 13 (18 seans) daha uzun Г§Й™kЙ™cЙ™k, kiГ§iklЙ™r (10,12) daha tez.

## 4. TГ–VSД°YЖЏ OLUNAN DAVAM STRATEGД°YASI
HЙ™r sГ¶hbЙ™tdЙ™ 1 modulun RU+TR tЙ™rcГјmЙ™sini bitir:
- SГ¶hbЙ™t 1: Modul 12 (10 seans)
- SГ¶hbЙ™t 2: Modul 10 (10 seans)
- SГ¶hbЙ™t 3: Modul 11 (12 seans)
- SГ¶hbЙ™t 4: Modul 14 (12 seans)
- SГ¶hbЙ™t 5: Modul 15 (12 seans)
- SГ¶hbЙ™t 6: Modul 8 (18 seans вЂ” bГ¶yГјk)
- SГ¶hbЙ™t 7: Modul 13 (18 seans вЂ” bГ¶yГјk)

HЙ™r modul ГјГ§Гјn iЕџ metodologiyasД±:
1. AZ faylД±nД± GitHub-dan endir (mЙ™nbЙ™ mЙ™tn olaraq), quruluЕџu (head/topbar/footer) ГјГ§Гјn eyni modulun artД±q mГ¶vcud RU/TR faylД± YOXDURSA, Й™n yaxД±n nГ¶mrЙ™li mГ¶vcud RU/TR faylД±nД± struktur Еџablonu kimi istifadЙ™ et (mЙ™s. `ru/07-...html`).
2. BГјtГјn bГ¶lmЙ™lЙ™ri (elmi tЙ™rif, tЙ™snifat, 5 mГјtЙ™xЙ™ssis, yaЕџ qruplarД±, Й™sas model, klinik hadisЙ™, worksheet-lЙ™r, SESSIONS massivi, risk protokolu, biblioqrafiya, xГјlasЙ™) tЙ™rcГјmЙ™ et вЂ” dialoqlarД± sГ¶z-be-sГ¶z deyil, tЙ™bii klinik dillЙ™.
3. UЕџaq adД±nД± AZ mЙ™nbЙ™dЙ™ki adla eyni saxla (mЙ™s. "Leyla" в†’ RU-da "Р›РµР№Р»Р°", TR-da "Leyla").
4. CГјt sayД±nД± yoxla: giriЕџв‰Ґ14, Й™sasв‰Ґ20, baДџlanД±Еџв‰Ґ10 entry, HЖЏR FAZADA CГњT SAY (parity) вЂ” bax `validate-phase.js` mЙ™ntiqi (script bloku Г§Д±xar, SESSIONS array-i bracket-balance ilЙ™ Г§Д±xar, `eval()` et, `dialog.length` yoxla).
5. Script blokunu ayД±rД±b `node --check` ilЙ™ JS sintaksisini yoxla.
6. SГ¶z sayД±nД± yoxla (hero-quote arasД±, min 1200).
7. GitHub-a **yeni fayl kimi** yГјklЙ™ (bu modul RU/TR-dЙ™ hЙ™lЙ™ yoxdur, SHA lazД±m deyil).
8. HЙ™min dilin `index.html`-indЙ™ bu modulun hrefini `../NN-...html`-dЙ™n `NN-...html`-Й™ dЙ™yiЕџdir (SHA ilЙ™ PUT).
9. ЖЏvvЙ™lki modulun (mЙ™s. modul 8 ГјГ§Гјn modul 7) nav-bottom "next" linkini yoxla вЂ” artД±q yerli olmalД±dД±r, adЙ™tЙ™n Й™vvЙ™lcЙ™dЙ™n dГјzgГјn qoyulub.
10. BГјtГјn fayllar bitЙ™ndЙ™ BД°R DЖЏFЖЏ `POST /repos/{repo}/pages/builds`, "built" statusunu tЙ™sdiqlЙ™.

## 5. SAMД°RД°N ЖЏSAS TЖЏLД°MATLARI
- Mehriban, sadЙ™, AzЙ™rbaycan dilindЙ™ danД±Еџ, "dostum"/"MГјdir" xitabД±.
- HЙ™r dЙ™yiЕџiklikdЙ™n sonra canlД± link ver.
- Token istifadЙ™sindЙ™n sonra silinmЙ™sini xatД±rlat (layihЙ™ TAM bitЙ™ndЙ™).
- Footer-dЙ™ "By @s_akhundoff" + Instagram (@s_akhundoff) linki qorunmalД± (bГјtГјn modullarda mГ¶vcuddur, yoxlanД±lД±b).
- 20 illik tЙ™crГјbЙ™li mГјtЙ™xЙ™ssis kimi, insan yazД±sД± kimi (AI izi olmadan) yaz.
