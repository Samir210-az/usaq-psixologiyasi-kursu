# USAQ-PSIXOLOGIYASI-KURSU вЂ” DAVAM EDЖЏN Д°Ећ VЖЏZД°YYЖЏTД°
*(Bu sЙ™nЙ™d yeni sГ¶hbЙ™tin Й™vvЙ™lindЙ™ Claude-a yГјklЙ™nmЙ™lidir ki, iЕџ qaldД±ДџД± yerdЙ™n davam etsin)*

---

## 1. REPO VЖЏ GД°RД°Ећ

- **Repo:** `Samir210-az/usaq-psixologiyasi-kursu` (GitHub Pages)
- **CanlД± sayt:** https://samir210-az.github.io/usaq-psixologiyasi-kursu/
- **Token:** Samir hЙ™r dЙ™fЙ™ yeni token vermЙ™lidir.
- **GitHub Й™mЙ™liyyatlarД±:** Python `urllib.request` vЙ™ ya PowerShell `Invoke-RestMethod` ilЙ™. HЙ™r PUT-dan Й™vvЙ™l SHA Г§Й™k. BГјtГјn fayllar bitЙ™ndЙ™n sonra BД°R DЖЏFЖЏ `POST /repos/{repo}/pages/builds`.
- **Struktur:** HЙ™r dilin Г¶z qovluДџu var: AZ = repo kГ¶kГј, RU = `/ru/`, TR = `/tr/`, EN = `/en/`. HЙ™r modulun `index.html`-dЙ™ kartД± var вЂ” **tЙ™rcГјmЙ™ olunmuЕџ modul ГјГ§Гјn href yerli fayla (mЙ™s. `04-dehb.html`) iЕџarЙ™ etmЙ™lidir, tЙ™rcГјmЙ™ hЙ™lЙ™ olunmayД±bsa `../NN-...html` (AZ-Й™ fallback) qalmalД±dД±r.**

## 2. STANDARTLAR (dЙ™yiЕџmЙ™yib вЂ” 1200 sГ¶z, hЙ™r fazada giriЕџв‰Ґ7/Й™sasв‰Ґ10/baДџlanД±Еџв‰Ґ5 dialoq cГјtГј, HЖЏR FAZADA CГњT SAY, Terapevtik QiymЙ™tlЙ™ndirmЙ™ FormasД±, s.)

## 3. HAZIRKI VЖЏZД°YYЖЏT (dil-dil dЙ™qiqlЙ™Еџdirilib, 2026-07-16 tarixinЙ™)

### TAM DЖЏRД°NLЖЏЕћDД°RД°LMД°Ећ VЖЏ BГњTГњN DД°LLЖЏRDЖЏ HAZIR:
вњ… Modul 1, 2, 3 вЂ” AZ/RU/TR/EN
вњ… Modul 8, 11, 12, 13, 14, 15 вЂ” etalon sЙ™viyyЙ™ (bГјtГјn dillЙ™rdЙ™)

### QД°SMЖЏN HAZIR (dil-dil fЙ™rqlЙ™nir):
рџџЎ **Modul 4 (DEHB)** вЂ” AZ вњ…, RU вњ…, TR вњ… dЙ™rinlЙ™Еџdirilib vЙ™ index.html-dЙ™ dГјzgГјn linklЙ™nib. **EN hЙ™lЙ™ dЙ™rinlЙ™ЕџdirilmЙ™yib** (Й™vvЙ™lki kГ¶hnЙ™/sЙ™thi mЙ™zmun qalД±b).
рџџЎ **Modul 5 (Yuxu-yemЙ™k, 12 seans)** вЂ” AZ вњ…, RU вњ…, TR вњ…. **EN hЙ™lЙ™ dЙ™rinlЙ™ЕџdirilmЙ™yib.**
рџџЎ **Modul 6 (HЙ™yЙ™can-qorxu, 13 seans)** вЂ” AZ вњ…, RU вњ…, TR вњ… (bu sessiyada TR yГјklЙ™ndi vЙ™ index.html linki dГјzЙ™ldildi). **EN hЙ™lЙ™ dЙ™rinlЙ™ЕџdirilmЙ™yib.**

### HЖЏLЖЏ DЖЏRД°N DEYД°L (bГјtГјn dillЙ™rdЙ™):
вќЊ **Modul 7** (ГњnsiyyЙ™t Г§Й™tinliklЙ™ri, 8 seans)
вќЊ **Modul 9** (Tualet vЙ™rdiЕџi, 8 seans)
вќЊ **Modul 10** (Enurez/Enkoprez, 10 seans)

**DГњZЖЏLDД°LMД°Ећ BUG (2026-07-16):** RU vЙ™ TR `index.html`-lЙ™rindЙ™ Modul 4/5/6 linklЙ™ri sЙ™hvЙ™n `../` ilЙ™ AZ kГ¶k faylД±na yГ¶nЙ™lirdi (tЙ™rcГјmЙ™ mГ¶vcud olsa belЙ™). Bu dГјzЙ™ldildi вЂ” indi yerli tЙ™rcГјmЙ™ faylД±na yГ¶nЙ™lir. **Yeni modul tЙ™rcГјmЙ™ edilib yГјklЙ™ndikdЙ™, index.html-dЙ™ uyДџun hrefi yerli fayla dЙ™yiЕџdirmЙ™yi UNUTMA.**

## 4. TГ–VSД°YЖЏ OLUNAN DAVAM STRATEGД°YASI

Qalan iЕџ iki paralel istiqamЙ™tdЙ™:
- **A) Modul 7, 9, 10-un dЙ™rinlЙ™ЕџdirilmЙ™si** (Й™vvЙ™lcЙ™ AZ, sonra RU/TR/EN tЙ™rcГјmЙ™si) вЂ” hЙ™r sГ¶hbЙ™tdЙ™ 1 modul.
- **B) Modul 4, 5, 6-nД±n EN tЙ™rcГјmЙ™si** (mЙ™zmun artД±q AZ-da hazД±rdД±r, sadЙ™cЙ™ ingiliscЙ™yЙ™ uyДџunlaЕџdД±rД±lД±b yГјklЙ™nmЙ™lidir + index.html linki dГјzЙ™ldilmЙ™lidir).

HЙ™r modul ГјГ§Гјn iЕџ metodologiyasД±:
1. FaylД± GitHub-dan endir, SESSIONS-u Г§Д±xar.
2. HЙ™r seansД±n 3 fazasД±na (GiriЕџ/ЖЏsas/BaДџlanД±Еџ) Й™lavЙ™ real dialoq cГјtlЙ™ri yaz вЂ” mГ¶vcud "about" sahЙ™sindЙ™ki texnika adД±na uyДџun, real klinik mЙ™zmunla.
3. CГјt sayД±nД± yoxla: giriЕџв‰Ґ7, Й™sasв‰Ґ10, baДџlanД±Еџв‰Ґ5, HЖЏR FAZADA CГњT SAYDA ENTRY (parity yoxla!).
4. JS sintaksisini yoxla (script bloku Г§Д±xarД±b `node --check`).
5. SГ¶z sayД±nД± yoxla (hero-quote arasД±, min 1200).
6. GitHub-a yГјklЙ™ (SHA ilЙ™).
7. **index.html-dЙ™ bu modulun hrefini yerli fayla yГ¶nlЙ™ndir (Й™gЙ™r tЙ™rcГјmЙ™ olunan dil AZ deyilsЙ™).**
8. BГјtГјn fayllar bitЙ™ndЙ™ BД°R DЖЏFЖЏ pages build tetiklЙ™.

## 5. SAMД°RД°N ЖЏSAS TЖЏLД°MATLARI
- Mehriban, sadЙ™, AzЙ™rbaycan dilindЙ™ danД±Еџ, "dostum"/"MГјdir" xitabД±.
- HЙ™r dЙ™yiЕџiklikdЙ™n sonra canlД± link ver.
- Token istifadЙ™sindЙ™n sonra silinmЙ™sini xatД±rlat (layihЙ™ TAM bitЙ™ndЙ™).
- Footer-dЙ™ "By @s_akhundoff" + Instagram (@s_akhundoff) linki qorunmalД± (bГјtГјn modullarda mГ¶vcuddur, yoxlanД±lД±b).
- 20 illik tЙ™crГјbЙ™li mГјtЙ™xЙ™ssis kimi, insan yazД±sД± kimi (AI izi olmadan) yaz.
